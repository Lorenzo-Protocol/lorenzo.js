import { TokenPair, TokenPairAmino, TokenPairSDKType } from "./token";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the token module's genesis state. */
export interface GenesisState {
  params: Params;
  tokenPairs: TokenPair[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/lorenzo.token.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the token module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  token_pairs?: TokenPairAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/lorenzo.token.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the token module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  token_pairs: TokenPairSDKType[];
}
/** Params defines the token module parameters. */
export interface Params {
  enableConversion: boolean;
  enableEvmHook: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/lorenzo.token.v1.Params";
  value: Uint8Array;
}
/** Params defines the token module parameters. */
export interface ParamsAmino {
  enable_conversion?: boolean;
  enable_evm_hook?: boolean;
}
export interface ParamsAminoMsg {
  type: "/lorenzo.token.v1.Params";
  value: ParamsAmino;
}
/** Params defines the token module parameters. */
export interface ParamsSDKType {
  enable_conversion: boolean;
  enable_evm_hook: boolean;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    tokenPairs: []
  };
}
export const GenesisState = {
  typeUrl: "/lorenzo.token.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokenPairs) {
      TokenPair.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.tokenPairs.push(TokenPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.tokenPairs = object.tokenPairs?.map(e => TokenPair.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      tokenPairs: Array.isArray(object?.token_pairs) ? object.token_pairs.map((e: any) => TokenPair.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    if (message.tokenPairs) {
      obj.token_pairs = message.tokenPairs.map(e => e ? TokenPair.toSDK(e) : undefined);
    } else {
      obj.token_pairs = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.tokenPairs = object.token_pairs?.map(e => TokenPair.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.tokenPairs) {
      obj.token_pairs = message.tokenPairs.map(e => e ? TokenPair.toAmino(e) : undefined);
    } else {
      obj.token_pairs = message.tokenPairs;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/lorenzo.token.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    enableConversion: false,
    enableEvmHook: false
  };
}
export const Params = {
  typeUrl: "/lorenzo.token.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enableConversion === true) {
      writer.uint32(8).bool(message.enableConversion);
    }
    if (message.enableEvmHook === true) {
      writer.uint32(16).bool(message.enableEvmHook);
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
          message.enableConversion = reader.bool();
          break;
        case 2:
          message.enableEvmHook = reader.bool();
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
    message.enableConversion = object.enableConversion ?? false;
    message.enableEvmHook = object.enableEvmHook ?? false;
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      enableConversion: object?.enable_conversion,
      enableEvmHook: object?.enable_evm_hook
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.enable_conversion = message.enableConversion;
    obj.enable_evm_hook = message.enableEvmHook;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.enable_conversion !== undefined && object.enable_conversion !== null) {
      message.enableConversion = object.enable_conversion;
    }
    if (object.enable_evm_hook !== undefined && object.enable_evm_hook !== null) {
      message.enableEvmHook = object.enable_evm_hook;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.enable_conversion = message.enableConversion === false ? undefined : message.enableConversion;
    obj.enable_evm_hook = message.enableEvmHook === false ? undefined : message.enableEvmHook;
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
      typeUrl: "/lorenzo.token.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};