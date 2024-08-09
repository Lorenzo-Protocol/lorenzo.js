import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export enum PlanStatus {
  Pause = 0,
  Unpause = 1,
  UNRECOGNIZED = -1,
}
export const PlanStatusSDKType = PlanStatus;
export const PlanStatusAmino = PlanStatus;
export function planStatusFromJSON(object: any): PlanStatus {
  switch (object) {
    case 0:
    case "Pause":
      return PlanStatus.Pause;
    case 1:
    case "Unpause":
      return PlanStatus.Unpause;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PlanStatus.UNRECOGNIZED;
  }
}
export function planStatusToJSON(object: PlanStatus): string {
  switch (object) {
    case PlanStatus.Pause:
      return "Pause";
    case PlanStatus.Unpause:
      return "Unpause";
    case PlanStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Plan defines the details of a project */
export interface Plan {
  id: bigint;
  name: string;
  planDescUri: string;
  agentId: bigint;
  planStartTime: bigint;
  periodTime: bigint;
  yatContractAddress: string;
  contractAddress: string;
  enabled: PlanStatus;
}
export interface PlanProtoMsg {
  typeUrl: "/lorenzo.plan.v1.Plan";
  value: Uint8Array;
}
/** Plan defines the details of a project */
export interface PlanAmino {
  id?: string;
  name?: string;
  plan_desc_uri?: string;
  agent_id?: string;
  plan_start_time?: string;
  period_time?: string;
  yat_contract_address?: string;
  contract_address?: string;
  enabled?: PlanStatus;
}
export interface PlanAminoMsg {
  type: "/lorenzo.plan.v1.Plan";
  value: PlanAmino;
}
/** Plan defines the details of a project */
export interface PlanSDKType {
  id: bigint;
  name: string;
  plan_desc_uri: string;
  agent_id: bigint;
  plan_start_time: bigint;
  period_time: bigint;
  yat_contract_address: string;
  contract_address: string;
  enabled: PlanStatus;
}
function createBasePlan(): Plan {
  return {
    id: BigInt(0),
    name: "",
    planDescUri: "",
    agentId: BigInt(0),
    planStartTime: BigInt(0),
    periodTime: BigInt(0),
    yatContractAddress: "",
    contractAddress: "",
    enabled: 0
  };
}
export const Plan = {
  typeUrl: "/lorenzo.plan.v1.Plan",
  encode(message: Plan, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.planDescUri !== "") {
      writer.uint32(26).string(message.planDescUri);
    }
    if (message.agentId !== BigInt(0)) {
      writer.uint32(32).uint64(message.agentId);
    }
    if (message.planStartTime !== BigInt(0)) {
      writer.uint32(40).uint64(message.planStartTime);
    }
    if (message.periodTime !== BigInt(0)) {
      writer.uint32(48).uint64(message.periodTime);
    }
    if (message.yatContractAddress !== "") {
      writer.uint32(58).string(message.yatContractAddress);
    }
    if (message.contractAddress !== "") {
      writer.uint32(66).string(message.contractAddress);
    }
    if (message.enabled !== 0) {
      writer.uint32(72).int32(message.enabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Plan {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlan();
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
          message.planDescUri = reader.string();
          break;
        case 4:
          message.agentId = reader.uint64();
          break;
        case 5:
          message.planStartTime = reader.uint64();
          break;
        case 6:
          message.periodTime = reader.uint64();
          break;
        case 7:
          message.yatContractAddress = reader.string();
          break;
        case 8:
          message.contractAddress = reader.string();
          break;
        case 9:
          message.enabled = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Plan>): Plan {
    const message = createBasePlan();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.planDescUri = object.planDescUri ?? "";
    message.agentId = object.agentId !== undefined && object.agentId !== null ? BigInt(object.agentId.toString()) : BigInt(0);
    message.planStartTime = object.planStartTime !== undefined && object.planStartTime !== null ? BigInt(object.planStartTime.toString()) : BigInt(0);
    message.periodTime = object.periodTime !== undefined && object.periodTime !== null ? BigInt(object.periodTime.toString()) : BigInt(0);
    message.yatContractAddress = object.yatContractAddress ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.enabled = object.enabled ?? 0;
    return message;
  },
  fromSDK(object: PlanSDKType): Plan {
    return {
      id: object?.id,
      name: object?.name,
      planDescUri: object?.plan_desc_uri,
      agentId: object?.agent_id,
      planStartTime: object?.plan_start_time,
      periodTime: object?.period_time,
      yatContractAddress: object?.yat_contract_address,
      contractAddress: object?.contract_address,
      enabled: isSet(object.enabled) ? planStatusFromJSON(object.enabled) : -1
    };
  },
  toSDK(message: Plan): PlanSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.name = message.name;
    obj.plan_desc_uri = message.planDescUri;
    obj.agent_id = message.agentId;
    obj.plan_start_time = message.planStartTime;
    obj.period_time = message.periodTime;
    obj.yat_contract_address = message.yatContractAddress;
    obj.contract_address = message.contractAddress;
    message.enabled !== undefined && (obj.enabled = planStatusToJSON(message.enabled));
    return obj;
  },
  fromAmino(object: PlanAmino): Plan {
    const message = createBasePlan();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
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
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    return message;
  },
  toAmino(message: Plan): PlanAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.plan_desc_uri = message.planDescUri === "" ? undefined : message.planDescUri;
    obj.agent_id = message.agentId !== BigInt(0) ? message.agentId.toString() : undefined;
    obj.plan_start_time = message.planStartTime !== BigInt(0) ? message.planStartTime.toString() : undefined;
    obj.period_time = message.periodTime !== BigInt(0) ? message.periodTime.toString() : undefined;
    obj.yat_contract_address = message.yatContractAddress === "" ? undefined : message.yatContractAddress;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.enabled = message.enabled === 0 ? undefined : message.enabled;
    return obj;
  },
  fromAminoMsg(object: PlanAminoMsg): Plan {
    return Plan.fromAmino(object.value);
  },
  fromProtoMsg(message: PlanProtoMsg): Plan {
    return Plan.decode(message.value);
  },
  toProto(message: Plan): Uint8Array {
    return Plan.encode(message).finish();
  },
  toProtoMsg(message: Plan): PlanProtoMsg {
    return {
      typeUrl: "/lorenzo.plan.v1.Plan",
      value: Plan.encode(message).finish()
    };
  }
};