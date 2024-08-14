import {
    AminoSignResponse,
    StdSignDoc,
    OfflineAminoSigner,
} from "@cosmjs/amino";
import { SignerData } from "@cosmjs/stargate";
import { Any } from "cosmjs-types/google/protobuf/any";
import { SignDoc, TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";

import {Algo, OfflineDirectSigner } from "../signer";

export interface PublicKey {
    readonly algo: Algo;
    readonly bytes: Uint8Array;
}

export interface SignatureResult {
    // Signer data used during the signature
    readonly signerData: SignerData;

    // Public key associated to the private key used to sign
    readonly pubKey: Any;

    // SignDoc used during the signature
    readonly signDoc: SignDoc | StdSignDoc;

    // Raw transaction bytes containing the signature
    readonly txRaw: TxRaw;
}
