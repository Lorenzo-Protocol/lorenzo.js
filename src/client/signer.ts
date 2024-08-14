import { DirectSignResponse } from "@cosmjs/proto-signing";
import { SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";

import { AccountData, OfflineSigner, OfflineDirectSigner} from "../signer";

export { AccountData } from "../signer";

/**
 * Represents the various signing modes that can be supported by signers.
 */
export enum SigningMode {
    AMINO,
    DIRECT,
}

/**
 * Represents a signer that can sign transactions in a specific mode.
 */
export abstract class Signer implements OfflineDirectSigner {
    public abstract getAccounts(): Promise<readonly AccountData[]>;

    public abstract signDirect(
        signerAddress: string,
        signDoc: SignDoc,
    ): Promise<DirectSignResponse>;

    public abstract getSigningMode(): SigningMode;

    public abstract setEIP712Enabled(enabled: boolean): void;

    public abstract getEIP712Enabled(): boolean;
}

/**
 * LorenzoOfflineSigner can be both Direct and Amino signer.
 *
 * TODO: signAmino
 */
export class LorenzoOfflineSigner extends Signer {
    private readonly signer: OfflineSigner;
    private readonly signMode: SigningMode | undefined;

    signDirect(
        signerAddress: string,
        signDoc: SignDoc,
    ): Promise<DirectSignResponse> {
        if (this.signMode === SigningMode.DIRECT) {
            return (this.signer as OfflineDirectSigner).signDirect(
                signerAddress,
                signDoc,
            );
        }

        return Promise.reject(new Error("Direct sign mode not supported"));
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