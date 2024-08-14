import { DirectSignResponse } from "@cosmjs/proto-signing";
import { SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";

import { AccountData, OfflineAminoOrDirectSigner, OfflineDirectSigner, OfflineAminoSigner } from "../signer";
import {AminoSignResponse, StdSignDoc} from "@cosmjs/amino";

export { AccountData } from "../signer";

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

    public abstract signDirect(
        signerAddress: string,
        signDoc: SignDoc,
    ): Promise<DirectSignResponse>;

    public abstract signAmino(
        signerAddress: string,
        signDoc: StdSignDoc,
    ): Promise<AminoSignResponse>;

    public abstract getSigningMode(): SigningMode;

    public abstract setEIP712Enabled(enabled: boolean): void;

    public abstract getEIP712Enabled(): boolean;
}

/**
 * LorenzoOfflineSigner is an offline signer can both sign transactions in direct and amino mode.
 *
 */
export class LorenzoOfflineSigner extends Signer {
    private readonly signer: OfflineAminoOrDirectSigner;
    private readonly signMode: SigningMode | undefined;

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