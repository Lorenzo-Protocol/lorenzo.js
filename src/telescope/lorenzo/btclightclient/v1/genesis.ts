//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BTCHeaderInfo, BTCHeaderInfoAmino, BTCHeaderInfoSDKType } from "./btclightclient";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState defines the btclightclient module's genesis state. */
export interface GenesisState {
  params: Params;
  baseBtcHeader: BTCHeaderInfo;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the btclightclient module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  base_btc_header?: BTCHeaderInfoAmino;
}
export interface GenesisStateAminoMsg {
  type: "/lorenzo.btclightclient.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the btclightclient module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  base_btc_header: BTCHeaderInfoSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    baseBtcHeader: BTCHeaderInfo.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/lorenzo.btclightclient.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && BTCHeaderInfo.is(o.baseBtcHeader));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && BTCHeaderInfo.isSDK(o.base_btc_header));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && BTCHeaderInfo.isAmino(o.base_btc_header));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.baseBtcHeader !== undefined) {
      BTCHeaderInfo.encode(message.baseBtcHeader, writer.uint32(18).fork()).ldelim();
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
          message.baseBtcHeader = BTCHeaderInfo.decode(reader, reader.uint32());
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
    message.baseBtcHeader = object.baseBtcHeader !== undefined && object.baseBtcHeader !== null ? BTCHeaderInfo.fromPartial(object.baseBtcHeader) : undefined;
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      baseBtcHeader: object.base_btc_header ? BTCHeaderInfo.fromSDK(object.base_btc_header) : undefined
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    message.baseBtcHeader !== undefined && (obj.base_btc_header = message.baseBtcHeader ? BTCHeaderInfo.toSDK(message.baseBtcHeader) : undefined);
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.base_btc_header !== undefined && object.base_btc_header !== null) {
      message.baseBtcHeader = BTCHeaderInfo.fromAmino(object.base_btc_header);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.base_btc_header = message.baseBtcHeader ? BTCHeaderInfo.toAmino(message.baseBtcHeader) : undefined;
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
      typeUrl: "/lorenzo.btclightclient.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);