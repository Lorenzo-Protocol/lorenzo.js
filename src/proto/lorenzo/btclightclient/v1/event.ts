import { BTCHeaderInfo, BTCHeaderInfoAmino, BTCHeaderInfoSDKType } from "./btclightclient";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * The header included in the event is the block in the history
 * of the current mainchain to which we are rolling back to.
 * In other words, there is one rollback event emitted per re-org, to the
 * greatest common ancestor of the old and the new fork.
 */
export interface EventBTCRollBack {
  header?: BTCHeaderInfo;
}
export interface EventBTCRollBackProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.EventBTCRollBack";
  value: Uint8Array;
}
/**
 * The header included in the event is the block in the history
 * of the current mainchain to which we are rolling back to.
 * In other words, there is one rollback event emitted per re-org, to the
 * greatest common ancestor of the old and the new fork.
 */
export interface EventBTCRollBackAmino {
  header?: BTCHeaderInfoAmino;
}
export interface EventBTCRollBackAminoMsg {
  type: "/lorenzo.btclightclient.v1.EventBTCRollBack";
  value: EventBTCRollBackAmino;
}
/**
 * The header included in the event is the block in the history
 * of the current mainchain to which we are rolling back to.
 * In other words, there is one rollback event emitted per re-org, to the
 * greatest common ancestor of the old and the new fork.
 */
export interface EventBTCRollBackSDKType {
  header?: BTCHeaderInfoSDKType;
}
/**
 * EventBTCRollForward is emitted on Msg/InsertHeader
 * The header included in the event is the one the main chain is extended with.
 * In the event of a reorg, each block on the new fork that comes after
 * the greatest common ancestor will have a corresponding roll forward event.
 */
export interface EventBTCRollForward {
  header?: BTCHeaderInfo;
}
export interface EventBTCRollForwardProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.EventBTCRollForward";
  value: Uint8Array;
}
/**
 * EventBTCRollForward is emitted on Msg/InsertHeader
 * The header included in the event is the one the main chain is extended with.
 * In the event of a reorg, each block on the new fork that comes after
 * the greatest common ancestor will have a corresponding roll forward event.
 */
export interface EventBTCRollForwardAmino {
  header?: BTCHeaderInfoAmino;
}
export interface EventBTCRollForwardAminoMsg {
  type: "/lorenzo.btclightclient.v1.EventBTCRollForward";
  value: EventBTCRollForwardAmino;
}
/**
 * EventBTCRollForward is emitted on Msg/InsertHeader
 * The header included in the event is the one the main chain is extended with.
 * In the event of a reorg, each block on the new fork that comes after
 * the greatest common ancestor will have a corresponding roll forward event.
 */
export interface EventBTCRollForwardSDKType {
  header?: BTCHeaderInfoSDKType;
}
/**
 * EventBTCHeaderInserted is emitted on Msg/InsertHeader
 * The header included in the event is the one that was added to the
 * on chain BTC storage.
 */
export interface EventBTCHeaderInserted {
  header?: BTCHeaderInfo;
}
export interface EventBTCHeaderInsertedProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.EventBTCHeaderInserted";
  value: Uint8Array;
}
/**
 * EventBTCHeaderInserted is emitted on Msg/InsertHeader
 * The header included in the event is the one that was added to the
 * on chain BTC storage.
 */
export interface EventBTCHeaderInsertedAmino {
  header?: BTCHeaderInfoAmino;
}
export interface EventBTCHeaderInsertedAminoMsg {
  type: "/lorenzo.btclightclient.v1.EventBTCHeaderInserted";
  value: EventBTCHeaderInsertedAmino;
}
/**
 * EventBTCHeaderInserted is emitted on Msg/InsertHeader
 * The header included in the event is the one that was added to the
 * on chain BTC storage.
 */
