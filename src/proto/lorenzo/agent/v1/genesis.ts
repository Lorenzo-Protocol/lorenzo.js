import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Agent, AgentAmino, AgentSDKType } from "./agent";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the agent module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  agents: Agent[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/lorenzo.agent.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the agent module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of the module. */
  params?: ParamsAmino;
  agents?: AgentAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/lorenzo.agent.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the agent module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  agents: AgentSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    agents: []
  };
}
export const GenesisState = {
  typeUrl: "/lorenzo.agent.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.agents) {
      Agent.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.agents.push(Agent.decode(reader, reader.uint32()));
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
    message.agents = object.agents?.map(e => Agent.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      agents: Array.isArray(object?.agents) ? object.agents.map((e: any) => Agent.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    if (message.agents) {
      obj.agents = message.agents.map(e => e ? Agent.toSDK(e) : undefined);
    } else {
      obj.agents = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.agents = object.agents?.map(e => Agent.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.agents) {
      obj.agents = message.agents.map(e => e ? Agent.toAmino(e) : undefined);
    } else {
      obj.agents = message.agents;
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
      typeUrl: "/lorenzo.agent.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};