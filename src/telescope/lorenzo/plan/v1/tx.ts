//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { PlanStatus, planStatusFromJSON, planStatusToJSON } from "./plan";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
/** MsgUpdateParams is the request type for the Msg/UpdateParams RPC method. */
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
  typeUrl: "/lorenzo.plan.v1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the request type for the Msg/UpdateParams RPC method. */
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
  type: "/lorenzo.plan.v1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the request type for the Msg/UpdateParams RPC method. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse is the response type for the Msg/UpdateParams RPC
 * method.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/lorenzo.plan.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse is the response type for the Msg/UpdateParams RPC
 * method.
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/lorenzo.plan.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse is the response type for the Msg/UpdateParams RPC
 * method.
 */
export interface MsgUpdateParamsResponseSDKType {}
/** MsgUpgradePlan is the request type for the Msg/UpgradePlan RPC method. */
export interface MsgUpgradePlan {
  /** implementation is the new yat logic contract address */
  implementation: string;
  /**
   * authority is the address of the governance account.
   * just FYI: cosmos.AddressString marks that this field should use type alias
   * for AddressString instead of string, but the functionality is not yet
   * implemented in cosmos-proto
   */
  authority: string;
}
export interface MsgUpgradePlanProtoMsg {
  typeUrl: "/lorenzo.plan.v1.MsgUpgradePlan";
  value: Uint8Array;
}
/** MsgUpgradePlan is the request type for the Msg/UpgradePlan RPC method. */
export interface MsgUpgradePlanAmino {
  /** implementation is the new yat logic contract address */
  implementation?: string;
  /**
   * authority is the address of the governance account.
   * just FYI: cosmos.AddressString marks that this field should use type alias
   * for AddressString instead of string, but the functionality is not yet
   * implemented in cosmos-proto
   */
  authority?: string;
}
export interface MsgUpgradePlanAminoMsg {
  type: "/lorenzo.plan.v1.MsgUpgradePlan";
  value: MsgUpgradePlanAmino;
}
/** MsgUpgradePlan is the request type for the Msg/UpgradePlan RPC method. */
export interface MsgUpgradePlanSDKType {
  implementation: string;
  authority: string;
}
/** MsgUpgradeYATResponse is the response type for the Msg/UpgradeYAT RPC method. */
export interface MsgUpgradePlanResponse {}
export interface MsgUpgradePlanResponseProtoMsg {
  typeUrl: "/lorenzo.plan.v1.MsgUpgradePlanResponse";
  value: Uint8Array;
}
/** MsgUpgradeYATResponse is the response type for the Msg/UpgradeYAT RPC method. */
export interface MsgUpgradePlanResponseAmino {}
export interface MsgUpgradePlanResponseAminoMsg {
  type: "/lorenzo.plan.v1.MsgUpgradePlanResponse";
  value: MsgUpgradePlanResponseAmino;
}
/** MsgUpgradeYATResponse is the response type for the Msg/UpgradeYAT RPC method. */
export interface MsgUpgradePlanResponseSDKType {}
/** MsgCreatePlan is the request type for the Msg/CreatePlan RPC method. */
export interface MsgCreatePlan {
  /** name is the name of the plan */
  name: string;
  /** plan_desc_uri is the URI of the plan description */
  planDescUri: string;
  /** agent_id is the unique identifier of the agent */
  agentId: bigint;
  /** plan_start_time is the start time of the plan */
  planStartTime: bigint;
  /** period_time is the period time of the plan */
  periodTime: bigint;
  /** yat_contract_address is the address of the yat contract */
  yatContractAddress: string;
  /** sender is the address of the allowed sender */
  sender: string;
}
export interface MsgCreatePlanProtoMsg {
  typeUrl: "/lorenzo.plan.v1.MsgCreatePlan";
  value: Uint8Array;
}
/** MsgCreatePlan is the request type for the Msg/CreatePlan RPC method. */
export interface MsgCreatePlanAmino {
  /** name is the name of the plan */
  name?: string;
  /** plan_desc_uri is the URI of the plan description */
  plan_desc_uri?: string;
  /** agent_id is the unique identifier of the agent */
  agent_id?: string;
  /** plan_start_time is the start time of the plan */
  plan_start_time?: string;
  /** period_time is the period time of the plan */
  period_time?: string;
  /** yat_contract_address is the address of the yat contract */
  yat_contract_address?: string;
  /** sender is the address of the allowed sender */
  sender?: string;
}
export interface MsgCreatePlanAminoMsg {
  type: "/lorenzo.plan.v1.MsgCreatePlan";
  value: MsgCreatePlanAmino;
}
/** MsgCreatePlan is the request type for the Msg/CreatePlan RPC method. */
export interface MsgCreatePlanSDKType {
  name: string;
  plan_desc_uri: string;
  agent_id: bigint;
  plan_start_time: bigint;
  period_time: bigint;
  yat_contract_address: string;
  sender: string;
}
/** MsgCreatePlanResponse is the response type for the Msg/CreatePlan RPC method. */
export interface MsgCreatePlanResponse {
  /** id is the unique identifier of the plan */
  id: bigint;
}
export interface MsgCreatePlanResponseProtoMsg {
  typeUrl: "/lorenzo.plan.v1.MsgCreatePlanResponse";
  value: Uint8Array;
}
/** MsgCreatePlanResponse is the response type for the Msg/CreatePlan RPC method. */
export interface MsgCreatePlanResponseAmino {
  /** id is the unique identifier of the plan */
  id?: string;
}
export interface MsgCreatePlanResponseAminoMsg {
  type: "/lorenzo.plan.v1.MsgCreatePlanResponse";
  value: MsgCreatePlanResponseAmino;
}
/** MsgCreatePlanResponse is the response type for the Msg/CreatePlan RPC method. */
export interface MsgCreatePlanResponseSDKType {
  id: bigint;
}
/** MsgSetMerkleRoot is the request type for the Msg/SetMerkleRoot RPC method. */
export interface MsgSetMerkleRoot {
  /** plan_id is the unique identifier of the plan */
  planId: bigint;
  /** round_id is the unique identifier of the round */
  roundId: string;
  /** merkle_root is the merkle root of the plan */
  merkleRoot: string;
  /** sender is the address of the allowed sender */
  sender: string;
}
export interface MsgSetMerkleRootProtoMsg {
  typeUrl: "/lorenzo.plan.v1.MsgSetMerkleRoot";
  value: Uint8Array;
}
/** MsgSetMerkleRoot is the request type for the Msg/SetMerkleRoot RPC method. */
export interface MsgSetMerkleRootAmino {
  /** plan_id is the unique identifier of the plan */
  plan_id?: string;
  /** round_id is the unique identifier of the round */
  round_id?: string;
  /** merkle_root is the merkle root of the plan */
  merkle_root?: string;
  /** sender is the address of the allowed sender */
  sender?: string;
}
export interface MsgSetMerkleRootAminoMsg {
  type: "/lorenzo.plan.v1.MsgSetMerkleRoot";
  value: MsgSetMerkleRootAmino;
}
/** MsgSetMerkleRoot is the request type for the Msg/SetMerkleRoot RPC method. */
export interface MsgSetMerkleRootSDKType {
  plan_id: bigint;
  round_id: string;
  merkle_root: string;
  sender: string;
}
/**
 * MsgSetMerkleRootResponse is the response type for the Msg/SetMerkleRoot RPC
 * method.
 */
export interface MsgSetMerkleRootResponse {}
export interface MsgSetMerkleRootResponseProtoMsg {
  typeUrl: "/lorenzo.plan.v1.MsgSetMerkleRootResponse";
  value: Uint8Array;
}
/**
 * MsgSetMerkleRootResponse is the response type for the Msg/SetMerkleRoot RPC
 * method.
 */
