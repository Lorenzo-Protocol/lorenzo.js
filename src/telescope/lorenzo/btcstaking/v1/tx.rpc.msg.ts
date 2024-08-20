//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgCreateBTCStaking, MsgCreateBTCStakingResponse, MsgCreateBTCBStaking, MsgCreateBTCBStakingResponse, MsgBurnRequest, MsgBurnResponse, MsgAddReceiver, MsgAddReceiverResponse, MsgRemoveReceiver, MsgRemoveReceiverResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  createBTCStaking(request: MsgCreateBTCStaking): Promise<MsgCreateBTCStakingResponse>;
  createBTCBStaking(request: MsgCreateBTCBStaking): Promise<MsgCreateBTCBStakingResponse>;
  burn(request: MsgBurnRequest): Promise<MsgBurnResponse>;
  addReceiver(request: MsgAddReceiver): Promise<MsgAddReceiverResponse>;
  removeReceiver(request: MsgRemoveReceiver): Promise<MsgRemoveReceiverResponse>;
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createBTCStaking = this.createBTCStaking.bind(this);
    this.createBTCBStaking = this.createBTCBStaking.bind(this);
    this.burn = this.burn.bind(this);
    this.addReceiver = this.addReceiver.bind(this);
    this.removeReceiver = this.removeReceiver.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  createBTCStaking(request: MsgCreateBTCStaking): Promise<MsgCreateBTCStakingResponse> {
    const data = MsgCreateBTCStaking.encode(request).finish();
    const promise = this.rpc.request("lorenzo.btcstaking.v1.Msg", "CreateBTCStaking", data);
    return promise.then(data => MsgCreateBTCStakingResponse.decode(new BinaryReader(data)));
  }
  createBTCBStaking(request: MsgCreateBTCBStaking): Promise<MsgCreateBTCBStakingResponse> {
    const data = MsgCreateBTCBStaking.encode(request).finish();
    const promise = this.rpc.request("lorenzo.btcstaking.v1.Msg", "CreateBTCBStaking", data);
    return promise.then(data => MsgCreateBTCBStakingResponse.decode(new BinaryReader(data)));
  }
  burn(request: MsgBurnRequest): Promise<MsgBurnResponse> {
    const data = MsgBurnRequest.encode(request).finish();
    const promise = this.rpc.request("lorenzo.btcstaking.v1.Msg", "Burn", data);
    return promise.then(data => MsgBurnResponse.decode(new BinaryReader(data)));
  }
  addReceiver(request: MsgAddReceiver): Promise<MsgAddReceiverResponse> {
    const data = MsgAddReceiver.encode(request).finish();
    const promise = this.rpc.request("lorenzo.btcstaking.v1.Msg", "AddReceiver", data);
    return promise.then(data => MsgAddReceiverResponse.decode(new BinaryReader(data)));
  }
  removeReceiver(request: MsgRemoveReceiver): Promise<MsgRemoveReceiverResponse> {
    const data = MsgRemoveReceiver.encode(request).finish();
    const promise = this.rpc.request("lorenzo.btcstaking.v1.Msg", "RemoveReceiver", data);
    return promise.then(data => MsgRemoveReceiverResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("lorenzo.btcstaking.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};