//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Plan, PlanAmino, PlanSDKType } from "./plan";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState defines the agent module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  /** next_number is the next auto-increasing plan id */
  nextNumber: bigint;
  /** plans are the plans */
  plans: Plan[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/lorenzo.plan.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the agent module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of the module. */
  params?: ParamsAmino;
  /** next_number is the next auto-increasing plan id */
  next_number?: string;
  /** plans are the plans */
  plans?: PlanAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/lorenzo.plan.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the agent module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  next_number: bigint;
  plans: PlanSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    nextNumber: BigInt(0),
    plans: []
  };
}
export const GenesisState = {
  typeUrl: "/lorenzo.plan.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && typeof o.nextNumber === "bigint" && Array.isArray(o.plans) && (!o.plans.length || Plan.is(o.plans[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && typeof o.next_number === "bigint" && Array.isArray(o.plans) && (!o.plans.length || Plan.isSDK(o.plans[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && typeof o.next_number === "bigint" && Array.isArray(o.plans) && (!o.plans.length || Plan.isAmino(o.plans[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextNumber !== BigInt(0)) {
      writer.uint32(16).uint64(message.nextNumber);
    }
    for (const v of message.plans) {
      Plan.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.nextNumber = reader.uint64();
          break;
        case 3:
          message.plans.push(Plan.decode(reader, reader.uint32()));
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
    message.nextNumber = object.nextNumber !== undefined && object.nextNumber !== null ? BigInt(object.nextNumber.toString()) : BigInt(0);
    message.plans = object.plans?.map(e => Plan.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      nextNumber: object?.next_number,
      plans: Array.isArray(object?.plans) ? object.plans.map((e: any) => Plan.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    obj.next_number = message.nextNumber;
    if (message.plans) {
      obj.plans = message.plans.map(e => e ? Plan.toSDK(e) : undefined);
    } else {
      obj.plans = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.next_number !== undefined && object.next_number !== null) {
      message.nextNumber = BigInt(object.next_number);
    }
    message.plans = object.plans?.map(e => Plan.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.next_number = message.nextNumber !== BigInt(0) ? message.nextNumber.toString() : undefined;
    if (message.plans) {
      obj.plans = message.plans.map(e => e ? Plan.toAmino(e) : undefined);
    } else {
      obj.plans = message.plans;
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
      typeUrl: "/lorenzo.plan.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);