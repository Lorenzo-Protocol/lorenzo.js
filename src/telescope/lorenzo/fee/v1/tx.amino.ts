//@ts-nocheck
import { MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/lorenzo.fee.v1.MsgUpdateParams": {
    aminoType: "lorenzo/fee/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};