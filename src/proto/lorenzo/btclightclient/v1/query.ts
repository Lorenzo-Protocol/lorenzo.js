import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BTCHeaderInfo, BTCHeaderInfoAmino, BTCHeaderInfoSDKType } from "./btclightclient";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/lorenzo.btclightclient.v1.QueryParamsRequest";
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
  typeUrl: "/lorenzo.btclightclient.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/lorenzo.btclightclient.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryHashesRequest is request type for the Query/Hashes RPC method.
 * It involves retrieving all hashes that are maintained by the module.
 */
export interface QueryHashesRequest {
  pagination?: PageRequest;
}
export interface QueryHashesRequestProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.QueryHashesRequest";
  value: Uint8Array;
}
/**
 * QueryHashesRequest is request type for the Query/Hashes RPC method.
 * It involves retrieving all hashes that are maintained by the module.
 */
export interface QueryHashesRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryHashesRequestAminoMsg {
  type: "/lorenzo.btclightclient.v1.QueryHashesRequest";
  value: QueryHashesRequestAmino;
}
/**
 * QueryHashesRequest is request type for the Query/Hashes RPC method.
 * It involves retrieving all hashes that are maintained by the module.
 */
export interface QueryHashesRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryHashesResponse is response type for the Query/Hashes RPC method. */
export interface QueryHashesResponse {
  hashes: Uint8Array[];
  pagination?: PageResponse;
}
export interface QueryHashesResponseProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.QueryHashesResponse";
  value: Uint8Array;
}
/** QueryHashesResponse is response type for the Query/Hashes RPC method. */
export interface QueryHashesResponseAmino {
  hashes?: string[];
  pagination?: PageResponseAmino;
}
export interface QueryHashesResponseAminoMsg {
  type: "/lorenzo.btclightclient.v1.QueryHashesResponse";
  value: QueryHashesResponseAmino;
}
/** QueryHashesResponse is response type for the Query/Hashes RPC method. */
export interface QueryHashesResponseSDKType {
  hashes: Uint8Array[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryContainsRequest is request type for the Query/Contains RPC method.
 * It involves checking whether a hash is maintained by the module.
 */
export interface QueryContainsRequest {
  hash: Uint8Array;
}
export interface QueryContainsRequestProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.QueryContainsRequest";
  value: Uint8Array;
}
/**
 * QueryContainsRequest is request type for the Query/Contains RPC method.
 * It involves checking whether a hash is maintained by the module.
 */
export interface QueryContainsRequestAmino {
  hash?: string;
}
export interface QueryContainsRequestAminoMsg {
  type: "/lorenzo.btclightclient.v1.QueryContainsRequest";
  value: QueryContainsRequestAmino;
}
/**
 * QueryContainsRequest is request type for the Query/Contains RPC method.
 * It involves checking whether a hash is maintained by the module.
 */
export interface QueryContainsRequestSDKType {
  hash: Uint8Array;
}
/** QueryContainsResponse is response type for the Query/Contains RPC method. */
export interface QueryContainsResponse {
  contains: boolean;
}
export interface QueryContainsResponseProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.QueryContainsResponse";
  value: Uint8Array;
}
/** QueryContainsResponse is response type for the Query/Contains RPC method. */
export interface QueryContainsResponseAmino {
  contains?: boolean;
}
export interface QueryContainsResponseAminoMsg {
  type: "/lorenzo.btclightclient.v1.QueryContainsResponse";
  value: QueryContainsResponseAmino;
}
/** QueryContainsResponse is response type for the Query/Contains RPC method. */
export interface QueryContainsResponseSDKType {
  contains: boolean;
}
/**
 * QueryContainsRequest is request type for the temporary Query/ContainsBytes
 * RPC method. It involves checking whether a hash is maintained by the module.
 */
export interface QueryContainsBytesRequest {
  hash: Uint8Array;
}
export interface QueryContainsBytesRequestProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.QueryContainsBytesRequest";
  value: Uint8Array;
}
/**
 * QueryContainsRequest is request type for the temporary Query/ContainsBytes
 * RPC method. It involves checking whether a hash is maintained by the module.
 */
export interface QueryContainsBytesRequestAmino {
  hash?: string;
}
export interface QueryContainsBytesRequestAminoMsg {
  type: "/lorenzo.btclightclient.v1.QueryContainsBytesRequest";
  value: QueryContainsBytesRequestAmino;
}
/**
 * QueryContainsRequest is request type for the temporary Query/ContainsBytes
 * RPC method. It involves checking whether a hash is maintained by the module.
 */
export interface QueryContainsBytesRequestSDKType {
  hash: Uint8Array;
}
/**
 * QueryContainsResponse is response type for the temporary Query/ContainsBytes
 * RPC method.
 */
