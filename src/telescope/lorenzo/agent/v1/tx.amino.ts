//@ts-nocheck
import { MsgUpdateParams, MsgAddAgent, MsgEditAgent, MsgRemoveAgent } from "./tx";
export const AminoConverter = {
  "/lorenzo.agent.v1.MsgUpdateParams": {
    aminoType: "lorenzo/agent/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/lorenzo.agent.v1.MsgAddAgent": {
    aminoType: "lorenzo/agent/MsgAddAgent",
    toAmino: MsgAddAgent.toAmino,
    fromAmino: MsgAddAgent.fromAmino
  },
  "/lorenzo.agent.v1.MsgEditAgent": {
    aminoType: "lorenzo/agent/MsgEditAgent",
    toAmino: MsgEditAgent.toAmino,
    fromAmino: MsgEditAgent.fromAmino
  },
  "/lorenzo.agent.v1.MsgRemoveAgent": {
    aminoType: "lorenzo/agent/MsgRemoveAgent",
    toAmino: MsgRemoveAgent.toAmino,
    fromAmino: MsgRemoveAgent.fromAmino
  }
};