//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface BTCStakingRecord {
  txHash: Uint8Array;
  amount: bigint;
  receiverAddr: Uint8Array;
  agentName: string;
  agentBtcAddr: string;
  chainId: number;
  mintYatResult: string;
  planId: bigint;
}
export interface BTCStakingRecordProtoMsg {
  typeUrl: "/lorenzo.btcstaking.v1.BTCStakingRecord";
  value: Uint8Array;
}
export interface BTCStakingRecordAmino {
  tx_hash?: string;
  amount?: string;
  receiver_addr?: string;
  agent_name?: string;
  agent_btc_addr?: string;
  chain_id?: number;
  mint_yat_result?: string;
  plan_id?: string;
}
export interface BTCStakingRecordAminoMsg {
  type: "/lorenzo.btcstaking.v1.BTCStakingRecord";
  value: BTCStakingRecordAmino;
}
export interface BTCStakingRecordSDKType {
  tx_hash: Uint8Array;
  amount: bigint;
  receiver_addr: Uint8Array;
  agent_name: string;
  agent_btc_addr: string;
  chain_id: number;
  mint_yat_result: string;
  plan_id: bigint;
}
/** BTCBStakingRecord defines the message for btcb staking record */
export interface BTCBStakingRecord {
  /** staking_idx defines the staking index */
  stakingIdx: bigint;
  /** contract defines the contract */
  contract: Uint8Array;
  /** receiver_addr defines the receiver address */
  receiverAddr: string;
  /** amount defines the stBTC amount */
  amount: string;
  /** chain_id defines the chain id */
  chainId: number;
  /** mint_yat_result defines the mint yat result */
  mintYatResult: string;
  planId: bigint;
}
export interface BTCBStakingRecordProtoMsg {
  typeUrl: "/lorenzo.btcstaking.v1.BTCBStakingRecord";
  value: Uint8Array;
}
/** BTCBStakingRecord defines the message for btcb staking record */
export interface BTCBStakingRecordAmino {
  /** staking_idx defines the staking index */
  staking_idx?: string;
  /** contract defines the contract */
  contract?: string;
  /** receiver_addr defines the receiver address */
  receiver_addr?: string;
  /** amount defines the stBTC amount */
  amount?: string;
  /** chain_id defines the chain id */
  chain_id?: number;
  /** mint_yat_result defines the mint yat result */
  mint_yat_result?: string;
  plan_id?: string;
}
export interface BTCBStakingRecordAminoMsg {
  type: "/lorenzo.btcstaking.v1.BTCBStakingRecord";
  value: BTCBStakingRecordAmino;
}
/** BTCBStakingRecord defines the message for btcb staking record */
export interface BTCBStakingRecordSDKType {
  staking_idx: bigint;
  contract: Uint8Array;
  receiver_addr: string;
  amount: string;
  chain_id: number;
  mint_yat_result: string;
  plan_id: bigint;
}
function createBaseBTCStakingRecord(): BTCStakingRecord {
  return {
    txHash: new Uint8Array(),
    amount: BigInt(0),
    receiverAddr: new Uint8Array(),
    agentName: "",
    agentBtcAddr: "",
    chainId: 0,
    mintYatResult: "",
    planId: BigInt(0)
  };
}
export const BTCStakingRecord = {
  typeUrl: "/lorenzo.btcstaking.v1.BTCStakingRecord",
  is(o: any): o is BTCStakingRecord {
    return o && (o.$typeUrl === BTCStakingRecord.typeUrl || (o.txHash instanceof Uint8Array || typeof o.txHash === "string") && typeof o.amount === "bigint" && (o.receiverAddr instanceof Uint8Array || typeof o.receiverAddr === "string") && typeof o.agentName === "string" && typeof o.agentBtcAddr === "string" && typeof o.chainId === "number" && typeof o.mintYatResult === "string" && typeof o.planId === "bigint");
  },
  isSDK(o: any): o is BTCStakingRecordSDKType {
    return o && (o.$typeUrl === BTCStakingRecord.typeUrl || (o.tx_hash instanceof Uint8Array || typeof o.tx_hash === "string") && typeof o.amount === "bigint" && (o.receiver_addr instanceof Uint8Array || typeof o.receiver_addr === "string") && typeof o.agent_name === "string" && typeof o.agent_btc_addr === "string" && typeof o.chain_id === "number" && typeof o.mint_yat_result === "string" && typeof o.plan_id === "bigint");
  },
  isAmino(o: any): o is BTCStakingRecordAmino {
    return o && (o.$typeUrl === BTCStakingRecord.typeUrl || (o.tx_hash instanceof Uint8Array || typeof o.tx_hash === "string") && typeof o.amount === "bigint" && (o.receiver_addr instanceof Uint8Array || typeof o.receiver_addr === "string") && typeof o.agent_name === "string" && typeof o.agent_btc_addr === "string" && typeof o.chain_id === "number" && typeof o.mint_yat_result === "string" && typeof o.plan_id === "bigint");
  },
  encode(message: BTCStakingRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txHash.length !== 0) {
      writer.uint32(10).bytes(message.txHash);
    }
    if (message.amount !== BigInt(0)) {
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
    if (message.planId !== BigInt(0)) {
      writer.uint32(64).uint64(message.planId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BTCStakingRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBTCStakingRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txHash = reader.bytes();
          break;
        case 2:
          message.amount = reader.uint64();
          break;
        case 3:
          message.receiverAddr = reader.bytes();
          break;
        case 4:
          message.agentName = reader.string();
          break;
        case 5:
          message.agentBtcAddr = reader.string();
          break;
        case 6:
          message.chainId = reader.uint32();
          break;
        case 7:
          message.mintYatResult = reader.string();
          break;
        case 8:
          message.planId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BTCStakingRecord>): BTCStakingRecord {
    const message = createBaseBTCStakingRecord();
    message.txHash = object.txHash ?? new Uint8Array();
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.receiverAddr = object.receiverAddr ?? new Uint8Array();
    message.agentName = object.agentName ?? "";
    message.agentBtcAddr = object.agentBtcAddr ?? "";
    message.chainId = object.chainId ?? 0;
    message.mintYatResult = object.mintYatResult ?? "";
    message.planId = object.planId !== undefined && object.planId !== null ? BigInt(object.planId.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: BTCStakingRecordSDKType): BTCStakingRecord {
    return {
      txHash: object?.tx_hash,
      amount: object?.amount,
      receiverAddr: object?.receiver_addr,
      agentName: object?.agent_name,
      agentBtcAddr: object?.agent_btc_addr,
      chainId: object?.chain_id,
      mintYatResult: object?.mint_yat_result,
      planId: object?.plan_id
    };
  },
  toSDK(message: BTCStakingRecord): BTCStakingRecordSDKType {
    const obj: any = {};
    obj.tx_hash = message.txHash;
    obj.amount = message.amount;
    obj.receiver_addr = message.receiverAddr;
    obj.agent_name = message.agentName;
    obj.agent_btc_addr = message.agentBtcAddr;
    obj.chain_id = message.chainId;
    obj.mint_yat_result = message.mintYatResult;
    obj.plan_id = message.planId;
    return obj;
  },
  fromAmino(object: BTCStakingRecordAmino): BTCStakingRecord {
    const message = createBaseBTCStakingRecord();
    if (object.tx_hash !== undefined && object.tx_hash !== null) {
      message.txHash = bytesFromBase64(object.tx_hash);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    if (object.receiver_addr !== undefined && object.receiver_addr !== null) {
      message.receiverAddr = bytesFromBase64(object.receiver_addr);
    }
    if (object.agent_name !== undefined && object.agent_name !== null) {
      message.agentName = object.agent_name;
    }
    if (object.agent_btc_addr !== undefined && object.agent_btc_addr !== null) {
      message.agentBtcAddr = object.agent_btc_addr;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.mint_yat_result !== undefined && object.mint_yat_result !== null) {
      message.mintYatResult = object.mint_yat_result;
    }
    if (object.plan_id !== undefined && object.plan_id !== null) {
      message.planId = BigInt(object.plan_id);
    }
    return message;
  },
  toAmino(message: BTCStakingRecord): BTCStakingRecordAmino {
    const obj: any = {};
    obj.tx_hash = message.txHash ? base64FromBytes(message.txHash) : undefined;
    obj.amount = message.amount !== BigInt(0) ? message.amount.toString() : undefined;
    obj.receiver_addr = message.receiverAddr ? base64FromBytes(message.receiverAddr) : undefined;
    obj.agent_name = message.agentName === "" ? undefined : message.agentName;
    obj.agent_btc_addr = message.agentBtcAddr === "" ? undefined : message.agentBtcAddr;
    obj.chain_id = message.chainId === 0 ? undefined : message.chainId;
    obj.mint_yat_result = message.mintYatResult === "" ? undefined : message.mintYatResult;
    obj.plan_id = message.planId !== BigInt(0) ? message.planId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BTCStakingRecordAminoMsg): BTCStakingRecord {
    return BTCStakingRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: BTCStakingRecordProtoMsg): BTCStakingRecord {
    return BTCStakingRecord.decode(message.value);
  },
  toProto(message: BTCStakingRecord): Uint8Array {
    return BTCStakingRecord.encode(message).finish();
  },
  toProtoMsg(message: BTCStakingRecord): BTCStakingRecordProtoMsg {
    return {
      typeUrl: "/lorenzo.btcstaking.v1.BTCStakingRecord",
      value: BTCStakingRecord.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BTCStakingRecord.typeUrl, BTCStakingRecord);
function createBaseBTCBStakingRecord(): BTCBStakingRecord {
  return {
    stakingIdx: BigInt(0),
    contract: new Uint8Array(),
    receiverAddr: "",
    amount: "",
    chainId: 0,
    mintYatResult: "",
    planId: BigInt(0)
  };
}
export const BTCBStakingRecord = {
  typeUrl: "/lorenzo.btcstaking.v1.BTCBStakingRecord",
  is(o: any): o is BTCBStakingRecord {
    return o && (o.$typeUrl === BTCBStakingRecord.typeUrl || typeof o.stakingIdx === "bigint" && (o.contract instanceof Uint8Array || typeof o.contract === "string") && typeof o.receiverAddr === "string" && typeof o.amount === "string" && typeof o.chainId === "number" && typeof o.mintYatResult === "string" && typeof o.planId === "bigint");
  },
  isSDK(o: any): o is BTCBStakingRecordSDKType {
    return o && (o.$typeUrl === BTCBStakingRecord.typeUrl || typeof o.staking_idx === "bigint" && (o.contract instanceof Uint8Array || typeof o.contract === "string") && typeof o.receiver_addr === "string" && typeof o.amount === "string" && typeof o.chain_id === "number" && typeof o.mint_yat_result === "string" && typeof o.plan_id === "bigint");
  },
  isAmino(o: any): o is BTCBStakingRecordAmino {
    return o && (o.$typeUrl === BTCBStakingRecord.typeUrl || typeof o.staking_idx === "bigint" && (o.contract instanceof Uint8Array || typeof o.contract === "string") && typeof o.receiver_addr === "string" && typeof o.amount === "string" && typeof o.chain_id === "number" && typeof o.mint_yat_result === "string" && typeof o.plan_id === "bigint");
  },
  encode(message: BTCBStakingRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakingIdx !== BigInt(0)) {
      writer.uint32(8).uint64(message.stakingIdx);
    }
    if (message.contract.length !== 0) {
      writer.uint32(18).bytes(message.contract);
    }
    if (message.receiverAddr !== "") {
      writer.uint32(26).string(message.receiverAddr);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.chainId !== 0) {
      writer.uint32(40).uint32(message.chainId);
    }
    if (message.mintYatResult !== "") {
      writer.uint32(50).string(message.mintYatResult);
    }
    if (message.planId !== BigInt(0)) {
      writer.uint32(56).uint64(message.planId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BTCBStakingRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBTCBStakingRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakingIdx = reader.uint64();
          break;
        case 2:
          message.contract = reader.bytes();
          break;
        case 3:
          message.receiverAddr = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.chainId = reader.uint32();
          break;
        case 6:
          message.mintYatResult = reader.string();
          break;
        case 7:
          message.planId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BTCBStakingRecord>): BTCBStakingRecord {
    const message = createBaseBTCBStakingRecord();
    message.stakingIdx = object.stakingIdx !== undefined && object.stakingIdx !== null ? BigInt(object.stakingIdx.toString()) : BigInt(0);
    message.contract = object.contract ?? new Uint8Array();
    message.receiverAddr = object.receiverAddr ?? "";
    message.amount = object.amount ?? "";
    message.chainId = object.chainId ?? 0;
    message.mintYatResult = object.mintYatResult ?? "";
    message.planId = object.planId !== undefined && object.planId !== null ? BigInt(object.planId.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: BTCBStakingRecordSDKType): BTCBStakingRecord {
    return {
      stakingIdx: object?.staking_idx,
      contract: object?.contract,
      receiverAddr: object?.receiver_addr,
      amount: object?.amount,
      chainId: object?.chain_id,
      mintYatResult: object?.mint_yat_result,
      planId: object?.plan_id
    };
  },
  toSDK(message: BTCBStakingRecord): BTCBStakingRecordSDKType {
    const obj: any = {};
    obj.staking_idx = message.stakingIdx;
    obj.contract = message.contract;
    obj.receiver_addr = message.receiverAddr;
    obj.amount = message.amount;
    obj.chain_id = message.chainId;
    obj.mint_yat_result = message.mintYatResult;
    obj.plan_id = message.planId;
    return obj;
  },
  fromAmino(object: BTCBStakingRecordAmino): BTCBStakingRecord {
    const message = createBaseBTCBStakingRecord();
    if (object.staking_idx !== undefined && object.staking_idx !== null) {
      message.stakingIdx = BigInt(object.staking_idx);
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = bytesFromBase64(object.contract);
    }
    if (object.receiver_addr !== undefined && object.receiver_addr !== null) {
      message.receiverAddr = object.receiver_addr;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.mint_yat_result !== undefined && object.mint_yat_result !== null) {
      message.mintYatResult = object.mint_yat_result;
    }
    if (object.plan_id !== undefined && object.plan_id !== null) {
      message.planId = BigInt(object.plan_id);
    }
    return message;
  },
  toAmino(message: BTCBStakingRecord): BTCBStakingRecordAmino {
    const obj: any = {};
    obj.staking_idx = message.stakingIdx !== BigInt(0) ? message.stakingIdx.toString() : undefined;
    obj.contract = message.contract ? base64FromBytes(message.contract) : undefined;
    obj.receiver_addr = message.receiverAddr === "" ? undefined : message.receiverAddr;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.chain_id = message.chainId === 0 ? undefined : message.chainId;
    obj.mint_yat_result = message.mintYatResult === "" ? undefined : message.mintYatResult;
    obj.plan_id = message.planId !== BigInt(0) ? message.planId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BTCBStakingRecordAminoMsg): BTCBStakingRecord {
    return BTCBStakingRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: BTCBStakingRecordProtoMsg): BTCBStakingRecord {
    return BTCBStakingRecord.decode(message.value);
  },
  toProto(message: BTCBStakingRecord): Uint8Array {
    return BTCBStakingRecord.encode(message).finish();
  },
  toProtoMsg(message: BTCBStakingRecord): BTCBStakingRecordProtoMsg {
    return {
      typeUrl: "/lorenzo.btcstaking.v1.BTCBStakingRecord",
      value: BTCBStakingRecord.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BTCBStakingRecord.typeUrl, BTCBStakingRecord);