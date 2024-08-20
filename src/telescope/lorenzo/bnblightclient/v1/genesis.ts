//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Header, HeaderAmino, HeaderSDKType } from "./client";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState defines the bnb light client state */
export interface GenesisState {
  /** params defines the bnb light client parameters */
  params?: Params;
  /** headers defines the bnb light client headers */
  headers: Header[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/lorenzo.bnblightclient.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the bnb light client state */
export interface GenesisStateAmino {
  /** params defines the bnb light client parameters */
  params?: ParamsAmino;
  /** headers defines the bnb light client headers */
  headers?: HeaderAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/lorenzo.bnblightclient.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the bnb light client state */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  headers: HeaderSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    headers: []
  };
}
export const GenesisState = {
  typeUrl: "/lorenzo.bnblightclient.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.headers) && (!o.headers.length || Header.is(o.headers[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.headers) && (!o.headers.length || Header.isSDK(o.headers[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.headers) && (!o.headers.length || Header.isAmino(o.headers[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.headers) {
      Header.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.headers.push(Header.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.headers = object.headers?.map(e => Header.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      headers: Array.isArray(object?.headers) ? object.headers.map((e: any) => Header.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    if (message.headers) {
      obj.headers = message.headers.map(e => e ? Header.toSDK(e) : undefined);
    } else {
      obj.headers = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.headers = object.headers?.map(e => Header.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.headers) {
      obj.headers = message.headers.map(e => e ? Header.toAmino(e) : undefined);
    } else {
      obj.headers = message.headers;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/lorenzo.bnblightclient.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);