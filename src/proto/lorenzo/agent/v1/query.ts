import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Agent, AgentAmino, AgentSDKType } from "./agent";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/lorenzo.agent.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/lorenzo.agent.v1.QueryParamsRequest";
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
  typeUrl: "/lorenzo.agent.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/lorenzo.agent.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryAgentsRequest is the request type for the Query/Agents RPC method. */
export interface QueryAgentsRequest {
  pagination?: PageRequest;
}
export interface QueryAgentsRequestProtoMsg {
  typeUrl: "/lorenzo.agent.v1.QueryAgentsRequest";
  value: Uint8Array;
}
/** QueryAgentsRequest is the request type for the Query/Agents RPC method. */
export interface QueryAgentsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAgentsRequestAminoMsg {
  type: "/lorenzo.agent.v1.QueryAgentsRequest";
  value: QueryAgentsRequestAmino;
}
/** QueryAgentsRequest is the request type for the Query/Agents RPC method. */
export interface QueryAgentsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryAgentsResponse is the response type for the Query/Agents RPC method. */
export interface QueryAgentsResponse {
  /** Agent Contains the details of the agent. */
  agents: Agent[];
  pagination?: PageResponse;
}
export interface QueryAgentsResponseProtoMsg {
  typeUrl: "/lorenzo.agent.v1.QueryAgentsResponse";
  value: Uint8Array;
}
/** QueryAgentsResponse is the response type for the Query/Agents RPC method. */
export interface QueryAgentsResponseAmino {
  /** Agent Contains the details of the agent. */
  agents?: AgentAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAgentsResponseAminoMsg {
  type: "/lorenzo.agent.v1.QueryAgentsResponse";
  value: QueryAgentsResponseAmino;
}
/** QueryAgentsResponse is the response type for the Query/Agents RPC method. */
export interface QueryAgentsResponseSDKType {
  agents: AgentSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryAgentRequest is the request type for the Query/Agent RPC method. */
export interface QueryAgentRequest {
  /** id is the unique identifier of the agent */
  id: bigint;
}
export interface QueryAgentRequestProtoMsg {
  typeUrl: "/lorenzo.agent.v1.QueryAgentRequest";
  value: Uint8Array;
}
/** QueryAgentRequest is the request type for the Query/Agent RPC method. */
export interface QueryAgentRequestAmino {
  /** id is the unique identifier of the agent */
  id?: string;
}
export interface QueryAgentRequestAminoMsg {
  type: "/lorenzo.agent.v1.QueryAgentRequest";
  value: QueryAgentRequestAmino;
}
/** QueryAgentRequest is the request type for the Query/Agent RPC method. */
export interface QueryAgentRequestSDKType {
  id: bigint;
}
/** QueryAgentResponse is the response type for the Query/Agent RPC method. */
export interface QueryAgentResponse {
  /** Agent Contains the details of the agent. */
  agent: Agent;
}
export interface QueryAgentResponseProtoMsg {
  typeUrl: "/lorenzo.agent.v1.QueryAgentResponse";
  value: Uint8Array;
}
/** QueryAgentResponse is the response type for the Query/Agent RPC method. */
export interface QueryAgentResponseAmino {
  /** Agent Contains the details of the agent. */
  agent?: AgentAmino;
}
export interface QueryAgentResponseAminoMsg {
  type: "/lorenzo.agent.v1.QueryAgentResponse";
  value: QueryAgentResponseAmino;
}
/** QueryAgentResponse is the response type for the Query/Agent RPC method. */
export interface QueryAgentResponseSDKType {
  agent: AgentSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lorenzo.agent.v1.QueryParamsRequest",
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
      typeUrl: "/lorenzo.agent.v1.QueryParamsRequest",
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
  typeUrl: "/lorenzo.agent.v1.QueryParamsResponse",
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
      typeUrl: "/lorenzo.agent.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAgentsRequest(): QueryAgentsRequest {
  return {
    pagination: undefined
  };
}
export const QueryAgentsRequest = {
  typeUrl: "/lorenzo.agent.v1.QueryAgentsRequest",
  encode(message: QueryAgentsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAgentsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAgentsRequest();
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
  fromPartial(object: Partial<QueryAgentsRequest>): QueryAgentsRequest {
    const message = createBaseQueryAgentsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryAgentsRequestSDKType): QueryAgentsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAgentsRequest): QueryAgentsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAgentsRequestAmino): QueryAgentsRequest {
    const message = createBaseQueryAgentsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAgentsRequest): QueryAgentsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAgentsRequestAminoMsg): QueryAgentsRequest {
    return QueryAgentsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAgentsRequestProtoMsg): QueryAgentsRequest {
    return QueryAgentsRequest.decode(message.value);
  },
  toProto(message: QueryAgentsRequest): Uint8Array {
    return QueryAgentsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAgentsRequest): QueryAgentsRequestProtoMsg {
    return {
      typeUrl: "/lorenzo.agent.v1.QueryAgentsRequest",
      value: QueryAgentsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAgentsResponse(): QueryAgentsResponse {
  return {
    agents: [],
    pagination: undefined
  };
}
export const QueryAgentsResponse = {
  typeUrl: "/lorenzo.agent.v1.QueryAgentsResponse",
  encode(message: QueryAgentsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.agents) {
      Agent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAgentsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAgentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agents.push(Agent.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAgentsResponse>): QueryAgentsResponse {
    const message = createBaseQueryAgentsResponse();
    message.agents = object.agents?.map(e => Agent.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryAgentsResponseSDKType): QueryAgentsResponse {
    return {
      agents: Array.isArray(object?.agents) ? object.agents.map((e: any) => Agent.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAgentsResponse): QueryAgentsResponseSDKType {
    const obj: any = {};
    if (message.agents) {
      obj.agents = message.agents.map(e => e ? Agent.toSDK(e) : undefined);
    } else {
      obj.agents = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAgentsResponseAmino): QueryAgentsResponse {
    const message = createBaseQueryAgentsResponse();
    message.agents = object.agents?.map(e => Agent.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAgentsResponse): QueryAgentsResponseAmino {
    const obj: any = {};
    if (message.agents) {
      obj.agents = message.agents.map(e => e ? Agent.toAmino(e) : undefined);
    } else {
      obj.agents = message.agents;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAgentsResponseAminoMsg): QueryAgentsResponse {
    return QueryAgentsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAgentsResponseProtoMsg): QueryAgentsResponse {
    return QueryAgentsResponse.decode(message.value);
  },
  toProto(message: QueryAgentsResponse): Uint8Array {
    return QueryAgentsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAgentsResponse): QueryAgentsResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.agent.v1.QueryAgentsResponse",
      value: QueryAgentsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAgentRequest(): QueryAgentRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryAgentRequest = {
  typeUrl: "/lorenzo.agent.v1.QueryAgentRequest",
  encode(message: QueryAgentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAgentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAgentRequest();
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
  fromPartial(object: Partial<QueryAgentRequest>): QueryAgentRequest {
    const message = createBaseQueryAgentRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryAgentRequestSDKType): QueryAgentRequest {
    return {
      id: object?.id
    };
  },
  toSDK(message: QueryAgentRequest): QueryAgentRequestSDKType {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAmino(object: QueryAgentRequestAmino): QueryAgentRequest {
    const message = createBaseQueryAgentRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryAgentRequest): QueryAgentRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAgentRequestAminoMsg): QueryAgentRequest {
    return QueryAgentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAgentRequestProtoMsg): QueryAgentRequest {
    return QueryAgentRequest.decode(message.value);
  },
  toProto(message: QueryAgentRequest): Uint8Array {
    return QueryAgentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAgentRequest): QueryAgentRequestProtoMsg {
    return {
      typeUrl: "/lorenzo.agent.v1.QueryAgentRequest",
      value: QueryAgentRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAgentResponse(): QueryAgentResponse {
  return {
    agent: Agent.fromPartial({})
  };
}
export const QueryAgentResponse = {
  typeUrl: "/lorenzo.agent.v1.QueryAgentResponse",
  encode(message: QueryAgentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.agent !== undefined) {
      Agent.encode(message.agent, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAgentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAgentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agent = Agent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAgentResponse>): QueryAgentResponse {
    const message = createBaseQueryAgentResponse();
    message.agent = object.agent !== undefined && object.agent !== null ? Agent.fromPartial(object.agent) : undefined;
    return message;
  },
  fromSDK(object: QueryAgentResponseSDKType): QueryAgentResponse {
    return {
      agent: object.agent ? Agent.fromSDK(object.agent) : undefined
    };
  },
  toSDK(message: QueryAgentResponse): QueryAgentResponseSDKType {
    const obj: any = {};
    message.agent !== undefined && (obj.agent = message.agent ? Agent.toSDK(message.agent) : undefined);
    return obj;
  },
  fromAmino(object: QueryAgentResponseAmino): QueryAgentResponse {
    const message = createBaseQueryAgentResponse();
    if (object.agent !== undefined && object.agent !== null) {
      message.agent = Agent.fromAmino(object.agent);
    }
    return message;
  },
  toAmino(message: QueryAgentResponse): QueryAgentResponseAmino {
    const obj: any = {};
    obj.agent = message.agent ? Agent.toAmino(message.agent) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAgentResponseAminoMsg): QueryAgentResponse {
    return QueryAgentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAgentResponseProtoMsg): QueryAgentResponse {
    return QueryAgentResponse.decode(message.value);
  },
  toProto(message: QueryAgentResponse): Uint8Array {
    return QueryAgentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAgentResponse): QueryAgentResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.agent.v1.QueryAgentResponse",
      value: QueryAgentResponse.encode(message).finish()
    };
  }
};