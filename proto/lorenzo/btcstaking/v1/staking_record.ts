// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: lorenzo/btcstaking/v1/staking_record.proto

/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface BTCStakingRecord {
  txHash: Uint8Array;
  amount: Long;
  receiverAddr: Uint8Array;
  agentName: string;
  agentBtcAddr: string;
  chainId: number;
  mintYatResult: string;
}

function createBaseBTCStakingRecord(): BTCStakingRecord {
  return {
    txHash: new Uint8Array(0),
    amount: Long.UZERO,
    receiverAddr: new Uint8Array(0),
    agentName: "",
    agentBtcAddr: "",
    chainId: 0,
    mintYatResult: "",
  };
}

export const BTCStakingRecord = {
  encode(message: BTCStakingRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txHash.length !== 0) {
      writer.uint32(10).bytes(message.txHash);
    }
    if (!message.amount.equals(Long.UZERO)) {
      writer.uint32(16).uint64(message.amount);
    }
    if (message.receiverAddr.length !== 0) {
      writer.uint32(26).bytes(message.receiverAddr);
    }
    if (message.agentName !== "") {
      writer.uint32(34).string(message.agentName);
    }
    if (message.agentBtcAddr !== "") {
      writer.uint32(42).string(message.agentBtcAddr);
    }
    if (message.chainId !== 0) {
      writer.uint32(48).uint32(message.chainId);
    }
    if (message.mintYatResult !== "") {
      writer.uint32(58).string(message.mintYatResult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BTCStakingRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBTCStakingRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.txHash = reader.bytes();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.amount = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.receiverAddr = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.agentName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.agentBtcAddr = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.chainId = reader.uint32();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.mintYatResult = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BTCStakingRecord {
    return {
      txHash: isSet(object.txHash) ? bytesFromBase64(object.txHash) : new Uint8Array(0),
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO,
      receiverAddr: isSet(object.receiverAddr) ? bytesFromBase64(object.receiverAddr) : new Uint8Array(0),
      agentName: isSet(object.agentName) ? globalThis.String(object.agentName) : "",
      agentBtcAddr: isSet(object.agentBtcAddr) ? globalThis.String(object.agentBtcAddr) : "",
      chainId: isSet(object.chainId) ? globalThis.Number(object.chainId) : 0,
      mintYatResult: isSet(object.mintYatResult) ? globalThis.String(object.mintYatResult) : "",
    };
  },

  toJSON(message: BTCStakingRecord): unknown {
    const obj: any = {};
    if (message.txHash.length !== 0) {
      obj.txHash = base64FromBytes(message.txHash);
    }
    if (!message.amount.equals(Long.UZERO)) {
      obj.amount = (message.amount || Long.UZERO).toString();
    }
    if (message.receiverAddr.length !== 0) {
      obj.receiverAddr = base64FromBytes(message.receiverAddr);
    }
    if (message.agentName !== "") {
      obj.agentName = message.agentName;
    }
    if (message.agentBtcAddr !== "") {
      obj.agentBtcAddr = message.agentBtcAddr;
    }
    if (message.chainId !== 0) {
      obj.chainId = Math.round(message.chainId);
    }
    if (message.mintYatResult !== "") {
      obj.mintYatResult = message.mintYatResult;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BTCStakingRecord>, I>>(base?: I): BTCStakingRecord {
    return BTCStakingRecord.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BTCStakingRecord>, I>>(object: I): BTCStakingRecord {
    const message = createBaseBTCStakingRecord();
    message.txHash = object.txHash ?? new Uint8Array(0);
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Long.fromValue(object.amount)
      : Long.UZERO;
    message.receiverAddr = object.receiverAddr ?? new Uint8Array(0);
    message.agentName = object.agentName ?? "";
    message.agentBtcAddr = object.agentBtcAddr ?? "";
    message.chainId = object.chainId ?? 0;
    message.mintYatResult = object.mintYatResult ?? "";
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
