import { SignDoc, TxBody, AuthInfo } from "cosmjs-types/cosmos/tx/v1beta1/tx";

import { GlobalDecoderRegistry } from "../../telescope/";
import { JSONObject } from "../typedData/message";

/**
 * Converts a direct sign doc to a standard sign doc.
 *
 * @param signDoc
 *
 */
export function convertDirectSignDocToStdSignDoc(signDoc: SignDoc): JSONObject {
  const txBody = TxBody.decode(signDoc.bodyBytes);
  const authInfo = AuthInfo.decode(signDoc.authInfoBytes);
  const aminomsgs = convertMessagesToAmino(txBody.messages);
  const signerInfo0 = authInfo.signerInfos[0];

  // NOTE: eip 712 does not support multiple signers
  for (const signerInfo of authInfo.signerInfos) {
    if (signerInfo.publicKey !== signerInfo0.publicKey) {
      throw new Error("Multiple signers are not supported");
    }
  }

  const stdFee = {
    amount: [
      {
        amount: authInfo.fee.amount[0].amount,
        denom: authInfo.fee.amount[0].denom,
      },
    ],
    gas: authInfo.fee.gasLimit.toString(),
  };

  return {
    account_number: signDoc.accountNumber.toString(),
    chain_id: signDoc.chainId,
    fee: stdFee,
    memo: txBody.memo,
    msgs: aminomsgs,
    sequence: signerInfo0.sequence.toString(),
  };
}

function convertMessagesToAmino(messages: any[]): any[] {
  return messages.map((msg) => {
    const decodedMsg = GlobalDecoderRegistry.unwrapAny(msg);
    return GlobalDecoderRegistry.toAminoMsg(decodedMsg);
  });
}
