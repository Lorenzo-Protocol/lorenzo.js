//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** Params defines the parameters for the module. */
export interface Params {
  /** List of messages that are not fees */
  nonFeeMsgs: string[];
}
export interface ParamsProtoMsg {
  typeUrl: "/lorenzo.fee.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /** List of messages that are not fees */
  non_fee_msgs?: string[];
}
export interface ParamsAminoMsg {
  type: "/lorenzo.fee.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  non_fee_msgs: string[];
}
function createBaseParams(): Params {
  return {
    nonFeeMsgs: []
  };
}
export const Params = {
  typeUrl: "/lorenzo.fee.v1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.nonFeeMsgs) && (!o.nonFeeMsgs.length || typeof o.nonFeeMsgs[0] === "string"));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.non_fee_msgs) && (!o.non_fee_msgs.length || typeof o.non_fee_msgs[0] === "string"));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.non_fee_msgs) && (!o.non_fee_msgs.length || typeof o.non_fee_msgs[0] === "string"));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.nonFeeMsgs) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonFeeMsgs.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.nonFeeMsgs = object.nonFeeMsgs?.map(e => e) || [];
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      nonFeeMsgs: Array.isArray(object?.non_fee_msgs) ? object.non_fee_msgs.map((e: any) => e) : []
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    if (message.nonFeeMsgs) {
      obj.non_fee_msgs = message.nonFeeMsgs.map(e => e);
    } else {
      obj.non_fee_msgs = [];
    }
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.nonFeeMsgs = object.non_fee_msgs?.map(e => e) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.nonFeeMsgs) {
      obj.non_fee_msgs = message.nonFeeMsgs.map(e => e);
    } else {
      obj.non_fee_msgs = message.nonFeeMsgs;
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/lorenzo.fee.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);