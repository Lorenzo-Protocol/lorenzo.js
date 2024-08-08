// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: lorenzo/agent/v1/tx.proto

/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";

export interface MsgUpdateParams {
  /**
   * authority is the address of the governance account.
   * just FYI: cosmos.AddressString marks that this field should use type alias
   * for AddressString instead of string, but the functionality is not yet
   * implemented in cosmos-proto
   */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params?: Params | undefined;
}

/** MsgUpdateParamsResponse is the response to the MsgUpdateParams message. */
export interface MsgUpdateParamsResponse {
}

/** MsgUpdateParams defines a message for add a agent. */
export interface MsgAddAgent {
  /** agent name,required */
  name: string;
  /** btc_receiving_address is agent’s fund escrow address,required */
  btcReceivingAddress: string;
  /** like 0xBAb28FF7659481F1c8516f616A576339936AFB06 */
  ethAddr: string;
  /** description is a brief description of the agent, optional */
  description: string;
  /** url is the agent's link, used for detailed introduction, optional */
  url: string;
  /** sender is the address of the governance account or module admin */
  sender: string;
}

/** MsgAddAgentResponse is the response to the MsgAddAgent message. */
export interface MsgAddAgentResponse {
  /** id is the unique identifier of the agent */
  id: Long;
}

/** MsgEditAgent defines a message for editting the agent. */
export interface MsgEditAgent {
  /** id is the unique identifier of the agent */
  id: Long;
  /** agent name,required */
  name: string;
  /** description is a brief description of the agent, optional */
  description: string;
  /** url is the agent's link, used for detailed introduction, optional */
  url: string;
  /** sender is the address of the governance account or module admin */
  sender: string;
}

/** MsgEditAgentResponse is the response to the MsgEditAgent message. */
export interface MsgEditAgentResponse {
}

/** MsgRemoveAgent defines a message for removing the agent. */
export interface MsgRemoveAgent {
  /** id is the unique identifier of the agent */
  id: Long;
  /** sender is the address of the governance account or module admin */
  sender: string;
}

/** MsgRemoveAgentResponse is the response to the MsgRemoveAgent message. */
export interface MsgRemoveAgentResponse {
}

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? globalThis.String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(base?: I): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(base?: I): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

function createBaseMsgAddAgent(): MsgAddAgent {
  return { name: "", btcReceivingAddress: "", ethAddr: "", description: "", url: "", sender: "" };
}

