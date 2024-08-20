//@ts-nocheck
import { BTCStakingRecord, BTCStakingRecordAmino, BTCStakingRecordSDKType, BTCBStakingRecord, BTCBStakingRecordAmino, BTCBStakingRecordSDKType } from "./staking_record";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** BTC staking creation event */
export interface EventBTCStakingCreated {
  record?: BTCStakingRecord;
}
export interface EventBTCStakingCreatedProtoMsg {
  typeUrl: "/lorenzo.btcstaking.v1.EventBTCStakingCreated";
  value: Uint8Array;
}
/** BTC staking creation event */
export interface EventBTCStakingCreatedAmino {
  record?: BTCStakingRecordAmino;
}
export interface EventBTCStakingCreatedAminoMsg {
  type: "/lorenzo.btcstaking.v1.EventBTCStakingCreated";
  value: EventBTCStakingCreatedAmino;
}
/** BTC staking creation event */
export interface EventBTCStakingCreatedSDKType {
  record?: BTCStakingRecordSDKType;
}
/** BTCB staking creation event */
export interface EventBTCBStakingCreated {
  record?: BTCBStakingRecord;
}
export interface EventBTCBStakingCreatedProtoMsg {
  typeUrl: "/lorenzo.btcstaking.v1.EventBTCBStakingCreated";
  value: Uint8Array;
}
/** BTCB staking creation event */
export interface EventBTCBStakingCreatedAmino {
  record?: BTCBStakingRecordAmino;
}
export interface EventBTCBStakingCreatedAminoMsg {
  type: "/lorenzo.btcstaking.v1.EventBTCBStakingCreated";
  value: EventBTCBStakingCreatedAmino;
}
/** BTCB staking creation event */
export interface EventBTCBStakingCreatedSDKType {
  record?: BTCBStakingRecordSDKType;
}
export interface EventBurnCreated {
  signer: string;
  btcTargetAddress: string;
  amount: Coin;
}
export interface EventBurnCreatedProtoMsg {
  typeUrl: "/lorenzo.btcstaking.v1.EventBurnCreated";
  value: Uint8Array;
}
export interface EventBurnCreatedAmino {
  signer?: string;
  btc_target_address?: string;
  amount?: CoinAmino;
}
export interface EventBurnCreatedAminoMsg {
  type: "/lorenzo.btcstaking.v1.EventBurnCreated";
  value: EventBurnCreatedAmino;
}
export interface EventBurnCreatedSDKType {
  signer: string;
  btc_target_address: string;
  amount: CoinSDKType;
}
function createBaseEventBTCStakingCreated(): EventBTCStakingCreated {
  return {
    record: undefined
  };
}
export const EventBTCStakingCreated = {
  typeUrl: "/lorenzo.btcstaking.v1.EventBTCStakingCreated",
  is(o: any): o is EventBTCStakingCreated {
    return o && o.$typeUrl === EventBTCStakingCreated.typeUrl;
  },
  isSDK(o: any): o is EventBTCStakingCreatedSDKType {
    return o && o.$typeUrl === EventBTCStakingCreated.typeUrl;
  },
  isAmino(o: any): o is EventBTCStakingCreatedAmino {
    return o && o.$typeUrl === EventBTCStakingCreated.typeUrl;
  },
  encode(message: EventBTCStakingCreated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.record !== undefined) {
      BTCStakingRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBTCStakingCreated {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBTCStakingCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = BTCStakingRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventBTCStakingCreated>): EventBTCStakingCreated {
    const message = createBaseEventBTCStakingCreated();
    message.record = object.record !== undefined && object.record !== null ? BTCStakingRecord.fromPartial(object.record) : undefined;
    return message;
  },
  fromSDK(object: EventBTCStakingCreatedSDKType): EventBTCStakingCreated {
    return {
      record: object.record ? BTCStakingRecord.fromSDK(object.record) : undefined
    };
  },
  toSDK(message: EventBTCStakingCreated): EventBTCStakingCreatedSDKType {
    const obj: any = {};
    message.record !== undefined && (obj.record = message.record ? BTCStakingRecord.toSDK(message.record) : undefined);
    return obj;
  },
  fromAmino(object: EventBTCStakingCreatedAmino): EventBTCStakingCreated {
    const message = createBaseEventBTCStakingCreated();
    if (object.record !== undefined && object.record !== null) {
      message.record = BTCStakingRecord.fromAmino(object.record);
    }
    return message;
  },
  toAmino(message: EventBTCStakingCreated): EventBTCStakingCreatedAmino {
    const obj: any = {};
    obj.record = message.record ? BTCStakingRecord.toAmino(message.record) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBTCStakingCreatedAminoMsg): EventBTCStakingCreated {
    return EventBTCStakingCreated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBTCStakingCreatedProtoMsg): EventBTCStakingCreated {
    return EventBTCStakingCreated.decode(message.value);
  },
  toProto(message: EventBTCStakingCreated): Uint8Array {
    return EventBTCStakingCreated.encode(message).finish();
  },
  toProtoMsg(message: EventBTCStakingCreated): EventBTCStakingCreatedProtoMsg {
    return {
      typeUrl: "/lorenzo.btcstaking.v1.EventBTCStakingCreated",
      value: EventBTCStakingCreated.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventBTCStakingCreated.typeUrl, EventBTCStakingCreated);
function createBaseEventBTCBStakingCreated(): EventBTCBStakingCreated {
  return {
    record: undefined
  };
}
export const EventBTCBStakingCreated = {
  typeUrl: "/lorenzo.btcstaking.v1.EventBTCBStakingCreated",
  is(o: any): o is EventBTCBStakingCreated {
    return o && o.$typeUrl === EventBTCBStakingCreated.typeUrl;
  },
  isSDK(o: any): o is EventBTCBStakingCreatedSDKType {
    return o && o.$typeUrl === EventBTCBStakingCreated.typeUrl;
  },
  isAmino(o: any): o is EventBTCBStakingCreatedAmino {
    return o && o.$typeUrl === EventBTCBStakingCreated.typeUrl;
  },
  encode(message: EventBTCBStakingCreated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.record !== undefined) {
      BTCBStakingRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBTCBStakingCreated {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBTCBStakingCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = BTCBStakingRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventBTCBStakingCreated>): EventBTCBStakingCreated {
    const message = createBaseEventBTCBStakingCreated();
    message.record = object.record !== undefined && object.record !== null ? BTCBStakingRecord.fromPartial(object.record) : undefined;
    return message;
  },
  fromSDK(object: EventBTCBStakingCreatedSDKType): EventBTCBStakingCreated {
    return {
      record: object.record ? BTCBStakingRecord.fromSDK(object.record) : undefined
    };
  },
  toSDK(message: EventBTCBStakingCreated): EventBTCBStakingCreatedSDKType {
    const obj: any = {};
    message.record !== undefined && (obj.record = message.record ? BTCBStakingRecord.toSDK(message.record) : undefined);
    return obj;
  },
  fromAmino(object: EventBTCBStakingCreatedAmino): EventBTCBStakingCreated {
    const message = createBaseEventBTCBStakingCreated();
    if (object.record !== undefined && object.record !== null) {
      message.record = BTCBStakingRecord.fromAmino(object.record);
    }
    return message;
  },
  toAmino(message: EventBTCBStakingCreated): EventBTCBStakingCreatedAmino {
    const obj: any = {};
    obj.record = message.record ? BTCBStakingRecord.toAmino(message.record) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBTCBStakingCreatedAminoMsg): EventBTCBStakingCreated {
    return EventBTCBStakingCreated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBTCBStakingCreatedProtoMsg): EventBTCBStakingCreated {
    return EventBTCBStakingCreated.decode(message.value);
  },
  toProto(message: EventBTCBStakingCreated): Uint8Array {
    return EventBTCBStakingCreated.encode(message).finish();
  },
  toProtoMsg(message: EventBTCBStakingCreated): EventBTCBStakingCreatedProtoMsg {
    return {
      typeUrl: "/lorenzo.btcstaking.v1.EventBTCBStakingCreated",
      value: EventBTCBStakingCreated.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventBTCBStakingCreated.typeUrl, EventBTCBStakingCreated);
function createBaseEventBurnCreated(): EventBurnCreated {
  return {
    signer: "",
    btcTargetAddress: "",
    amount: Coin.fromPartial({})
  };
}
export const EventBurnCreated = {
  typeUrl: "/lorenzo.btcstaking.v1.EventBurnCreated",
  is(o: any): o is EventBurnCreated {
    return o && (o.$typeUrl === EventBurnCreated.typeUrl || typeof o.signer === "string" && typeof o.btcTargetAddress === "string" && Coin.is(o.amount));
  },
  isSDK(o: any): o is EventBurnCreatedSDKType {
    return o && (o.$typeUrl === EventBurnCreated.typeUrl || typeof o.signer === "string" && typeof o.btc_target_address === "string" && Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is EventBurnCreatedAmino {
    return o && (o.$typeUrl === EventBurnCreated.typeUrl || typeof o.signer === "string" && typeof o.btc_target_address === "string" && Coin.isAmino(o.amount));
  },
  encode(message: EventBurnCreated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.btcTargetAddress !== "") {
      writer.uint32(18).string(message.btcTargetAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBurnCreated {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBurnCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.btcTargetAddress = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventBurnCreated>): EventBurnCreated {
    const message = createBaseEventBurnCreated();
    message.signer = object.signer ?? "";
    message.btcTargetAddress = object.btcTargetAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromSDK(object: EventBurnCreatedSDKType): EventBurnCreated {
    return {
      signer: object?.signer,
      btcTargetAddress: object?.btc_target_address,
      amount: object.amount ? Coin.fromSDK(object.amount) : undefined
    };
  },
  toSDK(message: EventBurnCreated): EventBurnCreatedSDKType {
    const obj: any = {};
    obj.signer = message.signer;
    obj.btc_target_address = message.btcTargetAddress;
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toSDK(message.amount) : undefined);
    return obj;
  },
  fromAmino(object: EventBurnCreatedAmino): EventBurnCreated {
    const message = createBaseEventBurnCreated();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.btc_target_address !== undefined && object.btc_target_address !== null) {
      message.btcTargetAddress = object.btc_target_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: EventBurnCreated): EventBurnCreatedAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.btc_target_address = message.btcTargetAddress === "" ? undefined : message.btcTargetAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBurnCreatedAminoMsg): EventBurnCreated {
    return EventBurnCreated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBurnCreatedProtoMsg): EventBurnCreated {
    return EventBurnCreated.decode(message.value);
  },
  toProto(message: EventBurnCreated): Uint8Array {
    return EventBurnCreated.encode(message).finish();
  },
  toProtoMsg(message: EventBurnCreated): EventBurnCreatedProtoMsg {
    return {
      typeUrl: "/lorenzo.btcstaking.v1.EventBurnCreated",
      value: EventBurnCreated.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventBurnCreated.typeUrl, EventBurnCreated);