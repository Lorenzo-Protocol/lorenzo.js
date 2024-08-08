// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: lorenzo/token/v1/events.proto

/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

/** EventRegisterCoin is an event emitted when a coin is registered. */
export interface EventRegisterPair {
  /** sdk coin denomination */
  denom: string;
  /** erc20 contract address */
  contractAddress: string;
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

function createBaseEventRegisterPair(): EventRegisterPair {
  return { denom: "", contractAddress: "" };
}

export const EventRegisterPair = {
  encode(message: EventRegisterPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRegisterPair {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRegisterPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contractAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventRegisterPair {
    return {
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
      contractAddress: isSet(object.contractAddress) ? globalThis.String(object.contractAddress) : "",
    };
  },

  toJSON(message: EventRegisterPair): unknown {
    const obj: any = {};
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    if (message.contractAddress !== "") {
      obj.contractAddress = message.contractAddress;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventRegisterPair>, I>>(base?: I): EventRegisterPair {
    return EventRegisterPair.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventRegisterPair>, I>>(object: I): EventRegisterPair {
    const message = createBaseEventRegisterPair();
    message.denom = object.denom ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
};

function createBaseEventToggleTokenConversion(): EventToggleTokenConversion {
  return { denom: "", contractAddress: "" };
}

export const EventToggleTokenConversion = {
  encode(message: EventToggleTokenConversion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventToggleTokenConversion {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventToggleTokenConversion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contractAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventToggleTokenConversion {
    return {
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
      contractAddress: isSet(object.contractAddress) ? globalThis.String(object.contractAddress) : "",
    };
  },

  toJSON(message: EventToggleTokenConversion): unknown {
    const obj: any = {};
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    if (message.contractAddress !== "") {
      obj.contractAddress = message.contractAddress;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventToggleTokenConversion>, I>>(base?: I): EventToggleTokenConversion {
    return EventToggleTokenConversion.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventToggleTokenConversion>, I>>(object: I): EventToggleTokenConversion {
    const message = createBaseEventToggleTokenConversion();
    message.denom = object.denom ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
};

function createBaseEventConvertCoin(): EventConvertCoin {
  return { sender: "", receiver: "", amount: "", denom: "", contractAddress: "" };
}

export const EventConvertCoin = {
  encode(message: EventConvertCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EventConvertCoin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventConvertCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.receiver = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.contractAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventConvertCoin {
    return {
      sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
      receiver: isSet(object.receiver) ? globalThis.String(object.receiver) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
      contractAddress: isSet(object.contractAddress) ? globalThis.String(object.contractAddress) : "",
    };
  },

  toJSON(message: EventConvertCoin): unknown {
    const obj: any = {};
    if (message.sender !== "") {
      obj.sender = message.sender;
    }
    if (message.receiver !== "") {
      obj.receiver = message.receiver;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    if (message.contractAddress !== "") {
      obj.contractAddress = message.contractAddress;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventConvertCoin>, I>>(base?: I): EventConvertCoin {
    return EventConvertCoin.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventConvertCoin>, I>>(object: I): EventConvertCoin {
    const message = createBaseEventConvertCoin();
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
};

function createBaseEventConvertERC20(): EventConvertERC20 {
  return { sender: "", receiver: "", amount: "", denom: "", contractAddress: "" };
}

export const EventConvertERC20 = {
  encode(message: EventConvertERC20, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EventConvertERC20 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventConvertERC20();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.receiver = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.contractAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventConvertERC20 {
    return {
      sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
      receiver: isSet(object.receiver) ? globalThis.String(object.receiver) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
      contractAddress: isSet(object.contractAddress) ? globalThis.String(object.contractAddress) : "",
    };
  },

  toJSON(message: EventConvertERC20): unknown {
    const obj: any = {};
    if (message.sender !== "") {
      obj.sender = message.sender;
    }
    if (message.receiver !== "") {
      obj.receiver = message.receiver;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    if (message.contractAddress !== "") {
      obj.contractAddress = message.contractAddress;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventConvertERC20>, I>>(base?: I): EventConvertERC20 {
    return EventConvertERC20.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventConvertERC20>, I>>(object: I): EventConvertERC20 {
    const message = createBaseEventConvertERC20();
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
