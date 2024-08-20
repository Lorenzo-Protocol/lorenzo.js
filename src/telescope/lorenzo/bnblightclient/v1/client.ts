//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface Header {
  /** header defines the bnb header bytes */
  rawHeader: Uint8Array;
  /** parent_hash defines the previous bnb header hash */
  parentHash: Uint8Array;
  /** hash defines the bnb header hash */
  hash: Uint8Array;
  /** number defines the block number */
  number: bigint;
  /** receipt_root defines the receipts merkle root hash */
  receiptRoot: Uint8Array;
}
export interface HeaderProtoMsg {
  typeUrl: "/lorenzo.bnblightclient.v1.Header";
  value: Uint8Array;
}
export interface HeaderAmino {
  /** header defines the bnb header bytes */
  raw_header?: string;
  /** parent_hash defines the previous bnb header hash */
  parent_hash?: string;
  /** hash defines the bnb header hash */
  hash?: string;
  /** number defines the block number */
  number?: string;
  /** receipt_root defines the receipts merkle root hash */
  receipt_root?: string;
}
export interface HeaderAminoMsg {
  type: "/lorenzo.bnblightclient.v1.Header";
  value: HeaderAmino;
}
export interface HeaderSDKType {
  raw_header: Uint8Array;
  parent_hash: Uint8Array;
  hash: Uint8Array;
  number: bigint;
  receipt_root: Uint8Array;
}
function createBaseHeader(): Header {
  return {
    rawHeader: new Uint8Array(),
    parentHash: new Uint8Array(),
    hash: new Uint8Array(),
    number: BigInt(0),
    receiptRoot: new Uint8Array()
  };
}
export const Header = {
  typeUrl: "/lorenzo.bnblightclient.v1.Header",
  is(o: any): o is Header {
    return o && (o.$typeUrl === Header.typeUrl || (o.rawHeader instanceof Uint8Array || typeof o.rawHeader === "string") && (o.parentHash instanceof Uint8Array || typeof o.parentHash === "string") && (o.hash instanceof Uint8Array || typeof o.hash === "string") && typeof o.number === "bigint" && (o.receiptRoot instanceof Uint8Array || typeof o.receiptRoot === "string"));
  },
  isSDK(o: any): o is HeaderSDKType {
    return o && (o.$typeUrl === Header.typeUrl || (o.raw_header instanceof Uint8Array || typeof o.raw_header === "string") && (o.parent_hash instanceof Uint8Array || typeof o.parent_hash === "string") && (o.hash instanceof Uint8Array || typeof o.hash === "string") && typeof o.number === "bigint" && (o.receipt_root instanceof Uint8Array || typeof o.receipt_root === "string"));
  },
  isAmino(o: any): o is HeaderAmino {
    return o && (o.$typeUrl === Header.typeUrl || (o.raw_header instanceof Uint8Array || typeof o.raw_header === "string") && (o.parent_hash instanceof Uint8Array || typeof o.parent_hash === "string") && (o.hash instanceof Uint8Array || typeof o.hash === "string") && typeof o.number === "bigint" && (o.receipt_root instanceof Uint8Array || typeof o.receipt_root === "string"));
  },
  encode(message: Header, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rawHeader.length !== 0) {
      writer.uint32(10).bytes(message.rawHeader);
    }
    if (message.parentHash.length !== 0) {
      writer.uint32(18).bytes(message.parentHash);
    }
    if (message.hash.length !== 0) {
      writer.uint32(26).bytes(message.hash);
    }
    if (message.number !== BigInt(0)) {
      writer.uint32(32).uint64(message.number);
    }
    if (message.receiptRoot.length !== 0) {
      writer.uint32(42).bytes(message.receiptRoot);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Header {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rawHeader = reader.bytes();
          break;
        case 2:
          message.parentHash = reader.bytes();
          break;
        case 3:
          message.hash = reader.bytes();
          break;
        case 4:
          message.number = reader.uint64();
          break;
        case 5:
          message.receiptRoot = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Header>): Header {
    const message = createBaseHeader();
    message.rawHeader = object.rawHeader ?? new Uint8Array();
    message.parentHash = object.parentHash ?? new Uint8Array();
    message.hash = object.hash ?? new Uint8Array();
    message.number = object.number !== undefined && object.number !== null ? BigInt(object.number.toString()) : BigInt(0);
    message.receiptRoot = object.receiptRoot ?? new Uint8Array();
    return message;
  },
  fromSDK(object: HeaderSDKType): Header {
    return {
      rawHeader: object?.raw_header,
      parentHash: object?.parent_hash,
      hash: object?.hash,
      number: object?.number,
      receiptRoot: object?.receipt_root
    };
  },
  toSDK(message: Header): HeaderSDKType {
    const obj: any = {};
    obj.raw_header = message.rawHeader;
    obj.parent_hash = message.parentHash;
    obj.hash = message.hash;
    obj.number = message.number;
    obj.receipt_root = message.receiptRoot;
    return obj;
  },
  fromAmino(object: HeaderAmino): Header {
    const message = createBaseHeader();
    if (object.raw_header !== undefined && object.raw_header !== null) {
      message.rawHeader = bytesFromBase64(object.raw_header);
    }
    if (object.parent_hash !== undefined && object.parent_hash !== null) {
      message.parentHash = bytesFromBase64(object.parent_hash);
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.number !== undefined && object.number !== null) {
      message.number = BigInt(object.number);
    }
    if (object.receipt_root !== undefined && object.receipt_root !== null) {
      message.receiptRoot = bytesFromBase64(object.receipt_root);
    }
    return message;
  },
  toAmino(message: Header): HeaderAmino {
    const obj: any = {};
    obj.raw_header = message.rawHeader ? base64FromBytes(message.rawHeader) : undefined;
    obj.parent_hash = message.parentHash ? base64FromBytes(message.parentHash) : undefined;
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    obj.number = message.number !== BigInt(0) ? message.number.toString() : undefined;
    obj.receipt_root = message.receiptRoot ? base64FromBytes(message.receiptRoot) : undefined;
    return obj;
  },
  fromAminoMsg(object: HeaderAminoMsg): Header {
    return Header.fromAmino(object.value);
  },
  fromProtoMsg(message: HeaderProtoMsg): Header {
    return Header.decode(message.value);
  },
  toProto(message: Header): Uint8Array {
    return Header.encode(message).finish();
  },
  toProtoMsg(message: Header): HeaderProtoMsg {
    return {
      typeUrl: "/lorenzo.bnblightclient.v1.Header",
      value: Header.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Header.typeUrl, Header);