export interface QueryContainsBytesResponse {
  contains: boolean;
}
export interface QueryContainsBytesResponseProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.QueryContainsBytesResponse";
  value: Uint8Array;
}
/**
 * QueryContainsResponse is response type for the temporary Query/ContainsBytes
 * RPC method.
 */
export interface QueryContainsBytesResponseAmino {
  contains?: boolean;
}
export interface QueryContainsBytesResponseAminoMsg {
  type: "/lorenzo.btclightclient.v1.QueryContainsBytesResponse";
  value: QueryContainsBytesResponseAmino;
}
/**
 * QueryContainsResponse is response type for the temporary Query/ContainsBytes
 * RPC method.
 */
export interface QueryContainsBytesResponseSDKType {
  contains: boolean;
}
/**
 * QueryMainChainRequest is request type for the Query/MainChain RPC method.
 * It involves retrieving the canonical chain maintained by the module.
 */
export interface QueryMainChainRequest {
  pagination?: PageRequest;
}
export interface QueryMainChainRequestProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.QueryMainChainRequest";
  value: Uint8Array;
}
/**
 * QueryMainChainRequest is request type for the Query/MainChain RPC method.
 * It involves retrieving the canonical chain maintained by the module.
 */
export interface QueryMainChainRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryMainChainRequestAminoMsg {
  type: "/lorenzo.btclightclient.v1.QueryMainChainRequest";
  value: QueryMainChainRequestAmino;
}
/**
 * QueryMainChainRequest is request type for the Query/MainChain RPC method.
 * It involves retrieving the canonical chain maintained by the module.
 */
export interface QueryMainChainRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryMainChainResponse is response type for the Query/MainChain RPC method. */
export interface QueryMainChainResponse {
  headers: BTCHeaderInfo[];
  pagination?: PageResponse;
}
export interface QueryMainChainResponseProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.QueryMainChainResponse";
  value: Uint8Array;
}
/** QueryMainChainResponse is response type for the Query/MainChain RPC method. */
export interface QueryMainChainResponseAmino {
  headers?: BTCHeaderInfoAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryMainChainResponseAminoMsg {
  type: "/lorenzo.btclightclient.v1.QueryMainChainResponse";
  value: QueryMainChainResponseAmino;
}
/** QueryMainChainResponse is response type for the Query/MainChain RPC method. */
export interface QueryMainChainResponseSDKType {
  headers: BTCHeaderInfoSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryTipRequest is the request type for the Query/Tip RPC method. */
export interface QueryTipRequest {}
export interface QueryTipRequestProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.QueryTipRequest";
  value: Uint8Array;
}
/** QueryTipRequest is the request type for the Query/Tip RPC method. */
export interface QueryTipRequestAmino {}
export interface QueryTipRequestAminoMsg {
  type: "/lorenzo.btclightclient.v1.QueryTipRequest";
  value: QueryTipRequestAmino;
}
/** QueryTipRequest is the request type for the Query/Tip RPC method. */
export interface QueryTipRequestSDKType {}
/** QueryTipResponse is the response type for the Query/Tip RPC method. */
export interface QueryTipResponse {
  header?: BTCHeaderInfo;
}
export interface QueryTipResponseProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.QueryTipResponse";
  value: Uint8Array;
}
/** QueryTipResponse is the response type for the Query/Tip RPC method. */
export interface QueryTipResponseAmino {
  header?: BTCHeaderInfoAmino;
}
export interface QueryTipResponseAminoMsg {
  type: "/lorenzo.btclightclient.v1.QueryTipResponse";
  value: QueryTipResponseAmino;
}
/** QueryTipResponse is the response type for the Query/Tip RPC method. */
export interface QueryTipResponseSDKType {
  header?: BTCHeaderInfoSDKType;
}
/**
 * QueryBaseHeaderRequest is the request type for the Query/BaseHeader RPC
 * method.
 */
export interface QueryBaseHeaderRequest {}
export interface QueryBaseHeaderRequestProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.QueryBaseHeaderRequest";
  value: Uint8Array;
}
/**
 * QueryBaseHeaderRequest is the request type for the Query/BaseHeader RPC
 * method.
 */
export interface QueryBaseHeaderRequestAmino {}
export interface QueryBaseHeaderRequestAminoMsg {
  type: "/lorenzo.btclightclient.v1.QueryBaseHeaderRequest";
  value: QueryBaseHeaderRequestAmino;
}
/**
 * QueryBaseHeaderRequest is the request type for the Query/BaseHeader RPC
 * method.
 */
export interface QueryBaseHeaderRequestSDKType {}
/**
 * QueryBaseHeaderResponse is the response type for the Query/BaseHeader RPC
 * method.
 */
export interface QueryBaseHeaderResponse {
  header?: BTCHeaderInfo;
}
export interface QueryBaseHeaderResponseProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.QueryBaseHeaderResponse";
  value: Uint8Array;
}
/**
 * QueryBaseHeaderResponse is the response type for the Query/BaseHeader RPC
 * method.
 */
