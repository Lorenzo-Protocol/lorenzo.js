import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface BTCStakingRecord {
  txHash: Uint8Array;
  amount: bigint;
  receiverAddr: Uint8Array;
  agentName: string;
  agentBtcAddr: string;
  chainId: number;
  mintYatResult: string;
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
}
function createBaseBTCStakingRecord(): BTCStakingRecord {
  return {
    txHash: new Uint8Array(),
    amount: BigInt(0),
    receiverAddr: new Uint8Array(),
    agentName: "",
    agentBtcAddr: "",
    chainId: 0,
    mintYatResult: ""
  };
}
export const BTCStakingRecord = {
  typeUrl: "/lorenzo.btcstaking.v1.BTCStakingRecord",
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
      mintYatResult: object?.mint_yat_result
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