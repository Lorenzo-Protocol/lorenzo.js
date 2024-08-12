//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgInsertHeaders, MsgUpdateParams, MsgUpdateFeeRate } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/lorenzo.btclightclient.v1.MsgInsertHeaders", MsgInsertHeaders], ["/lorenzo.btclightclient.v1.MsgUpdateParams", MsgUpdateParams], ["/lorenzo.btclightclient.v1.MsgUpdateFeeRate", MsgUpdateFeeRate]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    insertHeaders(value: MsgInsertHeaders) {
      return {
        typeUrl: "/lorenzo.btclightclient.v1.MsgInsertHeaders",
        value: MsgInsertHeaders.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/lorenzo.btclightclient.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    updateFeeRate(value: MsgUpdateFeeRate) {
      return {
        typeUrl: "/lorenzo.btclightclient.v1.MsgUpdateFeeRate",
        value: MsgUpdateFeeRate.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    insertHeaders(value: MsgInsertHeaders) {
      return {
        typeUrl: "/lorenzo.btclightclient.v1.MsgInsertHeaders",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/lorenzo.btclightclient.v1.MsgUpdateParams",
        value
      };
    },
    updateFeeRate(value: MsgUpdateFeeRate) {
      return {
        typeUrl: "/lorenzo.btclightclient.v1.MsgUpdateFeeRate",
        value
      };
    }
  },
  fromPartial: {
    insertHeaders(value: MsgInsertHeaders) {
      return {
        typeUrl: "/lorenzo.btclightclient.v1.MsgInsertHeaders",
        value: MsgInsertHeaders.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/lorenzo.btclightclient.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    updateFeeRate(value: MsgUpdateFeeRate) {
      return {
        typeUrl: "/lorenzo.btclightclient.v1.MsgUpdateFeeRate",
        value: MsgUpdateFeeRate.fromPartial(value)
      };
    }
  }
};