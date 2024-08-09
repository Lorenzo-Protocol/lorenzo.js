import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgUpgradePlan, MsgUpgradePlanResponse, MsgCreatePlan, MsgCreatePlanResponse, MsgSetMerkleRoot, MsgSetMerkleRootResponse, MsgClaims, MsgClaimsResponse, MsgUpdatePlanStatus, MsgUpdatePlanStatusResponse, MsgCreateYAT, MsgCreateYATResponse, MsgSetMinter, MsgSetMinterResponse, MsgRemoveMinter, MsgRemoveMinterResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** UpdateParams defines a method for updating the plan parameters. */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** UpgradePlan defines a governance operation for upgrading an Plan contract */
  upgradePlan(request: MsgUpgradePlan): Promise<MsgUpgradePlanResponse>;
  /** CreatePlan defines a method for creating a new plan. */
  createPlan(request: MsgCreatePlan): Promise<MsgCreatePlanResponse>;
  /** SetMerkleRoot defines a method for setting the merkle root of the plan. */
  setMerkleRoot(request: MsgSetMerkleRoot): Promise<MsgSetMerkleRootResponse>;
  /** CreateClaim defines a method for claims rewards to sender. */
  claims(request: MsgClaims): Promise<MsgClaimsResponse>;
  /** UpdatePlanStatus defines a method for updating the plan status. */
  updatePlanStatus(request: MsgUpdatePlanStatus): Promise<MsgUpdatePlanStatusResponse>;
  /** CreateYAT defines a method for creating a new YAT contract. */
  createYAT(request: MsgCreateYAT): Promise<MsgCreateYATResponse>;
  /** SetMinter defines a method for setting minter of the YAT contract. */
  setMinter(request: MsgSetMinter): Promise<MsgSetMinterResponse>;
  /** RemoveMinter defines a method for removing minter of the YAT contract. */
  removeMinter(request: MsgRemoveMinter): Promise<MsgRemoveMinterResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.upgradePlan = this.upgradePlan.bind(this);
    this.createPlan = this.createPlan.bind(this);
    this.setMerkleRoot = this.setMerkleRoot.bind(this);
    this.claims = this.claims.bind(this);
    this.updatePlanStatus = this.updatePlanStatus.bind(this);
    this.createYAT = this.createYAT.bind(this);
    this.setMinter = this.setMinter.bind(this);
    this.removeMinter = this.removeMinter.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("lorenzo.plan.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  upgradePlan(request: MsgUpgradePlan): Promise<MsgUpgradePlanResponse> {
    const data = MsgUpgradePlan.encode(request).finish();
    const promise = this.rpc.request("lorenzo.plan.v1.Msg", "UpgradePlan", data);
    return promise.then(data => MsgUpgradePlanResponse.decode(new BinaryReader(data)));
  }
  createPlan(request: MsgCreatePlan): Promise<MsgCreatePlanResponse> {
    const data = MsgCreatePlan.encode(request).finish();
    const promise = this.rpc.request("lorenzo.plan.v1.Msg", "CreatePlan", data);
    return promise.then(data => MsgCreatePlanResponse.decode(new BinaryReader(data)));
  }
  setMerkleRoot(request: MsgSetMerkleRoot): Promise<MsgSetMerkleRootResponse> {
    const data = MsgSetMerkleRoot.encode(request).finish();
    const promise = this.rpc.request("lorenzo.plan.v1.Msg", "SetMerkleRoot", data);
    return promise.then(data => MsgSetMerkleRootResponse.decode(new BinaryReader(data)));
  }
  claims(request: MsgClaims): Promise<MsgClaimsResponse> {
    const data = MsgClaims.encode(request).finish();
    const promise = this.rpc.request("lorenzo.plan.v1.Msg", "Claims", data);
    return promise.then(data => MsgClaimsResponse.decode(new BinaryReader(data)));
  }
  updatePlanStatus(request: MsgUpdatePlanStatus): Promise<MsgUpdatePlanStatusResponse> {
    const data = MsgUpdatePlanStatus.encode(request).finish();
    const promise = this.rpc.request("lorenzo.plan.v1.Msg", "UpdatePlanStatus", data);
    return promise.then(data => MsgUpdatePlanStatusResponse.decode(new BinaryReader(data)));
  }
  createYAT(request: MsgCreateYAT): Promise<MsgCreateYATResponse> {
    const data = MsgCreateYAT.encode(request).finish();
    const promise = this.rpc.request("lorenzo.plan.v1.Msg", "CreateYAT", data);
    return promise.then(data => MsgCreateYATResponse.decode(new BinaryReader(data)));
  }
  setMinter(request: MsgSetMinter): Promise<MsgSetMinterResponse> {
    const data = MsgSetMinter.encode(request).finish();
    const promise = this.rpc.request("lorenzo.plan.v1.Msg", "SetMinter", data);
    return promise.then(data => MsgSetMinterResponse.decode(new BinaryReader(data)));
  }
  removeMinter(request: MsgRemoveMinter): Promise<MsgRemoveMinterResponse> {
    const data = MsgRemoveMinter.encode(request).finish();
    const promise = this.rpc.request("lorenzo.plan.v1.Msg", "RemoveMinter", data);
    return promise.then(data => MsgRemoveMinterResponse.decode(new BinaryReader(data)));
  }
}