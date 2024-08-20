//@ts-nocheck
import { MsgUploadHeaders, MsgUpdateParams, MsgUpdateHeader } from "./tx";
export const AminoConverter = {
  "/lorenzo.bnblightclient.v1.MsgUploadHeaders": {
    aminoType: "lorenzo/bnblightclient/MsgUploadHeaders",
    toAmino: MsgUploadHeaders.toAmino,
    fromAmino: MsgUploadHeaders.fromAmino
  },
  "/lorenzo.bnblightclient.v1.MsgUpdateParams": {
    aminoType: "lorenzo/bnblightclient/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/lorenzo.bnblightclient.v1.MsgUpdateHeader": {
    aminoType: "lorenzo/bnblightclient/MsgUpdateHeader",
    toAmino: MsgUpdateHeader.toAmino,
    fromAmino: MsgUpdateHeader.fromAmino
  }
};