import { SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import {JSONObject} from "../typedData/message";

/**
 * Converts a direct sign doc to a standard sign doc.
 *
 * @param directSignDoc
 */
export function convertDirectSignDocToStdSignDoc(directSignDoc: SignDoc): JSONObject {
    throw new Error('Not implemented')
}