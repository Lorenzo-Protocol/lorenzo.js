//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export interface MsgUpdateParams {
  /**
   * authority is the address of the governance account.
   * just FYI: cosmos.AddressString marks that this field should use type alias
   * for AddressString instead of string, but the functionality is not yet
   * implemented in cosmos-proto
   */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/lorenzo.agent.v1.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address of the governance account.
   * just FYI: cosmos.AddressString marks that this field should use type alias
   * for AddressString instead of string, but the functionality is not yet
   * implemented in cosmos-proto
   */
  authority?: string;
  /** NOTE: All parameters must be supplied. */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "lorenzo/agent/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/** MsgUpdateParamsResponse is the response to the MsgUpdateParams message. */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/lorenzo.agent.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgUpdateParamsResponse is the response to the MsgUpdateParams message. */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/lorenzo.agent.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse is the response to the MsgUpdateParams message. */
export interface MsgUpdateParamsResponseSDKType {}
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
export interface MsgAddAgentProtoMsg {
  typeUrl: "/lorenzo.agent.v1.MsgAddAgent";
  value: Uint8Array;
}
/** MsgUpdateParams defines a message for add a agent. */
export interface MsgAddAgentAmino {
  /** agent name,required */
  name?: string;
  /** btc_receiving_address is agent’s fund escrow address,required */
  btc_receiving_address?: string;
  /** like 0xBAb28FF7659481F1c8516f616A576339936AFB06 */
  eth_addr?: string;
  /** description is a brief description of the agent, optional */
  description?: string;
  /** url is the agent's link, used for detailed introduction, optional */
  url?: string;
  /** sender is the address of the governance account or module admin */
  sender?: string;
}
export interface MsgAddAgentAminoMsg {
  type: "lorenzo/agent/MsgAddAgent";
  value: MsgAddAgentAmino;
}
/** MsgUpdateParams defines a message for add a agent. */
export interface MsgAddAgentSDKType {
  name: string;
  btc_receiving_address: string;
  eth_addr: string;
  description: string;
  url: string;
  sender: string;
}
/** MsgAddAgentResponse is the response to the MsgAddAgent message. */
export interface MsgAddAgentResponse {
  /** id is the unique identifier of the agent */
  id: bigint;
}
export interface MsgAddAgentResponseProtoMsg {
  typeUrl: "/lorenzo.agent.v1.MsgAddAgentResponse";
  value: Uint8Array;
}
/** MsgAddAgentResponse is the response to the MsgAddAgent message. */
export interface MsgAddAgentResponseAmino {
  /** id is the unique identifier of the agent */
  id?: string;
}
export interface MsgAddAgentResponseAminoMsg {
  type: "/lorenzo.agent.v1.MsgAddAgentResponse";
  value: MsgAddAgentResponseAmino;
}
/** MsgAddAgentResponse is the response to the MsgAddAgent message. */
export interface MsgAddAgentResponseSDKType {
  id: bigint;
}
/** MsgEditAgent defines a message for editting the agent. */
export interface MsgEditAgent {
  /** id is the unique identifier of the agent */
  id: bigint;
  /** agent name,required */
  name: string;
  /** description is a brief description of the agent, optional */
  description: string;
  /** url is the agent's link, used for detailed introduction, optional */
  url: string;
  /** sender is the address of the governance account or module admin */
  sender: string;
}
export interface MsgEditAgentProtoMsg {
  typeUrl: "/lorenzo.agent.v1.MsgEditAgent";
  value: Uint8Array;
}
/** MsgEditAgent defines a message for editting the agent. */
export interface MsgEditAgentAmino {
  /** id is the unique identifier of the agent */
  id?: string;
  /** agent name,required */
  name?: string;
  /** description is a brief description of the agent, optional */
  description?: string;
  /** url is the agent's link, used for detailed introduction, optional */
  url?: string;
  /** sender is the address of the governance account or module admin */
  sender?: string;
}
export interface MsgEditAgentAminoMsg {
  type: "lorenzo/agent/MsgEditAgent";
  value: MsgEditAgentAmino;
}
/** MsgEditAgent defines a message for editting the agent. */
export interface MsgEditAgentSDKType {
  id: bigint;
  name: string;
  description: string;
  url: string;
  sender: string;
}
/** MsgEditAgentResponse is the response to the MsgEditAgent message. */
export interface MsgEditAgentResponse {}
export interface MsgEditAgentResponseProtoMsg {
  typeUrl: "/lorenzo.agent.v1.MsgEditAgentResponse";
  value: Uint8Array;
}
/** MsgEditAgentResponse is the response to the MsgEditAgent message. */
export interface MsgEditAgentResponseAmino {}
export interface MsgEditAgentResponseAminoMsg {
  type: "/lorenzo.agent.v1.MsgEditAgentResponse";
  value: MsgEditAgentResponseAmino;
}
/** MsgEditAgentResponse is the response to the MsgEditAgent message. */
export interface MsgEditAgentResponseSDKType {}
/** MsgRemoveAgent defines a message for removing the agent. */
export interface MsgRemoveAgent {
  /** id is the unique identifier of the agent */
  id: bigint;
  /** sender is the address of the governance account or module admin */
  sender: string;
}
export interface MsgRemoveAgentProtoMsg {
  typeUrl: "/lorenzo.agent.v1.MsgRemoveAgent";
  value: Uint8Array;
}
/** MsgRemoveAgent defines a message for removing the agent. */
export interface MsgRemoveAgentAmino {
  /** id is the unique identifier of the agent */
  id?: string;
  /** sender is the address of the governance account or module admin */
  sender?: string;
}
export interface MsgRemoveAgentAminoMsg {
  type: "lorenzo/agent/MsgRemoveAgent";
  value: MsgRemoveAgentAmino;
}
/** MsgRemoveAgent defines a message for removing the agent. */
export interface MsgRemoveAgentSDKType {
  id: bigint;
  sender: string;
}
/** MsgRemoveAgentResponse is the response to the MsgRemoveAgent message. */
export interface MsgRemoveAgentResponse {}
export interface MsgRemoveAgentResponseProtoMsg {
  typeUrl: "/lorenzo.agent.v1.MsgRemoveAgentResponse";
  value: Uint8Array;
}
/** MsgRemoveAgentResponse is the response to the MsgRemoveAgent message. */
export interface MsgRemoveAgentResponseAmino {}
export interface MsgRemoveAgentResponseAminoMsg {
  type: "/lorenzo.agent.v1.MsgRemoveAgentResponse";
  value: MsgRemoveAgentResponseAmino;
}
/** MsgRemoveAgentResponse is the response to the MsgRemoveAgent message. */
export interface MsgRemoveAgentResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/lorenzo.agent.v1.MsgUpdateParams",
  aminoType: "lorenzo/agent/MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.is(o.params));
  },
  isSDK(o: any): o is MsgUpdateParamsSDKType {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isSDK(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: MsgUpdateParamsSDKType): MsgUpdateParams {
    return {
      authority: object?.authority,
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: MsgUpdateParams): MsgUpdateParamsSDKType {
    const obj: any = {};
    obj.authority = message.authority;
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "lorenzo/agent/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/lorenzo.agent.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParams.aminoType, MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/lorenzo.agent.v1.MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateParamsResponseSDKType {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromSDK(_: MsgUpdateParamsResponseSDKType): MsgUpdateParamsResponse {
    return {};
  },
  toSDK(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.agent.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);
function createBaseMsgAddAgent(): MsgAddAgent {
  return {
    name: "",
    btcReceivingAddress: "",
    ethAddr: "",
    description: "",
    url: "",
    sender: ""
  };
}
export const MsgAddAgent = {
  typeUrl: "/lorenzo.agent.v1.MsgAddAgent",
  aminoType: "lorenzo/agent/MsgAddAgent",
  is(o: any): o is MsgAddAgent {
    return o && (o.$typeUrl === MsgAddAgent.typeUrl || typeof o.name === "string" && typeof o.btcReceivingAddress === "string" && typeof o.ethAddr === "string" && typeof o.description === "string" && typeof o.url === "string" && typeof o.sender === "string");
  },
  isSDK(o: any): o is MsgAddAgentSDKType {
    return o && (o.$typeUrl === MsgAddAgent.typeUrl || typeof o.name === "string" && typeof o.btc_receiving_address === "string" && typeof o.eth_addr === "string" && typeof o.description === "string" && typeof o.url === "string" && typeof o.sender === "string");
  },
  isAmino(o: any): o is MsgAddAgentAmino {
    return o && (o.$typeUrl === MsgAddAgent.typeUrl || typeof o.name === "string" && typeof o.btc_receiving_address === "string" && typeof o.eth_addr === "string" && typeof o.description === "string" && typeof o.url === "string" && typeof o.sender === "string");
  },
  encode(message: MsgAddAgent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddAgent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAgent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.btcReceivingAddress = reader.string();
          break;
        case 3:
          message.ethAddr = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.url = reader.string();
          break;
        case 6:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddAgent>): MsgAddAgent {
    const message = createBaseMsgAddAgent();
    message.name = object.name ?? "";
    message.btcReceivingAddress = object.btcReceivingAddress ?? "";
    message.ethAddr = object.ethAddr ?? "";
    message.description = object.description ?? "";
    message.url = object.url ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromSDK(object: MsgAddAgentSDKType): MsgAddAgent {
    return {
      name: object?.name,
      btcReceivingAddress: object?.btc_receiving_address,
      ethAddr: object?.eth_addr,
      description: object?.description,
      url: object?.url,
      sender: object?.sender
    };
  },
  toSDK(message: MsgAddAgent): MsgAddAgentSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.btc_receiving_address = message.btcReceivingAddress;
    obj.eth_addr = message.ethAddr;
    obj.description = message.description;
    obj.url = message.url;
    obj.sender = message.sender;
    return obj;
  },
  fromAmino(object: MsgAddAgentAmino): MsgAddAgent {
    const message = createBaseMsgAddAgent();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.btc_receiving_address !== undefined && object.btc_receiving_address !== null) {
      message.btcReceivingAddress = object.btc_receiving_address;
    }
    if (object.eth_addr !== undefined && object.eth_addr !== null) {
      message.ethAddr = object.eth_addr;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgAddAgent): MsgAddAgentAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.btc_receiving_address = message.btcReceivingAddress === "" ? undefined : message.btcReceivingAddress;
    obj.eth_addr = message.ethAddr === "" ? undefined : message.ethAddr;
    obj.description = message.description === "" ? undefined : message.description;
    obj.url = message.url === "" ? undefined : message.url;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgAddAgentAminoMsg): MsgAddAgent {
    return MsgAddAgent.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddAgent): MsgAddAgentAminoMsg {
    return {
      type: "lorenzo/agent/MsgAddAgent",
      value: MsgAddAgent.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddAgentProtoMsg): MsgAddAgent {
    return MsgAddAgent.decode(message.value);
  },
  toProto(message: MsgAddAgent): Uint8Array {
    return MsgAddAgent.encode(message).finish();
  },
  toProtoMsg(message: MsgAddAgent): MsgAddAgentProtoMsg {
    return {
      typeUrl: "/lorenzo.agent.v1.MsgAddAgent",
      value: MsgAddAgent.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAddAgent.typeUrl, MsgAddAgent);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgAddAgent.aminoType, MsgAddAgent.typeUrl);
function createBaseMsgAddAgentResponse(): MsgAddAgentResponse {
  return {
    id: BigInt(0)
  };
}
export const MsgAddAgentResponse = {
  typeUrl: "/lorenzo.agent.v1.MsgAddAgentResponse",
  is(o: any): o is MsgAddAgentResponse {
    return o && (o.$typeUrl === MsgAddAgentResponse.typeUrl || typeof o.id === "bigint");
  },
  isSDK(o: any): o is MsgAddAgentResponseSDKType {
    return o && (o.$typeUrl === MsgAddAgentResponse.typeUrl || typeof o.id === "bigint");
  },
  isAmino(o: any): o is MsgAddAgentResponseAmino {
    return o && (o.$typeUrl === MsgAddAgentResponse.typeUrl || typeof o.id === "bigint");
  },
  encode(message: MsgAddAgentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddAgentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAgentResponse();
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
  fromPartial(object: Partial<MsgAddAgentResponse>): MsgAddAgentResponse {
    const message = createBaseMsgAddAgentResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: MsgAddAgentResponseSDKType): MsgAddAgentResponse {
    return {
      id: object?.id
    };
  },
  toSDK(message: MsgAddAgentResponse): MsgAddAgentResponseSDKType {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAmino(object: MsgAddAgentResponseAmino): MsgAddAgentResponse {
    const message = createBaseMsgAddAgentResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgAddAgentResponse): MsgAddAgentResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAddAgentResponseAminoMsg): MsgAddAgentResponse {
    return MsgAddAgentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddAgentResponseProtoMsg): MsgAddAgentResponse {
    return MsgAddAgentResponse.decode(message.value);
  },
  toProto(message: MsgAddAgentResponse): Uint8Array {
    return MsgAddAgentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddAgentResponse): MsgAddAgentResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.agent.v1.MsgAddAgentResponse",
      value: MsgAddAgentResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAddAgentResponse.typeUrl, MsgAddAgentResponse);
function createBaseMsgEditAgent(): MsgEditAgent {
  return {
    id: BigInt(0),
    name: "",
    description: "",
    url: "",
    sender: ""
  };
}
export const MsgEditAgent = {
  typeUrl: "/lorenzo.agent.v1.MsgEditAgent",
  aminoType: "lorenzo/agent/MsgEditAgent",
  is(o: any): o is MsgEditAgent {
    return o && (o.$typeUrl === MsgEditAgent.typeUrl || typeof o.id === "bigint" && typeof o.name === "string" && typeof o.description === "string" && typeof o.url === "string" && typeof o.sender === "string");
  },
  isSDK(o: any): o is MsgEditAgentSDKType {
    return o && (o.$typeUrl === MsgEditAgent.typeUrl || typeof o.id === "bigint" && typeof o.name === "string" && typeof o.description === "string" && typeof o.url === "string" && typeof o.sender === "string");
  },
  isAmino(o: any): o is MsgEditAgentAmino {
    return o && (o.$typeUrl === MsgEditAgent.typeUrl || typeof o.id === "bigint" && typeof o.name === "string" && typeof o.description === "string" && typeof o.url === "string" && typeof o.sender === "string");
  },
  encode(message: MsgEditAgent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEditAgent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditAgent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.url = reader.string();
          break;
        case 5:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgEditAgent>): MsgEditAgent {
    const message = createBaseMsgEditAgent();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.url = object.url ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromSDK(object: MsgEditAgentSDKType): MsgEditAgent {
    return {
      id: object?.id,
      name: object?.name,
      description: object?.description,
      url: object?.url,
      sender: object?.sender
    };
  },
  toSDK(message: MsgEditAgent): MsgEditAgentSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.name = message.name;
    obj.description = message.description;
    obj.url = message.url;
    obj.sender = message.sender;
    return obj;
  },
  fromAmino(object: MsgEditAgentAmino): MsgEditAgent {
    const message = createBaseMsgEditAgent();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgEditAgent): MsgEditAgentAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.url = message.url === "" ? undefined : message.url;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgEditAgentAminoMsg): MsgEditAgent {
    return MsgEditAgent.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEditAgent): MsgEditAgentAminoMsg {
    return {
      type: "lorenzo/agent/MsgEditAgent",
      value: MsgEditAgent.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEditAgentProtoMsg): MsgEditAgent {
    return MsgEditAgent.decode(message.value);
  },
  toProto(message: MsgEditAgent): Uint8Array {
    return MsgEditAgent.encode(message).finish();
  },
  toProtoMsg(message: MsgEditAgent): MsgEditAgentProtoMsg {
    return {
      typeUrl: "/lorenzo.agent.v1.MsgEditAgent",
      value: MsgEditAgent.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgEditAgent.typeUrl, MsgEditAgent);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgEditAgent.aminoType, MsgEditAgent.typeUrl);
function createBaseMsgEditAgentResponse(): MsgEditAgentResponse {
  return {};
}
export const MsgEditAgentResponse = {
  typeUrl: "/lorenzo.agent.v1.MsgEditAgentResponse",
  is(o: any): o is MsgEditAgentResponse {
    return o && o.$typeUrl === MsgEditAgentResponse.typeUrl;
  },
  isSDK(o: any): o is MsgEditAgentResponseSDKType {
    return o && o.$typeUrl === MsgEditAgentResponse.typeUrl;
  },
  isAmino(o: any): o is MsgEditAgentResponseAmino {
    return o && o.$typeUrl === MsgEditAgentResponse.typeUrl;
  },
  encode(_: MsgEditAgentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEditAgentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditAgentResponse();
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
  fromPartial(_: Partial<MsgEditAgentResponse>): MsgEditAgentResponse {
    const message = createBaseMsgEditAgentResponse();
    return message;
  },
  fromSDK(_: MsgEditAgentResponseSDKType): MsgEditAgentResponse {
    return {};
  },
  toSDK(_: MsgEditAgentResponse): MsgEditAgentResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgEditAgentResponseAmino): MsgEditAgentResponse {
    const message = createBaseMsgEditAgentResponse();
    return message;
  },
  toAmino(_: MsgEditAgentResponse): MsgEditAgentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEditAgentResponseAminoMsg): MsgEditAgentResponse {
    return MsgEditAgentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEditAgentResponseProtoMsg): MsgEditAgentResponse {
    return MsgEditAgentResponse.decode(message.value);
  },
  toProto(message: MsgEditAgentResponse): Uint8Array {
    return MsgEditAgentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEditAgentResponse): MsgEditAgentResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.agent.v1.MsgEditAgentResponse",
      value: MsgEditAgentResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgEditAgentResponse.typeUrl, MsgEditAgentResponse);
function createBaseMsgRemoveAgent(): MsgRemoveAgent {
  return {
    id: BigInt(0),
    sender: ""
  };
}
export const MsgRemoveAgent = {
  typeUrl: "/lorenzo.agent.v1.MsgRemoveAgent",
  aminoType: "lorenzo/agent/MsgRemoveAgent",
  is(o: any): o is MsgRemoveAgent {
    return o && (o.$typeUrl === MsgRemoveAgent.typeUrl || typeof o.id === "bigint" && typeof o.sender === "string");
  },
  isSDK(o: any): o is MsgRemoveAgentSDKType {
    return o && (o.$typeUrl === MsgRemoveAgent.typeUrl || typeof o.id === "bigint" && typeof o.sender === "string");
  },
  isAmino(o: any): o is MsgRemoveAgentAmino {
    return o && (o.$typeUrl === MsgRemoveAgent.typeUrl || typeof o.id === "bigint" && typeof o.sender === "string");
  },
  encode(message: MsgRemoveAgent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveAgent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveAgent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRemoveAgent>): MsgRemoveAgent {
    const message = createBaseMsgRemoveAgent();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.sender = object.sender ?? "";
    return message;
  },
  fromSDK(object: MsgRemoveAgentSDKType): MsgRemoveAgent {
    return {
      id: object?.id,
      sender: object?.sender
    };
  },
  toSDK(message: MsgRemoveAgent): MsgRemoveAgentSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.sender = message.sender;
    return obj;
  },
  fromAmino(object: MsgRemoveAgentAmino): MsgRemoveAgent {
    const message = createBaseMsgRemoveAgent();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgRemoveAgent): MsgRemoveAgentAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveAgentAminoMsg): MsgRemoveAgent {
    return MsgRemoveAgent.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoveAgent): MsgRemoveAgentAminoMsg {
    return {
      type: "lorenzo/agent/MsgRemoveAgent",
      value: MsgRemoveAgent.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRemoveAgentProtoMsg): MsgRemoveAgent {
    return MsgRemoveAgent.decode(message.value);
  },
  toProto(message: MsgRemoveAgent): Uint8Array {
    return MsgRemoveAgent.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveAgent): MsgRemoveAgentProtoMsg {
    return {
      typeUrl: "/lorenzo.agent.v1.MsgRemoveAgent",
      value: MsgRemoveAgent.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRemoveAgent.typeUrl, MsgRemoveAgent);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRemoveAgent.aminoType, MsgRemoveAgent.typeUrl);
function createBaseMsgRemoveAgentResponse(): MsgRemoveAgentResponse {
  return {};
}
export const MsgRemoveAgentResponse = {
  typeUrl: "/lorenzo.agent.v1.MsgRemoveAgentResponse",
  is(o: any): o is MsgRemoveAgentResponse {
    return o && o.$typeUrl === MsgRemoveAgentResponse.typeUrl;
  },
  isSDK(o: any): o is MsgRemoveAgentResponseSDKType {
    return o && o.$typeUrl === MsgRemoveAgentResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRemoveAgentResponseAmino {
    return o && o.$typeUrl === MsgRemoveAgentResponse.typeUrl;
  },
  encode(_: MsgRemoveAgentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveAgentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveAgentResponse();
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
  fromPartial(_: Partial<MsgRemoveAgentResponse>): MsgRemoveAgentResponse {
    const message = createBaseMsgRemoveAgentResponse();
    return message;
  },
  fromSDK(_: MsgRemoveAgentResponseSDKType): MsgRemoveAgentResponse {
    return {};
  },
  toSDK(_: MsgRemoveAgentResponse): MsgRemoveAgentResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgRemoveAgentResponseAmino): MsgRemoveAgentResponse {
    const message = createBaseMsgRemoveAgentResponse();
    return message;
  },
  toAmino(_: MsgRemoveAgentResponse): MsgRemoveAgentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveAgentResponseAminoMsg): MsgRemoveAgentResponse {
    return MsgRemoveAgentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveAgentResponseProtoMsg): MsgRemoveAgentResponse {
    return MsgRemoveAgentResponse.decode(message.value);
  },
  toProto(message: MsgRemoveAgentResponse): Uint8Array {
    return MsgRemoveAgentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveAgentResponse): MsgRemoveAgentResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.agent.v1.MsgRemoveAgentResponse",
      value: MsgRemoveAgentResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRemoveAgentResponse.typeUrl, MsgRemoveAgentResponse);