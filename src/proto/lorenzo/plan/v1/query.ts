//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Plan, PlanAmino, PlanSDKType } from "./plan";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/lorenzo.plan.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/lorenzo.plan.v1.QueryParamsRequest";
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
  typeUrl: "/lorenzo.plan.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/lorenzo.plan.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** PlansRequest is the request type for the Query.Plans RPC method. */
export interface QueryPlansRequest {
  pagination?: PageRequest;
}
export interface QueryPlansRequestProtoMsg {
  typeUrl: "/lorenzo.plan.v1.QueryPlansRequest";
  value: Uint8Array;
}
/** PlansRequest is the request type for the Query.Plans RPC method. */
export interface QueryPlansRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryPlansRequestAminoMsg {
  type: "/lorenzo.plan.v1.QueryPlansRequest";
  value: QueryPlansRequestAmino;
}
/** PlansRequest is the request type for the Query.Plans RPC method. */
export interface QueryPlansRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** PlansResponse is the response type for the Query.Plans RPC method. */
export interface QueryPlansResponse {
  plans: Plan[];
  pagination?: PageResponse;
}
export interface QueryPlansResponseProtoMsg {
  typeUrl: "/lorenzo.plan.v1.QueryPlansResponse";
  value: Uint8Array;
}
/** PlansResponse is the response type for the Query.Plans RPC method. */
export interface QueryPlansResponseAmino {
  plans?: PlanAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryPlansResponseAminoMsg {
  type: "/lorenzo.plan.v1.QueryPlansResponse";
  value: QueryPlansResponseAmino;
}
/** PlansResponse is the response type for the Query.Plans RPC method. */
export interface QueryPlansResponseSDKType {
  plans: PlanSDKType[];
  pagination?: PageResponseSDKType;
}
/** PlanRequest is the request type for the Query.Plan RPC method. */
export interface QueryPlanRequest {
  /** id is the unique identifier of the plan */
  id: bigint;
}
export interface QueryPlanRequestProtoMsg {
  typeUrl: "/lorenzo.plan.v1.QueryPlanRequest";
  value: Uint8Array;
}
/** PlanRequest is the request type for the Query.Plan RPC method. */
export interface QueryPlanRequestAmino {
  /** id is the unique identifier of the plan */
  id?: string;
}
export interface QueryPlanRequestAminoMsg {
  type: "/lorenzo.plan.v1.QueryPlanRequest";
  value: QueryPlanRequestAmino;
}
/** PlanRequest is the request type for the Query.Plan RPC method. */
export interface QueryPlanRequestSDKType {
  id: bigint;
}
/** PlanResponse is the response type for the Query.Plan RPC method. */
export interface QueryPlanResponse {
  plan: Plan;
}
export interface QueryPlanResponseProtoMsg {
  typeUrl: "/lorenzo.plan.v1.QueryPlanResponse";
  value: Uint8Array;
}
/** PlanResponse is the response type for the Query.Plan RPC method. */
export interface QueryPlanResponseAmino {
  plan?: PlanAmino;
}
export interface QueryPlanResponseAminoMsg {
  type: "/lorenzo.plan.v1.QueryPlanResponse";
  value: QueryPlanResponseAmino;
}
/** PlanResponse is the response type for the Query.Plan RPC method. */
export interface QueryPlanResponseSDKType {
  plan: PlanSDKType;
}
/**
 * ClaimLeafNodeRequest is the request type for the Query.ClaimLeafNode RPC
 * method.
 */
export interface QueryClaimLeafNodeRequest {
  /** id is the unique identifier of the plan */
  id: bigint;
  /** round_id is the unique identifier of the round */
  roundId: string;
  /** leaf_node is the leaf node to claim */
  leafNode: string;
}
export interface QueryClaimLeafNodeRequestProtoMsg {
  typeUrl: "/lorenzo.plan.v1.QueryClaimLeafNodeRequest";
  value: Uint8Array;
}
/**
 * ClaimLeafNodeRequest is the request type for the Query.ClaimLeafNode RPC
 * method.
 */
export interface QueryClaimLeafNodeRequestAmino {
  /** id is the unique identifier of the plan */
  id?: string;
  /** round_id is the unique identifier of the round */
  round_id?: string;
  /** leaf_node is the leaf node to claim */
  leaf_node?: string;
}
export interface QueryClaimLeafNodeRequestAminoMsg {
  type: "/lorenzo.plan.v1.QueryClaimLeafNodeRequest";
  value: QueryClaimLeafNodeRequestAmino;
}
/**
 * ClaimLeafNodeRequest is the request type for the Query.ClaimLeafNode RPC
 * method.
 */
export interface QueryClaimLeafNodeRequestSDKType {
  id: bigint;
  round_id: string;
  leaf_node: string;
}
/**
 * ClaimLeafNodeResponse is the response type for the Query.ClaimLeafNode RPC
 * method.
 */
export interface QueryClaimLeafNodeResponse {
  success: boolean;
}
export interface QueryClaimLeafNodeResponseProtoMsg {
  typeUrl: "/lorenzo.plan.v1.QueryClaimLeafNodeResponse";
  value: Uint8Array;
}
/**
 * ClaimLeafNodeResponse is the response type for the Query.ClaimLeafNode RPC
 * method.
 */
export interface QueryClaimLeafNodeResponseAmino {
  success?: boolean;
}
export interface QueryClaimLeafNodeResponseAminoMsg {
  type: "/lorenzo.plan.v1.QueryClaimLeafNodeResponse";
  value: QueryClaimLeafNodeResponseAmino;
}
/**
 * ClaimLeafNodeResponse is the response type for the Query.ClaimLeafNode RPC
 * method.
 */
export interface QueryClaimLeafNodeResponseSDKType {
  success: boolean;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lorenzo.plan.v1.QueryParamsRequest",
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
      typeUrl: "/lorenzo.plan.v1.QueryParamsRequest",
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
  typeUrl: "/lorenzo.plan.v1.QueryParamsResponse",
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
      typeUrl: "/lorenzo.plan.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryPlansRequest(): QueryPlansRequest {
  return {
    pagination: undefined
  };
}
export const QueryPlansRequest = {
  typeUrl: "/lorenzo.plan.v1.QueryPlansRequest",
  is(o: any): o is QueryPlansRequest {
    return o && o.$typeUrl === QueryPlansRequest.typeUrl;
  },
  isSDK(o: any): o is QueryPlansRequestSDKType {
    return o && o.$typeUrl === QueryPlansRequest.typeUrl;
  },
  isAmino(o: any): o is QueryPlansRequestAmino {
    return o && o.$typeUrl === QueryPlansRequest.typeUrl;
  },
  encode(message: QueryPlansRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPlansRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPlansRequest();
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
  fromPartial(object: Partial<QueryPlansRequest>): QueryPlansRequest {
    const message = createBaseQueryPlansRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryPlansRequestSDKType): QueryPlansRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryPlansRequest): QueryPlansRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryPlansRequestAmino): QueryPlansRequest {
    const message = createBaseQueryPlansRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPlansRequest): QueryPlansRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPlansRequestAminoMsg): QueryPlansRequest {
    return QueryPlansRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPlansRequestProtoMsg): QueryPlansRequest {
    return QueryPlansRequest.decode(message.value);
  },
  toProto(message: QueryPlansRequest): Uint8Array {
    return QueryPlansRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPlansRequest): QueryPlansRequestProtoMsg {
    return {
      typeUrl: "/lorenzo.plan.v1.QueryPlansRequest",
      value: QueryPlansRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPlansRequest.typeUrl, QueryPlansRequest);
function createBaseQueryPlansResponse(): QueryPlansResponse {
  return {
    plans: [],
    pagination: undefined
  };
}
export const QueryPlansResponse = {
  typeUrl: "/lorenzo.plan.v1.QueryPlansResponse",
  is(o: any): o is QueryPlansResponse {
    return o && (o.$typeUrl === QueryPlansResponse.typeUrl || Array.isArray(o.plans) && (!o.plans.length || Plan.is(o.plans[0])));
  },
  isSDK(o: any): o is QueryPlansResponseSDKType {
    return o && (o.$typeUrl === QueryPlansResponse.typeUrl || Array.isArray(o.plans) && (!o.plans.length || Plan.isSDK(o.plans[0])));
  },
  isAmino(o: any): o is QueryPlansResponseAmino {
    return o && (o.$typeUrl === QueryPlansResponse.typeUrl || Array.isArray(o.plans) && (!o.plans.length || Plan.isAmino(o.plans[0])));
  },
  encode(message: QueryPlansResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.plans) {
      Plan.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPlansResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPlansResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plans.push(Plan.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryPlansResponse>): QueryPlansResponse {
    const message = createBaseQueryPlansResponse();
    message.plans = object.plans?.map(e => Plan.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryPlansResponseSDKType): QueryPlansResponse {
    return {
      plans: Array.isArray(object?.plans) ? object.plans.map((e: any) => Plan.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryPlansResponse): QueryPlansResponseSDKType {
    const obj: any = {};
    if (message.plans) {
      obj.plans = message.plans.map(e => e ? Plan.toSDK(e) : undefined);
    } else {
      obj.plans = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryPlansResponseAmino): QueryPlansResponse {
    const message = createBaseQueryPlansResponse();
    message.plans = object.plans?.map(e => Plan.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPlansResponse): QueryPlansResponseAmino {
    const obj: any = {};
    if (message.plans) {
      obj.plans = message.plans.map(e => e ? Plan.toAmino(e) : undefined);
    } else {
      obj.plans = message.plans;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPlansResponseAminoMsg): QueryPlansResponse {
    return QueryPlansResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPlansResponseProtoMsg): QueryPlansResponse {
    return QueryPlansResponse.decode(message.value);
  },
  toProto(message: QueryPlansResponse): Uint8Array {
    return QueryPlansResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPlansResponse): QueryPlansResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.plan.v1.QueryPlansResponse",
      value: QueryPlansResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPlansResponse.typeUrl, QueryPlansResponse);
function createBaseQueryPlanRequest(): QueryPlanRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryPlanRequest = {
  typeUrl: "/lorenzo.plan.v1.QueryPlanRequest",
  is(o: any): o is QueryPlanRequest {
    return o && (o.$typeUrl === QueryPlanRequest.typeUrl || typeof o.id === "bigint");
  },
  isSDK(o: any): o is QueryPlanRequestSDKType {
    return o && (o.$typeUrl === QueryPlanRequest.typeUrl || typeof o.id === "bigint");
  },
  isAmino(o: any): o is QueryPlanRequestAmino {
    return o && (o.$typeUrl === QueryPlanRequest.typeUrl || typeof o.id === "bigint");
  },
  encode(message: QueryPlanRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPlanRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPlanRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPlanRequest>): QueryPlanRequest {
    const message = createBaseQueryPlanRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryPlanRequestSDKType): QueryPlanRequest {
    return {
      id: object?.id
    };
  },
  toSDK(message: QueryPlanRequest): QueryPlanRequestSDKType {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAmino(object: QueryPlanRequestAmino): QueryPlanRequest {
    const message = createBaseQueryPlanRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryPlanRequest): QueryPlanRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPlanRequestAminoMsg): QueryPlanRequest {
    return QueryPlanRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPlanRequestProtoMsg): QueryPlanRequest {
    return QueryPlanRequest.decode(message.value);
  },
  toProto(message: QueryPlanRequest): Uint8Array {
    return QueryPlanRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPlanRequest): QueryPlanRequestProtoMsg {
    return {
      typeUrl: "/lorenzo.plan.v1.QueryPlanRequest",
      value: QueryPlanRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPlanRequest.typeUrl, QueryPlanRequest);
function createBaseQueryPlanResponse(): QueryPlanResponse {
  return {
    plan: Plan.fromPartial({})
  };
}
export const QueryPlanResponse = {
  typeUrl: "/lorenzo.plan.v1.QueryPlanResponse",
  is(o: any): o is QueryPlanResponse {
    return o && (o.$typeUrl === QueryPlanResponse.typeUrl || Plan.is(o.plan));
  },
  isSDK(o: any): o is QueryPlanResponseSDKType {
    return o && (o.$typeUrl === QueryPlanResponse.typeUrl || Plan.isSDK(o.plan));
  },
  isAmino(o: any): o is QueryPlanResponseAmino {
    return o && (o.$typeUrl === QueryPlanResponse.typeUrl || Plan.isAmino(o.plan));
  },
  encode(message: QueryPlanResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPlanResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPlanResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plan = Plan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPlanResponse>): QueryPlanResponse {
    const message = createBaseQueryPlanResponse();
    message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
    return message;
  },
  fromSDK(object: QueryPlanResponseSDKType): QueryPlanResponse {
    return {
      plan: object.plan ? Plan.fromSDK(object.plan) : undefined
    };
  },
  toSDK(message: QueryPlanResponse): QueryPlanResponseSDKType {
    const obj: any = {};
    message.plan !== undefined && (obj.plan = message.plan ? Plan.toSDK(message.plan) : undefined);
    return obj;
  },
  fromAmino(object: QueryPlanResponseAmino): QueryPlanResponse {
    const message = createBaseQueryPlanResponse();
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromAmino(object.plan);
    }
    return message;
  },
  toAmino(message: QueryPlanResponse): QueryPlanResponseAmino {
    const obj: any = {};
    obj.plan = message.plan ? Plan.toAmino(message.plan) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPlanResponseAminoMsg): QueryPlanResponse {
    return QueryPlanResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPlanResponseProtoMsg): QueryPlanResponse {
    return QueryPlanResponse.decode(message.value);
  },
  toProto(message: QueryPlanResponse): Uint8Array {
    return QueryPlanResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPlanResponse): QueryPlanResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.plan.v1.QueryPlanResponse",
      value: QueryPlanResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPlanResponse.typeUrl, QueryPlanResponse);
function createBaseQueryClaimLeafNodeRequest(): QueryClaimLeafNodeRequest {
  return {
    id: BigInt(0),
    roundId: "",
    leafNode: ""
  };
}
export const QueryClaimLeafNodeRequest = {
  typeUrl: "/lorenzo.plan.v1.QueryClaimLeafNodeRequest",
  is(o: any): o is QueryClaimLeafNodeRequest {
    return o && (o.$typeUrl === QueryClaimLeafNodeRequest.typeUrl || typeof o.id === "bigint" && typeof o.roundId === "string" && typeof o.leafNode === "string");
  },
  isSDK(o: any): o is QueryClaimLeafNodeRequestSDKType {
    return o && (o.$typeUrl === QueryClaimLeafNodeRequest.typeUrl || typeof o.id === "bigint" && typeof o.round_id === "string" && typeof o.leaf_node === "string");
  },
  isAmino(o: any): o is QueryClaimLeafNodeRequestAmino {
    return o && (o.$typeUrl === QueryClaimLeafNodeRequest.typeUrl || typeof o.id === "bigint" && typeof o.round_id === "string" && typeof o.leaf_node === "string");
  },
  encode(message: QueryClaimLeafNodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.roundId !== "") {
      writer.uint32(18).string(message.roundId);
    }
    if (message.leafNode !== "") {
      writer.uint32(26).string(message.leafNode);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimLeafNodeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimLeafNodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.roundId = reader.string();
          break;
        case 3:
          message.leafNode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryClaimLeafNodeRequest>): QueryClaimLeafNodeRequest {
    const message = createBaseQueryClaimLeafNodeRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.roundId = object.roundId ?? "";
    message.leafNode = object.leafNode ?? "";
    return message;
  },
  fromSDK(object: QueryClaimLeafNodeRequestSDKType): QueryClaimLeafNodeRequest {
    return {
      id: object?.id,
      roundId: object?.round_id,
      leafNode: object?.leaf_node
    };
  },
  toSDK(message: QueryClaimLeafNodeRequest): QueryClaimLeafNodeRequestSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.round_id = message.roundId;
    obj.leaf_node = message.leafNode;
    return obj;
  },
  fromAmino(object: QueryClaimLeafNodeRequestAmino): QueryClaimLeafNodeRequest {
    const message = createBaseQueryClaimLeafNodeRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.round_id !== undefined && object.round_id !== null) {
      message.roundId = object.round_id;
    }
    if (object.leaf_node !== undefined && object.leaf_node !== null) {
      message.leafNode = object.leaf_node;
    }
    return message;
  },
  toAmino(message: QueryClaimLeafNodeRequest): QueryClaimLeafNodeRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.round_id = message.roundId === "" ? undefined : message.roundId;
    obj.leaf_node = message.leafNode === "" ? undefined : message.leafNode;
    return obj;
  },
  fromAminoMsg(object: QueryClaimLeafNodeRequestAminoMsg): QueryClaimLeafNodeRequest {
    return QueryClaimLeafNodeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimLeafNodeRequestProtoMsg): QueryClaimLeafNodeRequest {
    return QueryClaimLeafNodeRequest.decode(message.value);
  },
  toProto(message: QueryClaimLeafNodeRequest): Uint8Array {
    return QueryClaimLeafNodeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimLeafNodeRequest): QueryClaimLeafNodeRequestProtoMsg {
    return {
      typeUrl: "/lorenzo.plan.v1.QueryClaimLeafNodeRequest",
      value: QueryClaimLeafNodeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryClaimLeafNodeRequest.typeUrl, QueryClaimLeafNodeRequest);
function createBaseQueryClaimLeafNodeResponse(): QueryClaimLeafNodeResponse {
  return {
    success: false
  };
}
export const QueryClaimLeafNodeResponse = {
  typeUrl: "/lorenzo.plan.v1.QueryClaimLeafNodeResponse",
  is(o: any): o is QueryClaimLeafNodeResponse {
    return o && (o.$typeUrl === QueryClaimLeafNodeResponse.typeUrl || typeof o.success === "boolean");
  },
  isSDK(o: any): o is QueryClaimLeafNodeResponseSDKType {
    return o && (o.$typeUrl === QueryClaimLeafNodeResponse.typeUrl || typeof o.success === "boolean");
  },
  isAmino(o: any): o is QueryClaimLeafNodeResponseAmino {
    return o && (o.$typeUrl === QueryClaimLeafNodeResponse.typeUrl || typeof o.success === "boolean");
  },
  encode(message: QueryClaimLeafNodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimLeafNodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimLeafNodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryClaimLeafNodeResponse>): QueryClaimLeafNodeResponse {
    const message = createBaseQueryClaimLeafNodeResponse();
    message.success = object.success ?? false;
    return message;
  },
  fromSDK(object: QueryClaimLeafNodeResponseSDKType): QueryClaimLeafNodeResponse {
    return {
      success: object?.success
    };
  },
  toSDK(message: QueryClaimLeafNodeResponse): QueryClaimLeafNodeResponseSDKType {
    const obj: any = {};
    obj.success = message.success;
    return obj;
  },
  fromAmino(object: QueryClaimLeafNodeResponseAmino): QueryClaimLeafNodeResponse {
    const message = createBaseQueryClaimLeafNodeResponse();
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    }
    return message;
  },
  toAmino(message: QueryClaimLeafNodeResponse): QueryClaimLeafNodeResponseAmino {
    const obj: any = {};
    obj.success = message.success === false ? undefined : message.success;
    return obj;
  },
  fromAminoMsg(object: QueryClaimLeafNodeResponseAminoMsg): QueryClaimLeafNodeResponse {
    return QueryClaimLeafNodeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimLeafNodeResponseProtoMsg): QueryClaimLeafNodeResponse {
    return QueryClaimLeafNodeResponse.decode(message.value);
  },
  toProto(message: QueryClaimLeafNodeResponse): Uint8Array {
    return QueryClaimLeafNodeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimLeafNodeResponse): QueryClaimLeafNodeResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.plan.v1.QueryClaimLeafNodeResponse",
      value: QueryClaimLeafNodeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryClaimLeafNodeResponse.typeUrl, QueryClaimLeafNodeResponse);