export interface QueryBaseHeaderResponseAmino {
  header?: BTCHeaderInfoAmino;
}
export interface QueryBaseHeaderResponseAminoMsg {
  type: "/lorenzo.btclightclient.v1.QueryBaseHeaderResponse";
  value: QueryBaseHeaderResponseAmino;
}
/**
 * QueryBaseHeaderResponse is the response type for the Query/BaseHeader RPC
 * method.
 */
export interface QueryBaseHeaderResponseSDKType {
  header?: BTCHeaderInfoSDKType;
}
/**
 * QueryMainChainDepthRequest is the request type for the Query/MainChainDepth
 * RPC it contains hex encoded hash of btc block header as parameter
 */
export interface QueryHeaderDepthRequest {
  hash: string;
}
export interface QueryHeaderDepthRequestProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.QueryHeaderDepthRequest";
  value: Uint8Array;
}
/**
 * QueryMainChainDepthRequest is the request type for the Query/MainChainDepth
 * RPC it contains hex encoded hash of btc block header as parameter
 */
export interface QueryHeaderDepthRequestAmino {
  hash?: string;
}
export interface QueryHeaderDepthRequestAminoMsg {
  type: "/lorenzo.btclightclient.v1.QueryHeaderDepthRequest";
  value: QueryHeaderDepthRequestAmino;
}
/**
 * QueryMainChainDepthRequest is the request type for the Query/MainChainDepth
 * RPC it contains hex encoded hash of btc block header as parameter
 */
export interface QueryHeaderDepthRequestSDKType {
  hash: string;
}
/**
 * QueryMainChainDepthResponse is the response type for the Query/MainChainDepth
 * RPC it contains depth of the block in main chain
 */
export interface QueryHeaderDepthResponse {
  depth: bigint;
}
export interface QueryHeaderDepthResponseProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.QueryHeaderDepthResponse";
  value: Uint8Array;
}
/**
 * QueryMainChainDepthResponse is the response type for the Query/MainChainDepth
 * RPC it contains depth of the block in main chain
 */
export interface QueryHeaderDepthResponseAmino {
  depth?: string;
}
export interface QueryHeaderDepthResponseAminoMsg {
  type: "/lorenzo.btclightclient.v1.QueryHeaderDepthResponse";
  value: QueryHeaderDepthResponseAmino;
}
/**
 * QueryMainChainDepthResponse is the response type for the Query/MainChainDepth
 * RPC it contains depth of the block in main chain
 */
