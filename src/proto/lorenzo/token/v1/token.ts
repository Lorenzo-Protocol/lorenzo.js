//@ts-nocheck
import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * Source defines the source type of token asset, if source is:
 * - module: token origin is sdk module;
 * - contract: token origin is erc20 contract;
 */
export enum Source {
  /** OWNER_UNDEFINED - undefined source */
  OWNER_UNDEFINED = 0,
  /** OWNER_MODULE - token source is module */
  OWNER_MODULE = 1,
  /** OWNER_CONTRACT - token source is erc20 contract */
  OWNER_CONTRACT = 2,
  UNRECOGNIZED = -1,
}
export const SourceSDKType = Source;
export const SourceAmino = Source;
export function sourceFromJSON(object: any): Source {
  switch (object) {
    case 0:
    case "OWNER_UNDEFINED":
      return Source.OWNER_UNDEFINED;
    case 1:
    case "OWNER_MODULE":
      return Source.OWNER_MODULE;
    case 2:
    case "OWNER_CONTRACT":
      return Source.OWNER_CONTRACT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Source.UNRECOGNIZED;
  }
}
export function sourceToJSON(object: Source): string {
  switch (object) {
    case Source.OWNER_UNDEFINED:
      return "OWNER_UNDEFINED";
    case Source.OWNER_MODULE:
      return "OWNER_MODULE";
    case Source.OWNER_CONTRACT:
      return "OWNER_CONTRACT";
    case Source.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** TokenPair defines a pairing of a cosmos coin and an erc20 token */
export interface TokenPair {
  /** erc20 contract hex format address */
  contractAddress: string;
  /** sdk coin base denomination */
  denom: string;
  /** allows for token conversion */
  enabled: boolean;
  /** source of token asset */
  source: Source;
}
export interface TokenPairProtoMsg {
  typeUrl: "/lorenzo.token.v1.TokenPair";
  value: Uint8Array;
}
/** TokenPair defines a pairing of a cosmos coin and an erc20 token */
export interface TokenPairAmino {
  /** erc20 contract hex format address */
  contract_address?: string;
  /** sdk coin base denomination */
  denom?: string;
  /** allows for token conversion */
  enabled?: boolean;
  /** source of token asset */
  source?: Source;
}
export interface TokenPairAminoMsg {
  type: "/lorenzo.token.v1.TokenPair";
  value: TokenPairAmino;
}
/** TokenPair defines a pairing of a cosmos coin and an erc20 token */
export interface TokenPairSDKType {
  contract_address: string;
  denom: string;
  enabled: boolean;
  source: Source;
}
function createBaseTokenPair(): TokenPair {
  return {
    contractAddress: "",
    denom: "",
    enabled: false,
    source: 0
  };
}
export const TokenPair = {
  typeUrl: "/lorenzo.token.v1.TokenPair",
  is(o: any): o is TokenPair {
    return o && (o.$typeUrl === TokenPair.typeUrl || typeof o.contractAddress === "string" && typeof o.denom === "string" && typeof o.enabled === "boolean" && isSet(o.source));
  },
  isSDK(o: any): o is TokenPairSDKType {
    return o && (o.$typeUrl === TokenPair.typeUrl || typeof o.contract_address === "string" && typeof o.denom === "string" && typeof o.enabled === "boolean" && isSet(o.source));
  },
  isAmino(o: any): o is TokenPairAmino {
    return o && (o.$typeUrl === TokenPair.typeUrl || typeof o.contract_address === "string" && typeof o.denom === "string" && typeof o.enabled === "boolean" && isSet(o.source));
  },
  encode(message: TokenPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    if (message.source !== 0) {
      writer.uint32(32).int32(message.source);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TokenPair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.enabled = reader.bool();
          break;
        case 4:
          message.source = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TokenPair>): TokenPair {
    const message = createBaseTokenPair();
    message.contractAddress = object.contractAddress ?? "";
    message.denom = object.denom ?? "";
    message.enabled = object.enabled ?? false;
    message.source = object.source ?? 0;
    return message;
  },
  fromSDK(object: TokenPairSDKType): TokenPair {
    return {
      contractAddress: object?.contract_address,
      denom: object?.denom,
      enabled: object?.enabled,
      source: isSet(object.source) ? sourceFromJSON(object.source) : -1
    };
  },
  toSDK(message: TokenPair): TokenPairSDKType {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.denom = message.denom;
    obj.enabled = message.enabled;
    message.source !== undefined && (obj.source = sourceToJSON(message.source));
    return obj;
  },
  fromAmino(object: TokenPairAmino): TokenPair {
    const message = createBaseTokenPair();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    return message;
  },
  toAmino(message: TokenPair): TokenPairAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.enabled = message.enabled === false ? undefined : message.enabled;
    obj.source = message.source === 0 ? undefined : message.source;
    return obj;
  },
  fromAminoMsg(object: TokenPairAminoMsg): TokenPair {
    return TokenPair.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenPairProtoMsg): TokenPair {
    return TokenPair.decode(message.value);
  },
  toProto(message: TokenPair): Uint8Array {
    return TokenPair.encode(message).finish();
  },
  toProtoMsg(message: TokenPair): TokenPairProtoMsg {
    return {
      typeUrl: "/lorenzo.token.v1.TokenPair",
      value: TokenPair.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TokenPair.typeUrl, TokenPair);