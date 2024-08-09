import { MsgRegisterCoin, MsgRegisterERC20, MsgToggleConversion, MsgConvertCoin, MsgConvertERC20, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/lorenzo.token.v1.MsgRegisterCoin": {
    aminoType: "/lorenzo.token.v1.MsgRegisterCoin",
    toAmino: MsgRegisterCoin.toAmino,
    fromAmino: MsgRegisterCoin.fromAmino
  },
  "/lorenzo.token.v1.MsgRegisterERC20": {
    aminoType: "/lorenzo.token.v1.MsgRegisterERC20",
    toAmino: MsgRegisterERC20.toAmino,
    fromAmino: MsgRegisterERC20.fromAmino
  },
  "/lorenzo.token.v1.MsgToggleConversion": {
    aminoType: "/lorenzo.token.v1.MsgToggleConversion",
    toAmino: MsgToggleConversion.toAmino,
    fromAmino: MsgToggleConversion.fromAmino
  },
  "/lorenzo.token.v1.MsgConvertCoin": {
    aminoType: "/lorenzo.token.v1.MsgConvertCoin",
    toAmino: MsgConvertCoin.toAmino,
    fromAmino: MsgConvertCoin.fromAmino
  },
  "/lorenzo.token.v1.MsgConvertERC20": {
    aminoType: "/lorenzo.token.v1.MsgConvertERC20",
    toAmino: MsgConvertERC20.toAmino,
    fromAmino: MsgConvertERC20.fromAmino
  },
  "/lorenzo.token.v1.MsgUpdateParams": {
    aminoType: "/lorenzo.token.v1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};