export interface QueryHeaderDepthResponseSDKType {
  depth: bigint;
}
export interface QueryFeeRateRequest {}
export interface QueryFeeRateRequestProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.QueryFeeRateRequest";
  value: Uint8Array;
}
export interface QueryFeeRateRequestAmino {}
export interface QueryFeeRateRequestAminoMsg {
  type: "/lorenzo.btclightclient.v1.QueryFeeRateRequest";
  value: QueryFeeRateRequestAmino;
}
export interface QueryFeeRateRequestSDKType {}
export interface QueryFeeRateResponse {
  feeRate: bigint;
}
export interface QueryFeeRateResponseProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.QueryFeeRateResponse";
  value: Uint8Array;
}
export interface QueryFeeRateResponseAmino {
  fee_rate?: string;
}
export interface QueryFeeRateResponseAminoMsg {
  type: "/lorenzo.btclightclient.v1.QueryFeeRateResponse";
  value: QueryFeeRateResponseAmino;
}
export interface QueryFeeRateResponseSDKType {
  fee_rate: bigint;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lorenzo.btclightclient.v1.QueryParamsRequest",
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
      typeUrl: "/lorenzo.btclightclient.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/lorenzo.btclightclient.v1.QueryParamsResponse",
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
      typeUrl: "/lorenzo.btclightclient.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryHashesRequest(): QueryHashesRequest {
  return {
    pagination: undefined
  };
}
export const QueryHashesRequest = {
  typeUrl: "/lorenzo.btclightclient.v1.QueryHashesRequest",
  encode(message: QueryHashesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHashesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHashesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryHashesRequest>): QueryHashesRequest {
    const message = createBaseQueryHashesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryHashesRequestSDKType): QueryHashesRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryHashesRequest): QueryHashesRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryHashesRequestAmino): QueryHashesRequest {
    const message = createBaseQueryHashesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryHashesRequest): QueryHashesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHashesRequestAminoMsg): QueryHashesRequest {
    return QueryHashesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHashesRequestProtoMsg): QueryHashesRequest {
    return QueryHashesRequest.decode(message.value);
  },
  toProto(message: QueryHashesRequest): Uint8Array {
    return QueryHashesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHashesRequest): QueryHashesRequestProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.QueryHashesRequest",
      value: QueryHashesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHashesResponse(): QueryHashesResponse {
  return {
    hashes: [],
    pagination: undefined
  };
}
export const QueryHashesResponse = {
  typeUrl: "/lorenzo.btclightclient.v1.QueryHashesResponse",
  encode(message: QueryHashesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.hashes) {
      writer.uint32(10).bytes(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHashesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHashesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hashes.push(reader.bytes());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryHashesResponse>): QueryHashesResponse {
    const message = createBaseQueryHashesResponse();
    message.hashes = object.hashes?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryHashesResponseSDKType): QueryHashesResponse {
    return {
      hashes: Array.isArray(object?.hashes) ? object.hashes.map((e: any) => e) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryHashesResponse): QueryHashesResponseSDKType {
    const obj: any = {};
    if (message.hashes) {
      obj.hashes = message.hashes.map(e => e);
    } else {
      obj.hashes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryHashesResponseAmino): QueryHashesResponse {
    const message = createBaseQueryHashesResponse();
    message.hashes = object.hashes?.map(e => bytesFromBase64(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryHashesResponse): QueryHashesResponseAmino {
    const obj: any = {};
    if (message.hashes) {
      obj.hashes = message.hashes.map(e => base64FromBytes(e));
    } else {
      obj.hashes = message.hashes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHashesResponseAminoMsg): QueryHashesResponse {
    return QueryHashesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHashesResponseProtoMsg): QueryHashesResponse {
    return QueryHashesResponse.decode(message.value);
  },
  toProto(message: QueryHashesResponse): Uint8Array {
    return QueryHashesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHashesResponse): QueryHashesResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.QueryHashesResponse",
      value: QueryHashesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryContainsRequest(): QueryContainsRequest {
  return {
    hash: new Uint8Array()
  };
}
export const QueryContainsRequest = {
  typeUrl: "/lorenzo.btclightclient.v1.QueryContainsRequest",
  encode(message: QueryContainsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContainsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContainsRequest();
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
  fromPartial(object: Partial<QueryContainsRequest>): QueryContainsRequest {
    const message = createBaseQueryContainsRequest();
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
  fromSDK(object: QueryContainsRequestSDKType): QueryContainsRequest {
    return {
      hash: object?.hash
    };
  },
  toSDK(message: QueryContainsRequest): QueryContainsRequestSDKType {
    const obj: any = {};
    obj.hash = message.hash;
    return obj;
  },
  fromAmino(object: QueryContainsRequestAmino): QueryContainsRequest {
    const message = createBaseQueryContainsRequest();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    return message;
  },
  toAmino(message: QueryContainsRequest): QueryContainsRequestAmino {
    const obj: any = {};
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContainsRequestAminoMsg): QueryContainsRequest {
    return QueryContainsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContainsRequestProtoMsg): QueryContainsRequest {
    return QueryContainsRequest.decode(message.value);
  },
  toProto(message: QueryContainsRequest): Uint8Array {
    return QueryContainsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContainsRequest): QueryContainsRequestProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.QueryContainsRequest",
      value: QueryContainsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryContainsResponse(): QueryContainsResponse {
  return {
    contains: false
  };
}
export const QueryContainsResponse = {
  typeUrl: "/lorenzo.btclightclient.v1.QueryContainsResponse",
  encode(message: QueryContainsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contains === true) {
      writer.uint32(8).bool(message.contains);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContainsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContainsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contains = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryContainsResponse>): QueryContainsResponse {
    const message = createBaseQueryContainsResponse();
    message.contains = object.contains ?? false;
    return message;
  },
  fromSDK(object: QueryContainsResponseSDKType): QueryContainsResponse {
    return {
      contains: object?.contains
    };
  },
  toSDK(message: QueryContainsResponse): QueryContainsResponseSDKType {
    const obj: any = {};
    obj.contains = message.contains;
    return obj;
  },
  fromAmino(object: QueryContainsResponseAmino): QueryContainsResponse {
    const message = createBaseQueryContainsResponse();
    if (object.contains !== undefined && object.contains !== null) {
      message.contains = object.contains;
    }
    return message;
  },
  toAmino(message: QueryContainsResponse): QueryContainsResponseAmino {
    const obj: any = {};
    obj.contains = message.contains === false ? undefined : message.contains;
    return obj;
  },
  fromAminoMsg(object: QueryContainsResponseAminoMsg): QueryContainsResponse {
    return QueryContainsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContainsResponseProtoMsg): QueryContainsResponse {
    return QueryContainsResponse.decode(message.value);
  },
  toProto(message: QueryContainsResponse): Uint8Array {
    return QueryContainsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContainsResponse): QueryContainsResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.QueryContainsResponse",
      value: QueryContainsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryContainsBytesRequest(): QueryContainsBytesRequest {
  return {
    hash: new Uint8Array()
  };
}
export const QueryContainsBytesRequest = {
  typeUrl: "/lorenzo.btclightclient.v1.QueryContainsBytesRequest",
  encode(message: QueryContainsBytesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContainsBytesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContainsBytesRequest();
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
  fromPartial(object: Partial<QueryContainsBytesRequest>): QueryContainsBytesRequest {
    const message = createBaseQueryContainsBytesRequest();
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
  fromSDK(object: QueryContainsBytesRequestSDKType): QueryContainsBytesRequest {
    return {
      hash: object?.hash
    };
  },
  toSDK(message: QueryContainsBytesRequest): QueryContainsBytesRequestSDKType {
    const obj: any = {};
    obj.hash = message.hash;
    return obj;
  },
  fromAmino(object: QueryContainsBytesRequestAmino): QueryContainsBytesRequest {
    const message = createBaseQueryContainsBytesRequest();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    return message;
  },
  toAmino(message: QueryContainsBytesRequest): QueryContainsBytesRequestAmino {
    const obj: any = {};
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContainsBytesRequestAminoMsg): QueryContainsBytesRequest {
    return QueryContainsBytesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContainsBytesRequestProtoMsg): QueryContainsBytesRequest {
    return QueryContainsBytesRequest.decode(message.value);
  },
  toProto(message: QueryContainsBytesRequest): Uint8Array {
    return QueryContainsBytesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContainsBytesRequest): QueryContainsBytesRequestProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.QueryContainsBytesRequest",
      value: QueryContainsBytesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryContainsBytesResponse(): QueryContainsBytesResponse {
  return {
    contains: false
  };
}
export const QueryContainsBytesResponse = {
  typeUrl: "/lorenzo.btclightclient.v1.QueryContainsBytesResponse",
  encode(message: QueryContainsBytesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contains === true) {
      writer.uint32(8).bool(message.contains);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContainsBytesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContainsBytesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contains = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryContainsBytesResponse>): QueryContainsBytesResponse {
    const message = createBaseQueryContainsBytesResponse();
    message.contains = object.contains ?? false;
    return message;
  },
  fromSDK(object: QueryContainsBytesResponseSDKType): QueryContainsBytesResponse {
    return {
      contains: object?.contains
    };
  },
  toSDK(message: QueryContainsBytesResponse): QueryContainsBytesResponseSDKType {
    const obj: any = {};
    obj.contains = message.contains;
    return obj;
  },
  fromAmino(object: QueryContainsBytesResponseAmino): QueryContainsBytesResponse {
    const message = createBaseQueryContainsBytesResponse();
    if (object.contains !== undefined && object.contains !== null) {
      message.contains = object.contains;
    }
    return message;
  },
  toAmino(message: QueryContainsBytesResponse): QueryContainsBytesResponseAmino {
    const obj: any = {};
    obj.contains = message.contains === false ? undefined : message.contains;
    return obj;
  },
  fromAminoMsg(object: QueryContainsBytesResponseAminoMsg): QueryContainsBytesResponse {
    return QueryContainsBytesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContainsBytesResponseProtoMsg): QueryContainsBytesResponse {
    return QueryContainsBytesResponse.decode(message.value);
  },
  toProto(message: QueryContainsBytesResponse): Uint8Array {
    return QueryContainsBytesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContainsBytesResponse): QueryContainsBytesResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.QueryContainsBytesResponse",
      value: QueryContainsBytesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMainChainRequest(): QueryMainChainRequest {
  return {
    pagination: undefined
  };
}
export const QueryMainChainRequest = {
  typeUrl: "/lorenzo.btclightclient.v1.QueryMainChainRequest",
  encode(message: QueryMainChainRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMainChainRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMainChainRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryMainChainRequest>): QueryMainChainRequest {
    const message = createBaseQueryMainChainRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryMainChainRequestSDKType): QueryMainChainRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryMainChainRequest): QueryMainChainRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryMainChainRequestAmino): QueryMainChainRequest {
    const message = createBaseQueryMainChainRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMainChainRequest): QueryMainChainRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMainChainRequestAminoMsg): QueryMainChainRequest {
    return QueryMainChainRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMainChainRequestProtoMsg): QueryMainChainRequest {
    return QueryMainChainRequest.decode(message.value);
  },
  toProto(message: QueryMainChainRequest): Uint8Array {
    return QueryMainChainRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMainChainRequest): QueryMainChainRequestProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.QueryMainChainRequest",
      value: QueryMainChainRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMainChainResponse(): QueryMainChainResponse {
  return {
    headers: [],
    pagination: undefined
  };
}
export const QueryMainChainResponse = {
  typeUrl: "/lorenzo.btclightclient.v1.QueryMainChainResponse",
  encode(message: QueryMainChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.headers) {
      BTCHeaderInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMainChainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMainChainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.headers.push(BTCHeaderInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryMainChainResponse>): QueryMainChainResponse {
    const message = createBaseQueryMainChainResponse();
    message.headers = object.headers?.map(e => BTCHeaderInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryMainChainResponseSDKType): QueryMainChainResponse {
    return {
      headers: Array.isArray(object?.headers) ? object.headers.map((e: any) => BTCHeaderInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryMainChainResponse): QueryMainChainResponseSDKType {
    const obj: any = {};
    if (message.headers) {
      obj.headers = message.headers.map(e => e ? BTCHeaderInfo.toSDK(e) : undefined);
    } else {
      obj.headers = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryMainChainResponseAmino): QueryMainChainResponse {
    const message = createBaseQueryMainChainResponse();
    message.headers = object.headers?.map(e => BTCHeaderInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMainChainResponse): QueryMainChainResponseAmino {
    const obj: any = {};
    if (message.headers) {
      obj.headers = message.headers.map(e => e ? BTCHeaderInfo.toAmino(e) : undefined);
    } else {
      obj.headers = message.headers;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMainChainResponseAminoMsg): QueryMainChainResponse {
    return QueryMainChainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMainChainResponseProtoMsg): QueryMainChainResponse {
    return QueryMainChainResponse.decode(message.value);
  },
  toProto(message: QueryMainChainResponse): Uint8Array {
    return QueryMainChainResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMainChainResponse): QueryMainChainResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.QueryMainChainResponse",
      value: QueryMainChainResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTipRequest(): QueryTipRequest {
  return {};
}
export const QueryTipRequest = {
  typeUrl: "/lorenzo.btclightclient.v1.QueryTipRequest",
  encode(_: QueryTipRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTipRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTipRequest();
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
  fromPartial(_: Partial<QueryTipRequest>): QueryTipRequest {
    const message = createBaseQueryTipRequest();
    return message;
  },
  fromSDK(_: QueryTipRequestSDKType): QueryTipRequest {
    return {};
  },
  toSDK(_: QueryTipRequest): QueryTipRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryTipRequestAmino): QueryTipRequest {
    const message = createBaseQueryTipRequest();
    return message;
  },
  toAmino(_: QueryTipRequest): QueryTipRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTipRequestAminoMsg): QueryTipRequest {
    return QueryTipRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTipRequestProtoMsg): QueryTipRequest {
    return QueryTipRequest.decode(message.value);
  },
  toProto(message: QueryTipRequest): Uint8Array {
    return QueryTipRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTipRequest): QueryTipRequestProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.QueryTipRequest",
      value: QueryTipRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTipResponse(): QueryTipResponse {
  return {
    header: undefined
  };
}
export const QueryTipResponse = {
  typeUrl: "/lorenzo.btclightclient.v1.QueryTipResponse",
  encode(message: QueryTipResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.header !== undefined) {
      BTCHeaderInfo.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTipResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTipResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = BTCHeaderInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTipResponse>): QueryTipResponse {
    const message = createBaseQueryTipResponse();
    message.header = object.header !== undefined && object.header !== null ? BTCHeaderInfo.fromPartial(object.header) : undefined;
    return message;
  },
  fromSDK(object: QueryTipResponseSDKType): QueryTipResponse {
    return {
      header: object.header ? BTCHeaderInfo.fromSDK(object.header) : undefined
    };
  },
  toSDK(message: QueryTipResponse): QueryTipResponseSDKType {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? BTCHeaderInfo.toSDK(message.header) : undefined);
    return obj;
  },
  fromAmino(object: QueryTipResponseAmino): QueryTipResponse {
    const message = createBaseQueryTipResponse();
    if (object.header !== undefined && object.header !== null) {
      message.header = BTCHeaderInfo.fromAmino(object.header);
    }
    return message;
  },
  toAmino(message: QueryTipResponse): QueryTipResponseAmino {
    const obj: any = {};
    obj.header = message.header ? BTCHeaderInfo.toAmino(message.header) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTipResponseAminoMsg): QueryTipResponse {
    return QueryTipResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTipResponseProtoMsg): QueryTipResponse {
    return QueryTipResponse.decode(message.value);
  },
  toProto(message: QueryTipResponse): Uint8Array {
    return QueryTipResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTipResponse): QueryTipResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.QueryTipResponse",
      value: QueryTipResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBaseHeaderRequest(): QueryBaseHeaderRequest {
  return {};
}
export const QueryBaseHeaderRequest = {
  typeUrl: "/lorenzo.btclightclient.v1.QueryBaseHeaderRequest",
  encode(_: QueryBaseHeaderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBaseHeaderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBaseHeaderRequest();
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
  fromPartial(_: Partial<QueryBaseHeaderRequest>): QueryBaseHeaderRequest {
    const message = createBaseQueryBaseHeaderRequest();
    return message;
  },
  fromSDK(_: QueryBaseHeaderRequestSDKType): QueryBaseHeaderRequest {
    return {};
  },
  toSDK(_: QueryBaseHeaderRequest): QueryBaseHeaderRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryBaseHeaderRequestAmino): QueryBaseHeaderRequest {
    const message = createBaseQueryBaseHeaderRequest();
    return message;
  },
  toAmino(_: QueryBaseHeaderRequest): QueryBaseHeaderRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBaseHeaderRequestAminoMsg): QueryBaseHeaderRequest {
    return QueryBaseHeaderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBaseHeaderRequestProtoMsg): QueryBaseHeaderRequest {
    return QueryBaseHeaderRequest.decode(message.value);
  },
  toProto(message: QueryBaseHeaderRequest): Uint8Array {
    return QueryBaseHeaderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBaseHeaderRequest): QueryBaseHeaderRequestProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.QueryBaseHeaderRequest",
      value: QueryBaseHeaderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBaseHeaderResponse(): QueryBaseHeaderResponse {
  return {
    header: undefined
  };
}
export const QueryBaseHeaderResponse = {
  typeUrl: "/lorenzo.btclightclient.v1.QueryBaseHeaderResponse",
  encode(message: QueryBaseHeaderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.header !== undefined) {
      BTCHeaderInfo.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBaseHeaderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBaseHeaderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = BTCHeaderInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBaseHeaderResponse>): QueryBaseHeaderResponse {
    const message = createBaseQueryBaseHeaderResponse();
    message.header = object.header !== undefined && object.header !== null ? BTCHeaderInfo.fromPartial(object.header) : undefined;
    return message;
  },
  fromSDK(object: QueryBaseHeaderResponseSDKType): QueryBaseHeaderResponse {
    return {
      header: object.header ? BTCHeaderInfo.fromSDK(object.header) : undefined
    };
  },
  toSDK(message: QueryBaseHeaderResponse): QueryBaseHeaderResponseSDKType {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? BTCHeaderInfo.toSDK(message.header) : undefined);
    return obj;
  },
  fromAmino(object: QueryBaseHeaderResponseAmino): QueryBaseHeaderResponse {
    const message = createBaseQueryBaseHeaderResponse();
    if (object.header !== undefined && object.header !== null) {
      message.header = BTCHeaderInfo.fromAmino(object.header);
    }
    return message;
  },
  toAmino(message: QueryBaseHeaderResponse): QueryBaseHeaderResponseAmino {
    const obj: any = {};
    obj.header = message.header ? BTCHeaderInfo.toAmino(message.header) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBaseHeaderResponseAminoMsg): QueryBaseHeaderResponse {
    return QueryBaseHeaderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBaseHeaderResponseProtoMsg): QueryBaseHeaderResponse {
    return QueryBaseHeaderResponse.decode(message.value);
  },
  toProto(message: QueryBaseHeaderResponse): Uint8Array {
    return QueryBaseHeaderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBaseHeaderResponse): QueryBaseHeaderResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.QueryBaseHeaderResponse",
      value: QueryBaseHeaderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryHeaderDepthRequest(): QueryHeaderDepthRequest {
  return {
    hash: ""
  };
}
export const QueryHeaderDepthRequest = {
  typeUrl: "/lorenzo.btclightclient.v1.QueryHeaderDepthRequest",
  encode(message: QueryHeaderDepthRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHeaderDepthRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHeaderDepthRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryHeaderDepthRequest>): QueryHeaderDepthRequest {
    const message = createBaseQueryHeaderDepthRequest();
    message.hash = object.hash ?? "";
    return message;
  },
  fromSDK(object: QueryHeaderDepthRequestSDKType): QueryHeaderDepthRequest {
    return {
      hash: object?.hash
    };
  },
  toSDK(message: QueryHeaderDepthRequest): QueryHeaderDepthRequestSDKType {
    const obj: any = {};
    obj.hash = message.hash;
    return obj;
  },
  fromAmino(object: QueryHeaderDepthRequestAmino): QueryHeaderDepthRequest {
    const message = createBaseQueryHeaderDepthRequest();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    return message;
  },
  toAmino(message: QueryHeaderDepthRequest): QueryHeaderDepthRequestAmino {
    const obj: any = {};
    obj.hash = message.hash === "" ? undefined : message.hash;
    return obj;
  },
  fromAminoMsg(object: QueryHeaderDepthRequestAminoMsg): QueryHeaderDepthRequest {
    return QueryHeaderDepthRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHeaderDepthRequestProtoMsg): QueryHeaderDepthRequest {
    return QueryHeaderDepthRequest.decode(message.value);
  },
  toProto(message: QueryHeaderDepthRequest): Uint8Array {
    return QueryHeaderDepthRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHeaderDepthRequest): QueryHeaderDepthRequestProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.QueryHeaderDepthRequest",
      value: QueryHeaderDepthRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHeaderDepthResponse(): QueryHeaderDepthResponse {
  return {
    depth: BigInt(0)
  };
}
export const QueryHeaderDepthResponse = {
  typeUrl: "/lorenzo.btclightclient.v1.QueryHeaderDepthResponse",
  encode(message: QueryHeaderDepthResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depth !== BigInt(0)) {
      writer.uint32(8).uint64(message.depth);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHeaderDepthResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHeaderDepthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depth = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryHeaderDepthResponse>): QueryHeaderDepthResponse {
    const message = createBaseQueryHeaderDepthResponse();
    message.depth = object.depth !== undefined && object.depth !== null ? BigInt(object.depth.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryHeaderDepthResponseSDKType): QueryHeaderDepthResponse {
    return {
      depth: object?.depth
    };
  },
  toSDK(message: QueryHeaderDepthResponse): QueryHeaderDepthResponseSDKType {
    const obj: any = {};
    obj.depth = message.depth;
    return obj;
  },
  fromAmino(object: QueryHeaderDepthResponseAmino): QueryHeaderDepthResponse {
    const message = createBaseQueryHeaderDepthResponse();
    if (object.depth !== undefined && object.depth !== null) {
      message.depth = BigInt(object.depth);
    }
    return message;
  },
  toAmino(message: QueryHeaderDepthResponse): QueryHeaderDepthResponseAmino {
    const obj: any = {};
    obj.depth = message.depth !== BigInt(0) ? message.depth.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHeaderDepthResponseAminoMsg): QueryHeaderDepthResponse {
    return QueryHeaderDepthResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHeaderDepthResponseProtoMsg): QueryHeaderDepthResponse {
    return QueryHeaderDepthResponse.decode(message.value);
  },
  toProto(message: QueryHeaderDepthResponse): Uint8Array {
    return QueryHeaderDepthResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHeaderDepthResponse): QueryHeaderDepthResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.QueryHeaderDepthResponse",
      value: QueryHeaderDepthResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFeeRateRequest(): QueryFeeRateRequest {
  return {};
}
export const QueryFeeRateRequest = {
  typeUrl: "/lorenzo.btclightclient.v1.QueryFeeRateRequest",
  encode(_: QueryFeeRateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeRateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeRateRequest();
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
  fromPartial(_: Partial<QueryFeeRateRequest>): QueryFeeRateRequest {
    const message = createBaseQueryFeeRateRequest();
    return message;
  },
  fromSDK(_: QueryFeeRateRequestSDKType): QueryFeeRateRequest {
    return {};
  },
  toSDK(_: QueryFeeRateRequest): QueryFeeRateRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryFeeRateRequestAmino): QueryFeeRateRequest {
    const message = createBaseQueryFeeRateRequest();
    return message;
  },
  toAmino(_: QueryFeeRateRequest): QueryFeeRateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryFeeRateRequestAminoMsg): QueryFeeRateRequest {
    return QueryFeeRateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeRateRequestProtoMsg): QueryFeeRateRequest {
    return QueryFeeRateRequest.decode(message.value);
  },
  toProto(message: QueryFeeRateRequest): Uint8Array {
    return QueryFeeRateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeRateRequest): QueryFeeRateRequestProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.QueryFeeRateRequest",
      value: QueryFeeRateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFeeRateResponse(): QueryFeeRateResponse {
  return {
    feeRate: BigInt(0)
  };
}
export const QueryFeeRateResponse = {
  typeUrl: "/lorenzo.btclightclient.v1.QueryFeeRateResponse",
  encode(message: QueryFeeRateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeRate !== BigInt(0)) {
      writer.uint32(8).uint64(message.feeRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeRateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeRate = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFeeRateResponse>): QueryFeeRateResponse {
    const message = createBaseQueryFeeRateResponse();
    message.feeRate = object.feeRate !== undefined && object.feeRate !== null ? BigInt(object.feeRate.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryFeeRateResponseSDKType): QueryFeeRateResponse {
    return {
      feeRate: object?.fee_rate
    };
  },
  toSDK(message: QueryFeeRateResponse): QueryFeeRateResponseSDKType {
    const obj: any = {};
    obj.fee_rate = message.feeRate;
    return obj;
  },
  fromAmino(object: QueryFeeRateResponseAmino): QueryFeeRateResponse {
    const message = createBaseQueryFeeRateResponse();
    if (object.fee_rate !== undefined && object.fee_rate !== null) {
      message.feeRate = BigInt(object.fee_rate);
    }
    return message;
  },
  toAmino(message: QueryFeeRateResponse): QueryFeeRateResponseAmino {
    const obj: any = {};
    obj.fee_rate = message.feeRate !== BigInt(0) ? message.feeRate.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFeeRateResponseAminoMsg): QueryFeeRateResponse {
    return QueryFeeRateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeRateResponseProtoMsg): QueryFeeRateResponse {
    return QueryFeeRateResponse.decode(message.value);
  },
  toProto(message: QueryFeeRateResponse): Uint8Array {
    return QueryFeeRateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeRateResponse): QueryFeeRateResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.QueryFeeRateResponse",
      value: QueryFeeRateResponse.encode(message).finish()
    };
  }
};