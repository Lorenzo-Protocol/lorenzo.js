import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { TokenPair, TokenPairAmino, TokenPairSDKType } from "./token";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryTokenPairsRequest is the request type for the Query/TokenPairs RPC */
export interface QueryTokenPairsRequest {
  pagination?: PageRequest;
}
export interface QueryTokenPairsRequestProtoMsg {
  typeUrl: "/lorenzo.token.v1.QueryTokenPairsRequest";
  value: Uint8Array;
}
/** QueryTokenPairsRequest is the request type for the Query/TokenPairs RPC */
export interface QueryTokenPairsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryTokenPairsRequestAminoMsg {
  type: "/lorenzo.token.v1.QueryTokenPairsRequest";
  value: QueryTokenPairsRequestAmino;
}
/** QueryTokenPairsRequest is the request type for the Query/TokenPairs RPC */
export interface QueryTokenPairsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryTokenPairsResponse is the response type for the Query/TokenPairs RPC */
export interface QueryTokenPairsResponse {
  tokenPairs: TokenPair[];
  pagination?: PageResponse;
}
export interface QueryTokenPairsResponseProtoMsg {
  typeUrl: "/lorenzo.token.v1.QueryTokenPairsResponse";
  value: Uint8Array;
}
/** QueryTokenPairsResponse is the response type for the Query/TokenPairs RPC */
export interface QueryTokenPairsResponseAmino {
  token_pairs?: TokenPairAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryTokenPairsResponseAminoMsg {
  type: "/lorenzo.token.v1.QueryTokenPairsResponse";
  value: QueryTokenPairsResponseAmino;
}
/** QueryTokenPairsResponse is the response type for the Query/TokenPairs RPC */
export interface QueryTokenPairsResponseSDKType {
  token_pairs: TokenPairSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryTokenPairRequest is the request type for the Query/TokenPair RPC method. */
export interface QueryTokenPairRequest {
  /** token can be either coin denom or erc20 contract address. */
  token: string;
}
export interface QueryTokenPairRequestProtoMsg {
  typeUrl: "/lorenzo.token.v1.QueryTokenPairRequest";
  value: Uint8Array;
}
/** QueryTokenPairRequest is the request type for the Query/TokenPair RPC method. */
export interface QueryTokenPairRequestAmino {
  /** token can be either coin denom or erc20 contract address. */
  token?: string;
}
export interface QueryTokenPairRequestAminoMsg {
  type: "/lorenzo.token.v1.QueryTokenPairRequest";
  value: QueryTokenPairRequestAmino;
}
/** QueryTokenPairRequest is the request type for the Query/TokenPair RPC method. */
export interface QueryTokenPairRequestSDKType {
  token: string;
}
/** QueryTokenPairResponse is the response type for the Query/TokenPair RPC */
export interface QueryTokenPairResponse {
  tokenPair: TokenPair;
}
export interface QueryTokenPairResponseProtoMsg {
  typeUrl: "/lorenzo.token.v1.QueryTokenPairResponse";
  value: Uint8Array;
}
/** QueryTokenPairResponse is the response type for the Query/TokenPair RPC */
export interface QueryTokenPairResponseAmino {
  token_pair?: TokenPairAmino;
}
export interface QueryTokenPairResponseAminoMsg {
  type: "/lorenzo.token.v1.QueryTokenPairResponse";
  value: QueryTokenPairResponseAmino;
}
/** QueryTokenPairResponse is the response type for the Query/TokenPair RPC */
export interface QueryTokenPairResponseSDKType {
  token_pair: TokenPairSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/lorenzo.token.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/lorenzo.token.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/lorenzo.token.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/lorenzo.token.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryBalancesRequest is the request type for the Query/Balances RPC */
export interface QueryBalanceRequest {
  /** account address can be bech32 or hex address */
  accountAddress: string;
  /** token can be either coin denom or erc20 contract address. */
  token: string;
}
export interface QueryBalanceRequestProtoMsg {
  typeUrl: "/lorenzo.token.v1.QueryBalanceRequest";
  value: Uint8Array;
}
/** QueryBalancesRequest is the request type for the Query/Balances RPC */
export interface QueryBalanceRequestAmino {
  /** account address can be bech32 or hex address */
  account_address?: string;
  /** token can be either coin denom or erc20 contract address. */
  token?: string;
}
export interface QueryBalanceRequestAminoMsg {
  type: "/lorenzo.token.v1.QueryBalanceRequest";
  value: QueryBalanceRequestAmino;
}
/** QueryBalancesRequest is the request type for the Query/Balances RPC */
export interface QueryBalanceRequestSDKType {
  account_address: string;
  token: string;
}
/** QueryBalancesResponse is the response type for the Query/Balances RPC */
export interface QueryBalanceResponse {
  coin: Coin;
  erc20Address: string;
  erc20TokenAmount: string;
}
export interface QueryBalanceResponseProtoMsg {
  typeUrl: "/lorenzo.token.v1.QueryBalanceResponse";
  value: Uint8Array;
}
/** QueryBalancesResponse is the response type for the Query/Balances RPC */
export interface QueryBalanceResponseAmino {
  coin?: CoinAmino;
  erc20_address?: string;
  erc20_token_amount?: string;
}
export interface QueryBalanceResponseAminoMsg {
  type: "/lorenzo.token.v1.QueryBalanceResponse";
  value: QueryBalanceResponseAmino;
}
/** QueryBalancesResponse is the response type for the Query/Balances RPC */
export interface QueryBalanceResponseSDKType {
  coin: CoinSDKType;
  erc20_address: string;
  erc20_token_amount: string;
}
function createBaseQueryTokenPairsRequest(): QueryTokenPairsRequest {
  return {
    pagination: undefined
  };
}
export const QueryTokenPairsRequest = {
  typeUrl: "/lorenzo.token.v1.QueryTokenPairsRequest",
  encode(message: QueryTokenPairsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenPairsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenPairsRequest();
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
  fromPartial(object: Partial<QueryTokenPairsRequest>): QueryTokenPairsRequest {
    const message = createBaseQueryTokenPairsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryTokenPairsRequestSDKType): QueryTokenPairsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryTokenPairsRequest): QueryTokenPairsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryTokenPairsRequestAmino): QueryTokenPairsRequest {
    const message = createBaseQueryTokenPairsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTokenPairsRequest): QueryTokenPairsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenPairsRequestAminoMsg): QueryTokenPairsRequest {
    return QueryTokenPairsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenPairsRequestProtoMsg): QueryTokenPairsRequest {
    return QueryTokenPairsRequest.decode(message.value);
  },
  toProto(message: QueryTokenPairsRequest): Uint8Array {
    return QueryTokenPairsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenPairsRequest): QueryTokenPairsRequestProtoMsg {
    return {
      typeUrl: "/lorenzo.token.v1.QueryTokenPairsRequest",
      value: QueryTokenPairsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenPairsResponse(): QueryTokenPairsResponse {
  return {
    tokenPairs: [],
    pagination: undefined
  };
}
export const QueryTokenPairsResponse = {
  typeUrl: "/lorenzo.token.v1.QueryTokenPairsResponse",
  encode(message: QueryTokenPairsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokenPairs) {
      TokenPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenPairsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenPairsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenPairs.push(TokenPair.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryTokenPairsResponse>): QueryTokenPairsResponse {
    const message = createBaseQueryTokenPairsResponse();
    message.tokenPairs = object.tokenPairs?.map(e => TokenPair.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryTokenPairsResponseSDKType): QueryTokenPairsResponse {
    return {
      tokenPairs: Array.isArray(object?.token_pairs) ? object.token_pairs.map((e: any) => TokenPair.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryTokenPairsResponse): QueryTokenPairsResponseSDKType {
    const obj: any = {};
    if (message.tokenPairs) {
      obj.token_pairs = message.tokenPairs.map(e => e ? TokenPair.toSDK(e) : undefined);
    } else {
      obj.token_pairs = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryTokenPairsResponseAmino): QueryTokenPairsResponse {
    const message = createBaseQueryTokenPairsResponse();
    message.tokenPairs = object.token_pairs?.map(e => TokenPair.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTokenPairsResponse): QueryTokenPairsResponseAmino {
    const obj: any = {};
    if (message.tokenPairs) {
      obj.token_pairs = message.tokenPairs.map(e => e ? TokenPair.toAmino(e) : undefined);
    } else {
      obj.token_pairs = message.tokenPairs;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenPairsResponseAminoMsg): QueryTokenPairsResponse {
    return QueryTokenPairsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenPairsResponseProtoMsg): QueryTokenPairsResponse {
    return QueryTokenPairsResponse.decode(message.value);
  },
  toProto(message: QueryTokenPairsResponse): Uint8Array {
    return QueryTokenPairsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenPairsResponse): QueryTokenPairsResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.token.v1.QueryTokenPairsResponse",
      value: QueryTokenPairsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenPairRequest(): QueryTokenPairRequest {
  return {
    token: ""
  };
}
export const QueryTokenPairRequest = {
  typeUrl: "/lorenzo.token.v1.QueryTokenPairRequest",
  encode(message: QueryTokenPairRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenPairRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenPairRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTokenPairRequest>): QueryTokenPairRequest {
    const message = createBaseQueryTokenPairRequest();
    message.token = object.token ?? "";
    return message;
  },
  fromSDK(object: QueryTokenPairRequestSDKType): QueryTokenPairRequest {
    return {
      token: object?.token
    };
  },
  toSDK(message: QueryTokenPairRequest): QueryTokenPairRequestSDKType {
    const obj: any = {};
    obj.token = message.token;
    return obj;
  },
  fromAmino(object: QueryTokenPairRequestAmino): QueryTokenPairRequest {
    const message = createBaseQueryTokenPairRequest();
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    }
    return message;
  },
  toAmino(message: QueryTokenPairRequest): QueryTokenPairRequestAmino {
    const obj: any = {};
    obj.token = message.token === "" ? undefined : message.token;
    return obj;
  },
  fromAminoMsg(object: QueryTokenPairRequestAminoMsg): QueryTokenPairRequest {
    return QueryTokenPairRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenPairRequestProtoMsg): QueryTokenPairRequest {
    return QueryTokenPairRequest.decode(message.value);
  },
  toProto(message: QueryTokenPairRequest): Uint8Array {
    return QueryTokenPairRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenPairRequest): QueryTokenPairRequestProtoMsg {
    return {
      typeUrl: "/lorenzo.token.v1.QueryTokenPairRequest",
      value: QueryTokenPairRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenPairResponse(): QueryTokenPairResponse {
  return {
    tokenPair: TokenPair.fromPartial({})
  };
}
export const QueryTokenPairResponse = {
  typeUrl: "/lorenzo.token.v1.QueryTokenPairResponse",
  encode(message: QueryTokenPairResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenPair !== undefined) {
      TokenPair.encode(message.tokenPair, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenPairResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenPairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenPair = TokenPair.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTokenPairResponse>): QueryTokenPairResponse {
    const message = createBaseQueryTokenPairResponse();
    message.tokenPair = object.tokenPair !== undefined && object.tokenPair !== null ? TokenPair.fromPartial(object.tokenPair) : undefined;
    return message;
  },
  fromSDK(object: QueryTokenPairResponseSDKType): QueryTokenPairResponse {
    return {
      tokenPair: object.token_pair ? TokenPair.fromSDK(object.token_pair) : undefined
    };
  },
  toSDK(message: QueryTokenPairResponse): QueryTokenPairResponseSDKType {
    const obj: any = {};
    message.tokenPair !== undefined && (obj.token_pair = message.tokenPair ? TokenPair.toSDK(message.tokenPair) : undefined);
    return obj;
  },
  fromAmino(object: QueryTokenPairResponseAmino): QueryTokenPairResponse {
    const message = createBaseQueryTokenPairResponse();
    if (object.token_pair !== undefined && object.token_pair !== null) {
      message.tokenPair = TokenPair.fromAmino(object.token_pair);
    }
    return message;
  },
  toAmino(message: QueryTokenPairResponse): QueryTokenPairResponseAmino {
    const obj: any = {};
    obj.token_pair = message.tokenPair ? TokenPair.toAmino(message.tokenPair) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenPairResponseAminoMsg): QueryTokenPairResponse {
    return QueryTokenPairResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenPairResponseProtoMsg): QueryTokenPairResponse {
    return QueryTokenPairResponse.decode(message.value);
  },
  toProto(message: QueryTokenPairResponse): Uint8Array {
    return QueryTokenPairResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenPairResponse): QueryTokenPairResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.token.v1.QueryTokenPairResponse",
      value: QueryTokenPairResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lorenzo.token.v1.QueryParamsRequest",
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
      typeUrl: "/lorenzo.token.v1.QueryParamsRequest",
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
  typeUrl: "/lorenzo.token.v1.QueryParamsResponse",
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
      typeUrl: "/lorenzo.token.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {
    accountAddress: "",
    token: ""
  };
}
export const QueryBalanceRequest = {
  typeUrl: "/lorenzo.token.v1.QueryBalanceRequest",
  encode(message: QueryBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
          break;
        case 2:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.accountAddress = object.accountAddress ?? "";
    message.token = object.token ?? "";
    return message;
  },
  fromSDK(object: QueryBalanceRequestSDKType): QueryBalanceRequest {
    return {
      accountAddress: object?.account_address,
      token: object?.token
    };
  },
  toSDK(message: QueryBalanceRequest): QueryBalanceRequestSDKType {
    const obj: any = {};
    obj.account_address = message.accountAddress;
    obj.token = message.token;
    return obj;
  },
  fromAmino(object: QueryBalanceRequestAmino): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    if (object.account_address !== undefined && object.account_address !== null) {
      message.accountAddress = object.account_address;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    }
    return message;
  },
  toAmino(message: QueryBalanceRequest): QueryBalanceRequestAmino {
    const obj: any = {};
    obj.account_address = message.accountAddress === "" ? undefined : message.accountAddress;
    obj.token = message.token === "" ? undefined : message.token;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.decode(message.value);
  },
  toProto(message: QueryBalanceRequest): Uint8Array {
    return QueryBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg {
    return {
      typeUrl: "/lorenzo.token.v1.QueryBalanceRequest",
      value: QueryBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    coin: Coin.fromPartial({}),
    erc20Address: "",
    erc20TokenAmount: ""
  };
}
export const QueryBalanceResponse = {
  typeUrl: "/lorenzo.token.v1.QueryBalanceResponse",
  encode(message: QueryBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }
    if (message.erc20Address !== "") {
      writer.uint32(18).string(message.erc20Address);
    }
    if (message.erc20TokenAmount !== "") {
      writer.uint32(26).string(message.erc20TokenAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.erc20Address = reader.string();
          break;
        case 3:
          message.erc20TokenAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    message.erc20Address = object.erc20Address ?? "";
    message.erc20TokenAmount = object.erc20TokenAmount ?? "";
    return message;
  },
  fromSDK(object: QueryBalanceResponseSDKType): QueryBalanceResponse {
    return {
      coin: object.coin ? Coin.fromSDK(object.coin) : undefined,
      erc20Address: object?.erc20_address,
      erc20TokenAmount: object?.erc20_token_amount
    };
  },
  toSDK(message: QueryBalanceResponse): QueryBalanceResponseSDKType {
    const obj: any = {};
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toSDK(message.coin) : undefined);
    obj.erc20_address = message.erc20Address;
    obj.erc20_token_amount = message.erc20TokenAmount;
    return obj;
  },
  fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    if (object.erc20_address !== undefined && object.erc20_address !== null) {
      message.erc20Address = object.erc20_address;
    }
    if (object.erc20_token_amount !== undefined && object.erc20_token_amount !== null) {
      message.erc20TokenAmount = object.erc20_token_amount;
    }
    return message;
  },
  toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino {
    const obj: any = {};
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    obj.erc20_address = message.erc20Address === "" ? undefined : message.erc20Address;
    obj.erc20_token_amount = message.erc20TokenAmount === "" ? undefined : message.erc20TokenAmount;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.decode(message.value);
  },
  toProto(message: QueryBalanceResponse): Uint8Array {
    return QueryBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.token.v1.QueryBalanceResponse",
      value: QueryBalanceResponse.encode(message).finish()
    };
  }
};