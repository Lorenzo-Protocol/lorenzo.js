import keccak256 from "keccak256";
import { bech32 } from "bech32";
import { AminoSignResponse, StdSignDoc } from "@cosmjs/amino";
import { HDNodeWallet, Mnemonic } from "ethers";
import * as BytesUtils from "@ethersproject/bytes";

import { AccountData, OfflineAminoSigner } from "./signer";
import { decompressPubKey } from "../utils/crypto";

export class AminoEthSecp256k1Signer implements OfflineAminoSigner {
  public static async fromMnemonic(
    mnemonic: string,
    prefix: string = "lrz"
  ): Promise<AminoEthSecp256k1Signer> {
    const wallet = HDNodeWallet.fromMnemonic(Mnemonic.fromPhrase(mnemonic));
    return new AminoEthSecp256k1Signer(wallet, prefix);
  }

  private readonly wallet: HDNodeWallet;
  private readonly prefix: string;
  private eip712Enabled: boolean;

  private constructor(wallet: HDNodeWallet, prefix: string) {
    this.wallet = wallet;
    this.prefix = prefix;
  }

  public async getAccounts(): Promise<readonly AccountData[]> {
    const pubkey = this.getPubkey();
    return [
      {
        algo: "eth_secp256k1",
        address: this.getCosmosAddress(),
        pubkey: Buffer.from(pubkey, "hex"),
      },
    ];
  }

  public async signAmino(
    signerAddress: string,
    signDoc: StdSignDoc
  ): Promise<AminoSignResponse> {
    if (signerAddress !== this.getCosmosAddress()) {
      throw new Error(`Address ${signerAddress} not found in wallet`);
    }

    const signBytes = this.makeAminoSignBytes(signDoc);

    const msgHash = keccak256(Buffer.from(signBytes));
    const rsvSignature = this.wallet.signingKey.sign(msgHash);
    const splitSignature = BytesUtils.splitSignature(rsvSignature);
    const signature = BytesUtils.arrayify(
      BytesUtils.concat([
        splitSignature.r,
        splitSignature.s,
        [splitSignature.recoveryParam ?? splitSignature.v ?? 0],
      ])
    );

    return {
      signed: signDoc,
      signature: {
        pub_key: {
          type: "ethermint/PubKeyEthSecp256k1",
          value: Buffer.from(this.getPubkey(), "hex").toString("base64"),
        },
        signature: Buffer.from(signature).toString("base64"),
      },
    };
  }

  private makeAminoSignBytes(signDoc: StdSignDoc): Uint8Array {
    return new TextEncoder().encode(JSON.stringify(signDoc));
  }

  public getCosmosAddress(): string {
    const pubkey = this.getPubkey();
    const decompressedPubKey = decompressPubKey(pubkey);
    const address = keccak256(Buffer.from(decompressedPubKey, "hex")).slice(
      -20
    );
    return bech32.encode(this.prefix, bech32.toWords(address));
  }

  public getPubkey(): string {
    return this.wallet.signingKey.compressedPublicKey.slice(2);
  }

  public getEthereumAddress(): string {
    return this.wallet.address;
  }

  public setEIP712Enabled(enabled: boolean) {
    this.eip712Enabled = enabled;
  }

  public getEIP712Enabled(): boolean {
    return this.eip712Enabled;
  }
}
