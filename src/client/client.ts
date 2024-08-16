import {
  EncodeObject,
  makeSignDoc,
  OfflineSigner,
  Registry,
  TxBodyEncodeObject,
} from "@cosmjs/proto-signing";

import {
  calculateFee,
  AminoTypes,
  DeliverTxResponse,
  SignerData,
  SigningStargateClientOptions,
  StdFee,
  SigningStargateClient,
} from "@cosmjs/stargate";

import { HttpEndpoint, Tendermint37Client } from "@cosmjs/tendermint-rpc";
import { AminoMsg, makeSignDoc as makeSignDocAmino } from "@cosmjs/amino";
import { assertDefined } from "@cosmjs/utils";
import { Int53 } from "@cosmjs/math";
import { fromBase64 } from "@cosmjs/encoding";
import { Any } from "cosmjs-types/google/protobuf/any";
import { AuthInfo, SignerInfo, TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { SignMode } from "cosmjs-types/cosmos/tx/signing/v1beta1/signing";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";

import { ethAccountParser } from "./account";
import { SignatureResult, PublicKey } from "./types";
import { AccountData, Signer, SigningMode } from "./signer";
import { createRegistry, createAminoTypes } from "./registry";
import { PubKey } from "../telescope/ethermint/crypto/v1/ethsecp256k1/keys";
import { GlobalDecoderRegistry } from "../telescope";

/**
 * Creates a SignerInfo instance from the data given.
 *
 * @param signers - List of accounts that have signed a transaction.
 * @param signMode - Signing mode used while signing the transaction
 *
 * NOTE: pubkey must be eth_secp256k1
 */
function makeSignerInfos(
  signers: ReadonlyArray<{ readonly pubkey: Any; readonly sequence: number }>,
  signMode: SignMode
): SignerInfo[] {
  return signers.map(
    ({ pubkey, sequence }): SignerInfo => ({
      publicKey: pubkey,
      modeInfo: {
        single: { mode: signMode },
      },
      sequence: BigInt(sequence), // TODO: why reach telescope?
    })
  );
}

/**
 * Creates and serializes an AuthInfo document.
 * This implementation does not support different signing modes for the different signers.
 */
export function makeAuthInfoBytes(
  signers: ReadonlyArray<{ readonly pubkey: Any; readonly sequence: number }>,
  feeAmount: readonly Coin[],
  gasLimit: number,
  signMode = SignMode.SIGN_MODE_DIRECT,
  granter?: string
): Uint8Array {
  return AuthInfo.encode(
    AuthInfo.fromPartial({
      signerInfos: makeSignerInfos(signers, signMode),
      fee: {
        amount: [...feeAmount],
        gasLimit: BigInt(gasLimit),
        granter,
      },
    })
  ).finish();
}

export interface SignTxOptions {
  fee?: StdFee;
  memo?: string;
  feeGranter?: string;
  signerData?: SignerData;
}

interface LorenzoClientOptions extends SigningStargateClientOptions {
  readonly gasAdjustment?: number;
}

/**
 * LorenzoClient extends SigningStargateClient and overrides most of its methods.
 */
export class LorenzoClient extends SigningStargateClient {
  private txSigner: Signer;
  private typesAmino: AminoTypes;
  private typesRegistry: Registry;
  private options: LorenzoClientOptions;

  /**
   * Connect to RPC endpoint with eth_secp256k1 signer.
   *
   */
  public static async connectWithEthSigner(
    endpoint: string,
    signer: Signer,
    options: LorenzoClientOptions = {
      registry: createRegistry(),
      aminoTypes: createAminoTypes(),
      accountParser: ethAccountParser,
    }
  ): Promise<LorenzoClient> {
    const tmClient = await Tendermint37Client.connect(endpoint);
    return new LorenzoClient(tmClient, options, signer);
  }

  public static override connectWithSigner(
    endpoint: string | HttpEndpoint,
    signer: OfflineSigner,
    options?: SigningStargateClientOptions
  ): Promise<SigningStargateClient> {
    throw new Error("connect with signer is not allowed");
  }

  protected constructor(
    client: Tendermint37Client | undefined,
    options: LorenzoClientOptions,
    signer: Signer
  ) {
    // NOTE: mute signer in super class, thus we should avoid
    // using every method where the super.signer is called.
    super(client, undefined, {
      ...options,
    });
    this.txSigner = signer;
    this.options = options;
    this.typesRegistry = options.registry;
    this.typesAmino = options.aminoTypes;
  }

  public override async signAndBroadcast(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee | "auto" | number,
    memo?: string
  ): Promise<DeliverTxResponse> {
    let usedFee: StdFee;
    if (fee === "auto" || typeof fee === "number") {
      assertDefined(
        this.options.gasPrice,
        "Gas price must be set in the client options when auto gas is used."
      );
      const gasEstimation = await this.simulate(signerAddress, messages, memo);
      const multiplier =
        typeof fee === "number" ? fee : this.options.gasAdjustment || 1.5;
      usedFee = calculateFee(
        Math.round(gasEstimation * multiplier),
        this.options.gasPrice
      );
    } else {
      usedFee = fee;
    }

    const txRaw = await this.sign(signerAddress, messages, usedFee, memo);
    const txBytes = TxRaw.encode(txRaw).finish();
    // TODO: use sync broadcast?
    return this.broadcastTx(
      txBytes,
      this.broadcastTimeoutMs,
      this.broadcastPollIntervalMs
    );
  }

  private async getSignerData(signerAddress: string): Promise<SignerData> {
    const { accountNumber, sequence } = await this.getSequence(signerAddress);
    const chainId = await this.getChainId();
    return {
      accountNumber,
      sequence,
      chainId,
    };
  }

  private async getAccountFromSigner(address: string): Promise<AccountData> {
    const accounts = await this.txSigner.getAccounts();
    const accountFromSigner = accounts.find(
      (account) => account.address === address
    );
    if (!accountFromSigner) {
      throw new Error("Failed to retrieve account from signer");
    }
    return accountFromSigner;
  }

  public encodeToAmino(msgs: readonly EncodeObject[]): AminoMsg[] {
    return msgs.map((msg) => {
      const decoder = GlobalDecoderRegistry.getDecoder(msg.typeUrl);
      if (!decoder) {
        throw new Error(`No decoder found for typeUrl: ${msg.typeUrl}`);
      }

      const aminoMsg = decoder.toAmino(msg.value);
      if (typeof aminoMsg !== "object" || !("type" in aminoMsg)) {
        const type = msg.typeUrl.split("/").pop() || "";
        return {
          type,
          value: aminoMsg,
        };
      }
      return aminoMsg as AminoMsg;
    });
  }

  public override async sign(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo?: string,
    explicitSignerData?: SignerData
  ): Promise<TxRaw> {
    const result = await this.signTx(signerAddress, messages, {
      fee,
      memo,
      signerData: explicitSignerData,
    });
    return result.txRaw;
  }

  public async signTx(
    signerAddress: string,
    messages: readonly EncodeObject[],
    options?: SignTxOptions
  ): Promise<SignatureResult> {
    // TODO: estimate fee; here no granter and payer?
    const txFee: StdFee = {
      amount: [
        {
          amount: options.fee.amount[0].amount,
          denom: options.fee.amount[0].denom,
        },
      ],
      gas: options.fee.gas,
    };

    // Build the signer data
    const signerData =
      options?.signerData ?? (await this.getSignerData(signerAddress));

    // Sign the data using the proper mode
    return this.txSigner.getSigningMode() === SigningMode.DIRECT
      ? this.signTxDirect(
          signerAddress,
          messages,
          txFee,
          options?.memo,
          signerData,
          options?.feeGranter
        )
      : this.signTxAmino(
          signerAddress,
          messages,
          txFee,
          options?.memo,
          signerData,
          options?.feeGranter
        );
  }

  /**
   * Sign a tx using the direct mode.
   *
   * @param signerAddress
   * @param messages
   * @param fee
   * @param memo
   * @param accountNumber
   * @param sequence
   * @param chainId
   * @param feeGranter
   * @private
   */
  private async signTxDirect(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string | undefined,
    { accountNumber, sequence, chainId }: SignerData,
    feeGranter?: string
  ): Promise<SignatureResult> {
    const signerAccount = await this.getAccountFromSigner(signerAddress);

    const txBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: {
        messages,
        memo,
      },
    };

    const txBodyBytes = this.registry.encode(txBodyEncodeObject);
    const gasLimit = Int53.fromString(fee.gas).toNumber();

    const pubkey = Any.fromPartial({
      typeUrl: "/ethermint.crypto.v1.ethsecp256k1.PubKey",
      value: PubKey.encode({
        key: signerAccount.pubkey,
      }).finish(),
    });

    // Build the AuthInfoBytes
    const authInfoBytes = makeAuthInfoBytes(
      [{ pubkey, sequence }],
      fee.amount,
      gasLimit,
      SignMode.SIGN_MODE_DIRECT,
      feeGranter
    );

    // Build the SignDoc
    const signDoc = makeSignDoc(
      txBodyBytes,
      authInfoBytes,
      chainId,
      accountNumber
    );

    // Sign using direct
    const { signature, signed } = await this.txSigner.signDirect(
      signerAddress,
      signDoc
    );

    return {
      signerData: { accountNumber, sequence, chainId },
      pubKey: pubkey,
      signDoc: signed,
      txRaw: TxRaw.fromPartial({
        bodyBytes: signed.bodyBytes,
        authInfoBytes: signed.authInfoBytes,
        signatures: [fromBase64(signature.signature)],
      }),
    };
  }

  private async signTxAmino(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string | undefined,
    { accountNumber, sequence, chainId }: SignerData,
    feeGranter?: string
  ): Promise<SignatureResult> {
    const signerAccount = await this.getAccountFromSigner(signerAddress);

    // Convert messages to Amino and build stdSignDoc
    const aminoMsgs = this.encodeToAmino(messages);
    const stdSignDoc = makeSignDocAmino(
      aminoMsgs,
      {
        ...fee,
        granter: feeGranter ?? fee.granter,
      },
      chainId,
      memo,
      accountNumber,
      sequence
    );

    const { signature, signed } = await this.txSigner.signAmino(
      signerAddress,
      stdSignDoc
    );

    const signedTxBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: {
        messages: messages, // TODO: check this, should it be converting from amino to proto?
        memo: signed.memo,
      },
    };

    const pubkey = Any.fromPartial({
      typeUrl: "/ethermint.crypto.v1.ethsecp256k1.PubKey",
      value: PubKey.encode({ key: signerAccount.pubkey }).finish(),
    });
    const signedGasLimit = Int53.fromString(signed.fee.gas).toNumber();
    const signedSequence = Int53.fromString(signed.sequence).toNumber();
    const signedTxBodyBytes = this.typesRegistry.encode(
      signedTxBodyEncodeObject
    );

    const signedAuthInfoBytes = makeAuthInfoBytes(
      [
        {
          pubkey,
          sequence: signedSequence,
        },
      ],
      signed.fee.amount,
      signedGasLimit,
      SignMode.SIGN_MODE_LEGACY_AMINO_JSON,
      feeGranter
    );

    return {
      signerData: { accountNumber, sequence, chainId },
      pubKey: pubkey,
      signDoc: signed,
      txRaw: TxRaw.fromPartial({
        bodyBytes: signedTxBodyBytes,
        authInfoBytes: signedAuthInfoBytes,
        signatures: [fromBase64(signature.signature)],
      }),
    };
  }

  /**
   * Set the EIP712 signature flag. Must be called before signing to enable.
   *
   * @param enabled
   *
   */
  public setEIP712Enabled(enabled: boolean) {
    this.txSigner.setEIP712Enabled(enabled);
  }

  /**
   * isEIP712Enabled returns true if the EIP712 signature is enabled.
   */
  public isEIP712Enabled(): boolean {
    return this.txSigner.getEIP712Enabled();
  }
}