export const MsgAddAgent = {
  encode(message: MsgAddAgent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.btcReceivingAddress !== "") {
      writer.uint32(18).string(message.btcReceivingAddress);
    }
    if (message.ethAddr !== "") {
      writer.uint32(26).string(message.ethAddr);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.url !== "") {
      writer.uint32(42).string(message.url);
    }
    if (message.sender !== "") {
      writer.uint32(50).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAgent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAgent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.btcReceivingAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ethAddr = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.url = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.sender = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddAgent {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      btcReceivingAddress: isSet(object.btcReceivingAddress) ? globalThis.String(object.btcReceivingAddress) : "",
      ethAddr: isSet(object.ethAddr) ? globalThis.String(object.ethAddr) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
    };
  },

  toJSON(message: MsgAddAgent): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.btcReceivingAddress !== "") {
      obj.btcReceivingAddress = message.btcReceivingAddress;
    }
    if (message.ethAddr !== "") {
      obj.ethAddr = message.ethAddr;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.sender !== "") {
      obj.sender = message.sender;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddAgent>, I>>(base?: I): MsgAddAgent {
    return MsgAddAgent.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddAgent>, I>>(object: I): MsgAddAgent {
    const message = createBaseMsgAddAgent();
    message.name = object.name ?? "";
    message.btcReceivingAddress = object.btcReceivingAddress ?? "";
    message.ethAddr = object.ethAddr ?? "";
    message.description = object.description ?? "";
    message.url = object.url ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgAddAgentResponse(): MsgAddAgentResponse {
  return { id: Long.UZERO };
}

export const MsgAddAgentResponse = {
  encode(message: MsgAddAgentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.equals(Long.UZERO)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAgentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAgentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddAgentResponse {
    return { id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO };
  },

  toJSON(message: MsgAddAgentResponse): unknown {
    const obj: any = {};
    if (!message.id.equals(Long.UZERO)) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddAgentResponse>, I>>(base?: I): MsgAddAgentResponse {
    return MsgAddAgentResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddAgentResponse>, I>>(object: I): MsgAddAgentResponse {
    const message = createBaseMsgAddAgentResponse();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseMsgEditAgent(): MsgEditAgent {
  return { id: Long.UZERO, name: "", description: "", url: "", sender: "" };
}

export const MsgEditAgent = {
  encode(message: MsgEditAgent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.equals(Long.UZERO)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.url !== "") {
      writer.uint32(34).string(message.url);
    }
    if (message.sender !== "") {
      writer.uint32(42).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditAgent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditAgent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.url = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sender = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgEditAgent {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
    };
  },

  toJSON(message: MsgEditAgent): unknown {
    const obj: any = {};
    if (!message.id.equals(Long.UZERO)) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.sender !== "") {
      obj.sender = message.sender;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgEditAgent>, I>>(base?: I): MsgEditAgent {
    return MsgEditAgent.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgEditAgent>, I>>(object: I): MsgEditAgent {
    const message = createBaseMsgEditAgent();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.url = object.url ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgEditAgentResponse(): MsgEditAgentResponse {
  return {};
}

export const MsgEditAgentResponse = {
  encode(_: MsgEditAgentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditAgentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditAgentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgEditAgentResponse {
    return {};
  },

  toJSON(_: MsgEditAgentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgEditAgentResponse>, I>>(base?: I): MsgEditAgentResponse {
    return MsgEditAgentResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgEditAgentResponse>, I>>(_: I): MsgEditAgentResponse {
    const message = createBaseMsgEditAgentResponse();
    return message;
  },
};

function createBaseMsgRemoveAgent(): MsgRemoveAgent {
  return { id: Long.UZERO, sender: "" };
}

export const MsgRemoveAgent = {
  encode(message: MsgRemoveAgent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.equals(Long.UZERO)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveAgent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveAgent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sender = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveAgent {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
    };
  },

  toJSON(message: MsgRemoveAgent): unknown {
    const obj: any = {};
    if (!message.id.equals(Long.UZERO)) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.sender !== "") {
      obj.sender = message.sender;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRemoveAgent>, I>>(base?: I): MsgRemoveAgent {
    return MsgRemoveAgent.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveAgent>, I>>(object: I): MsgRemoveAgent {
    const message = createBaseMsgRemoveAgent();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgRemoveAgentResponse(): MsgRemoveAgentResponse {
  return {};
}

export const MsgRemoveAgentResponse = {
  encode(_: MsgRemoveAgentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveAgentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveAgentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgRemoveAgentResponse {
    return {};
  },

  toJSON(_: MsgRemoveAgentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRemoveAgentResponse>, I>>(base?: I): MsgRemoveAgentResponse {
    return MsgRemoveAgentResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveAgentResponse>, I>>(_: I): MsgRemoveAgentResponse {
    const message = createBaseMsgRemoveAgentResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** UpdateParams defines a method for updating the agent parameters. */
  UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
  /** AddAgent defines a method for adding a agent. */
  AddAgent(request: DeepPartial<MsgAddAgent>, metadata?: grpc.Metadata): Promise<MsgAddAgentResponse>;
  /** AddAgent defines a method for editting a agent. */
  EditAgent(request: DeepPartial<MsgEditAgent>, metadata?: grpc.Metadata): Promise<MsgEditAgentResponse>;
  /** RemoveAgent defines a method for removing a agent. */
  RemoveAgent(request: DeepPartial<MsgRemoveAgent>, metadata?: grpc.Metadata): Promise<MsgRemoveAgentResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.AddAgent = this.AddAgent.bind(this);
    this.EditAgent = this.EditAgent.bind(this);
    this.RemoveAgent = this.RemoveAgent.bind(this);
  }

  UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse> {
    return this.rpc.unary(MsgUpdateParamsDesc, MsgUpdateParams.fromPartial(request), metadata);
  }

  AddAgent(request: DeepPartial<MsgAddAgent>, metadata?: grpc.Metadata): Promise<MsgAddAgentResponse> {
    return this.rpc.unary(MsgAddAgentDesc, MsgAddAgent.fromPartial(request), metadata);
  }

  EditAgent(request: DeepPartial<MsgEditAgent>, metadata?: grpc.Metadata): Promise<MsgEditAgentResponse> {
    return this.rpc.unary(MsgEditAgentDesc, MsgEditAgent.fromPartial(request), metadata);
  }

  RemoveAgent(request: DeepPartial<MsgRemoveAgent>, metadata?: grpc.Metadata): Promise<MsgRemoveAgentResponse> {
    return this.rpc.unary(MsgRemoveAgentDesc, MsgRemoveAgent.fromPartial(request), metadata);
  }
}

export const MsgDesc = { serviceName: "lorenzo.agent.v1.Msg" };

export const MsgUpdateParamsDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateParams",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateParams.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgUpdateParamsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgAddAgentDesc: UnaryMethodDefinitionish = {
  methodName: "AddAgent",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgAddAgent.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgAddAgentResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgEditAgentDesc: UnaryMethodDefinitionish = {
  methodName: "EditAgent",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgEditAgent.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgEditAgentResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgRemoveAgentDesc: UnaryMethodDefinitionish = {
  methodName: "RemoveAgent",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgRemoveAgent.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgRemoveAgentResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
    upStreamRetryCodes?: number[];
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
      upStreamRetryCodes?: number[];
    },
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata = metadata && this.options.metadata
      ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
      : metadata ?? this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata ?? {},
        ...(this.options.transport !== undefined ? { transport: this.options.transport } : {}),
        debug: this.options.debug ?? false,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message!.toObject());
          } else {
            const err = new GrpcWebError(response.statusMessage, response.status, response.trailers);
            reject(err);
          }
        },
      });
    });
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export class GrpcWebError extends globalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