export interface MsgSetMerkleRootResponseAmino {}
export interface MsgSetMerkleRootResponseAminoMsg {
  type: "/lorenzo.plan.v1.MsgSetMerkleRootResponse";
  value: MsgSetMerkleRootResponseAmino;
}
/**
 * MsgSetMerkleRootResponse is the response type for the Msg/SetMerkleRoot RPC
 * method.
 */
export interface MsgSetMerkleRootResponseSDKType {}
/** MsgClaims is the request type for the Msg/Claims RPC method. */
export interface MsgClaims {
  /** plan_id is the unique identifier of the plan */
  planId: bigint;
  /** receiver is the address of the receiver */
  receiver: string;
  /** round_id is the unique identifier of the round */
  roundId: string;
  /** amount is the amount of the claim */
  amount: string;
  /** merkle_proof is the merkle proof of the claim */
  merkleProof: string;
  /** sender is the address of the governance account or module admin */
  sender: string;
}
export interface MsgClaimsProtoMsg {
  typeUrl: "/lorenzo.plan.v1.MsgClaims";
  value: Uint8Array;
}
/** MsgClaims is the request type for the Msg/Claims RPC method. */
export interface MsgClaimsAmino {
  /** plan_id is the unique identifier of the plan */
  plan_id?: string;
  /** receiver is the address of the receiver */
  receiver?: string;
  /** round_id is the unique identifier of the round */
  round_id?: string;
  /** amount is the amount of the claim */
  amount?: string;
  /** merkle_proof is the merkle proof of the claim */
  merkle_proof?: string;
  /** sender is the address of the governance account or module admin */
  sender?: string;
}
export interface MsgClaimsAminoMsg {
  type: "/lorenzo.plan.v1.MsgClaims";
  value: MsgClaimsAmino;
}
/** MsgClaims is the request type for the Msg/Claims RPC method. */
export interface MsgClaimsSDKType {
  plan_id: bigint;
  receiver: string;
  round_id: string;
  amount: string;
  merkle_proof: string;
  sender: string;
}
/** MsgClaimsResponse is the response type for the Msg/Claims RPC method. */
export interface MsgClaimsResponse {}
export interface MsgClaimsResponseProtoMsg {
  typeUrl: "/lorenzo.plan.v1.MsgClaimsResponse";
  value: Uint8Array;
}
/** MsgClaimsResponse is the response type for the Msg/Claims RPC method. */
export interface MsgClaimsResponseAmino {}
export interface MsgClaimsResponseAminoMsg {
  type: "/lorenzo.plan.v1.MsgClaimsResponse";
  value: MsgClaimsResponseAmino;
}
/** MsgClaimsResponse is the response type for the Msg/Claims RPC method. */
export interface MsgClaimsResponseSDKType {}
/**
 * MsgUpdatePlanStatus is the request type for the Msg/UpdatePlanStatus RPC
 * method.
 */
export interface MsgUpdatePlanStatus {
  /** plan_id is the unique identifier of the plan */
  planId: bigint;
  /** status is the status of the plan */
  status: PlanStatus;
  /** sender is the address of the allowed sender */
  sender: string;
}
export interface MsgUpdatePlanStatusProtoMsg {
  typeUrl: "/lorenzo.plan.v1.MsgUpdatePlanStatus";
  value: Uint8Array;
}
/**
 * MsgUpdatePlanStatus is the request type for the Msg/UpdatePlanStatus RPC
 * method.
 */
export interface MsgUpdatePlanStatusAmino {
  /** plan_id is the unique identifier of the plan */
  plan_id?: string;
  /** status is the status of the plan */
  status?: PlanStatus;
  /** sender is the address of the allowed sender */
  sender?: string;
}
export interface MsgUpdatePlanStatusAminoMsg {
  type: "/lorenzo.plan.v1.MsgUpdatePlanStatus";
  value: MsgUpdatePlanStatusAmino;
}
/**
 * MsgUpdatePlanStatus is the request type for the Msg/UpdatePlanStatus RPC
 * method.
 */
export interface MsgUpdatePlanStatusSDKType {
  plan_id: bigint;
  status: PlanStatus;
  sender: string;
}
/**
 * MsgUpdatePlanStatusResponse is the response type for the Msg/UpdatePlanStatus
 * RPC method.
 */
export interface MsgUpdatePlanStatusResponse {}
export interface MsgUpdatePlanStatusResponseProtoMsg {
  typeUrl: "/lorenzo.plan.v1.MsgUpdatePlanStatusResponse";
  value: Uint8Array;
}
/**
 * MsgUpdatePlanStatusResponse is the response type for the Msg/UpdatePlanStatus
 * RPC method.
 */
export interface MsgUpdatePlanStatusResponseAmino {}
export interface MsgUpdatePlanStatusResponseAminoMsg {
  type: "/lorenzo.plan.v1.MsgUpdatePlanStatusResponse";
  value: MsgUpdatePlanStatusResponseAmino;
}
/**
 * MsgUpdatePlanStatusResponse is the response type for the Msg/UpdatePlanStatus
 * RPC method.
 */
