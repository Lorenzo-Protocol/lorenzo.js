//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** EventRegisterCoin is an event emitted when a coin is registered. */
export interface EventRegisterPair {
  /** sdk coin denomination */
  denom: string;
  /** erc20 contract address */
  contractAddress: string;
}
export interface EventRegisterPairProtoMsg {
  typeUrl: "/lorenzo.token.v1.EventRegisterPair";
  value: Uint8Array;
}
/** EventRegisterCoin is an event emitted when a coin is registered. */
export interface EventRegisterPairAmino {
  /** sdk coin denomination */
  denom?: string;
  /** erc20 contract address */
  contract_address?: string;
}
export interface EventRegisterPairAminoMsg {
  type: "/lorenzo.token.v1.EventRegisterPair";
  value: EventRegisterPairAmino;
}
/** EventRegisterCoin is an event emitted when a coin is registered. */
export interface EventRegisterPairSDKType {
  denom: string;
  contract_address: string;
}
/**
 * EventToggleTokenConversion is an event emitted when a coin's token conversion
 * is toggled.
 */
export interface EventToggleTokenConversion {
  /** sdk coin denomination */
  denom: string;
  /** erc20 contract address */
  contractAddress: string;
}
export interface EventToggleTokenConversionProtoMsg {
  typeUrl: "/lorenzo.token.v1.EventToggleTokenConversion";
  value: Uint8Array;
}
/**
 * EventToggleTokenConversion is an event emitted when a coin's token conversion
 * is toggled.
 */
export interface EventToggleTokenConversionAmino {
  /** sdk coin denomination */
  denom?: string;
  /** erc20 contract address */
  contract_address?: string;
}
export interface EventToggleTokenConversionAminoMsg {
  type: "/lorenzo.token.v1.EventToggleTokenConversion";
  value: EventToggleTokenConversionAmino;
}
/**
 * EventToggleTokenConversion is an event emitted when a coin's token conversion
 * is toggled.
 */
