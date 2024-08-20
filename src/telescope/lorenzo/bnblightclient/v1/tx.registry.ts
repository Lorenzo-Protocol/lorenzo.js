//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUploadHeaders, MsgUpdateParams, MsgUpdateHeader } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/lorenzo.bnblightclient.v1.MsgUploadHeaders", MsgUploadHeaders], ["/lorenzo.bnblightclient.v1.MsgUpdateParams", MsgUpdateParams], ["/lorenzo.bnblightclient.v1.MsgUpdateHeader", MsgUpdateHeader]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    uploadHeaders(value: MsgUploadHeaders) {
      return {
        typeUrl: "/lorenzo.bnblightclient.v1.MsgUploadHeaders",
        value: MsgUploadHeaders.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/lorenzo.bnblightclient.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    updateHeader(value: MsgUpdateHeader) {
      return {
        typeUrl: "/lorenzo.bnblightclient.v1.MsgUpdateHeader",
        value: MsgUpdateHeader.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    uploadHeaders(value: MsgUploadHeaders) {
      return {
        typeUrl: "/lorenzo.bnblightclient.v1.MsgUploadHeaders",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/lorenzo.bnblightclient.v1.MsgUpdateParams",
        value
      };
    },
    updateHeader(value: MsgUpdateHeader) {
      return {
        typeUrl: "/lorenzo.bnblightclient.v1.MsgUpdateHeader",
        value
      };
    }
  },
  fromPartial: {
    uploadHeaders(value: MsgUploadHeaders) {
      return {
        typeUrl: "/lorenzo.bnblightclient.v1.MsgUploadHeaders",
        value: MsgUploadHeaders.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/lorenzo.bnblightclient.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    updateHeader(value: MsgUpdateHeader) {
      return {
        typeUrl: "/lorenzo.bnblightclient.v1.MsgUpdateHeader",
        value: MsgUpdateHeader.fromPartial(value)
      };
    }
  }
};