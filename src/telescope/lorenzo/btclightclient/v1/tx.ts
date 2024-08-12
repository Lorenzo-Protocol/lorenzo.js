//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** MsgInsertHeaders defines the message for multiple incoming header bytes */
export interface MsgInsertHeaders {
  signer: string;
  headers: Uint8Array[];
}
export interface MsgInsertHeadersProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.MsgInsertHeaders";
  value: Uint8Array;
}
/** MsgInsertHeaders defines the message for multiple incoming header bytes */
export interface MsgInsertHeadersAmino {
  signer?: string;
  headers?: string[];
}
export interface MsgInsertHeadersAminoMsg {
  type: "/lorenzo.btclightclient.v1.MsgInsertHeaders";
  value: MsgInsertHeadersAmino;
}
/** MsgInsertHeaders defines the message for multiple incoming header bytes */
export interface MsgInsertHeadersSDKType {
  signer: string;
  headers: Uint8Array[];
}
/**
 * MsgInsertHeadersResponse defines the response for the InsertHeaders
 * transaction
 */
export interface MsgInsertHeadersResponse {}
export interface MsgInsertHeadersResponseProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.MsgInsertHeadersResponse";
  value: Uint8Array;
}
/**
 * MsgInsertHeadersResponse defines the response for the InsertHeaders
 * transaction
 */
export interface MsgInsertHeadersResponseAmino {}
export interface MsgInsertHeadersResponseAminoMsg {
  type: "/lorenzo.btclightclient.v1.MsgInsertHeadersResponse";
  value: MsgInsertHeadersResponseAmino;
}
/**
 * MsgInsertHeadersResponse defines the response for the InsertHeaders
 * transaction
 */
export interface MsgInsertHeadersResponseSDKType {}
/**
 * MsgUpdateParams defines a message for updating btc light client module
 * parameters.
 */
export interface MsgUpdateParams {
  /**
   * authority is the address of the governance account.
   * just FYI: cosmos.AddressString marks that this field should use type alias
   * for AddressString instead of string, but the functionality is not yet
   * implemented in cosmos-proto
   */
  authority: string;
  /**
   * params defines the btc light client parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams defines a message for updating btc light client module
 * parameters.
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address of the governance account.
   * just FYI: cosmos.AddressString marks that this field should use type alias
   * for AddressString instead of string, but the functionality is not yet
   * implemented in cosmos-proto
   */
  authority?: string;
  /**
   * params defines the btc light client parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/lorenzo.btclightclient.v1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams defines a message for updating btc light client module
 * parameters.
 */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/** MsgUpdateParamsResponse is the response to the MsgUpdateParams message. */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgUpdateParamsResponse is the response to the MsgUpdateParams message. */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/lorenzo.btclightclient.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse is the response to the MsgUpdateParams message. */
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgUpdateFeeRate {
  signer: string;
  /** sat/vbyte * 1000 */
  feeRate: bigint;
}
export interface MsgUpdateFeeRateProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.MsgUpdateFeeRate";
  value: Uint8Array;
}
export interface MsgUpdateFeeRateAmino {
  signer?: string;
  /** sat/vbyte * 1000 */
  fee_rate?: string;
}
export interface MsgUpdateFeeRateAminoMsg {
  type: "/lorenzo.btclightclient.v1.MsgUpdateFeeRate";
  value: MsgUpdateFeeRateAmino;
}
export interface MsgUpdateFeeRateSDKType {
  signer: string;
  fee_rate: bigint;
}
export interface MsgUpdateFeeRateResponse {}
export interface MsgUpdateFeeRateResponseProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.MsgUpdateFeeRateResponse";
  value: Uint8Array;
}
export interface MsgUpdateFeeRateResponseAmino {}
export interface MsgUpdateFeeRateResponseAminoMsg {
  type: "/lorenzo.btclightclient.v1.MsgUpdateFeeRateResponse";
  value: MsgUpdateFeeRateResponseAmino;
}
export interface MsgUpdateFeeRateResponseSDKType {}
function createBaseMsgInsertHeaders(): MsgInsertHeaders {
  return {
    signer: "",
    headers: []
  };
}
export const MsgInsertHeaders = {
  typeUrl: "/lorenzo.btclightclient.v1.MsgInsertHeaders",
  is(o: any): o is MsgInsertHeaders {
    return o && (o.$typeUrl === MsgInsertHeaders.typeUrl || typeof o.signer === "string" && Array.isArray(o.headers) && (!o.headers.length || o.headers[0] instanceof Uint8Array || typeof o.headers[0] === "string"));
  },
  isSDK(o: any): o is MsgInsertHeadersSDKType {
    return o && (o.$typeUrl === MsgInsertHeaders.typeUrl || typeof o.signer === "string" && Array.isArray(o.headers) && (!o.headers.length || o.headers[0] instanceof Uint8Array || typeof o.headers[0] === "string"));
  },
  isAmino(o: any): o is MsgInsertHeadersAmino {
    return o && (o.$typeUrl === MsgInsertHeaders.typeUrl || typeof o.signer === "string" && Array.isArray(o.headers) && (!o.headers.length || o.headers[0] instanceof Uint8Array || typeof o.headers[0] === "string"));
  },
  encode(message: MsgInsertHeaders, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    for (const v of message.headers) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInsertHeaders {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInsertHeaders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.headers.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgInsertHeaders>): MsgInsertHeaders {
    const message = createBaseMsgInsertHeaders();
    message.signer = object.signer ?? "";
    message.headers = object.headers?.map(e => e) || [];
    return message;
  },
  fromSDK(object: MsgInsertHeadersSDKType): MsgInsertHeaders {
    return {
      signer: object?.signer,
      headers: Array.isArray(object?.headers) ? object.headers.map((e: any) => e) : []
    };
  },
  toSDK(message: MsgInsertHeaders): MsgInsertHeadersSDKType {
    const obj: any = {};
    obj.signer = message.signer;
    if (message.headers) {
      obj.headers = message.headers.map(e => e);
    } else {
      obj.headers = [];
    }
    return obj;
  },
  fromAmino(object: MsgInsertHeadersAmino): MsgInsertHeaders {
    const message = createBaseMsgInsertHeaders();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    message.headers = object.headers?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: MsgInsertHeaders): MsgInsertHeadersAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    if (message.headers) {
      obj.headers = message.headers.map(e => base64FromBytes(e));
    } else {
      obj.headers = message.headers;
    }
    return obj;
  },
  fromAminoMsg(object: MsgInsertHeadersAminoMsg): MsgInsertHeaders {
    return MsgInsertHeaders.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInsertHeadersProtoMsg): MsgInsertHeaders {
    return MsgInsertHeaders.decode(message.value);
  },
  toProto(message: MsgInsertHeaders): Uint8Array {
    return MsgInsertHeaders.encode(message).finish();
  },
  toProtoMsg(message: MsgInsertHeaders): MsgInsertHeadersProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.MsgInsertHeaders",
      value: MsgInsertHeaders.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgInsertHeaders.typeUrl, MsgInsertHeaders);
