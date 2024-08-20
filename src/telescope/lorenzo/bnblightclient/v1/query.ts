//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Header, HeaderAmino, HeaderSDKType } from "./client";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/lorenzo.bnblightclient.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/lorenzo.bnblightclient.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/lorenzo.bnblightclient.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/lorenzo.bnblightclient.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryHeaderRequest is the request type for the Query/Header RPC method. */
export interface QueryHeaderRequest {
  number: bigint;
}
export interface QueryHeaderRequestProtoMsg {
  typeUrl: "/lorenzo.bnblightclient.v1.QueryHeaderRequest";
  value: Uint8Array;
}
/** QueryHeaderRequest is the request type for the Query/Header RPC method. */
export interface QueryHeaderRequestAmino {
  number?: string;
}
export interface QueryHeaderRequestAminoMsg {
  type: "/lorenzo.bnblightclient.v1.QueryHeaderRequest";
  value: QueryHeaderRequestAmino;
}
/** QueryHeaderRequest is the request type for the Query/Header RPC method. */
export interface QueryHeaderRequestSDKType {
  number: bigint;
}
/** QueryParamsResponse is the response type for the Query/Header RPC method. */
export interface QueryHeaderResponse {
  /** params holds all the parameters of this module. */
  header?: Header;
}
export interface QueryHeaderResponseProtoMsg {
  typeUrl: "/lorenzo.bnblightclient.v1.QueryHeaderResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Header RPC method. */
export interface QueryHeaderResponseAmino {
  /** params holds all the parameters of this module. */
  header?: HeaderAmino;
}
export interface QueryHeaderResponseAminoMsg {
  type: "/lorenzo.bnblightclient.v1.QueryHeaderResponse";
  value: QueryHeaderResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Header RPC method. */
export interface QueryHeaderResponseSDKType {
  header?: HeaderSDKType;
}
/**
 * QueryHeaderByHashRequest is the request type for the Query/HeaderByHash RPC
 * method.
 */
export interface QueryHeaderByHashRequest {
  hash: Uint8Array;
}
export interface QueryHeaderByHashRequestProtoMsg {
  typeUrl: "/lorenzo.bnblightclient.v1.QueryHeaderByHashRequest";
  value: Uint8Array;
}
/**
 * QueryHeaderByHashRequest is the request type for the Query/HeaderByHash RPC
 * method.
 */
export interface QueryHeaderByHashRequestAmino {
  hash?: string;
}
export interface QueryHeaderByHashRequestAminoMsg {
  type: "/lorenzo.bnblightclient.v1.QueryHeaderByHashRequest";
  value: QueryHeaderByHashRequestAmino;
}
/**
 * QueryHeaderByHashRequest is the request type for the Query/HeaderByHash RPC
 * method.
 */
export interface QueryHeaderByHashRequestSDKType {
  hash: Uint8Array;
}
/**
 * QueryHeaderByHashResponse is the response type for the Query/HeaderByHash RPC
 * method.
 */
export interface QueryHeaderByHashResponse {
  /** params holds all the parameters of this module. */
  header?: Header;
}
export interface QueryHeaderByHashResponseProtoMsg {
  typeUrl: "/lorenzo.bnblightclient.v1.QueryHeaderByHashResponse";
  value: Uint8Array;
}
/**
 * QueryHeaderByHashResponse is the response type for the Query/HeaderByHash RPC
 * method.
 */
export interface QueryHeaderByHashResponseAmino {
  /** params holds all the parameters of this module. */
  header?: HeaderAmino;
}
export interface QueryHeaderByHashResponseAminoMsg {
  type: "/lorenzo.bnblightclient.v1.QueryHeaderByHashResponse";
  value: QueryHeaderByHashResponseAmino;
}
/**
 * QueryHeaderByHashResponse is the response type for the Query/HeaderByHash RPC
 * method.
 */
export interface QueryHeaderByHashResponseSDKType {
  header?: HeaderSDKType;
}
/**
 * QueryLatestHeaderRequest is the request type for the Query/LatestHeader
 * RPC method.
 */
export interface QueryLatestHeaderRequest {}
export interface QueryLatestHeaderRequestProtoMsg {
  typeUrl: "/lorenzo.bnblightclient.v1.QueryLatestHeaderRequest";
  value: Uint8Array;
}
/**
 * QueryLatestHeaderRequest is the request type for the Query/LatestHeader
 * RPC method.
 */
export interface QueryLatestHeaderRequestAmino {}
export interface QueryLatestHeaderRequestAminoMsg {
  type: "/lorenzo.bnblightclient.v1.QueryLatestHeaderRequest";
  value: QueryLatestHeaderRequestAmino;
}
/**
 * QueryLatestHeaderRequest is the request type for the Query/LatestHeader
 * RPC method.
 */
export interface QueryLatestHeaderRequestSDKType {}
/**
 * QueryLatestHeaderResponse is the response type for the Query/LatestHeader
 * RPC method.
 */
export interface QueryLatestHeaderResponse {
  /** header holds the bnb light client header. */
  header: Header;
}
export interface QueryLatestHeaderResponseProtoMsg {
  typeUrl: "/lorenzo.bnblightclient.v1.QueryLatestHeaderResponse";
  value: Uint8Array;
}
/**
 * QueryLatestHeaderResponse is the response type for the Query/LatestHeader
 * RPC method.
 */
export interface QueryLatestHeaderResponseAmino {
  /** header holds the bnb light client header. */
  header?: HeaderAmino;
}
export interface QueryLatestHeaderResponseAminoMsg {
  type: "/lorenzo.bnblightclient.v1.QueryLatestHeaderResponse";
  value: QueryLatestHeaderResponseAmino;
}
/**
 * QueryLatestHeaderResponse is the response type for the Query/LatestHeader
 * RPC method.
 */
export interface QueryLatestHeaderResponseSDKType {
  header: HeaderSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lorenzo.bnblightclient.v1.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },
  toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/lorenzo.bnblightclient.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/lorenzo.bnblightclient.v1.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.bnblightclient.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryHeaderRequest(): QueryHeaderRequest {
  return {
    number: BigInt(0)
  };
}
export const QueryHeaderRequest = {
  typeUrl: "/lorenzo.bnblightclient.v1.QueryHeaderRequest",
  is(o: any): o is QueryHeaderRequest {
    return o && (o.$typeUrl === QueryHeaderRequest.typeUrl || typeof o.number === "bigint");
  },
  isSDK(o: any): o is QueryHeaderRequestSDKType {
    return o && (o.$typeUrl === QueryHeaderRequest.typeUrl || typeof o.number === "bigint");
  },
  isAmino(o: any): o is QueryHeaderRequestAmino {
    return o && (o.$typeUrl === QueryHeaderRequest.typeUrl || typeof o.number === "bigint");
  },
  encode(message: QueryHeaderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.number !== BigInt(0)) {
      writer.uint32(8).uint64(message.number);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHeaderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHeaderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.number = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryHeaderRequest>): QueryHeaderRequest {
    const message = createBaseQueryHeaderRequest();
    message.number = object.number !== undefined && object.number !== null ? BigInt(object.number.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryHeaderRequestSDKType): QueryHeaderRequest {
    return {
      number: object?.number
    };
  },
  toSDK(message: QueryHeaderRequest): QueryHeaderRequestSDKType {
    const obj: any = {};
    obj.number = message.number;
    return obj;
  },
  fromAmino(object: QueryHeaderRequestAmino): QueryHeaderRequest {
    const message = createBaseQueryHeaderRequest();
    if (object.number !== undefined && object.number !== null) {
      message.number = BigInt(object.number);
    }
    return message;
  },
  toAmino(message: QueryHeaderRequest): QueryHeaderRequestAmino {
    const obj: any = {};
    obj.number = message.number !== BigInt(0) ? message.number.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHeaderRequestAminoMsg): QueryHeaderRequest {
    return QueryHeaderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHeaderRequestProtoMsg): QueryHeaderRequest {
    return QueryHeaderRequest.decode(message.value);
  },
  toProto(message: QueryHeaderRequest): Uint8Array {
    return QueryHeaderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHeaderRequest): QueryHeaderRequestProtoMsg {
    return {
      typeUrl: "/lorenzo.bnblightclient.v1.QueryHeaderRequest",
      value: QueryHeaderRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryHeaderRequest.typeUrl, QueryHeaderRequest);
function createBaseQueryHeaderResponse(): QueryHeaderResponse {
  return {
    header: undefined
  };
}
export const QueryHeaderResponse = {
  typeUrl: "/lorenzo.bnblightclient.v1.QueryHeaderResponse",
  is(o: any): o is QueryHeaderResponse {
    return o && o.$typeUrl === QueryHeaderResponse.typeUrl;
  },
  isSDK(o: any): o is QueryHeaderResponseSDKType {
    return o && o.$typeUrl === QueryHeaderResponse.typeUrl;
  },
  isAmino(o: any): o is QueryHeaderResponseAmino {
    return o && o.$typeUrl === QueryHeaderResponse.typeUrl;
  },
  encode(message: QueryHeaderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHeaderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHeaderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryHeaderResponse>): QueryHeaderResponse {
    const message = createBaseQueryHeaderResponse();
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    return message;
  },
  fromSDK(object: QueryHeaderResponseSDKType): QueryHeaderResponse {
    return {
      header: object.header ? Header.fromSDK(object.header) : undefined
    };
  },
  toSDK(message: QueryHeaderResponse): QueryHeaderResponseSDKType {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toSDK(message.header) : undefined);
    return obj;
  },
  fromAmino(object: QueryHeaderResponseAmino): QueryHeaderResponse {
    const message = createBaseQueryHeaderResponse();
    if (object.header !== undefined && object.header !== null) {
      message.header = Header.fromAmino(object.header);
    }
    return message;
  },
  toAmino(message: QueryHeaderResponse): QueryHeaderResponseAmino {
    const obj: any = {};
    obj.header = message.header ? Header.toAmino(message.header) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHeaderResponseAminoMsg): QueryHeaderResponse {
    return QueryHeaderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHeaderResponseProtoMsg): QueryHeaderResponse {
    return QueryHeaderResponse.decode(message.value);
  },
  toProto(message: QueryHeaderResponse): Uint8Array {
    return QueryHeaderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHeaderResponse): QueryHeaderResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.bnblightclient.v1.QueryHeaderResponse",
      value: QueryHeaderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryHeaderResponse.typeUrl, QueryHeaderResponse);
function createBaseQueryHeaderByHashRequest(): QueryHeaderByHashRequest {
  return {
    hash: new Uint8Array()
  };
}
export const QueryHeaderByHashRequest = {
  typeUrl: "/lorenzo.bnblightclient.v1.QueryHeaderByHashRequest",
  is(o: any): o is QueryHeaderByHashRequest {
    return o && (o.$typeUrl === QueryHeaderByHashRequest.typeUrl || o.hash instanceof Uint8Array || typeof o.hash === "string");
  },
  isSDK(o: any): o is QueryHeaderByHashRequestSDKType {
    return o && (o.$typeUrl === QueryHeaderByHashRequest.typeUrl || o.hash instanceof Uint8Array || typeof o.hash === "string");
  },
  isAmino(o: any): o is QueryHeaderByHashRequestAmino {
    return o && (o.$typeUrl === QueryHeaderByHashRequest.typeUrl || o.hash instanceof Uint8Array || typeof o.hash === "string");
  },
  encode(message: QueryHeaderByHashRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHeaderByHashRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHeaderByHashRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryHeaderByHashRequest>): QueryHeaderByHashRequest {
    const message = createBaseQueryHeaderByHashRequest();
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
  fromSDK(object: QueryHeaderByHashRequestSDKType): QueryHeaderByHashRequest {
    return {
      hash: object?.hash
    };
  },
  toSDK(message: QueryHeaderByHashRequest): QueryHeaderByHashRequestSDKType {
    const obj: any = {};
    obj.hash = message.hash;
    return obj;
  },
  fromAmino(object: QueryHeaderByHashRequestAmino): QueryHeaderByHashRequest {
    const message = createBaseQueryHeaderByHashRequest();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    return message;
  },
  toAmino(message: QueryHeaderByHashRequest): QueryHeaderByHashRequestAmino {
    const obj: any = {};
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHeaderByHashRequestAminoMsg): QueryHeaderByHashRequest {
    return QueryHeaderByHashRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHeaderByHashRequestProtoMsg): QueryHeaderByHashRequest {
    return QueryHeaderByHashRequest.decode(message.value);
  },
  toProto(message: QueryHeaderByHashRequest): Uint8Array {
    return QueryHeaderByHashRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHeaderByHashRequest): QueryHeaderByHashRequestProtoMsg {
    return {
      typeUrl: "/lorenzo.bnblightclient.v1.QueryHeaderByHashRequest",
      value: QueryHeaderByHashRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryHeaderByHashRequest.typeUrl, QueryHeaderByHashRequest);
function createBaseQueryHeaderByHashResponse(): QueryHeaderByHashResponse {
  return {
    header: undefined
  };
}
export const QueryHeaderByHashResponse = {
  typeUrl: "/lorenzo.bnblightclient.v1.QueryHeaderByHashResponse",
  is(o: any): o is QueryHeaderByHashResponse {
    return o && o.$typeUrl === QueryHeaderByHashResponse.typeUrl;
  },
  isSDK(o: any): o is QueryHeaderByHashResponseSDKType {
    return o && o.$typeUrl === QueryHeaderByHashResponse.typeUrl;
  },
  isAmino(o: any): o is QueryHeaderByHashResponseAmino {
    return o && o.$typeUrl === QueryHeaderByHashResponse.typeUrl;
  },
  encode(message: QueryHeaderByHashResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHeaderByHashResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHeaderByHashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryHeaderByHashResponse>): QueryHeaderByHashResponse {
    const message = createBaseQueryHeaderByHashResponse();
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    return message;
  },
  fromSDK(object: QueryHeaderByHashResponseSDKType): QueryHeaderByHashResponse {
    return {
      header: object.header ? Header.fromSDK(object.header) : undefined
    };
  },
  toSDK(message: QueryHeaderByHashResponse): QueryHeaderByHashResponseSDKType {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toSDK(message.header) : undefined);
    return obj;
  },
  fromAmino(object: QueryHeaderByHashResponseAmino): QueryHeaderByHashResponse {
    const message = createBaseQueryHeaderByHashResponse();
    if (object.header !== undefined && object.header !== null) {
      message.header = Header.fromAmino(object.header);
    }
    return message;
  },
  toAmino(message: QueryHeaderByHashResponse): QueryHeaderByHashResponseAmino {
    const obj: any = {};
    obj.header = message.header ? Header.toAmino(message.header) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHeaderByHashResponseAminoMsg): QueryHeaderByHashResponse {
    return QueryHeaderByHashResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHeaderByHashResponseProtoMsg): QueryHeaderByHashResponse {
    return QueryHeaderByHashResponse.decode(message.value);
  },
  toProto(message: QueryHeaderByHashResponse): Uint8Array {
    return QueryHeaderByHashResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHeaderByHashResponse): QueryHeaderByHashResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.bnblightclient.v1.QueryHeaderByHashResponse",
      value: QueryHeaderByHashResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryHeaderByHashResponse.typeUrl, QueryHeaderByHashResponse);
function createBaseQueryLatestHeaderRequest(): QueryLatestHeaderRequest {
  return {};
}
export const QueryLatestHeaderRequest = {
  typeUrl: "/lorenzo.bnblightclient.v1.QueryLatestHeaderRequest",
  is(o: any): o is QueryLatestHeaderRequest {
    return o && o.$typeUrl === QueryLatestHeaderRequest.typeUrl;
  },
  isSDK(o: any): o is QueryLatestHeaderRequestSDKType {
    return o && o.$typeUrl === QueryLatestHeaderRequest.typeUrl;
  },
  isAmino(o: any): o is QueryLatestHeaderRequestAmino {
    return o && o.$typeUrl === QueryLatestHeaderRequest.typeUrl;
  },
  encode(_: QueryLatestHeaderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLatestHeaderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLatestHeaderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryLatestHeaderRequest>): QueryLatestHeaderRequest {
    const message = createBaseQueryLatestHeaderRequest();
    return message;
  },
  fromSDK(_: QueryLatestHeaderRequestSDKType): QueryLatestHeaderRequest {
    return {};
  },
  toSDK(_: QueryLatestHeaderRequest): QueryLatestHeaderRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryLatestHeaderRequestAmino): QueryLatestHeaderRequest {
    const message = createBaseQueryLatestHeaderRequest();
    return message;
  },
  toAmino(_: QueryLatestHeaderRequest): QueryLatestHeaderRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryLatestHeaderRequestAminoMsg): QueryLatestHeaderRequest {
    return QueryLatestHeaderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLatestHeaderRequestProtoMsg): QueryLatestHeaderRequest {
    return QueryLatestHeaderRequest.decode(message.value);
  },
  toProto(message: QueryLatestHeaderRequest): Uint8Array {
    return QueryLatestHeaderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLatestHeaderRequest): QueryLatestHeaderRequestProtoMsg {
    return {
      typeUrl: "/lorenzo.bnblightclient.v1.QueryLatestHeaderRequest",
      value: QueryLatestHeaderRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryLatestHeaderRequest.typeUrl, QueryLatestHeaderRequest);
function createBaseQueryLatestHeaderResponse(): QueryLatestHeaderResponse {
  return {
    header: Header.fromPartial({})
  };
}
export const QueryLatestHeaderResponse = {
  typeUrl: "/lorenzo.bnblightclient.v1.QueryLatestHeaderResponse",
  is(o: any): o is QueryLatestHeaderResponse {
    return o && (o.$typeUrl === QueryLatestHeaderResponse.typeUrl || Header.is(o.header));
  },
  isSDK(o: any): o is QueryLatestHeaderResponseSDKType {
    return o && (o.$typeUrl === QueryLatestHeaderResponse.typeUrl || Header.isSDK(o.header));
  },
  isAmino(o: any): o is QueryLatestHeaderResponseAmino {
    return o && (o.$typeUrl === QueryLatestHeaderResponse.typeUrl || Header.isAmino(o.header));
  },
  encode(message: QueryLatestHeaderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLatestHeaderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLatestHeaderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLatestHeaderResponse>): QueryLatestHeaderResponse {
    const message = createBaseQueryLatestHeaderResponse();
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    return message;
  },
  fromSDK(object: QueryLatestHeaderResponseSDKType): QueryLatestHeaderResponse {
    return {
      header: object.header ? Header.fromSDK(object.header) : undefined
    };
  },
  toSDK(message: QueryLatestHeaderResponse): QueryLatestHeaderResponseSDKType {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toSDK(message.header) : undefined);
    return obj;
  },
  fromAmino(object: QueryLatestHeaderResponseAmino): QueryLatestHeaderResponse {
    const message = createBaseQueryLatestHeaderResponse();
    if (object.header !== undefined && object.header !== null) {
      message.header = Header.fromAmino(object.header);
    }
    return message;
  },
  toAmino(message: QueryLatestHeaderResponse): QueryLatestHeaderResponseAmino {
    const obj: any = {};
    obj.header = message.header ? Header.toAmino(message.header) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLatestHeaderResponseAminoMsg): QueryLatestHeaderResponse {
    return QueryLatestHeaderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLatestHeaderResponseProtoMsg): QueryLatestHeaderResponse {
    return QueryLatestHeaderResponse.decode(message.value);
  },
  toProto(message: QueryLatestHeaderResponse): Uint8Array {
    return QueryLatestHeaderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLatestHeaderResponse): QueryLatestHeaderResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.bnblightclient.v1.QueryLatestHeaderResponse",
      value: QueryLatestHeaderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryLatestHeaderResponse.typeUrl, QueryLatestHeaderResponse);