export interface MsgUpdatePlanStatusResponseSDKType {}
/** MsgCreateYAT is the request type for the Msg/CreateYAT RPC method. */
export interface MsgCreateYAT {
  /** name is the name of the yat contract */
  name: string;
  /** symbol is the symbol of the yat contract */
  symbol: string;
  /** sender is the address of the allowed sender */
  sender: string;
}
export interface MsgCreateYATProtoMsg {
  typeUrl: "/lorenzo.plan.v1.MsgCreateYAT";
  value: Uint8Array;
}
/** MsgCreateYAT is the request type for the Msg/CreateYAT RPC method. */
export interface MsgCreateYATAmino {
  /** name is the name of the yat contract */
  name?: string;
  /** symbol is the symbol of the yat contract */
  symbol?: string;
  /** sender is the address of the allowed sender */
  sender?: string;
}
export interface MsgCreateYATAminoMsg {
  type: "/lorenzo.plan.v1.MsgCreateYAT";
  value: MsgCreateYATAmino;
}
/** MsgCreateYAT is the request type for the Msg/CreateYAT RPC method. */
export interface MsgCreateYATSDKType {
  name: string;
  symbol: string;
  sender: string;
}
/** MsgCreateYATResponse is the response type for the Msg/CreateYAT RPC method. */
export interface MsgCreateYATResponse {
  /** contract_address is the address of the yat contract */
  contractAddress: string;
}
export interface MsgCreateYATResponseProtoMsg {
  typeUrl: "/lorenzo.plan.v1.MsgCreateYATResponse";
  value: Uint8Array;
}
/** MsgCreateYATResponse is the response type for the Msg/CreateYAT RPC method. */
export interface MsgCreateYATResponseAmino {
  /** contract_address is the address of the yat contract */
  contract_address?: string;
}
export interface MsgCreateYATResponseAminoMsg {
  type: "/lorenzo.plan.v1.MsgCreateYATResponse";
  value: MsgCreateYATResponseAmino;
}
/** MsgCreateYATResponse is the response type for the Msg/CreateYAT RPC method. */
export interface MsgCreateYATResponseSDKType {
  contract_address: string;
}
/** MsgSetMinter is the request type for the Msg/SetMinter RPC method. */
export interface MsgSetMinter {
  /** minter is the address of the minter */
  minter: string;
  /** contract_address is the address of the yat contract */
  contractAddress: string;
  /** sender is the address of the allowed sender */
  sender: string;
}
export interface MsgSetMinterProtoMsg {
  typeUrl: "/lorenzo.plan.v1.MsgSetMinter";
  value: Uint8Array;
}
/** MsgSetMinter is the request type for the Msg/SetMinter RPC method. */
export interface MsgSetMinterAmino {
  /** minter is the address of the minter */
  minter?: string;
  /** contract_address is the address of the yat contract */
  contract_address?: string;
  /** sender is the address of the allowed sender */
  sender?: string;
}
export interface MsgSetMinterAminoMsg {
  type: "/lorenzo.plan.v1.MsgSetMinter";
  value: MsgSetMinterAmino;
}
/** MsgSetMinter is the request type for the Msg/SetMinter RPC method. */
export interface MsgSetMinterSDKType {
  minter: string;
  contract_address: string;
  sender: string;
}
/** MsgSetMinterResponse is the response type for the Msg/SetMinter RPC method. */
export interface MsgSetMinterResponse {}
export interface MsgSetMinterResponseProtoMsg {
  typeUrl: "/lorenzo.plan.v1.MsgSetMinterResponse";
  value: Uint8Array;
}
/** MsgSetMinterResponse is the response type for the Msg/SetMinter RPC method. */
export interface MsgSetMinterResponseAmino {}
export interface MsgSetMinterResponseAminoMsg {
  type: "/lorenzo.plan.v1.MsgSetMinterResponse";
  value: MsgSetMinterResponseAmino;
}
/** MsgSetMinterResponse is the response type for the Msg/SetMinter RPC method. */
export interface MsgSetMinterResponseSDKType {}
/** MsgRemoveMinter is the request type for the Msg/RemoveMinter RPC method. */
export interface MsgRemoveMinter {
  /** minter is the address of the minter */
  minter: string;
  /** contract_address is the address of the yat contract */
  contractAddress: string;
  /** sender is the address of the allowed sender */
  sender: string;
}
export interface MsgRemoveMinterProtoMsg {
  typeUrl: "/lorenzo.plan.v1.MsgRemoveMinter";
  value: Uint8Array;
}
/** MsgRemoveMinter is the request type for the Msg/RemoveMinter RPC method. */
export interface MsgRemoveMinterAmino {
  /** minter is the address of the minter */
  minter?: string;
  /** contract_address is the address of the yat contract */
  contract_address?: string;
  /** sender is the address of the allowed sender */
  sender?: string;
}
export interface MsgRemoveMinterAminoMsg {
  type: "/lorenzo.plan.v1.MsgRemoveMinter";
  value: MsgRemoveMinterAmino;
}
/** MsgRemoveMinter is the request type for the Msg/RemoveMinter RPC method. */
export interface MsgRemoveMinterSDKType {
  minter: string;
  contract_address: string;
  sender: string;
}
/**
 * MsgRemoveMinterResponse is the response type for the Msg/RemoveMinter RPC
 * method.
 */
export interface MsgRemoveMinterResponse {}
export interface MsgRemoveMinterResponseProtoMsg {
  typeUrl: "/lorenzo.plan.v1.MsgRemoveMinterResponse";
  value: Uint8Array;
}
/**
 * MsgRemoveMinterResponse is the response type for the Msg/RemoveMinter RPC
 * method.
 */
export interface MsgRemoveMinterResponseAmino {}
export interface MsgRemoveMinterResponseAminoMsg {
  type: "/lorenzo.plan.v1.MsgRemoveMinterResponse";
  value: MsgRemoveMinterResponseAmino;
}
/**
 * MsgRemoveMinterResponse is the response type for the Msg/RemoveMinter RPC
 * method.
 */