function createBaseMsgInsertHeadersResponse(): MsgInsertHeadersResponse {
  return {};
}
export const MsgInsertHeadersResponse = {
  typeUrl: "/lorenzo.btclightclient.v1.MsgInsertHeadersResponse",
  is(o: any): o is MsgInsertHeadersResponse {
    return o && o.$typeUrl === MsgInsertHeadersResponse.typeUrl;
  },
  isSDK(o: any): o is MsgInsertHeadersResponseSDKType {
    return o && o.$typeUrl === MsgInsertHeadersResponse.typeUrl;
  },
  isAmino(o: any): o is MsgInsertHeadersResponseAmino {
    return o && o.$typeUrl === MsgInsertHeadersResponse.typeUrl;
  },
  encode(_: MsgInsertHeadersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInsertHeadersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInsertHeadersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgInsertHeadersResponse>): MsgInsertHeadersResponse {
    const message = createBaseMsgInsertHeadersResponse();
    return message;
  },
  fromSDK(_: MsgInsertHeadersResponseSDKType): MsgInsertHeadersResponse {
    return {};
  },
  toSDK(_: MsgInsertHeadersResponse): MsgInsertHeadersResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgInsertHeadersResponseAmino): MsgInsertHeadersResponse {
    const message = createBaseMsgInsertHeadersResponse();
    return message;
  },
  toAmino(_: MsgInsertHeadersResponse): MsgInsertHeadersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgInsertHeadersResponseAminoMsg): MsgInsertHeadersResponse {
    return MsgInsertHeadersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInsertHeadersResponseProtoMsg): MsgInsertHeadersResponse {
    return MsgInsertHeadersResponse.decode(message.value);
  },
  toProto(message: MsgInsertHeadersResponse): Uint8Array {
    return MsgInsertHeadersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgInsertHeadersResponse): MsgInsertHeadersResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.MsgInsertHeadersResponse",
      value: MsgInsertHeadersResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgInsertHeadersResponse.typeUrl, MsgInsertHeadersResponse);
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/lorenzo.btclightclient.v1.MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.is(o.params));
  },
  isSDK(o: any): o is MsgUpdateParamsSDKType {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isSDK(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: MsgUpdateParamsSDKType): MsgUpdateParams {
    return {
      authority: object?.authority,
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: MsgUpdateParams): MsgUpdateParamsSDKType {
    const obj: any = {};
    obj.authority = message.authority;
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/lorenzo.btclightclient.v1.MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateParamsResponseSDKType {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromSDK(_: MsgUpdateParamsResponseSDKType): MsgUpdateParamsResponse {
    return {};
  },
  toSDK(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);
function createBaseMsgUpdateFeeRate(): MsgUpdateFeeRate {
  return {
    signer: "",
    feeRate: BigInt(0)
  };
}
export const MsgUpdateFeeRate = {
  typeUrl: "/lorenzo.btclightclient.v1.MsgUpdateFeeRate",
  is(o: any): o is MsgUpdateFeeRate {
    return o && (o.$typeUrl === MsgUpdateFeeRate.typeUrl || typeof o.signer === "string" && typeof o.feeRate === "bigint");
  },
  isSDK(o: any): o is MsgUpdateFeeRateSDKType {
    return o && (o.$typeUrl === MsgUpdateFeeRate.typeUrl || typeof o.signer === "string" && typeof o.fee_rate === "bigint");
  },
  isAmino(o: any): o is MsgUpdateFeeRateAmino {
    return o && (o.$typeUrl === MsgUpdateFeeRate.typeUrl || typeof o.signer === "string" && typeof o.fee_rate === "bigint");
  },
  encode(message: MsgUpdateFeeRate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.feeRate !== BigInt(0)) {
      writer.uint32(16).uint64(message.feeRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateFeeRate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFeeRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.feeRate = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateFeeRate>): MsgUpdateFeeRate {
    const message = createBaseMsgUpdateFeeRate();
    message.signer = object.signer ?? "";
    message.feeRate = object.feeRate !== undefined && object.feeRate !== null ? BigInt(object.feeRate.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: MsgUpdateFeeRateSDKType): MsgUpdateFeeRate {
    return {
      signer: object?.signer,
      feeRate: object?.fee_rate
    };
  },
  toSDK(message: MsgUpdateFeeRate): MsgUpdateFeeRateSDKType {
    const obj: any = {};
    obj.signer = message.signer;
    obj.fee_rate = message.feeRate;
    return obj;
  },
  fromAmino(object: MsgUpdateFeeRateAmino): MsgUpdateFeeRate {
    const message = createBaseMsgUpdateFeeRate();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.fee_rate !== undefined && object.fee_rate !== null) {
      message.feeRate = BigInt(object.fee_rate);
    }
    return message;
  },
  toAmino(message: MsgUpdateFeeRate): MsgUpdateFeeRateAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.fee_rate = message.feeRate !== BigInt(0) ? message.feeRate.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateFeeRateAminoMsg): MsgUpdateFeeRate {
    return MsgUpdateFeeRate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateFeeRateProtoMsg): MsgUpdateFeeRate {
    return MsgUpdateFeeRate.decode(message.value);
  },
  toProto(message: MsgUpdateFeeRate): Uint8Array {
    return MsgUpdateFeeRate.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateFeeRate): MsgUpdateFeeRateProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.MsgUpdateFeeRate",
      value: MsgUpdateFeeRate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateFeeRate.typeUrl, MsgUpdateFeeRate);
function createBaseMsgUpdateFeeRateResponse(): MsgUpdateFeeRateResponse {
  return {};
}
export const MsgUpdateFeeRateResponse = {
  typeUrl: "/lorenzo.btclightclient.v1.MsgUpdateFeeRateResponse",
  is(o: any): o is MsgUpdateFeeRateResponse {
    return o && o.$typeUrl === MsgUpdateFeeRateResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateFeeRateResponseSDKType {
    return o && o.$typeUrl === MsgUpdateFeeRateResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateFeeRateResponseAmino {
    return o && o.$typeUrl === MsgUpdateFeeRateResponse.typeUrl;
  },
  encode(_: MsgUpdateFeeRateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateFeeRateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFeeRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateFeeRateResponse>): MsgUpdateFeeRateResponse {
    const message = createBaseMsgUpdateFeeRateResponse();
    return message;
  },
  fromSDK(_: MsgUpdateFeeRateResponseSDKType): MsgUpdateFeeRateResponse {
    return {};
  },
  toSDK(_: MsgUpdateFeeRateResponse): MsgUpdateFeeRateResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateFeeRateResponseAmino): MsgUpdateFeeRateResponse {
    const message = createBaseMsgUpdateFeeRateResponse();
    return message;
  },
  toAmino(_: MsgUpdateFeeRateResponse): MsgUpdateFeeRateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateFeeRateResponseAminoMsg): MsgUpdateFeeRateResponse {
    return MsgUpdateFeeRateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateFeeRateResponseProtoMsg): MsgUpdateFeeRateResponse {
    return MsgUpdateFeeRateResponse.decode(message.value);
  },
  toProto(message: MsgUpdateFeeRateResponse): Uint8Array {
    return MsgUpdateFeeRateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateFeeRateResponse): MsgUpdateFeeRateResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.MsgUpdateFeeRateResponse",
      value: MsgUpdateFeeRateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateFeeRateResponse.typeUrl, MsgUpdateFeeRateResponse);