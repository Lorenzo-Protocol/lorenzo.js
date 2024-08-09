//@ts-nocheck
import { MsgUpdateParams, MsgAddAgent, MsgEditAgent, MsgRemoveAgent } from "./tx";
export const AminoConverter = {
  "/lorenzo.agent.v1.MsgUpdateParams": {
    aminoType: "/lorenzo.agent.v1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/lorenzo.agent.v1.MsgAddAgent": {
    aminoType: "/lorenzo.agent.v1.MsgAddAgent",
    toAmino: MsgAddAgent.toAmino,
    fromAmino: MsgAddAgent.fromAmino
  },
  "/lorenzo.agent.v1.MsgEditAgent": {
    aminoType: "/lorenzo.agent.v1.MsgEditAgent",
    toAmino: MsgEditAgent.toAmino,
    fromAmino: MsgEditAgent.fromAmino
  },
  "/lorenzo.agent.v1.MsgRemoveAgent": {
    aminoType: "/lorenzo.agent.v1.MsgRemoveAgent",
    toAmino: MsgRemoveAgent.toAmino,
    fromAmino: MsgRemoveAgent.fromAmino
  }
};