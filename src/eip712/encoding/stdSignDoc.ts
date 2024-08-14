import { SignDoc, TxBody, AuthInfo } from "cosmjs-types/cosmos/tx/v1beta1/tx";

import { GlobalDecoderRegistry } from "../../telescope/";
import { JSONObject } from "../typedData/message";

/**
 * Converts a direct sign doc to a standard sign doc.
 *
 * @param signDoc
 */
export function convertDirectSignDocToStdSignDoc(signDoc: SignDoc): JSONObject {
    const txBody = TxBody.decode(signDoc.bodyBytes)
    const authInfo = AuthInfo.decode(signDoc.authInfoBytes)
    const  aminomsgs = convertMessagesToAmino(txBody.messages);

    const stdFee = {
        amount: [
            {
                amount: authInfo.fee.amount[0].amount,
                denom: authInfo.fee.amount[0].denom,
            },
        ],
        gas: authInfo.fee.gasLimit,
    }

    return {
        chain_id: signDoc.chainId,
        account_number: Number(signDoc.accountNumber),
        sequence: Number(signDoc.accountNumber),
        memo: txBody.memo,
        fee: stdFee,
        msgs: aminomsgs,
    }
}

function convertMessagesToAmino(messages: any[]): any[] {
    return messages.map(msg => {
        const decodedMsg = GlobalDecoderRegistry.unwrapAny(msg);
        return GlobalDecoderRegistry.toAminoMsg(decodedMsg);
    });
}