//@ts-nocheck
import { MsgCreateBTCStaking, MsgCreateBTCBStaking, MsgBurnRequest, MsgAddReceiver, MsgRemoveReceiver, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/lorenzo.btcstaking.v1.MsgCreateBTCStaking": {
    aminoType: "lorenzo/btcstaking/MsgCreateBTCStaking",
    toAmino: MsgCreateBTCStaking.toAmino,
    fromAmino: MsgCreateBTCStaking.fromAmino
  },
  "/lorenzo.btcstaking.v1.MsgCreateBTCBStaking": {
    aminoType: "lorenzo/btcstaking/MsgCreateBTCBStaking",
    toAmino: MsgCreateBTCBStaking.toAmino,
    fromAmino: MsgCreateBTCBStaking.fromAmino
  },
  "/lorenzo.btcstaking.v1.MsgBurnRequest": {
    aminoType: "lorenzo/btcstaking/MsgBurnRequest",
    toAmino: MsgBurnRequest.toAmino,
    fromAmino: MsgBurnRequest.fromAmino
  },
  "/lorenzo.btcstaking.v1.MsgAddReceiver": {
    aminoType: "lorenzo/btcstaking/MsgAddReceiver",
    toAmino: MsgAddReceiver.toAmino,
    fromAmino: MsgAddReceiver.fromAmino
  },
  "/lorenzo.btcstaking.v1.MsgRemoveReceiver": {
    aminoType: "lorenzo/btcstaking/MsgRemoveReceiver",
    toAmino: MsgRemoveReceiver.toAmino,
    fromAmino: MsgRemoveReceiver.fromAmino
  },
  "/lorenzo.btcstaking.v1.MsgUpdateParams": {
    aminoType: "lorenzo/btcstaking/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};