//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgAddAgent, MsgAddAgentResponse, MsgEditAgent, MsgEditAgentResponse, MsgRemoveAgent, MsgRemoveAgentResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** UpdateParams defines a method for updating the agent parameters. */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** AddAgent defines a method for adding a agent. */
  addAgent(request: MsgAddAgent): Promise<MsgAddAgentResponse>;
  /** AddAgent defines a method for editting a agent. */
  editAgent(request: MsgEditAgent): Promise<MsgEditAgentResponse>;
  /** RemoveAgent defines a method for removing a agent. */
  removeAgent(request: MsgRemoveAgent): Promise<MsgRemoveAgentResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.addAgent = this.addAgent.bind(this);
    this.editAgent = this.editAgent.bind(this);
    this.removeAgent = this.removeAgent.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("lorenzo.agent.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  addAgent(request: MsgAddAgent): Promise<MsgAddAgentResponse> {
    const data = MsgAddAgent.encode(request).finish();
    const promise = this.rpc.request("lorenzo.agent.v1.Msg", "AddAgent", data);
    return promise.then(data => MsgAddAgentResponse.decode(new BinaryReader(data)));
  }
  editAgent(request: MsgEditAgent): Promise<MsgEditAgentResponse> {
    const data = MsgEditAgent.encode(request).finish();
    const promise = this.rpc.request("lorenzo.agent.v1.Msg", "EditAgent", data);
    return promise.then(data => MsgEditAgentResponse.decode(new BinaryReader(data)));
  }
  removeAgent(request: MsgRemoveAgent): Promise<MsgRemoveAgentResponse> {
    const data = MsgRemoveAgent.encode(request).finish();
    const promise = this.rpc.request("lorenzo.agent.v1.Msg", "RemoveAgent", data);
    return promise.then(data => MsgRemoveAgentResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};