export interface EventBTCHeaderInsertedSDKType {
  header?: BTCHeaderInfoSDKType;
}
export interface EventBTCFeeRateUpdated {
  feeRate: bigint;
}
export interface EventBTCFeeRateUpdatedProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.EventBTCFeeRateUpdated";
  value: Uint8Array;
}
export interface EventBTCFeeRateUpdatedAmino {
  fee_rate?: string;
}
export interface EventBTCFeeRateUpdatedAminoMsg {
  type: "/lorenzo.btclightclient.v1.EventBTCFeeRateUpdated";
  value: EventBTCFeeRateUpdatedAmino;
}
export interface EventBTCFeeRateUpdatedSDKType {
  fee_rate: bigint;
}
function createBaseEventBTCRollBack(): EventBTCRollBack {
  return {
    header: undefined
  };
}
export const EventBTCRollBack = {
  typeUrl: "/lorenzo.btclightclient.v1.EventBTCRollBack",
  encode(message: EventBTCRollBack, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.header !== undefined) {
      BTCHeaderInfo.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBTCRollBack {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBTCRollBack();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = BTCHeaderInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventBTCRollBack>): EventBTCRollBack {
    const message = createBaseEventBTCRollBack();
    message.header = object.header !== undefined && object.header !== null ? BTCHeaderInfo.fromPartial(object.header) : undefined;
    return message;
  },
  fromSDK(object: EventBTCRollBackSDKType): EventBTCRollBack {
    return {
      header: object.header ? BTCHeaderInfo.fromSDK(object.header) : undefined
    };
  },
  toSDK(message: EventBTCRollBack): EventBTCRollBackSDKType {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? BTCHeaderInfo.toSDK(message.header) : undefined);
    return obj;
  },
  fromAmino(object: EventBTCRollBackAmino): EventBTCRollBack {
    const message = createBaseEventBTCRollBack();
    if (object.header !== undefined && object.header !== null) {
      message.header = BTCHeaderInfo.fromAmino(object.header);
    }
    return message;
  },
  toAmino(message: EventBTCRollBack): EventBTCRollBackAmino {
    const obj: any = {};
    obj.header = message.header ? BTCHeaderInfo.toAmino(message.header) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBTCRollBackAminoMsg): EventBTCRollBack {
    return EventBTCRollBack.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBTCRollBackProtoMsg): EventBTCRollBack {
    return EventBTCRollBack.decode(message.value);
  },
  toProto(message: EventBTCRollBack): Uint8Array {
    return EventBTCRollBack.encode(message).finish();
  },
  toProtoMsg(message: EventBTCRollBack): EventBTCRollBackProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.EventBTCRollBack",
      value: EventBTCRollBack.encode(message).finish()
    };
  }
};
function createBaseEventBTCRollForward(): EventBTCRollForward {
  return {
    header: undefined
  };
}
export const EventBTCRollForward = {
  typeUrl: "/lorenzo.btclightclient.v1.EventBTCRollForward",
  encode(message: EventBTCRollForward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.header !== undefined) {
      BTCHeaderInfo.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBTCRollForward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBTCRollForward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = BTCHeaderInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventBTCRollForward>): EventBTCRollForward {
    const message = createBaseEventBTCRollForward();
    message.header = object.header !== undefined && object.header !== null ? BTCHeaderInfo.fromPartial(object.header) : undefined;
    return message;
  },
  fromSDK(object: EventBTCRollForwardSDKType): EventBTCRollForward {
    return {
      header: object.header ? BTCHeaderInfo.fromSDK(object.header) : undefined
    };
  },
  toSDK(message: EventBTCRollForward): EventBTCRollForwardSDKType {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? BTCHeaderInfo.toSDK(message.header) : undefined);
    return obj;
  },
  fromAmino(object: EventBTCRollForwardAmino): EventBTCRollForward {
    const message = createBaseEventBTCRollForward();
    if (object.header !== undefined && object.header !== null) {
      message.header = BTCHeaderInfo.fromAmino(object.header);
    }
    return message;
  },
  toAmino(message: EventBTCRollForward): EventBTCRollForwardAmino {
    const obj: any = {};
    obj.header = message.header ? BTCHeaderInfo.toAmino(message.header) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBTCRollForwardAminoMsg): EventBTCRollForward {
    return EventBTCRollForward.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBTCRollForwardProtoMsg): EventBTCRollForward {
    return EventBTCRollForward.decode(message.value);
  },
  toProto(message: EventBTCRollForward): Uint8Array {
    return EventBTCRollForward.encode(message).finish();
  },
  toProtoMsg(message: EventBTCRollForward): EventBTCRollForwardProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.EventBTCRollForward",
      value: EventBTCRollForward.encode(message).finish()
    };
  }
};
function createBaseEventBTCHeaderInserted(): EventBTCHeaderInserted {
  return {
    header: undefined
  };
}
export const EventBTCHeaderInserted = {
  typeUrl: "/lorenzo.btclightclient.v1.EventBTCHeaderInserted",
  encode(message: EventBTCHeaderInserted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.header !== undefined) {
      BTCHeaderInfo.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBTCHeaderInserted {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBTCHeaderInserted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = BTCHeaderInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventBTCHeaderInserted>): EventBTCHeaderInserted {
    const message = createBaseEventBTCHeaderInserted();
    message.header = object.header !== undefined && object.header !== null ? BTCHeaderInfo.fromPartial(object.header) : undefined;
    return message;
  },
  fromSDK(object: EventBTCHeaderInsertedSDKType): EventBTCHeaderInserted {
    return {
      header: object.header ? BTCHeaderInfo.fromSDK(object.header) : undefined
    };
  },
  toSDK(message: EventBTCHeaderInserted): EventBTCHeaderInsertedSDKType {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? BTCHeaderInfo.toSDK(message.header) : undefined);
    return obj;
  },
  fromAmino(object: EventBTCHeaderInsertedAmino): EventBTCHeaderInserted {
    const message = createBaseEventBTCHeaderInserted();
    if (object.header !== undefined && object.header !== null) {
      message.header = BTCHeaderInfo.fromAmino(object.header);
    }
    return message;
  },
  toAmino(message: EventBTCHeaderInserted): EventBTCHeaderInsertedAmino {
    const obj: any = {};
    obj.header = message.header ? BTCHeaderInfo.toAmino(message.header) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBTCHeaderInsertedAminoMsg): EventBTCHeaderInserted {
    return EventBTCHeaderInserted.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBTCHeaderInsertedProtoMsg): EventBTCHeaderInserted {
    return EventBTCHeaderInserted.decode(message.value);
  },
  toProto(message: EventBTCHeaderInserted): Uint8Array {
    return EventBTCHeaderInserted.encode(message).finish();
  },
  toProtoMsg(message: EventBTCHeaderInserted): EventBTCHeaderInsertedProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.EventBTCHeaderInserted",
      value: EventBTCHeaderInserted.encode(message).finish()
    };
  }
};
function createBaseEventBTCFeeRateUpdated(): EventBTCFeeRateUpdated {
  return {
    feeRate: BigInt(0)
  };
}
export const EventBTCFeeRateUpdated = {
  typeUrl: "/lorenzo.btclightclient.v1.EventBTCFeeRateUpdated",
  encode(message: EventBTCFeeRateUpdated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeRate !== BigInt(0)) {
      writer.uint32(8).uint64(message.feeRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBTCFeeRateUpdated {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBTCFeeRateUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeRate = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventBTCFeeRateUpdated>): EventBTCFeeRateUpdated {
    const message = createBaseEventBTCFeeRateUpdated();
    message.feeRate = object.feeRate !== undefined && object.feeRate !== null ? BigInt(object.feeRate.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: EventBTCFeeRateUpdatedSDKType): EventBTCFeeRateUpdated {
    return {
      feeRate: object?.fee_rate
    };
  },
  toSDK(message: EventBTCFeeRateUpdated): EventBTCFeeRateUpdatedSDKType {
    const obj: any = {};
    obj.fee_rate = message.feeRate;
    return obj;
  },
  fromAmino(object: EventBTCFeeRateUpdatedAmino): EventBTCFeeRateUpdated {
    const message = createBaseEventBTCFeeRateUpdated();
    if (object.fee_rate !== undefined && object.fee_rate !== null) {
      message.feeRate = BigInt(object.fee_rate);
    }
    return message;
  },
  toAmino(message: EventBTCFeeRateUpdated): EventBTCFeeRateUpdatedAmino {
    const obj: any = {};
    obj.fee_rate = message.feeRate !== BigInt(0) ? message.feeRate.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBTCFeeRateUpdatedAminoMsg): EventBTCFeeRateUpdated {
    return EventBTCFeeRateUpdated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBTCFeeRateUpdatedProtoMsg): EventBTCFeeRateUpdated {
    return EventBTCFeeRateUpdated.decode(message.value);
  },
  toProto(message: EventBTCFeeRateUpdated): Uint8Array {
    return EventBTCFeeRateUpdated.encode(message).finish();
  },
  toProtoMsg(message: EventBTCFeeRateUpdated): EventBTCFeeRateUpdatedProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.EventBTCFeeRateUpdated",
      value: EventBTCFeeRateUpdated.encode(message).finish()
    };
  }
};