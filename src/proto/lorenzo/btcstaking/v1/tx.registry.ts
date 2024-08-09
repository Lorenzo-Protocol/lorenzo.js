import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateBTCStaking, MsgBurnRequest, MsgAddReceiver, MsgRemoveReceiver, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/lorenzo.btcstaking.v1.MsgCreateBTCStaking", MsgCreateBTCStaking], ["/lorenzo.btcstaking.v1.MsgBurnRequest", MsgBurnRequest], ["/lorenzo.btcstaking.v1.MsgAddReceiver", MsgAddReceiver], ["/lorenzo.btcstaking.v1.MsgRemoveReceiver", MsgRemoveReceiver], ["/lorenzo.btcstaking.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createBTCStaking(value: MsgCreateBTCStaking) {
      return {
        typeUrl: "/lorenzo.btcstaking.v1.MsgCreateBTCStaking",
        value: MsgCreateBTCStaking.encode(value).finish()
      };
    },
    burn(value: MsgBurnRequest) {
      return {
        typeUrl: "/lorenzo.btcstaking.v1.MsgBurnRequest",
        value: MsgBurnRequest.encode(value).finish()
      };
    },
    addReceiver(value: MsgAddReceiver) {
      return {
        typeUrl: "/lorenzo.btcstaking.v1.MsgAddReceiver",
        value: MsgAddReceiver.encode(value).finish()
      };
    },
    removeReceiver(value: MsgRemoveReceiver) {
      return {
        typeUrl: "/lorenzo.btcstaking.v1.MsgRemoveReceiver",
        value: MsgRemoveReceiver.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/lorenzo.btcstaking.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createBTCStaking(value: MsgCreateBTCStaking) {
      return {
        typeUrl: "/lorenzo.btcstaking.v1.MsgCreateBTCStaking",
        value
      };
    },
    burn(value: MsgBurnRequest) {
      return {
        typeUrl: "/lorenzo.btcstaking.v1.MsgBurnRequest",
        value
      };
    },
    addReceiver(value: MsgAddReceiver) {
      return {
        typeUrl: "/lorenzo.btcstaking.v1.MsgAddReceiver",
        value
      };
    },
    removeReceiver(value: MsgRemoveReceiver) {
      return {
        typeUrl: "/lorenzo.btcstaking.v1.MsgRemoveReceiver",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/lorenzo.btcstaking.v1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    createBTCStaking(value: MsgCreateBTCStaking) {
      return {
        typeUrl: "/lorenzo.btcstaking.v1.MsgCreateBTCStaking",
        value: MsgCreateBTCStaking.fromPartial(value)
      };
    },
    burn(value: MsgBurnRequest) {
      return {
        typeUrl: "/lorenzo.btcstaking.v1.MsgBurnRequest",
        value: MsgBurnRequest.fromPartial(value)
      };
    },
    addReceiver(value: MsgAddReceiver) {
      return {
        typeUrl: "/lorenzo.btcstaking.v1.MsgAddReceiver",
        value: MsgAddReceiver.fromPartial(value)
      };
    },
    removeReceiver(value: MsgRemoveReceiver) {
      return {
        typeUrl: "/lorenzo.btcstaking.v1.MsgRemoveReceiver",
        value: MsgRemoveReceiver.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/lorenzo.btcstaking.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};