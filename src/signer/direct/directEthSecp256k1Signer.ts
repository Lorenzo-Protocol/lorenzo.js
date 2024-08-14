import keccak256 from 'keccak256'
import { bech32 } from 'bech32'
import { DirectSignResponse, makeSignBytes } from '@cosmjs/proto-signing'
import { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx'
import {HDNodeWallet, Mnemonic} from 'ethers/src.ts/wallet'
import { AccountData, OfflineDirectSigner } from './signer'
import * as BytesUtils from '@ethersproject/bytes'

/**
 * A wallet for protobuf based signing using SIGN_MODE_DIRECT and eth_secp256k1.
 *
 * NOTE: there's bunch of method to implement but currently we focus only on getAccounts and signDirect.
 *
 * TODO: add prefix and path
 * */
/**
 * A wallet for protobuf based signing using SIGN_MODE_DIRECT and eth_secp256k1.
 */
export class DirectEthSecp256k1Signer implements OfflineDirectSigner {
    /**
     * Creates a DirectEthSecp256k1Wallet from the given mnemonic
     *
     * @param mnemonic The mnemonic.
     * @param prefix The bech32 address prefix (human readable part). Defaults to "lrz".
     * */
  public static async fromMnemonic(mnemonic: string, prefix: string = "lrz"): Promise<DirectEthSecp256k1Signer> {
    const wallet = HDNodeWallet.fromMnemonic(Mnemonic.fromPhrase(mnemonic));
    return new DirectEthSecp256k1Signer(wallet, prefix);
  }

  private readonly wallet: HDNodeWallet;
  private readonly prefix: string;

  private constructor(wallet: HDNodeWallet, prefix: string) {
    this.wallet = wallet;
    this.prefix = prefix;
  }

  public async getAccounts(): Promise<readonly AccountData[]> {
    const pubkey = this.getPubkey();
    return [
      {
        algo: 'eth_secp256k1',
        address: this.getCosmosAddress(),
        pubkey: Buffer.from(pubkey, 'hex'),
      },
    ];
  }

  public async signDirect(
      address: string,
      signDoc: SignDoc,
  ): Promise<DirectSignResponse> {
    const signBytes = makeSignBytes(signDoc);

    if (address !== this.getCosmosAddress()) {
      throw new Error(`Address ${address} not found in wallet`);
    }

    const msgHash = keccak256(Buffer.from(signBytes))
    const rsvSignature = this.wallet.signingKey.sign(msgHash)
    const splitSignature = BytesUtils.splitSignature(rsvSignature)
    const signature = BytesUtils.arrayify(BytesUtils.concat([splitSignature.r, splitSignature.s]))

    return {
      signed: signDoc,
      signature: {
        pub_key: {
          type: '/ethermint.crypto.v1.ethsecp256k1.PubKey',
          value: Buffer.from(this.getPubkey(), 'hex').toString('base64'),
        },
        signature: Buffer.from(signature).toString('base64'),
      },
    };
  }

  /**
   * Get the Cosmos address with the specified prefix
   */
  public getCosmosAddress(): string {
    const pubkey = this.getPubkey();
    const address = keccak256(Buffer.from(pubkey, 'hex')).slice(-20);
    return bech32.encode(this.prefix, bech32.toWords(address));
  }

  /**
   * Get the public key as a hex string
   */
  public getPubkey(): string {
    return this.wallet.signingKey.compressedPublicKey.slice(2);
  }

  /**
   * Get the Ethereum address
   */
  public getEthereumAddress(): string {
    return this.wallet.address;
  }
}
