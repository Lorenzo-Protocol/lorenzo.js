import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgAddAgent, MsgEditAgent, MsgRemoveAgent } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/lorenzo.agent.v1.MsgUpdateParams", MsgUpdateParams], ["/lorenzo.agent.v1.MsgAddAgent", MsgAddAgent], ["/lorenzo.agent.v1.MsgEditAgent", MsgEditAgent], ["/lorenzo.agent.v1.MsgRemoveAgent", MsgRemoveAgent]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/lorenzo.agent.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    addAgent(value: MsgAddAgent) {
      return {
        typeUrl: "/lorenzo.agent.v1.MsgAddAgent",
        value: MsgAddAgent.encode(value).finish()
      };
    },
    editAgent(value: MsgEditAgent) {
      return {
        typeUrl: "/lorenzo.agent.v1.MsgEditAgent",
        value: MsgEditAgent.encode(value).finish()
      };
    },
    removeAgent(value: MsgRemoveAgent) {
      return {
        typeUrl: "/lorenzo.agent.v1.MsgRemoveAgent",
        value: MsgRemoveAgent.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/lorenzo.agent.v1.MsgUpdateParams",
        value
      };
    },
    addAgent(value: MsgAddAgent) {
      return {
        typeUrl: "/lorenzo.agent.v1.MsgAddAgent",
        value
      };
    },
    editAgent(value: MsgEditAgent) {
      return {
        typeUrl: "/lorenzo.agent.v1.MsgEditAgent",
        value
      };
    },
    removeAgent(value: MsgRemoveAgent) {
      return {
        typeUrl: "/lorenzo.agent.v1.MsgRemoveAgent",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/lorenzo.agent.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    addAgent(value: MsgAddAgent) {
      return {
        typeUrl: "/lorenzo.agent.v1.MsgAddAgent",
        value: MsgAddAgent.fromPartial(value)
      };
    },
    editAgent(value: MsgEditAgent) {
      return {
        typeUrl: "/lorenzo.agent.v1.MsgEditAgent",
        value: MsgEditAgent.fromPartial(value)
      };
    },
    removeAgent(value: MsgRemoveAgent) {
      return {
        typeUrl: "/lorenzo.agent.v1.MsgRemoveAgent",
        value: MsgRemoveAgent.fromPartial(value)
      };
    }
  }
};