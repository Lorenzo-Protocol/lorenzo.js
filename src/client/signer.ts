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

    public abstract get signingMode(): SigningMode;

    public abstract signDirect(
        signerAddress: string,
        signDoc: SignDoc,
    ): Promise<DirectSignResponse>;
}

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

    // TODO: signAmino

    getAccounts(): Promise<readonly AccountData[]> {
        return this.signer.getAccounts();
    }

    get signingMode(): SigningMode {
        return this.signMode
    }
}