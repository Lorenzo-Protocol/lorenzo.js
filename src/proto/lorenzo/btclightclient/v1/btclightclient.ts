import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * BTCHeaderInfo is a structure that contains all relevant information about a
 * BTC header
 *  - Full header bytes
 *  - Header hash for easy retrieval
 *  - Height of the header in the BTC chain
 *  - Total work spent on the header. This is the sum of the work corresponding
 *  to the header Bits field
 *    and the total work of the header.
 */
export interface BTCHeaderInfo {
  header: Uint8Array;
  hash: Uint8Array;
  height: bigint;
  work: Uint8Array;
}
export interface BTCHeaderInfoProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.BTCHeaderInfo";
  value: Uint8Array;
}
/**
 * BTCHeaderInfo is a structure that contains all relevant information about a
 * BTC header
 *  - Full header bytes
 *  - Header hash for easy retrieval
 *  - Height of the header in the BTC chain
 *  - Total work spent on the header. This is the sum of the work corresponding
 *  to the header Bits field
 *    and the total work of the header.
 */
export interface BTCHeaderInfoAmino {
  header?: string;
  hash?: string;
  height?: string;
  work?: string;
}
export interface BTCHeaderInfoAminoMsg {
  type: "/lorenzo.btclightclient.v1.BTCHeaderInfo";
  value: BTCHeaderInfoAmino;
}
/**
 * BTCHeaderInfo is a structure that contains all relevant information about a
 * BTC header
 *  - Full header bytes
 *  - Header hash for easy retrieval
 *  - Height of the header in the BTC chain
 *  - Total work spent on the header. This is the sum of the work corresponding
 *  to the header Bits field
 *    and the total work of the header.
 */
export interface BTCHeaderInfoSDKType {
  header: Uint8Array;
  hash: Uint8Array;
  height: bigint;
  work: Uint8Array;
}
export interface BTCFeeRate {
  feeRate: bigint;
}
export interface BTCFeeRateProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.BTCFeeRate";
  value: Uint8Array;
}
export interface BTCFeeRateAmino {
  fee_rate?: string;
}
export interface BTCFeeRateAminoMsg {
  type: "/lorenzo.btclightclient.v1.BTCFeeRate";
  value: BTCFeeRateAmino;
}
export interface BTCFeeRateSDKType {
  fee_rate: bigint;
}
function createBaseBTCHeaderInfo(): BTCHeaderInfo {
  return {
    header: new Uint8Array(),
    hash: new Uint8Array(),
    height: BigInt(0),
    work: new Uint8Array()
  };
}
export const BTCHeaderInfo = {
  typeUrl: "/lorenzo.btclightclient.v1.BTCHeaderInfo",
  encode(message: BTCHeaderInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.header.length !== 0) {
      writer.uint32(10).bytes(message.header);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).uint64(message.height);
    }
    if (message.work.length !== 0) {
      writer.uint32(34).bytes(message.work);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BTCHeaderInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBTCHeaderInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = reader.bytes();
          break;
        case 2:
          message.hash = reader.bytes();
          break;
        case 3:
          message.height = reader.uint64();
          break;
        case 4:
          message.work = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BTCHeaderInfo>): BTCHeaderInfo {
    const message = createBaseBTCHeaderInfo();
    message.header = object.header ?? new Uint8Array();
    message.hash = object.hash ?? new Uint8Array();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.work = object.work ?? new Uint8Array();
    return message;
  },
  fromSDK(object: BTCHeaderInfoSDKType): BTCHeaderInfo {
    return {
      header: object?.header,
      hash: object?.hash,
      height: object?.height,
      work: object?.work
    };
  },
  toSDK(message: BTCHeaderInfo): BTCHeaderInfoSDKType {
    const obj: any = {};
    obj.header = message.header;
    obj.hash = message.hash;
    obj.height = message.height;
    obj.work = message.work;
    return obj;
  },
  fromAmino(object: BTCHeaderInfoAmino): BTCHeaderInfo {
    const message = createBaseBTCHeaderInfo();
    if (object.header !== undefined && object.header !== null) {
      message.header = bytesFromBase64(object.header);
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.work !== undefined && object.work !== null) {
      message.work = bytesFromBase64(object.work);
    }
    return message;
  },
  toAmino(message: BTCHeaderInfo): BTCHeaderInfoAmino {
    const obj: any = {};
    obj.header = message.header ? base64FromBytes(message.header) : undefined;
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    obj.work = message.work ? base64FromBytes(message.work) : undefined;
    return obj;
  },
  fromAminoMsg(object: BTCHeaderInfoAminoMsg): BTCHeaderInfo {
    return BTCHeaderInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: BTCHeaderInfoProtoMsg): BTCHeaderInfo {
    return BTCHeaderInfo.decode(message.value);
  },
  toProto(message: BTCHeaderInfo): Uint8Array {
    return BTCHeaderInfo.encode(message).finish();
  },
  toProtoMsg(message: BTCHeaderInfo): BTCHeaderInfoProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.BTCHeaderInfo",
      value: BTCHeaderInfo.encode(message).finish()
    };
  }
};
function createBaseBTCFeeRate(): BTCFeeRate {
  return {
    feeRate: BigInt(0)
  };
}
export const BTCFeeRate = {
  typeUrl: "/lorenzo.btclightclient.v1.BTCFeeRate",
  encode(message: BTCFeeRate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeRate !== BigInt(0)) {
      writer.uint32(8).uint64(message.feeRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BTCFeeRate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBTCFeeRate();
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
  fromPartial(object: Partial<BTCFeeRate>): BTCFeeRate {
    const message = createBaseBTCFeeRate();
    message.feeRate = object.feeRate !== undefined && object.feeRate !== null ? BigInt(object.feeRate.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: BTCFeeRateSDKType): BTCFeeRate {
    return {
      feeRate: object?.fee_rate
    };
  },
  toSDK(message: BTCFeeRate): BTCFeeRateSDKType {
    const obj: any = {};
    obj.fee_rate = message.feeRate;
    return obj;
  },
  fromAmino(object: BTCFeeRateAmino): BTCFeeRate {
    const message = createBaseBTCFeeRate();
    if (object.fee_rate !== undefined && object.fee_rate !== null) {
      message.feeRate = BigInt(object.fee_rate);
    }
    return message;
  },
  toAmino(message: BTCFeeRate): BTCFeeRateAmino {
    const obj: any = {};
    obj.fee_rate = message.feeRate !== BigInt(0) ? message.feeRate.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BTCFeeRateAminoMsg): BTCFeeRate {
    return BTCFeeRate.fromAmino(object.value);
  },
  fromProtoMsg(message: BTCFeeRateProtoMsg): BTCFeeRate {
    return BTCFeeRate.decode(message.value);
  },
  toProto(message: BTCFeeRate): Uint8Array {
    return BTCFeeRate.encode(message).finish();
  },
  toProtoMsg(message: BTCFeeRate): BTCFeeRateProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.BTCFeeRate",
      value: BTCFeeRate.encode(message).finish()
    };
  }
};