import { DirectSignResponse } from "@cosmjs/proto-signing";
import { AminoSignResponse, StdSignDoc} from "@cosmjs/amino";
import { SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";

import {
    AccountData,
    OfflineAminoOrDirectSigner,
    OfflineDirectSigner,
    OfflineAminoSigner,
    DirectEthSecp256k1Signer,
    AminoEthSecp256k1Signer,
} from "../signer";

export { AccountData } from "../signer"

/**
 * Represents the various signing modes that can be supported by signers.
 */
export enum SigningMode {
    AMINO,
    DIRECT,
}

/**
 * Signer is an abstract class that requires the implementation of both OfflineDirectSigner and OfflineAminoSigner.
 */
export abstract class Signer implements OfflineDirectSigner, OfflineAminoSigner {
    public abstract getAccounts(): Promise<readonly AccountData[]>;

    public abstract signDirect(signerAddress: string, signDoc: SignDoc): Promise<DirectSignResponse>;
    public abstract signAmino(signerAddress: string, signDoc: StdSignDoc): Promise<AminoSignResponse>;

    public abstract getSigningMode(): SigningMode;

    public abstract setEIP712Enabled(enabled: boolean): void;
    public abstract getEIP712Enabled(): boolean;
}

/**
 * LorenzoOfflineSigner is an offline signer can be either Direct or Amino.
 *
 * NOTE: only support eth_secp256k1 algo!
 *
 */
export class LorenzoOfflineSigner extends Signer {
    private readonly signer: OfflineAminoOrDirectSigner;
    private readonly signMode: SigningMode | undefined;

    static async fromMnemonic(
        mode: SigningMode,
        mnemonic: string,
        prefix: string,
    ): Promise<LorenzoOfflineSigner> {
        if (mode === SigningMode.DIRECT) {
            const signer = await DirectEthSecp256k1Signer.fromMnemonic(mnemonic, prefix);
            return new LorenzoOfflineSigner(signer);
        }
        if (mode === SigningMode.AMINO) {
            const signer = await AminoEthSecp256k1Signer.fromMnemonic(mnemonic, prefix);
            return new LorenzoOfflineSigner(signer);
        }
        return Promise.reject(new Error(`invalid sign mode ${mode}`));
    }

    constructor(signer: OfflineAminoOrDirectSigner) {
        super();
        this.signer = signer;
        if ((signer as OfflineDirectSigner).signDirect !== undefined) {
            this.signMode = SigningMode.DIRECT;
        } else if ((signer as OfflineAminoSigner).signAmino !== undefined) {
            this.signMode = SigningMode.AMINO;
        }
    }

    signDirect(signerAddress: string, signDoc: SignDoc): Promise<DirectSignResponse> {
        if (this.signMode === SigningMode.DIRECT) {
            return (this.signer as OfflineDirectSigner).signDirect(
                signerAddress,
                signDoc,
            );
        }

        return Promise.reject(new Error("Direct sign mode not supported"));
    }

    signAmino(signerAddress: string, signDoc: StdSignDoc): Promise<AminoSignResponse> {
        if (this.signMode === SigningMode.AMINO) {
            return (this.signer as OfflineAminoSigner).signAmino(
                signerAddress,
                signDoc,
            );
        }

        return Promise.reject(new Error("Amino sign mode not supported"));
    }

    getAccounts(): Promise<readonly AccountData[]> {
        return this.signer.getAccounts();
    }

    public getSigningMode(): SigningMode {
        return this.signMode
    }

    public setEIP712Enabled(enabled: boolean) {
        this.signer.setEIP712Enabled(enabled);
    }

    public getEIP712Enabled(): boolean {
        return this.signer.getEIP712Enabled();
    }
}