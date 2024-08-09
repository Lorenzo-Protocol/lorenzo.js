import { MsgInsertHeaders, MsgUpdateParams, MsgUpdateFeeRate } from "./tx";
export const AminoConverter = {
  "/lorenzo.btclightclient.v1.MsgInsertHeaders": {
    aminoType: "/lorenzo.btclightclient.v1.MsgInsertHeaders",
    toAmino: MsgInsertHeaders.toAmino,
    fromAmino: MsgInsertHeaders.fromAmino
  },
  "/lorenzo.btclightclient.v1.MsgUpdateParams": {
    aminoType: "/lorenzo.btclightclient.v1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/lorenzo.btclightclient.v1.MsgUpdateFeeRate": {
    aminoType: "/lorenzo.btclightclient.v1.MsgUpdateFeeRate",
    toAmino: MsgUpdateFeeRate.toAmino,
    fromAmino: MsgUpdateFeeRate.fromAmino
  }
};