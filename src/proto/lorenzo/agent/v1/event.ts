import { BinaryReader, BinaryWriter } from "../../../binary";
/** agent creation event */
export interface EventAddAgent {
  /** id is the unique identifier of the agent */
  id: bigint;
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
export interface EventAddAgentProtoMsg {
  typeUrl: "/lorenzo.agent.v1.EventAddAgent";
  value: Uint8Array;
}
/** agent creation event */
export interface EventAddAgentAmino {
  /** id is the unique identifier of the agent */
  id?: string;
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
export interface EventAddAgentAminoMsg {
  type: "/lorenzo.agent.v1.EventAddAgent";
  value: EventAddAgentAmino;
}
/** agent creation event */
export interface EventAddAgentSDKType {
  id: bigint;
  name: string;
  btc_receiving_address: string;
  eth_addr: string;
  description: string;
  url: string;
  sender: string;
}
/** agent edit event */
export interface EventEditAgent {
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
export interface EventEditAgentProtoMsg {
  typeUrl: "/lorenzo.agent.v1.EventEditAgent";
  value: Uint8Array;
}
/** agent edit event */
export interface EventEditAgentAmino {
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
export interface EventEditAgentAminoMsg {
  type: "/lorenzo.agent.v1.EventEditAgent";
  value: EventEditAgentAmino;
}
/** agent edit event */
export interface EventEditAgentSDKType {
  id: bigint;
  name: string;
  description: string;
  url: string;
  sender: string;
}
/** agent remove event */
export interface EventRemoveAgent {
  /** id is the unique identifier of the agent */
  id: bigint;
  /** sender is the address of the governance account or module admin */
  sender: string;
}
export interface EventRemoveAgentProtoMsg {
  typeUrl: "/lorenzo.agent.v1.EventRemoveAgent";
  value: Uint8Array;
}
/** agent remove event */
export interface EventRemoveAgentAmino {
  /** id is the unique identifier of the agent */
  id?: string;
  /** sender is the address of the governance account or module admin */
  sender?: string;
}
export interface EventRemoveAgentAminoMsg {
  type: "/lorenzo.agent.v1.EventRemoveAgent";
  value: EventRemoveAgentAmino;
}
/** agent remove event */
export interface EventRemoveAgentSDKType {
  id: bigint;
  sender: string;
}
function createBaseEventAddAgent(): EventAddAgent {
  return {
    id: BigInt(0),
    name: "",
    btcReceivingAddress: "",
    ethAddr: "",
    description: "",
    url: "",
    sender: ""
  };
}
export const EventAddAgent = {
  typeUrl: "/lorenzo.agent.v1.EventAddAgent",
  encode(message: EventAddAgent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.btcReceivingAddress !== "") {
      writer.uint32(26).string(message.btcReceivingAddress);
    }
    if (message.ethAddr !== "") {
      writer.uint32(34).string(message.ethAddr);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.url !== "") {
      writer.uint32(50).string(message.url);
    }
    if (message.sender !== "") {
      writer.uint32(58).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAddAgent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAddAgent();
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
          message.btcReceivingAddress = reader.string();
          break;
        case 4:
          message.ethAddr = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.url = reader.string();
          break;
        case 7:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventAddAgent>): EventAddAgent {
    const message = createBaseEventAddAgent();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.btcReceivingAddress = object.btcReceivingAddress ?? "";
    message.ethAddr = object.ethAddr ?? "";
    message.description = object.description ?? "";
    message.url = object.url ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromSDK(object: EventAddAgentSDKType): EventAddAgent {
    return {
      id: object?.id,
      name: object?.name,
      btcReceivingAddress: object?.btc_receiving_address,
      ethAddr: object?.eth_addr,
      description: object?.description,
      url: object?.url,
      sender: object?.sender
    };
  },
  toSDK(message: EventAddAgent): EventAddAgentSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.name = message.name;
    obj.btc_receiving_address = message.btcReceivingAddress;
    obj.eth_addr = message.ethAddr;
    obj.description = message.description;
    obj.url = message.url;
    obj.sender = message.sender;
    return obj;
  },
  fromAmino(object: EventAddAgentAmino): EventAddAgent {
    const message = createBaseEventAddAgent();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
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
  toAmino(message: EventAddAgent): EventAddAgentAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.btc_receiving_address = message.btcReceivingAddress === "" ? undefined : message.btcReceivingAddress;
    obj.eth_addr = message.ethAddr === "" ? undefined : message.ethAddr;
    obj.description = message.description === "" ? undefined : message.description;
    obj.url = message.url === "" ? undefined : message.url;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: EventAddAgentAminoMsg): EventAddAgent {
    return EventAddAgent.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAddAgentProtoMsg): EventAddAgent {
    return EventAddAgent.decode(message.value);
  },
  toProto(message: EventAddAgent): Uint8Array {
    return EventAddAgent.encode(message).finish();
  },
  toProtoMsg(message: EventAddAgent): EventAddAgentProtoMsg {
    return {
      typeUrl: "/lorenzo.agent.v1.EventAddAgent",
      value: EventAddAgent.encode(message).finish()
    };
  }
};
function createBaseEventEditAgent(): EventEditAgent {
  return {
    id: BigInt(0),
    name: "",
    description: "",
    url: "",
    sender: ""
  };
}
export const EventEditAgent = {
  typeUrl: "/lorenzo.agent.v1.EventEditAgent",
  encode(message: EventEditAgent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): EventEditAgent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEditAgent();
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
  fromPartial(object: Partial<EventEditAgent>): EventEditAgent {
    const message = createBaseEventEditAgent();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.url = object.url ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromSDK(object: EventEditAgentSDKType): EventEditAgent {
    return {
      id: object?.id,
      name: object?.name,
      description: object?.description,
      url: object?.url,
      sender: object?.sender
    };
  },
  toSDK(message: EventEditAgent): EventEditAgentSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.name = message.name;
    obj.description = message.description;
    obj.url = message.url;
    obj.sender = message.sender;
    return obj;
  },
  fromAmino(object: EventEditAgentAmino): EventEditAgent {
    const message = createBaseEventEditAgent();
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
  toAmino(message: EventEditAgent): EventEditAgentAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.url = message.url === "" ? undefined : message.url;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: EventEditAgentAminoMsg): EventEditAgent {
    return EventEditAgent.fromAmino(object.value);
  },
  fromProtoMsg(message: EventEditAgentProtoMsg): EventEditAgent {
    return EventEditAgent.decode(message.value);
  },
  toProto(message: EventEditAgent): Uint8Array {
    return EventEditAgent.encode(message).finish();
  },
  toProtoMsg(message: EventEditAgent): EventEditAgentProtoMsg {
    return {
      typeUrl: "/lorenzo.agent.v1.EventEditAgent",
      value: EventEditAgent.encode(message).finish()
    };
  }
};
function createBaseEventRemoveAgent(): EventRemoveAgent {
  return {
    id: BigInt(0),
    sender: ""
  };
}
export const EventRemoveAgent = {
  typeUrl: "/lorenzo.agent.v1.EventRemoveAgent",
  encode(message: EventRemoveAgent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventRemoveAgent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveAgent();
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
  fromPartial(object: Partial<EventRemoveAgent>): EventRemoveAgent {
    const message = createBaseEventRemoveAgent();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.sender = object.sender ?? "";
    return message;
  },
  fromSDK(object: EventRemoveAgentSDKType): EventRemoveAgent {
    return {
      id: object?.id,
      sender: object?.sender
    };
  },
  toSDK(message: EventRemoveAgent): EventRemoveAgentSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.sender = message.sender;
    return obj;
  },
  fromAmino(object: EventRemoveAgentAmino): EventRemoveAgent {
    const message = createBaseEventRemoveAgent();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: EventRemoveAgent): EventRemoveAgentAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: EventRemoveAgentAminoMsg): EventRemoveAgent {
    return EventRemoveAgent.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRemoveAgentProtoMsg): EventRemoveAgent {
    return EventRemoveAgent.decode(message.value);
  },
  toProto(message: EventRemoveAgent): Uint8Array {
    return EventRemoveAgent.encode(message).finish();
  },
  toProtoMsg(message: EventRemoveAgent): EventRemoveAgentProtoMsg {
    return {
      typeUrl: "/lorenzo.agent.v1.EventRemoveAgent",
      value: EventRemoveAgent.encode(message).finish()
    };
  }
};