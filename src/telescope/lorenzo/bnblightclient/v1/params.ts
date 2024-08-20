//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** Params defines the parameters for the module. */
export interface Params {
  /** the stake plan hub contract address */
  stakePlanHubAddress: string;
  /** event_name defines the event name */
  eventName: string;
  /** the maximum number of bnb block headers to retain */
  retainedBlocks: bigint;
  /** list of people who can upload bnb block header information */
  allowList: string[];
  /** chain_id defines the bnb chain id */
  chainId: number;
}
export interface ParamsProtoMsg {
  typeUrl: "/lorenzo.bnblightclient.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /** the stake plan hub contract address */
  stake_plan_hub_address?: string;
  /** event_name defines the event name */
  event_name?: string;
  /** the maximum number of bnb block headers to retain */
  retained_blocks?: string;
  /** list of people who can upload bnb block header information */
  allow_list?: string[];
  /** chain_id defines the bnb chain id */
  chain_id?: number;
}
export interface ParamsAminoMsg {
  type: "/lorenzo.bnblightclient.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  stake_plan_hub_address: string;
  event_name: string;
  retained_blocks: bigint;
  allow_list: string[];
  chain_id: number;
}
function createBaseParams(): Params {
  return {
    stakePlanHubAddress: "",
    eventName: "",
    retainedBlocks: BigInt(0),
    allowList: [],
    chainId: 0
  };
}
export const Params = {
  typeUrl: "/lorenzo.bnblightclient.v1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.stakePlanHubAddress === "string" && typeof o.eventName === "string" && typeof o.retainedBlocks === "bigint" && Array.isArray(o.allowList) && (!o.allowList.length || typeof o.allowList[0] === "string") && typeof o.chainId === "number");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.stake_plan_hub_address === "string" && typeof o.event_name === "string" && typeof o.retained_blocks === "bigint" && Array.isArray(o.allow_list) && (!o.allow_list.length || typeof o.allow_list[0] === "string") && typeof o.chain_id === "number");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.stake_plan_hub_address === "string" && typeof o.event_name === "string" && typeof o.retained_blocks === "bigint" && Array.isArray(o.allow_list) && (!o.allow_list.length || typeof o.allow_list[0] === "string") && typeof o.chain_id === "number");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakePlanHubAddress !== "") {
      writer.uint32(10).string(message.stakePlanHubAddress);
    }
    if (message.eventName !== "") {
      writer.uint32(18).string(message.eventName);
    }
    if (message.retainedBlocks !== BigInt(0)) {
      writer.uint32(24).uint64(message.retainedBlocks);
    }
    for (const v of message.allowList) {
      writer.uint32(34).string(v!);
    }
    if (message.chainId !== 0) {
      writer.uint32(40).uint32(message.chainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakePlanHubAddress = reader.string();
          break;
        case 2:
          message.eventName = reader.string();
          break;
        case 3:
          message.retainedBlocks = reader.uint64();
          break;
        case 4:
          message.allowList.push(reader.string());
          break;
        case 5:
          message.chainId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.stakePlanHubAddress = object.stakePlanHubAddress ?? "";
    message.eventName = object.eventName ?? "";
    message.retainedBlocks = object.retainedBlocks !== undefined && object.retainedBlocks !== null ? BigInt(object.retainedBlocks.toString()) : BigInt(0);
    message.allowList = object.allowList?.map(e => e) || [];
    message.chainId = object.chainId ?? 0;
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      stakePlanHubAddress: object?.stake_plan_hub_address,
      eventName: object?.event_name,
      retainedBlocks: object?.retained_blocks,
      allowList: Array.isArray(object?.allow_list) ? object.allow_list.map((e: any) => e) : [],
      chainId: object?.chain_id
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.stake_plan_hub_address = message.stakePlanHubAddress;
    obj.event_name = message.eventName;
    obj.retained_blocks = message.retainedBlocks;
    if (message.allowList) {
      obj.allow_list = message.allowList.map(e => e);
    } else {
      obj.allow_list = [];
    }
    obj.chain_id = message.chainId;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.stake_plan_hub_address !== undefined && object.stake_plan_hub_address !== null) {
      message.stakePlanHubAddress = object.stake_plan_hub_address;
    }
    if (object.event_name !== undefined && object.event_name !== null) {
      message.eventName = object.event_name;
    }
    if (object.retained_blocks !== undefined && object.retained_blocks !== null) {
      message.retainedBlocks = BigInt(object.retained_blocks);
    }
    message.allowList = object.allow_list?.map(e => e) || [];
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.stake_plan_hub_address = message.stakePlanHubAddress === "" ? undefined : message.stakePlanHubAddress;
    obj.event_name = message.eventName === "" ? undefined : message.eventName;
    obj.retained_blocks = message.retainedBlocks !== BigInt(0) ? message.retainedBlocks.toString() : undefined;
    if (message.allowList) {
      obj.allow_list = message.allowList.map(e => e);
    } else {
      obj.allow_list = message.allowList;
    }
    obj.chain_id = message.chainId === 0 ? undefined : message.chainId;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/lorenzo.bnblightclient.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);