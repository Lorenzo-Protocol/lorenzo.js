//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export interface Receiver {
  /** name of the receiver */
  name: string;
  /** btc address */
  addr: string;
  /** like 0xBAb28FF7659481F1c8516f616A576339936AFB06 */
  ethAddr: string;
}
export interface ReceiverProtoMsg {
  typeUrl: "/lorenzo.btcstaking.v1.Receiver";
  value: Uint8Array;
}
export interface ReceiverAmino {
  /** name of the receiver */
  name?: string;
  /** btc address */
  addr?: string;
  /** like 0xBAb28FF7659481F1c8516f616A576339936AFB06 */
  eth_addr?: string;
}
export interface ReceiverAminoMsg {
  type: "/lorenzo.btcstaking.v1.Receiver";
  value: ReceiverAmino;
}
export interface ReceiverSDKType {
  name: string;
  addr: string;
  eth_addr: string;
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
  txoutDustAmount: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/lorenzo.btcstaking.v1.Params";
  value: Uint8Array;
}
/** GenesisState defines the btcstaking module's genesis state. */
export interface ParamsAmino {
  /** receivers' name must be unique */
  receivers?: ReceiverAmino[];
  /** deprecated */
  btc_confirmations_depth?: number;
  /** allow list to mint for receiver with eth_addr */
  minter_allow_list?: string[];
  /** cross chain bridge contract address */
  bridge_addr?: string;
  /** minimum satoshi per txout */
  txout_dust_amount?: string;
}
export interface ParamsAminoMsg {
  type: "/lorenzo.btcstaking.v1.Params";
  value: ParamsAmino;
}
/** GenesisState defines the btcstaking module's genesis state. */
export interface ParamsSDKType {
  receivers: ReceiverSDKType[];
  btc_confirmations_depth: number;
  minter_allow_list: string[];
  bridge_addr: string;
  txout_dust_amount: bigint;
}
function createBaseReceiver(): Receiver {
  return {
    name: "",
    addr: "",
    ethAddr: ""
  };
}
export const Receiver = {
  typeUrl: "/lorenzo.btcstaking.v1.Receiver",
  is(o: any): o is Receiver {
    return o && (o.$typeUrl === Receiver.typeUrl || typeof o.name === "string" && typeof o.addr === "string" && typeof o.ethAddr === "string");
  },
  isSDK(o: any): o is ReceiverSDKType {
    return o && (o.$typeUrl === Receiver.typeUrl || typeof o.name === "string" && typeof o.addr === "string" && typeof o.eth_addr === "string");
  },
  isAmino(o: any): o is ReceiverAmino {
    return o && (o.$typeUrl === Receiver.typeUrl || typeof o.name === "string" && typeof o.addr === "string" && typeof o.eth_addr === "string");
  },
  encode(message: Receiver, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): Receiver {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReceiver();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.addr = reader.string();
          break;
        case 3:
          message.ethAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Receiver>): Receiver {
    const message = createBaseReceiver();
    message.name = object.name ?? "";
    message.addr = object.addr ?? "";
    message.ethAddr = object.ethAddr ?? "";
    return message;
  },
  fromSDK(object: ReceiverSDKType): Receiver {
    return {
      name: object?.name,
      addr: object?.addr,
      ethAddr: object?.eth_addr
    };
  },
  toSDK(message: Receiver): ReceiverSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.addr = message.addr;
    obj.eth_addr = message.ethAddr;
    return obj;
  },
  fromAmino(object: ReceiverAmino): Receiver {
    const message = createBaseReceiver();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    }
    if (object.eth_addr !== undefined && object.eth_addr !== null) {
      message.ethAddr = object.eth_addr;
    }
    return message;
  },
  toAmino(message: Receiver): ReceiverAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.addr = message.addr === "" ? undefined : message.addr;
    obj.eth_addr = message.ethAddr === "" ? undefined : message.ethAddr;
    return obj;
  },
  fromAminoMsg(object: ReceiverAminoMsg): Receiver {
    return Receiver.fromAmino(object.value);
  },
  fromProtoMsg(message: ReceiverProtoMsg): Receiver {
    return Receiver.decode(message.value);
  },
  toProto(message: Receiver): Uint8Array {
    return Receiver.encode(message).finish();
  },
  toProtoMsg(message: Receiver): ReceiverProtoMsg {
    return {
      typeUrl: "/lorenzo.btcstaking.v1.Receiver",
      value: Receiver.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Receiver.typeUrl, Receiver);
function createBaseParams(): Params {
  return {
    receivers: [],
    btcConfirmationsDepth: 0,
    minterAllowList: [],
    bridgeAddr: "",
    txoutDustAmount: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/lorenzo.btcstaking.v1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.receivers) && (!o.receivers.length || Receiver.is(o.receivers[0])) && typeof o.btcConfirmationsDepth === "number" && Array.isArray(o.minterAllowList) && (!o.minterAllowList.length || typeof o.minterAllowList[0] === "string") && typeof o.bridgeAddr === "string" && typeof o.txoutDustAmount === "bigint");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.receivers) && (!o.receivers.length || Receiver.isSDK(o.receivers[0])) && typeof o.btc_confirmations_depth === "number" && Array.isArray(o.minter_allow_list) && (!o.minter_allow_list.length || typeof o.minter_allow_list[0] === "string") && typeof o.bridge_addr === "string" && typeof o.txout_dust_amount === "bigint");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.receivers) && (!o.receivers.length || Receiver.isAmino(o.receivers[0])) && typeof o.btc_confirmations_depth === "number" && Array.isArray(o.minter_allow_list) && (!o.minter_allow_list.length || typeof o.minter_allow_list[0] === "string") && typeof o.bridge_addr === "string" && typeof o.txout_dust_amount === "bigint");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.txoutDustAmount !== BigInt(0)) {
      writer.uint32(40).int64(message.txoutDustAmount);
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
          message.receivers.push(Receiver.decode(reader, reader.uint32()));
          break;
        case 2:
          message.btcConfirmationsDepth = reader.uint32();
          break;
        case 3:
          message.minterAllowList.push(reader.string());
          break;
        case 4:
          message.bridgeAddr = reader.string();
          break;
        case 5:
          message.txoutDustAmount = reader.int64();
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
    message.receivers = object.receivers?.map(e => Receiver.fromPartial(e)) || [];
    message.btcConfirmationsDepth = object.btcConfirmationsDepth ?? 0;
    message.minterAllowList = object.minterAllowList?.map(e => e) || [];
    message.bridgeAddr = object.bridgeAddr ?? "";
    message.txoutDustAmount = object.txoutDustAmount !== undefined && object.txoutDustAmount !== null ? BigInt(object.txoutDustAmount.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      receivers: Array.isArray(object?.receivers) ? object.receivers.map((e: any) => Receiver.fromSDK(e)) : [],
      btcConfirmationsDepth: object?.btc_confirmations_depth,
      minterAllowList: Array.isArray(object?.minter_allow_list) ? object.minter_allow_list.map((e: any) => e) : [],
      bridgeAddr: object?.bridge_addr,
      txoutDustAmount: object?.txout_dust_amount
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    if (message.receivers) {
      obj.receivers = message.receivers.map(e => e ? Receiver.toSDK(e) : undefined);
    } else {
      obj.receivers = [];
    }
    obj.btc_confirmations_depth = message.btcConfirmationsDepth;
    if (message.minterAllowList) {
      obj.minter_allow_list = message.minterAllowList.map(e => e);
    } else {
      obj.minter_allow_list = [];
    }
    obj.bridge_addr = message.bridgeAddr;
    obj.txout_dust_amount = message.txoutDustAmount;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.receivers = object.receivers?.map(e => Receiver.fromAmino(e)) || [];
    if (object.btc_confirmations_depth !== undefined && object.btc_confirmations_depth !== null) {
      message.btcConfirmationsDepth = object.btc_confirmations_depth;
    }
    message.minterAllowList = object.minter_allow_list?.map(e => e) || [];
    if (object.bridge_addr !== undefined && object.bridge_addr !== null) {
      message.bridgeAddr = object.bridge_addr;
    }
    if (object.txout_dust_amount !== undefined && object.txout_dust_amount !== null) {
      message.txoutDustAmount = BigInt(object.txout_dust_amount);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.receivers) {
      obj.receivers = message.receivers.map(e => e ? Receiver.toAmino(e) : undefined);
    } else {
      obj.receivers = message.receivers;
    }
    obj.btc_confirmations_depth = message.btcConfirmationsDepth === 0 ? undefined : message.btcConfirmationsDepth;
    if (message.minterAllowList) {
      obj.minter_allow_list = message.minterAllowList.map(e => e);
    } else {
      obj.minter_allow_list = message.minterAllowList;
    }
    obj.bridge_addr = message.bridgeAddr === "" ? undefined : message.bridgeAddr;
    obj.txout_dust_amount = message.txoutDustAmount !== BigInt(0) ? message.txoutDustAmount.toString() : undefined;
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
      typeUrl: "/lorenzo.btcstaking.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);