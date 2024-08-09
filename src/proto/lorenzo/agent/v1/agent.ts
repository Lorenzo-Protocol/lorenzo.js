import { BinaryReader, BinaryWriter } from "../../../binary";
/** Agent defines the details of a project */
export interface Agent {
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
}
export interface AgentProtoMsg {
  typeUrl: "/lorenzo.agent.v1.Agent";
  value: Uint8Array;
}
/** Agent defines the details of a project */
export interface AgentAmino {
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
}
export interface AgentAminoMsg {
  type: "/lorenzo.agent.v1.Agent";
  value: AgentAmino;
}
/** Agent defines the details of a project */
export interface AgentSDKType {
  id: bigint;
  name: string;
  btc_receiving_address: string;
  eth_addr: string;
  description: string;
  url: string;
}
function createBaseAgent(): Agent {
  return {
    id: BigInt(0),
    name: "",
    btcReceivingAddress: "",
    ethAddr: "",
    description: "",
    url: ""
  };
}
export const Agent = {
  typeUrl: "/lorenzo.agent.v1.Agent",
  encode(message: Agent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Agent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAgent();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Agent>): Agent {
    const message = createBaseAgent();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.btcReceivingAddress = object.btcReceivingAddress ?? "";
    message.ethAddr = object.ethAddr ?? "";
    message.description = object.description ?? "";
    message.url = object.url ?? "";
    return message;
  },
  fromSDK(object: AgentSDKType): Agent {
    return {
      id: object?.id,
      name: object?.name,
      btcReceivingAddress: object?.btc_receiving_address,
      ethAddr: object?.eth_addr,
      description: object?.description,
      url: object?.url
    };
  },
  toSDK(message: Agent): AgentSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.name = message.name;
    obj.btc_receiving_address = message.btcReceivingAddress;
    obj.eth_addr = message.ethAddr;
    obj.description = message.description;
    obj.url = message.url;
    return obj;
  },
  fromAmino(object: AgentAmino): Agent {
    const message = createBaseAgent();
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
    return message;
  },
  toAmino(message: Agent): AgentAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.btc_receiving_address = message.btcReceivingAddress === "" ? undefined : message.btcReceivingAddress;
    obj.eth_addr = message.ethAddr === "" ? undefined : message.ethAddr;
    obj.description = message.description === "" ? undefined : message.description;
    obj.url = message.url === "" ? undefined : message.url;
    return obj;
  },
  fromAminoMsg(object: AgentAminoMsg): Agent {
    return Agent.fromAmino(object.value);
  },
  fromProtoMsg(message: AgentProtoMsg): Agent {
    return Agent.decode(message.value);
  },
  toProto(message: Agent): Uint8Array {
    return Agent.encode(message).finish();
  },
  toProtoMsg(message: Agent): AgentProtoMsg {
    return {
      typeUrl: "/lorenzo.agent.v1.Agent",
      value: Agent.encode(message).finish()
    };
  }
};