//@ts-nocheck
import { MsgRegisterCoin, MsgRegisterERC20, MsgToggleConversion, MsgConvertCoin, MsgConvertERC20, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/lorenzo.token.v1.MsgRegisterCoin": {
    aminoType: "lorenzo/token/MsgRegisterCoin",
    toAmino: MsgRegisterCoin.toAmino,
    fromAmino: MsgRegisterCoin.fromAmino
  },
  "/lorenzo.token.v1.MsgRegisterERC20": {
    aminoType: "lorenzo/token/MsgRegisterERC20",
    toAmino: MsgRegisterERC20.toAmino,
    fromAmino: MsgRegisterERC20.fromAmino
  },
  "/lorenzo.token.v1.MsgToggleConversion": {
    aminoType: "lorenzo/token/MsgToggleConversion",
    toAmino: MsgToggleConversion.toAmino,
    fromAmino: MsgToggleConversion.fromAmino
  },
  "/lorenzo.token.v1.MsgConvertCoin": {
    aminoType: "lorenzo/token/MsgConvertCoin",
    toAmino: MsgConvertCoin.toAmino,
    fromAmino: MsgConvertCoin.fromAmino
  },
  "/lorenzo.token.v1.MsgConvertERC20": {
    aminoType: "lorenzo/token/MsgConvertERC20",
    toAmino: MsgConvertERC20.toAmino,
    fromAmino: MsgConvertERC20.fromAmino
  },
  "/lorenzo.token.v1.MsgUpdateParams": {
    aminoType: "lorenzo/token/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};