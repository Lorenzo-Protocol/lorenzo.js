//@ts-nocheck
import { MsgCreateBTCStaking, MsgBurnRequest, MsgAddReceiver, MsgRemoveReceiver, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/lorenzo.btcstaking.v1.MsgCreateBTCStaking": {
    aminoType: "/lorenzo.btcstaking.v1.MsgCreateBTCStaking",
    toAmino: MsgCreateBTCStaking.toAmino,
    fromAmino: MsgCreateBTCStaking.fromAmino
  },
  "/lorenzo.btcstaking.v1.MsgBurnRequest": {
    aminoType: "btcstaking/MsgBurnRequest",
    toAmino: MsgBurnRequest.toAmino,
    fromAmino: MsgBurnRequest.fromAmino
  },
  "/lorenzo.btcstaking.v1.MsgAddReceiver": {
    aminoType: "/lorenzo.btcstaking.v1.MsgAddReceiver",
    toAmino: MsgAddReceiver.toAmino,
    fromAmino: MsgAddReceiver.fromAmino
  },
  "/lorenzo.btcstaking.v1.MsgRemoveReceiver": {
    aminoType: "/lorenzo.btcstaking.v1.MsgRemoveReceiver",
    toAmino: MsgRemoveReceiver.toAmino,
    fromAmino: MsgRemoveReceiver.fromAmino
  },
  "/lorenzo.btcstaking.v1.MsgUpdateParams": {
    aminoType: "/lorenzo.btcstaking.v1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};