export interface MsgRemoveMinterResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/lorenzo.plan.v1.MsgUpdateParams",
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
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/lorenzo.plan.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/lorenzo.plan.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/lorenzo.plan.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);
function createBaseMsgUpgradePlan(): MsgUpgradePlan {
  return {
    implementation: "",
    authority: ""
  };
}
export const MsgUpgradePlan = {
  typeUrl: "/lorenzo.plan.v1.MsgUpgradePlan",
  is(o: any): o is MsgUpgradePlan {
    return o && (o.$typeUrl === MsgUpgradePlan.typeUrl || typeof o.implementation === "string" && typeof o.authority === "string");
  },
  isSDK(o: any): o is MsgUpgradePlanSDKType {
    return o && (o.$typeUrl === MsgUpgradePlan.typeUrl || typeof o.implementation === "string" && typeof o.authority === "string");
  },
  isAmino(o: any): o is MsgUpgradePlanAmino {
    return o && (o.$typeUrl === MsgUpgradePlan.typeUrl || typeof o.implementation === "string" && typeof o.authority === "string");
  },
  encode(message: MsgUpgradePlan, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.implementation !== "") {
      writer.uint32(10).string(message.implementation);
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpgradePlan {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpgradePlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.implementation = reader.string();
          break;
        case 2:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpgradePlan>): MsgUpgradePlan {
    const message = createBaseMsgUpgradePlan();
    message.implementation = object.implementation ?? "";
    message.authority = object.authority ?? "";
    return message;
  },
  fromSDK(object: MsgUpgradePlanSDKType): MsgUpgradePlan {
    return {
      implementation: object?.implementation,
      authority: object?.authority
    };
  },
  toSDK(message: MsgUpgradePlan): MsgUpgradePlanSDKType {
    const obj: any = {};
    obj.implementation = message.implementation;
    obj.authority = message.authority;
    return obj;
  },
  fromAmino(object: MsgUpgradePlanAmino): MsgUpgradePlan {
    const message = createBaseMsgUpgradePlan();
    if (object.implementation !== undefined && object.implementation !== null) {
      message.implementation = object.implementation;
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: MsgUpgradePlan): MsgUpgradePlanAmino {
    const obj: any = {};
    obj.implementation = message.implementation === "" ? undefined : message.implementation;
    obj.authority = message.authority === "" ? undefined : message.authority;
    return obj;
  },
  fromAminoMsg(object: MsgUpgradePlanAminoMsg): MsgUpgradePlan {
    return MsgUpgradePlan.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpgradePlanProtoMsg): MsgUpgradePlan {
    return MsgUpgradePlan.decode(message.value);
  },
  toProto(message: MsgUpgradePlan): Uint8Array {
    return MsgUpgradePlan.encode(message).finish();
  },
  toProtoMsg(message: MsgUpgradePlan): MsgUpgradePlanProtoMsg {
    return {
      typeUrl: "/lorenzo.plan.v1.MsgUpgradePlan",
      value: MsgUpgradePlan.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpgradePlan.typeUrl, MsgUpgradePlan);
function createBaseMsgUpgradePlanResponse(): MsgUpgradePlanResponse {
  return {};
}
export const MsgUpgradePlanResponse = {
  typeUrl: "/lorenzo.plan.v1.MsgUpgradePlanResponse",
  is(o: any): o is MsgUpgradePlanResponse {
    return o && o.$typeUrl === MsgUpgradePlanResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpgradePlanResponseSDKType {
    return o && o.$typeUrl === MsgUpgradePlanResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpgradePlanResponseAmino {
    return o && o.$typeUrl === MsgUpgradePlanResponse.typeUrl;
  },
  encode(_: MsgUpgradePlanResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpgradePlanResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpgradePlanResponse();
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
  fromPartial(_: Partial<MsgUpgradePlanResponse>): MsgUpgradePlanResponse {
    const message = createBaseMsgUpgradePlanResponse();
    return message;
  },
  fromSDK(_: MsgUpgradePlanResponseSDKType): MsgUpgradePlanResponse {
    return {};
  },
  toSDK(_: MsgUpgradePlanResponse): MsgUpgradePlanResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpgradePlanResponseAmino): MsgUpgradePlanResponse {
    const message = createBaseMsgUpgradePlanResponse();
    return message;
  },
  toAmino(_: MsgUpgradePlanResponse): MsgUpgradePlanResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpgradePlanResponseAminoMsg): MsgUpgradePlanResponse {
    return MsgUpgradePlanResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpgradePlanResponseProtoMsg): MsgUpgradePlanResponse {
    return MsgUpgradePlanResponse.decode(message.value);
  },
  toProto(message: MsgUpgradePlanResponse): Uint8Array {
    return MsgUpgradePlanResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpgradePlanResponse): MsgUpgradePlanResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.plan.v1.MsgUpgradePlanResponse",
      value: MsgUpgradePlanResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpgradePlanResponse.typeUrl, MsgUpgradePlanResponse);
function createBaseMsgCreatePlan(): MsgCreatePlan {
  return {
    name: "",
    planDescUri: "",
    agentId: BigInt(0),
    planStartTime: BigInt(0),
    periodTime: BigInt(0),
    yatContractAddress: "",
    sender: ""
  };
}
export const MsgCreatePlan = {
  typeUrl: "/lorenzo.plan.v1.MsgCreatePlan",
  is(o: any): o is MsgCreatePlan {
    return o && (o.$typeUrl === MsgCreatePlan.typeUrl || typeof o.name === "string" && typeof o.planDescUri === "string" && typeof o.agentId === "bigint" && typeof o.planStartTime === "bigint" && typeof o.periodTime === "bigint" && typeof o.yatContractAddress === "string" && typeof o.sender === "string");
  },
  isSDK(o: any): o is MsgCreatePlanSDKType {
    return o && (o.$typeUrl === MsgCreatePlan.typeUrl || typeof o.name === "string" && typeof o.plan_desc_uri === "string" && typeof o.agent_id === "bigint" && typeof o.plan_start_time === "bigint" && typeof o.period_time === "bigint" && typeof o.yat_contract_address === "string" && typeof o.sender === "string");
  },
  isAmino(o: any): o is MsgCreatePlanAmino {
    return o && (o.$typeUrl === MsgCreatePlan.typeUrl || typeof o.name === "string" && typeof o.plan_desc_uri === "string" && typeof o.agent_id === "bigint" && typeof o.plan_start_time === "bigint" && typeof o.period_time === "bigint" && typeof o.yat_contract_address === "string" && typeof o.sender === "string");
  },
  encode(message: MsgCreatePlan, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.planDescUri !== "") {
      writer.uint32(18).string(message.planDescUri);
    }
    if (message.agentId !== BigInt(0)) {
      writer.uint32(24).uint64(message.agentId);
    }
    if (message.planStartTime !== BigInt(0)) {
      writer.uint32(32).uint64(message.planStartTime);
    }
    if (message.periodTime !== BigInt(0)) {
      writer.uint32(40).uint64(message.periodTime);
    }
    if (message.yatContractAddress !== "") {
      writer.uint32(50).string(message.yatContractAddress);
    }
    if (message.sender !== "") {
      writer.uint32(58).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePlan {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.planDescUri = reader.string();
          break;
        case 3:
          message.agentId = reader.uint64();
          break;
        case 4:
          message.planStartTime = reader.uint64();
          break;
        case 5:
          message.periodTime = reader.uint64();
          break;
        case 6:
          message.yatContractAddress = reader.string();
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
  fromPartial(object: Partial<MsgCreatePlan>): MsgCreatePlan {
    const message = createBaseMsgCreatePlan();
    message.name = object.name ?? "";
    message.planDescUri = object.planDescUri ?? "";
    message.agentId = object.agentId !== undefined && object.agentId !== null ? BigInt(object.agentId.toString()) : BigInt(0);
    message.planStartTime = object.planStartTime !== undefined && object.planStartTime !== null ? BigInt(object.planStartTime.toString()) : BigInt(0);
    message.periodTime = object.periodTime !== undefined && object.periodTime !== null ? BigInt(object.periodTime.toString()) : BigInt(0);
    message.yatContractAddress = object.yatContractAddress ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromSDK(object: MsgCreatePlanSDKType): MsgCreatePlan {
    return {
      name: object?.name,
      planDescUri: object?.plan_desc_uri,
      agentId: object?.agent_id,
      planStartTime: object?.plan_start_time,
      periodTime: object?.period_time,
      yatContractAddress: object?.yat_contract_address,
      sender: object?.sender
    };
  },
  toSDK(message: MsgCreatePlan): MsgCreatePlanSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.plan_desc_uri = message.planDescUri;
    obj.agent_id = message.agentId;
    obj.plan_start_time = message.planStartTime;
    obj.period_time = message.periodTime;
    obj.yat_contract_address = message.yatContractAddress;
    obj.sender = message.sender;
    return obj;
  },
  fromAmino(object: MsgCreatePlanAmino): MsgCreatePlan {
    const message = createBaseMsgCreatePlan();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.plan_desc_uri !== undefined && object.plan_desc_uri !== null) {
      message.planDescUri = object.plan_desc_uri;
    }
    if (object.agent_id !== undefined && object.agent_id !== null) {
      message.agentId = BigInt(object.agent_id);
    }
    if (object.plan_start_time !== undefined && object.plan_start_time !== null) {
      message.planStartTime = BigInt(object.plan_start_time);
    }
    if (object.period_time !== undefined && object.period_time !== null) {
      message.periodTime = BigInt(object.period_time);
    }
    if (object.yat_contract_address !== undefined && object.yat_contract_address !== null) {
      message.yatContractAddress = object.yat_contract_address;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgCreatePlan): MsgCreatePlanAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.plan_desc_uri = message.planDescUri === "" ? undefined : message.planDescUri;
    obj.agent_id = message.agentId !== BigInt(0) ? message.agentId.toString() : undefined;
    obj.plan_start_time = message.planStartTime !== BigInt(0) ? message.planStartTime.toString() : undefined;
    obj.period_time = message.periodTime !== BigInt(0) ? message.periodTime.toString() : undefined;
    obj.yat_contract_address = message.yatContractAddress === "" ? undefined : message.yatContractAddress;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgCreatePlanAminoMsg): MsgCreatePlan {
    return MsgCreatePlan.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePlanProtoMsg): MsgCreatePlan {
    return MsgCreatePlan.decode(message.value);
  },
  toProto(message: MsgCreatePlan): Uint8Array {
    return MsgCreatePlan.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePlan): MsgCreatePlanProtoMsg {
    return {
      typeUrl: "/lorenzo.plan.v1.MsgCreatePlan",
      value: MsgCreatePlan.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreatePlan.typeUrl, MsgCreatePlan);
function createBaseMsgCreatePlanResponse(): MsgCreatePlanResponse {
  return {
    id: BigInt(0)
  };
}
export const MsgCreatePlanResponse = {
  typeUrl: "/lorenzo.plan.v1.MsgCreatePlanResponse",
  is(o: any): o is MsgCreatePlanResponse {
    return o && (o.$typeUrl === MsgCreatePlanResponse.typeUrl || typeof o.id === "bigint");
  },
  isSDK(o: any): o is MsgCreatePlanResponseSDKType {
    return o && (o.$typeUrl === MsgCreatePlanResponse.typeUrl || typeof o.id === "bigint");
  },
  isAmino(o: any): o is MsgCreatePlanResponseAmino {
    return o && (o.$typeUrl === MsgCreatePlanResponse.typeUrl || typeof o.id === "bigint");
  },
  encode(message: MsgCreatePlanResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePlanResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePlanResponse();
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
  fromPartial(object: Partial<MsgCreatePlanResponse>): MsgCreatePlanResponse {
    const message = createBaseMsgCreatePlanResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: MsgCreatePlanResponseSDKType): MsgCreatePlanResponse {
    return {
      id: object?.id
    };
  },
  toSDK(message: MsgCreatePlanResponse): MsgCreatePlanResponseSDKType {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAmino(object: MsgCreatePlanResponseAmino): MsgCreatePlanResponse {
    const message = createBaseMsgCreatePlanResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgCreatePlanResponse): MsgCreatePlanResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreatePlanResponseAminoMsg): MsgCreatePlanResponse {
    return MsgCreatePlanResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePlanResponseProtoMsg): MsgCreatePlanResponse {
    return MsgCreatePlanResponse.decode(message.value);
  },
  toProto(message: MsgCreatePlanResponse): Uint8Array {
    return MsgCreatePlanResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePlanResponse): MsgCreatePlanResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.plan.v1.MsgCreatePlanResponse",
      value: MsgCreatePlanResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreatePlanResponse.typeUrl, MsgCreatePlanResponse);
function createBaseMsgSetMerkleRoot(): MsgSetMerkleRoot {
  return {
    planId: BigInt(0),
    roundId: "",
    merkleRoot: "",
    sender: ""
  };
}
export const MsgSetMerkleRoot = {
  typeUrl: "/lorenzo.plan.v1.MsgSetMerkleRoot",
  is(o: any): o is MsgSetMerkleRoot {
    return o && (o.$typeUrl === MsgSetMerkleRoot.typeUrl || typeof o.planId === "bigint" && typeof o.roundId === "string" && typeof o.merkleRoot === "string" && typeof o.sender === "string");
  },
  isSDK(o: any): o is MsgSetMerkleRootSDKType {
    return o && (o.$typeUrl === MsgSetMerkleRoot.typeUrl || typeof o.plan_id === "bigint" && typeof o.round_id === "string" && typeof o.merkle_root === "string" && typeof o.sender === "string");
  },
  isAmino(o: any): o is MsgSetMerkleRootAmino {
    return o && (o.$typeUrl === MsgSetMerkleRoot.typeUrl || typeof o.plan_id === "bigint" && typeof o.round_id === "string" && typeof o.merkle_root === "string" && typeof o.sender === "string");
  },
  encode(message: MsgSetMerkleRoot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.planId !== BigInt(0)) {
      writer.uint32(8).uint64(message.planId);
    }
    if (message.roundId !== "") {
      writer.uint32(18).string(message.roundId);
    }
    if (message.merkleRoot !== "") {
      writer.uint32(26).string(message.merkleRoot);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMerkleRoot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMerkleRoot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.planId = reader.uint64();
          break;
        case 2:
          message.roundId = reader.string();
          break;
        case 3:
          message.merkleRoot = reader.string();
          break;
        case 4:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetMerkleRoot>): MsgSetMerkleRoot {
    const message = createBaseMsgSetMerkleRoot();
    message.planId = object.planId !== undefined && object.planId !== null ? BigInt(object.planId.toString()) : BigInt(0);
    message.roundId = object.roundId ?? "";
    message.merkleRoot = object.merkleRoot ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromSDK(object: MsgSetMerkleRootSDKType): MsgSetMerkleRoot {
    return {
      planId: object?.plan_id,
      roundId: object?.round_id,
      merkleRoot: object?.merkle_root,
      sender: object?.sender
    };
  },
  toSDK(message: MsgSetMerkleRoot): MsgSetMerkleRootSDKType {
    const obj: any = {};
    obj.plan_id = message.planId;
    obj.round_id = message.roundId;
    obj.merkle_root = message.merkleRoot;
    obj.sender = message.sender;
    return obj;
  },
  fromAmino(object: MsgSetMerkleRootAmino): MsgSetMerkleRoot {
    const message = createBaseMsgSetMerkleRoot();
    if (object.plan_id !== undefined && object.plan_id !== null) {
      message.planId = BigInt(object.plan_id);
    }
    if (object.round_id !== undefined && object.round_id !== null) {
      message.roundId = object.round_id;
    }
    if (object.merkle_root !== undefined && object.merkle_root !== null) {
      message.merkleRoot = object.merkle_root;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgSetMerkleRoot): MsgSetMerkleRootAmino {
    const obj: any = {};
    obj.plan_id = message.planId !== BigInt(0) ? message.planId.toString() : undefined;
    obj.round_id = message.roundId === "" ? undefined : message.roundId;
    obj.merkle_root = message.merkleRoot === "" ? undefined : message.merkleRoot;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgSetMerkleRootAminoMsg): MsgSetMerkleRoot {
    return MsgSetMerkleRoot.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetMerkleRootProtoMsg): MsgSetMerkleRoot {
    return MsgSetMerkleRoot.decode(message.value);
  },
  toProto(message: MsgSetMerkleRoot): Uint8Array {
    return MsgSetMerkleRoot.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMerkleRoot): MsgSetMerkleRootProtoMsg {
    return {
      typeUrl: "/lorenzo.plan.v1.MsgSetMerkleRoot",
      value: MsgSetMerkleRoot.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetMerkleRoot.typeUrl, MsgSetMerkleRoot);
function createBaseMsgSetMerkleRootResponse(): MsgSetMerkleRootResponse {
  return {};
}
export const MsgSetMerkleRootResponse = {
  typeUrl: "/lorenzo.plan.v1.MsgSetMerkleRootResponse",
  is(o: any): o is MsgSetMerkleRootResponse {
    return o && o.$typeUrl === MsgSetMerkleRootResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetMerkleRootResponseSDKType {
    return o && o.$typeUrl === MsgSetMerkleRootResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetMerkleRootResponseAmino {
    return o && o.$typeUrl === MsgSetMerkleRootResponse.typeUrl;
  },
  encode(_: MsgSetMerkleRootResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMerkleRootResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMerkleRootResponse();
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
  fromPartial(_: Partial<MsgSetMerkleRootResponse>): MsgSetMerkleRootResponse {
    const message = createBaseMsgSetMerkleRootResponse();
    return message;
  },
  fromSDK(_: MsgSetMerkleRootResponseSDKType): MsgSetMerkleRootResponse {
    return {};
  },
  toSDK(_: MsgSetMerkleRootResponse): MsgSetMerkleRootResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgSetMerkleRootResponseAmino): MsgSetMerkleRootResponse {
    const message = createBaseMsgSetMerkleRootResponse();
    return message;
  },
  toAmino(_: MsgSetMerkleRootResponse): MsgSetMerkleRootResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetMerkleRootResponseAminoMsg): MsgSetMerkleRootResponse {
    return MsgSetMerkleRootResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetMerkleRootResponseProtoMsg): MsgSetMerkleRootResponse {
    return MsgSetMerkleRootResponse.decode(message.value);
  },
  toProto(message: MsgSetMerkleRootResponse): Uint8Array {
    return MsgSetMerkleRootResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMerkleRootResponse): MsgSetMerkleRootResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.plan.v1.MsgSetMerkleRootResponse",
      value: MsgSetMerkleRootResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetMerkleRootResponse.typeUrl, MsgSetMerkleRootResponse);
function createBaseMsgClaims(): MsgClaims {
  return {
    planId: BigInt(0),
    receiver: "",
    roundId: "",
    amount: "",
    merkleProof: "",
    sender: ""
  };
}
export const MsgClaims = {
  typeUrl: "/lorenzo.plan.v1.MsgClaims",
  is(o: any): o is MsgClaims {
    return o && (o.$typeUrl === MsgClaims.typeUrl || typeof o.planId === "bigint" && typeof o.receiver === "string" && typeof o.roundId === "string" && typeof o.amount === "string" && typeof o.merkleProof === "string" && typeof o.sender === "string");
  },
  isSDK(o: any): o is MsgClaimsSDKType {
    return o && (o.$typeUrl === MsgClaims.typeUrl || typeof o.plan_id === "bigint" && typeof o.receiver === "string" && typeof o.round_id === "string" && typeof o.amount === "string" && typeof o.merkle_proof === "string" && typeof o.sender === "string");
  },
  isAmino(o: any): o is MsgClaimsAmino {
    return o && (o.$typeUrl === MsgClaims.typeUrl || typeof o.plan_id === "bigint" && typeof o.receiver === "string" && typeof o.round_id === "string" && typeof o.amount === "string" && typeof o.merkle_proof === "string" && typeof o.sender === "string");
  },
  encode(message: MsgClaims, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.planId !== BigInt(0)) {
      writer.uint32(8).uint64(message.planId);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.roundId !== "") {
      writer.uint32(26).string(message.roundId);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.merkleProof !== "") {
      writer.uint32(42).string(message.merkleProof);
    }
    if (message.sender !== "") {
      writer.uint32(50).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaims {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaims();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.planId = reader.uint64();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.roundId = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.merkleProof = reader.string();
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
  fromPartial(object: Partial<MsgClaims>): MsgClaims {
    const message = createBaseMsgClaims();
    message.planId = object.planId !== undefined && object.planId !== null ? BigInt(object.planId.toString()) : BigInt(0);
    message.receiver = object.receiver ?? "";
    message.roundId = object.roundId ?? "";
    message.amount = object.amount ?? "";
    message.merkleProof = object.merkleProof ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromSDK(object: MsgClaimsSDKType): MsgClaims {
    return {
      planId: object?.plan_id,
      receiver: object?.receiver,
      roundId: object?.round_id,
      amount: object?.amount,
      merkleProof: object?.merkle_proof,
      sender: object?.sender
    };
  },
  toSDK(message: MsgClaims): MsgClaimsSDKType {
    const obj: any = {};
    obj.plan_id = message.planId;
    obj.receiver = message.receiver;
    obj.round_id = message.roundId;
    obj.amount = message.amount;
    obj.merkle_proof = message.merkleProof;
    obj.sender = message.sender;
    return obj;
  },
  fromAmino(object: MsgClaimsAmino): MsgClaims {
    const message = createBaseMsgClaims();
    if (object.plan_id !== undefined && object.plan_id !== null) {
      message.planId = BigInt(object.plan_id);
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.round_id !== undefined && object.round_id !== null) {
      message.roundId = object.round_id;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.merkle_proof !== undefined && object.merkle_proof !== null) {
      message.merkleProof = object.merkle_proof;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgClaims): MsgClaimsAmino {
    const obj: any = {};
    obj.plan_id = message.planId !== BigInt(0) ? message.planId.toString() : undefined;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.round_id = message.roundId === "" ? undefined : message.roundId;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.merkle_proof = message.merkleProof === "" ? undefined : message.merkleProof;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgClaimsAminoMsg): MsgClaims {
    return MsgClaims.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimsProtoMsg): MsgClaims {
    return MsgClaims.decode(message.value);
  },
  toProto(message: MsgClaims): Uint8Array {
    return MsgClaims.encode(message).finish();
  },
  toProtoMsg(message: MsgClaims): MsgClaimsProtoMsg {
    return {
      typeUrl: "/lorenzo.plan.v1.MsgClaims",
      value: MsgClaims.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaims.typeUrl, MsgClaims);
function createBaseMsgClaimsResponse(): MsgClaimsResponse {
  return {};
}
export const MsgClaimsResponse = {
  typeUrl: "/lorenzo.plan.v1.MsgClaimsResponse",
  is(o: any): o is MsgClaimsResponse {
    return o && o.$typeUrl === MsgClaimsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgClaimsResponseSDKType {
    return o && o.$typeUrl === MsgClaimsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgClaimsResponseAmino {
    return o && o.$typeUrl === MsgClaimsResponse.typeUrl;
  },
  encode(_: MsgClaimsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimsResponse();
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
  fromPartial(_: Partial<MsgClaimsResponse>): MsgClaimsResponse {
    const message = createBaseMsgClaimsResponse();
    return message;
  },
  fromSDK(_: MsgClaimsResponseSDKType): MsgClaimsResponse {
    return {};
  },
  toSDK(_: MsgClaimsResponse): MsgClaimsResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgClaimsResponseAmino): MsgClaimsResponse {
    const message = createBaseMsgClaimsResponse();
    return message;
  },
  toAmino(_: MsgClaimsResponse): MsgClaimsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimsResponseAminoMsg): MsgClaimsResponse {
    return MsgClaimsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimsResponseProtoMsg): MsgClaimsResponse {
    return MsgClaimsResponse.decode(message.value);
  },
  toProto(message: MsgClaimsResponse): Uint8Array {
    return MsgClaimsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimsResponse): MsgClaimsResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.plan.v1.MsgClaimsResponse",
      value: MsgClaimsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimsResponse.typeUrl, MsgClaimsResponse);
function createBaseMsgUpdatePlanStatus(): MsgUpdatePlanStatus {
  return {
    planId: BigInt(0),
    status: 0,
    sender: ""
  };
}
export const MsgUpdatePlanStatus = {
  typeUrl: "/lorenzo.plan.v1.MsgUpdatePlanStatus",
  is(o: any): o is MsgUpdatePlanStatus {
    return o && (o.$typeUrl === MsgUpdatePlanStatus.typeUrl || typeof o.planId === "bigint" && isSet(o.status) && typeof o.sender === "string");
  },
  isSDK(o: any): o is MsgUpdatePlanStatusSDKType {
    return o && (o.$typeUrl === MsgUpdatePlanStatus.typeUrl || typeof o.plan_id === "bigint" && isSet(o.status) && typeof o.sender === "string");
  },
  isAmino(o: any): o is MsgUpdatePlanStatusAmino {
    return o && (o.$typeUrl === MsgUpdatePlanStatus.typeUrl || typeof o.plan_id === "bigint" && isSet(o.status) && typeof o.sender === "string");
  },
  encode(message: MsgUpdatePlanStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.planId !== BigInt(0)) {
      writer.uint32(8).uint64(message.planId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdatePlanStatus {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePlanStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.planId = reader.uint64();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdatePlanStatus>): MsgUpdatePlanStatus {
    const message = createBaseMsgUpdatePlanStatus();
    message.planId = object.planId !== undefined && object.planId !== null ? BigInt(object.planId.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.sender = object.sender ?? "";
    return message;
  },
  fromSDK(object: MsgUpdatePlanStatusSDKType): MsgUpdatePlanStatus {
    return {
      planId: object?.plan_id,
      status: isSet(object.status) ? planStatusFromJSON(object.status) : -1,
      sender: object?.sender
    };
  },
  toSDK(message: MsgUpdatePlanStatus): MsgUpdatePlanStatusSDKType {
    const obj: any = {};
    obj.plan_id = message.planId;
    message.status !== undefined && (obj.status = planStatusToJSON(message.status));
    obj.sender = message.sender;
    return obj;
  },
  fromAmino(object: MsgUpdatePlanStatusAmino): MsgUpdatePlanStatus {
    const message = createBaseMsgUpdatePlanStatus();
    if (object.plan_id !== undefined && object.plan_id !== null) {
      message.planId = BigInt(object.plan_id);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgUpdatePlanStatus): MsgUpdatePlanStatusAmino {
    const obj: any = {};
    obj.plan_id = message.planId !== BigInt(0) ? message.planId.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePlanStatusAminoMsg): MsgUpdatePlanStatus {
    return MsgUpdatePlanStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePlanStatusProtoMsg): MsgUpdatePlanStatus {
    return MsgUpdatePlanStatus.decode(message.value);
  },
  toProto(message: MsgUpdatePlanStatus): Uint8Array {
    return MsgUpdatePlanStatus.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePlanStatus): MsgUpdatePlanStatusProtoMsg {
    return {
      typeUrl: "/lorenzo.plan.v1.MsgUpdatePlanStatus",
      value: MsgUpdatePlanStatus.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdatePlanStatus.typeUrl, MsgUpdatePlanStatus);
function createBaseMsgUpdatePlanStatusResponse(): MsgUpdatePlanStatusResponse {
  return {};
}
export const MsgUpdatePlanStatusResponse = {
  typeUrl: "/lorenzo.plan.v1.MsgUpdatePlanStatusResponse",
  is(o: any): o is MsgUpdatePlanStatusResponse {
    return o && o.$typeUrl === MsgUpdatePlanStatusResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdatePlanStatusResponseSDKType {
    return o && o.$typeUrl === MsgUpdatePlanStatusResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdatePlanStatusResponseAmino {
    return o && o.$typeUrl === MsgUpdatePlanStatusResponse.typeUrl;
  },
  encode(_: MsgUpdatePlanStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdatePlanStatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePlanStatusResponse();
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
  fromPartial(_: Partial<MsgUpdatePlanStatusResponse>): MsgUpdatePlanStatusResponse {
    const message = createBaseMsgUpdatePlanStatusResponse();
    return message;
  },
  fromSDK(_: MsgUpdatePlanStatusResponseSDKType): MsgUpdatePlanStatusResponse {
    return {};
  },
  toSDK(_: MsgUpdatePlanStatusResponse): MsgUpdatePlanStatusResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdatePlanStatusResponseAmino): MsgUpdatePlanStatusResponse {
    const message = createBaseMsgUpdatePlanStatusResponse();
    return message;
  },
  toAmino(_: MsgUpdatePlanStatusResponse): MsgUpdatePlanStatusResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePlanStatusResponseAminoMsg): MsgUpdatePlanStatusResponse {
    return MsgUpdatePlanStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePlanStatusResponseProtoMsg): MsgUpdatePlanStatusResponse {
    return MsgUpdatePlanStatusResponse.decode(message.value);
  },
  toProto(message: MsgUpdatePlanStatusResponse): Uint8Array {
    return MsgUpdatePlanStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePlanStatusResponse): MsgUpdatePlanStatusResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.plan.v1.MsgUpdatePlanStatusResponse",
      value: MsgUpdatePlanStatusResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdatePlanStatusResponse.typeUrl, MsgUpdatePlanStatusResponse);
function createBaseMsgCreateYAT(): MsgCreateYAT {
  return {
    name: "",
    symbol: "",
    sender: ""
  };
}
export const MsgCreateYAT = {
  typeUrl: "/lorenzo.plan.v1.MsgCreateYAT",
  is(o: any): o is MsgCreateYAT {
    return o && (o.$typeUrl === MsgCreateYAT.typeUrl || typeof o.name === "string" && typeof o.symbol === "string" && typeof o.sender === "string");
  },
  isSDK(o: any): o is MsgCreateYATSDKType {
    return o && (o.$typeUrl === MsgCreateYAT.typeUrl || typeof o.name === "string" && typeof o.symbol === "string" && typeof o.sender === "string");
  },
  isAmino(o: any): o is MsgCreateYATAmino {
    return o && (o.$typeUrl === MsgCreateYAT.typeUrl || typeof o.name === "string" && typeof o.symbol === "string" && typeof o.sender === "string");
  },
  encode(message: MsgCreateYAT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateYAT {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateYAT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.symbol = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateYAT>): MsgCreateYAT {
    const message = createBaseMsgCreateYAT();
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromSDK(object: MsgCreateYATSDKType): MsgCreateYAT {
    return {
      name: object?.name,
      symbol: object?.symbol,
      sender: object?.sender
    };
  },
  toSDK(message: MsgCreateYAT): MsgCreateYATSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.symbol = message.symbol;
    obj.sender = message.sender;
    return obj;
  },
  fromAmino(object: MsgCreateYATAmino): MsgCreateYAT {
    const message = createBaseMsgCreateYAT();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgCreateYAT): MsgCreateYATAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgCreateYATAminoMsg): MsgCreateYAT {
    return MsgCreateYAT.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateYATProtoMsg): MsgCreateYAT {
    return MsgCreateYAT.decode(message.value);
  },
  toProto(message: MsgCreateYAT): Uint8Array {
    return MsgCreateYAT.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateYAT): MsgCreateYATProtoMsg {
    return {
      typeUrl: "/lorenzo.plan.v1.MsgCreateYAT",
      value: MsgCreateYAT.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateYAT.typeUrl, MsgCreateYAT);
function createBaseMsgCreateYATResponse(): MsgCreateYATResponse {
  return {
    contractAddress: ""
  };
}
export const MsgCreateYATResponse = {
  typeUrl: "/lorenzo.plan.v1.MsgCreateYATResponse",
  is(o: any): o is MsgCreateYATResponse {
    return o && (o.$typeUrl === MsgCreateYATResponse.typeUrl || typeof o.contractAddress === "string");
  },
  isSDK(o: any): o is MsgCreateYATResponseSDKType {
    return o && (o.$typeUrl === MsgCreateYATResponse.typeUrl || typeof o.contract_address === "string");
  },
  isAmino(o: any): o is MsgCreateYATResponseAmino {
    return o && (o.$typeUrl === MsgCreateYATResponse.typeUrl || typeof o.contract_address === "string");
  },
  encode(message: MsgCreateYATResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateYATResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateYATResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateYATResponse>): MsgCreateYATResponse {
    const message = createBaseMsgCreateYATResponse();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromSDK(object: MsgCreateYATResponseSDKType): MsgCreateYATResponse {
    return {
      contractAddress: object?.contract_address
    };
  },
  toSDK(message: MsgCreateYATResponse): MsgCreateYATResponseSDKType {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAmino(object: MsgCreateYATResponseAmino): MsgCreateYATResponse {
    const message = createBaseMsgCreateYATResponse();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: MsgCreateYATResponse): MsgCreateYATResponseAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: MsgCreateYATResponseAminoMsg): MsgCreateYATResponse {
    return MsgCreateYATResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateYATResponseProtoMsg): MsgCreateYATResponse {
    return MsgCreateYATResponse.decode(message.value);
  },
  toProto(message: MsgCreateYATResponse): Uint8Array {
    return MsgCreateYATResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateYATResponse): MsgCreateYATResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.plan.v1.MsgCreateYATResponse",
      value: MsgCreateYATResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateYATResponse.typeUrl, MsgCreateYATResponse);
function createBaseMsgSetMinter(): MsgSetMinter {
  return {
    minter: "",
    contractAddress: "",
    sender: ""
  };
}
export const MsgSetMinter = {
  typeUrl: "/lorenzo.plan.v1.MsgSetMinter",
  is(o: any): o is MsgSetMinter {
    return o && (o.$typeUrl === MsgSetMinter.typeUrl || typeof o.minter === "string" && typeof o.contractAddress === "string" && typeof o.sender === "string");
  },
  isSDK(o: any): o is MsgSetMinterSDKType {
    return o && (o.$typeUrl === MsgSetMinter.typeUrl || typeof o.minter === "string" && typeof o.contract_address === "string" && typeof o.sender === "string");
  },
  isAmino(o: any): o is MsgSetMinterAmino {
    return o && (o.$typeUrl === MsgSetMinter.typeUrl || typeof o.minter === "string" && typeof o.contract_address === "string" && typeof o.sender === "string");
  },
  encode(message: MsgSetMinter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minter !== "") {
      writer.uint32(10).string(message.minter);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMinter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMinter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minter = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetMinter>): MsgSetMinter {
    const message = createBaseMsgSetMinter();
    message.minter = object.minter ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromSDK(object: MsgSetMinterSDKType): MsgSetMinter {
    return {
      minter: object?.minter,
      contractAddress: object?.contract_address,
      sender: object?.sender
    };
  },
  toSDK(message: MsgSetMinter): MsgSetMinterSDKType {
    const obj: any = {};
    obj.minter = message.minter;
    obj.contract_address = message.contractAddress;
    obj.sender = message.sender;
    return obj;
  },
  fromAmino(object: MsgSetMinterAmino): MsgSetMinter {
    const message = createBaseMsgSetMinter();
    if (object.minter !== undefined && object.minter !== null) {
      message.minter = object.minter;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgSetMinter): MsgSetMinterAmino {
    const obj: any = {};
    obj.minter = message.minter === "" ? undefined : message.minter;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgSetMinterAminoMsg): MsgSetMinter {
    return MsgSetMinter.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetMinterProtoMsg): MsgSetMinter {
    return MsgSetMinter.decode(message.value);
  },
  toProto(message: MsgSetMinter): Uint8Array {
    return MsgSetMinter.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMinter): MsgSetMinterProtoMsg {
    return {
      typeUrl: "/lorenzo.plan.v1.MsgSetMinter",
      value: MsgSetMinter.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetMinter.typeUrl, MsgSetMinter);
function createBaseMsgSetMinterResponse(): MsgSetMinterResponse {
  return {};
}
export const MsgSetMinterResponse = {
  typeUrl: "/lorenzo.plan.v1.MsgSetMinterResponse",
  is(o: any): o is MsgSetMinterResponse {
    return o && o.$typeUrl === MsgSetMinterResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetMinterResponseSDKType {
    return o && o.$typeUrl === MsgSetMinterResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetMinterResponseAmino {
    return o && o.$typeUrl === MsgSetMinterResponse.typeUrl;
  },
  encode(_: MsgSetMinterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMinterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMinterResponse();
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
  fromPartial(_: Partial<MsgSetMinterResponse>): MsgSetMinterResponse {
    const message = createBaseMsgSetMinterResponse();
    return message;
  },
  fromSDK(_: MsgSetMinterResponseSDKType): MsgSetMinterResponse {
    return {};
  },
  toSDK(_: MsgSetMinterResponse): MsgSetMinterResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgSetMinterResponseAmino): MsgSetMinterResponse {
    const message = createBaseMsgSetMinterResponse();
    return message;
  },
  toAmino(_: MsgSetMinterResponse): MsgSetMinterResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetMinterResponseAminoMsg): MsgSetMinterResponse {
    return MsgSetMinterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetMinterResponseProtoMsg): MsgSetMinterResponse {
    return MsgSetMinterResponse.decode(message.value);
  },
  toProto(message: MsgSetMinterResponse): Uint8Array {
    return MsgSetMinterResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMinterResponse): MsgSetMinterResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.plan.v1.MsgSetMinterResponse",
      value: MsgSetMinterResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetMinterResponse.typeUrl, MsgSetMinterResponse);
function createBaseMsgRemoveMinter(): MsgRemoveMinter {
  return {
    minter: "",
    contractAddress: "",
    sender: ""
  };
}
export const MsgRemoveMinter = {
  typeUrl: "/lorenzo.plan.v1.MsgRemoveMinter",
  is(o: any): o is MsgRemoveMinter {
    return o && (o.$typeUrl === MsgRemoveMinter.typeUrl || typeof o.minter === "string" && typeof o.contractAddress === "string" && typeof o.sender === "string");
  },
  isSDK(o: any): o is MsgRemoveMinterSDKType {
    return o && (o.$typeUrl === MsgRemoveMinter.typeUrl || typeof o.minter === "string" && typeof o.contract_address === "string" && typeof o.sender === "string");
  },
  isAmino(o: any): o is MsgRemoveMinterAmino {
    return o && (o.$typeUrl === MsgRemoveMinter.typeUrl || typeof o.minter === "string" && typeof o.contract_address === "string" && typeof o.sender === "string");
  },
  encode(message: MsgRemoveMinter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minter !== "") {
      writer.uint32(10).string(message.minter);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveMinter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveMinter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minter = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRemoveMinter>): MsgRemoveMinter {
    const message = createBaseMsgRemoveMinter();
    message.minter = object.minter ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromSDK(object: MsgRemoveMinterSDKType): MsgRemoveMinter {
    return {
      minter: object?.minter,
      contractAddress: object?.contract_address,
      sender: object?.sender
    };
  },
  toSDK(message: MsgRemoveMinter): MsgRemoveMinterSDKType {
    const obj: any = {};
    obj.minter = message.minter;
    obj.contract_address = message.contractAddress;
    obj.sender = message.sender;
    return obj;
  },
  fromAmino(object: MsgRemoveMinterAmino): MsgRemoveMinter {
    const message = createBaseMsgRemoveMinter();
    if (object.minter !== undefined && object.minter !== null) {
      message.minter = object.minter;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgRemoveMinter): MsgRemoveMinterAmino {
    const obj: any = {};
    obj.minter = message.minter === "" ? undefined : message.minter;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveMinterAminoMsg): MsgRemoveMinter {
    return MsgRemoveMinter.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveMinterProtoMsg): MsgRemoveMinter {
    return MsgRemoveMinter.decode(message.value);
  },
  toProto(message: MsgRemoveMinter): Uint8Array {
    return MsgRemoveMinter.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveMinter): MsgRemoveMinterProtoMsg {
    return {
      typeUrl: "/lorenzo.plan.v1.MsgRemoveMinter",
      value: MsgRemoveMinter.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRemoveMinter.typeUrl, MsgRemoveMinter);
function createBaseMsgRemoveMinterResponse(): MsgRemoveMinterResponse {
  return {};
}
export const MsgRemoveMinterResponse = {
  typeUrl: "/lorenzo.plan.v1.MsgRemoveMinterResponse",
  is(o: any): o is MsgRemoveMinterResponse {
    return o && o.$typeUrl === MsgRemoveMinterResponse.typeUrl;
  },
  isSDK(o: any): o is MsgRemoveMinterResponseSDKType {
    return o && o.$typeUrl === MsgRemoveMinterResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRemoveMinterResponseAmino {
    return o && o.$typeUrl === MsgRemoveMinterResponse.typeUrl;
  },
  encode(_: MsgRemoveMinterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveMinterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveMinterResponse();
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
  fromPartial(_: Partial<MsgRemoveMinterResponse>): MsgRemoveMinterResponse {
    const message = createBaseMsgRemoveMinterResponse();
    return message;
  },
  fromSDK(_: MsgRemoveMinterResponseSDKType): MsgRemoveMinterResponse {
    return {};
  },
  toSDK(_: MsgRemoveMinterResponse): MsgRemoveMinterResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgRemoveMinterResponseAmino): MsgRemoveMinterResponse {
    const message = createBaseMsgRemoveMinterResponse();
    return message;
  },
  toAmino(_: MsgRemoveMinterResponse): MsgRemoveMinterResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveMinterResponseAminoMsg): MsgRemoveMinterResponse {
    return MsgRemoveMinterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveMinterResponseProtoMsg): MsgRemoveMinterResponse {
    return MsgRemoveMinterResponse.decode(message.value);
  },
  toProto(message: MsgRemoveMinterResponse): Uint8Array {
    return MsgRemoveMinterResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveMinterResponse): MsgRemoveMinterResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.plan.v1.MsgRemoveMinterResponse",
      value: MsgRemoveMinterResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRemoveMinterResponse.typeUrl, MsgRemoveMinterResponse);