export interface EventToggleTokenConversionSDKType {
  denom: string;
  contract_address: string;
}
/** EventConvertCoin is an event emitted when a coin is converted. */
export interface EventConvertCoin {
  /** sender address */
  sender: string;
  /** receiver address */
  receiver: string;
  /** amount of coins to be converted */
  amount: string;
  /** coin denomination */
  denom: string;
  /** erc20 contract address */
  contractAddress: string;
}
export interface EventConvertCoinProtoMsg {
  typeUrl: "/lorenzo.token.v1.EventConvertCoin";
  value: Uint8Array;
}
/** EventConvertCoin is an event emitted when a coin is converted. */
export interface EventConvertCoinAmino {
  /** sender address */
  sender?: string;
  /** receiver address */
  receiver?: string;
  /** amount of coins to be converted */
  amount?: string;
  /** coin denomination */
  denom?: string;
  /** erc20 contract address */
  contract_address?: string;
}
export interface EventConvertCoinAminoMsg {
  type: "/lorenzo.token.v1.EventConvertCoin";
  value: EventConvertCoinAmino;
}
/** EventConvertCoin is an event emitted when a coin is converted. */
export interface EventConvertCoinSDKType {
  sender: string;
  receiver: string;
  amount: string;
  denom: string;
  contract_address: string;
}
/** EventConvertERC20 is an event emitted when an ERC20 is converted. */
export interface EventConvertERC20 {
  /** sender address */
  sender: string;
  /** receiver address */
  receiver: string;
  /** amount of tokens to be converted */
  amount: string;
  /** coin denomination */
  denom: string;
  /** erc20 contract address */
  contractAddress: string;
}
export interface EventConvertERC20ProtoMsg {
  typeUrl: "/lorenzo.token.v1.EventConvertERC20";
  value: Uint8Array;
}
/** EventConvertERC20 is an event emitted when an ERC20 is converted. */
export interface EventConvertERC20Amino {
  /** sender address */
  sender?: string;
  /** receiver address */
  receiver?: string;
  /** amount of tokens to be converted */
  amount?: string;
  /** coin denomination */
  denom?: string;
  /** erc20 contract address */
  contract_address?: string;
}
export interface EventConvertERC20AminoMsg {
  type: "/lorenzo.token.v1.EventConvertERC20";
  value: EventConvertERC20Amino;
}
/** EventConvertERC20 is an event emitted when an ERC20 is converted. */
export interface EventConvertERC20SDKType {
  sender: string;
  receiver: string;
  amount: string;
  denom: string;
  contract_address: string;
}
function createBaseEventRegisterPair(): EventRegisterPair {
  return {
    denom: "",
    contractAddress: ""
  };
}
export const EventRegisterPair = {
  typeUrl: "/lorenzo.token.v1.EventRegisterPair",
  is(o: any): o is EventRegisterPair {
    return o && (o.$typeUrl === EventRegisterPair.typeUrl || typeof o.denom === "string" && typeof o.contractAddress === "string");
  },
  isSDK(o: any): o is EventRegisterPairSDKType {
    return o && (o.$typeUrl === EventRegisterPair.typeUrl || typeof o.denom === "string" && typeof o.contract_address === "string");
  },
  isAmino(o: any): o is EventRegisterPairAmino {
    return o && (o.$typeUrl === EventRegisterPair.typeUrl || typeof o.denom === "string" && typeof o.contract_address === "string");
  },
  encode(message: EventRegisterPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventRegisterPair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRegisterPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventRegisterPair>): EventRegisterPair {
    const message = createBaseEventRegisterPair();
    message.denom = object.denom ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromSDK(object: EventRegisterPairSDKType): EventRegisterPair {
    return {
      denom: object?.denom,
      contractAddress: object?.contract_address
    };
  },
  toSDK(message: EventRegisterPair): EventRegisterPairSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAmino(object: EventRegisterPairAmino): EventRegisterPair {
    const message = createBaseEventRegisterPair();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: EventRegisterPair): EventRegisterPairAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: EventRegisterPairAminoMsg): EventRegisterPair {
    return EventRegisterPair.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRegisterPairProtoMsg): EventRegisterPair {
    return EventRegisterPair.decode(message.value);
  },
  toProto(message: EventRegisterPair): Uint8Array {
    return EventRegisterPair.encode(message).finish();
  },
  toProtoMsg(message: EventRegisterPair): EventRegisterPairProtoMsg {
    return {
      typeUrl: "/lorenzo.token.v1.EventRegisterPair",
      value: EventRegisterPair.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventRegisterPair.typeUrl, EventRegisterPair);
function createBaseEventToggleTokenConversion(): EventToggleTokenConversion {
  return {
    denom: "",
    contractAddress: ""
  };
}
export const EventToggleTokenConversion = {
  typeUrl: "/lorenzo.token.v1.EventToggleTokenConversion",
  is(o: any): o is EventToggleTokenConversion {
    return o && (o.$typeUrl === EventToggleTokenConversion.typeUrl || typeof o.denom === "string" && typeof o.contractAddress === "string");
  },
  isSDK(o: any): o is EventToggleTokenConversionSDKType {
    return o && (o.$typeUrl === EventToggleTokenConversion.typeUrl || typeof o.denom === "string" && typeof o.contract_address === "string");
  },
  isAmino(o: any): o is EventToggleTokenConversionAmino {
    return o && (o.$typeUrl === EventToggleTokenConversion.typeUrl || typeof o.denom === "string" && typeof o.contract_address === "string");
  },
  encode(message: EventToggleTokenConversion, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventToggleTokenConversion {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventToggleTokenConversion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventToggleTokenConversion>): EventToggleTokenConversion {
    const message = createBaseEventToggleTokenConversion();
    message.denom = object.denom ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromSDK(object: EventToggleTokenConversionSDKType): EventToggleTokenConversion {
    return {
      denom: object?.denom,
      contractAddress: object?.contract_address
    };
  },
  toSDK(message: EventToggleTokenConversion): EventToggleTokenConversionSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAmino(object: EventToggleTokenConversionAmino): EventToggleTokenConversion {
    const message = createBaseEventToggleTokenConversion();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: EventToggleTokenConversion): EventToggleTokenConversionAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: EventToggleTokenConversionAminoMsg): EventToggleTokenConversion {
    return EventToggleTokenConversion.fromAmino(object.value);
  },
  fromProtoMsg(message: EventToggleTokenConversionProtoMsg): EventToggleTokenConversion {
    return EventToggleTokenConversion.decode(message.value);
  },
  toProto(message: EventToggleTokenConversion): Uint8Array {
    return EventToggleTokenConversion.encode(message).finish();
  },
  toProtoMsg(message: EventToggleTokenConversion): EventToggleTokenConversionProtoMsg {
    return {
      typeUrl: "/lorenzo.token.v1.EventToggleTokenConversion",
      value: EventToggleTokenConversion.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventToggleTokenConversion.typeUrl, EventToggleTokenConversion);
function createBaseEventConvertCoin(): EventConvertCoin {
  return {
    sender: "",
    receiver: "",
    amount: "",
    denom: "",
    contractAddress: ""
  };
}
export const EventConvertCoin = {
  typeUrl: "/lorenzo.token.v1.EventConvertCoin",
  is(o: any): o is EventConvertCoin {
    return o && (o.$typeUrl === EventConvertCoin.typeUrl || typeof o.sender === "string" && typeof o.receiver === "string" && typeof o.amount === "string" && typeof o.denom === "string" && typeof o.contractAddress === "string");
  },
  isSDK(o: any): o is EventConvertCoinSDKType {
    return o && (o.$typeUrl === EventConvertCoin.typeUrl || typeof o.sender === "string" && typeof o.receiver === "string" && typeof o.amount === "string" && typeof o.denom === "string" && typeof o.contract_address === "string");
  },
  isAmino(o: any): o is EventConvertCoinAmino {
    return o && (o.$typeUrl === EventConvertCoin.typeUrl || typeof o.sender === "string" && typeof o.receiver === "string" && typeof o.amount === "string" && typeof o.denom === "string" && typeof o.contract_address === "string");
  },
  encode(message: EventConvertCoin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (message.contractAddress !== "") {
      writer.uint32(42).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventConvertCoin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventConvertCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.denom = reader.string();
          break;
        case 5:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventConvertCoin>): EventConvertCoin {
    const message = createBaseEventConvertCoin();
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromSDK(object: EventConvertCoinSDKType): EventConvertCoin {
    return {
      sender: object?.sender,
      receiver: object?.receiver,
      amount: object?.amount,
      denom: object?.denom,
      contractAddress: object?.contract_address
    };
  },
  toSDK(message: EventConvertCoin): EventConvertCoinSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.receiver = message.receiver;
    obj.amount = message.amount;
    obj.denom = message.denom;
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAmino(object: EventConvertCoinAmino): EventConvertCoin {
    const message = createBaseEventConvertCoin();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: EventConvertCoin): EventConvertCoinAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: EventConvertCoinAminoMsg): EventConvertCoin {
    return EventConvertCoin.fromAmino(object.value);
  },
  fromProtoMsg(message: EventConvertCoinProtoMsg): EventConvertCoin {
    return EventConvertCoin.decode(message.value);
  },
  toProto(message: EventConvertCoin): Uint8Array {
    return EventConvertCoin.encode(message).finish();
  },
  toProtoMsg(message: EventConvertCoin): EventConvertCoinProtoMsg {
    return {
      typeUrl: "/lorenzo.token.v1.EventConvertCoin",
      value: EventConvertCoin.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventConvertCoin.typeUrl, EventConvertCoin);
function createBaseEventConvertERC20(): EventConvertERC20 {
  return {
    sender: "",
    receiver: "",
    amount: "",
    denom: "",
    contractAddress: ""
  };
}
export const EventConvertERC20 = {
  typeUrl: "/lorenzo.token.v1.EventConvertERC20",
  is(o: any): o is EventConvertERC20 {
    return o && (o.$typeUrl === EventConvertERC20.typeUrl || typeof o.sender === "string" && typeof o.receiver === "string" && typeof o.amount === "string" && typeof o.denom === "string" && typeof o.contractAddress === "string");
  },
  isSDK(o: any): o is EventConvertERC20SDKType {
    return o && (o.$typeUrl === EventConvertERC20.typeUrl || typeof o.sender === "string" && typeof o.receiver === "string" && typeof o.amount === "string" && typeof o.denom === "string" && typeof o.contract_address === "string");
  },
  isAmino(o: any): o is EventConvertERC20Amino {
    return o && (o.$typeUrl === EventConvertERC20.typeUrl || typeof o.sender === "string" && typeof o.receiver === "string" && typeof o.amount === "string" && typeof o.denom === "string" && typeof o.contract_address === "string");
  },
  encode(message: EventConvertERC20, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (message.contractAddress !== "") {
      writer.uint32(42).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventConvertERC20 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventConvertERC20();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.denom = reader.string();
          break;
        case 5:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventConvertERC20>): EventConvertERC20 {
    const message = createBaseEventConvertERC20();
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromSDK(object: EventConvertERC20SDKType): EventConvertERC20 {
    return {
      sender: object?.sender,
      receiver: object?.receiver,
      amount: object?.amount,
      denom: object?.denom,
      contractAddress: object?.contract_address
    };
  },
  toSDK(message: EventConvertERC20): EventConvertERC20SDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.receiver = message.receiver;
    obj.amount = message.amount;
    obj.denom = message.denom;
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAmino(object: EventConvertERC20Amino): EventConvertERC20 {
    const message = createBaseEventConvertERC20();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: EventConvertERC20): EventConvertERC20Amino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: EventConvertERC20AminoMsg): EventConvertERC20 {
    return EventConvertERC20.fromAmino(object.value);
  },
  fromProtoMsg(message: EventConvertERC20ProtoMsg): EventConvertERC20 {
    return EventConvertERC20.decode(message.value);
  },
  toProto(message: EventConvertERC20): Uint8Array {
    return EventConvertERC20.encode(message).finish();
  },
  toProtoMsg(message: EventConvertERC20): EventConvertERC20ProtoMsg {
    return {
      typeUrl: "/lorenzo.token.v1.EventConvertERC20",
      value: EventConvertERC20.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventConvertERC20.typeUrl, EventConvertERC20);