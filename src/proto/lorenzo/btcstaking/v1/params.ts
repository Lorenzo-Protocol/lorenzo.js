// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: lorenzo/btcstaking/v1/params.proto

/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface Receiver {
  /** name of the receiver */
  name: string;
  /** btc address */
  addr: string;
  /** like 0xBAb28FF7659481F1c8516f616A576339936AFB06 */
  ethAddr: string;
}

/** GenesisState defines the btcstaking module's genesis state. */
export interface Params {
  /** receivers' name must be unique */
  receivers: Receiver[];
  /** deprecated */
  btcConfirmationsDepth: number;
  /** allow list to mint for receiver with eth_addr */
  minterAllowList: string[];
  /** cross chain bridge contract address */
  bridgeAddr: string;
  /** minimum satoshi per txout */
  txoutDustAmount: Long;
}

function createBaseReceiver(): Receiver {
  return { name: "", addr: "", ethAddr: "" };
}

export const Receiver = {
  encode(message: Receiver, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.addr !== "") {
      writer.uint32(18).string(message.addr);
    }
    if (message.ethAddr !== "") {
      writer.uint32(26).string(message.ethAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Receiver {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReceiver();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.addr = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ethAddr = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Receiver {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      addr: isSet(object.addr) ? globalThis.String(object.addr) : "",
      ethAddr: isSet(object.ethAddr) ? globalThis.String(object.ethAddr) : "",
    };
  },

  toJSON(message: Receiver): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.addr !== "") {
      obj.addr = message.addr;
    }
    if (message.ethAddr !== "") {
      obj.ethAddr = message.ethAddr;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Receiver>, I>>(base?: I): Receiver {
    return Receiver.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Receiver>, I>>(object: I): Receiver {
    const message = createBaseReceiver();
    message.name = object.name ?? "";
    message.addr = object.addr ?? "";
    message.ethAddr = object.ethAddr ?? "";
    return message;
  },
};

function createBaseParams(): Params {
  return { receivers: [], btcConfirmationsDepth: 0, minterAllowList: [], bridgeAddr: "", txoutDustAmount: Long.ZERO };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.receivers) {
      Receiver.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.btcConfirmationsDepth !== 0) {
      writer.uint32(16).uint32(message.btcConfirmationsDepth);
    }
    for (const v of message.minterAllowList) {
      writer.uint32(26).string(v!);
    }
    if (message.bridgeAddr !== "") {
      writer.uint32(34).string(message.bridgeAddr);
    }
    if (!message.txoutDustAmount.equals(Long.ZERO)) {
      writer.uint32(40).int64(message.txoutDustAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.receivers.push(Receiver.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.btcConfirmationsDepth = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.minterAllowList.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.bridgeAddr = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.txoutDustAmount = reader.int64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      receivers: globalThis.Array.isArray(object?.receivers)
        ? object.receivers.map((e: any) => Receiver.fromJSON(e))
        : [],
      btcConfirmationsDepth: isSet(object.btcConfirmationsDepth) ? globalThis.Number(object.btcConfirmationsDepth) : 0,
      minterAllowList: globalThis.Array.isArray(object?.minterAllowList)
        ? object.minterAllowList.map((e: any) => globalThis.String(e))
        : [],
      bridgeAddr: isSet(object.bridgeAddr) ? globalThis.String(object.bridgeAddr) : "",
      txoutDustAmount: isSet(object.txoutDustAmount) ? Long.fromValue(object.txoutDustAmount) : Long.ZERO,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.receivers?.length) {
      obj.receivers = message.receivers.map((e) => Receiver.toJSON(e));
    }
    if (message.btcConfirmationsDepth !== 0) {
      obj.btcConfirmationsDepth = Math.round(message.btcConfirmationsDepth);
    }
    if (message.minterAllowList?.length) {
      obj.minterAllowList = message.minterAllowList;
    }
    if (message.bridgeAddr !== "") {
      obj.bridgeAddr = message.bridgeAddr;
    }
    if (!message.txoutDustAmount.equals(Long.ZERO)) {
      obj.txoutDustAmount = (message.txoutDustAmount || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
    return Params.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.receivers = object.receivers?.map((e) => Receiver.fromPartial(e)) || [];
    message.btcConfirmationsDepth = object.btcConfirmationsDepth ?? 0;
    message.minterAllowList = object.minterAllowList?.map((e) => e) || [];
    message.bridgeAddr = object.bridgeAddr ?? "";
    message.txoutDustAmount = (object.txoutDustAmount !== undefined && object.txoutDustAmount !== null)
      ? Long.fromValue(object.txoutDustAmount)
      : Long.ZERO;
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
