//@ts-nocheck
import { Header, HeaderAmino, HeaderSDKType } from "./client";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** MsgUploadHeaders defines the message for multiple incoming header bytes */
export interface MsgUploadHeaders {
  headers: Header[];
  signer: string;
}
export interface MsgUploadHeadersProtoMsg {
  typeUrl: "/lorenzo.bnblightclient.v1.MsgUploadHeaders";
  value: Uint8Array;
}
/** MsgUploadHeaders defines the message for multiple incoming header bytes */
export interface MsgUploadHeadersAmino {
  headers?: HeaderAmino[];
  signer?: string;
}
export interface MsgUploadHeadersAminoMsg {
  type: "lorenzo/bnblightclient/MsgUploadHeaders";
  value: MsgUploadHeadersAmino;
}
/** MsgUploadHeaders defines the message for multiple incoming header bytes */
export interface MsgUploadHeadersSDKType {
  headers: HeaderSDKType[];
  signer: string;
}
/**
 * MsgUploadHeadersResponse defines the response for the UploadHeaders
 * transaction
 */
export interface MsgUploadHeadersResponse {}
export interface MsgUploadHeadersResponseProtoMsg {
  typeUrl: "/lorenzo.bnblightclient.v1.MsgUploadHeadersResponse";
  value: Uint8Array;
}
/**
 * MsgUploadHeadersResponse defines the response for the UploadHeaders
 * transaction
 */
export interface MsgUploadHeadersResponseAmino {}
export interface MsgUploadHeadersResponseAminoMsg {
  type: "/lorenzo.bnblightclient.v1.MsgUploadHeadersResponse";
  value: MsgUploadHeadersResponseAmino;
}
/**
 * MsgUploadHeadersResponse defines the response for the UploadHeaders
 * transaction
 */
export interface MsgUploadHeadersResponseSDKType {}
/** MsgUpdateHeader defines the message for updating bnb light client header. */
export interface MsgUpdateHeader {
  header?: Header;
  deleteSubsequentHeaders: boolean;
  signer: string;
}
export interface MsgUpdateHeaderProtoMsg {
  typeUrl: "/lorenzo.bnblightclient.v1.MsgUpdateHeader";
  value: Uint8Array;
}
/** MsgUpdateHeader defines the message for updating bnb light client header. */
export interface MsgUpdateHeaderAmino {
  header?: HeaderAmino;
  delete_subsequent_headers?: boolean;
  signer?: string;
}
export interface MsgUpdateHeaderAminoMsg {
  type: "lorenzo/bnblightclient/MsgUpdateHeader";
  value: MsgUpdateHeaderAmino;
}
/** MsgUpdateHeader defines the message for updating bnb light client header. */
export interface MsgUpdateHeaderSDKType {
  header?: HeaderSDKType;
  delete_subsequent_headers: boolean;
  signer: string;
}
/**
 * MsgUpdateHeaderResponse defines the response for the UpdateHeader
 * transaction
 */
export interface MsgUpdateHeaderResponse {}
export interface MsgUpdateHeaderResponseProtoMsg {
  typeUrl: "/lorenzo.bnblightclient.v1.MsgUpdateHeaderResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateHeaderResponse defines the response for the UpdateHeader
 * transaction
 */
export interface MsgUpdateHeaderResponseAmino {}
export interface MsgUpdateHeaderResponseAminoMsg {
  type: "/lorenzo.bnblightclient.v1.MsgUpdateHeaderResponse";
  value: MsgUpdateHeaderResponseAmino;
}
/**
 * MsgUpdateHeaderResponse defines the response for the UpdateHeader
 * transaction
 */
export interface MsgUpdateHeaderResponseSDKType {}
/** MsgUpdateParams defines a message for updating fee module parameters. */
export interface MsgUpdateParams {
  /**
   * authority is the address of the governance account.
   * just FYI: cosmos.AddressString marks that this field should use type alias
   * for AddressString instead of string, but the functionality is not yet
   * implemented in cosmos-proto
   */
  authority: string;
  /**
   * params defines the bnb light client parameters.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/lorenzo.bnblightclient.v1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams defines a message for updating fee module parameters. */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address of the governance account.
   * just FYI: cosmos.AddressString marks that this field should use type alias
   * for AddressString instead of string, but the functionality is not yet
   * implemented in cosmos-proto
   */
  authority?: string;
  /**
   * params defines the bnb light client parameters.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "lorenzo/bnblightclient/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams defines a message for updating fee module parameters. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/** MsgUpdateParamsResponse is the response to the MsgUpdateParams message. */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/lorenzo.bnblightclient.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgUpdateParamsResponse is the response to the MsgUpdateParams message. */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/lorenzo.bnblightclient.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse is the response to the MsgUpdateParams message. */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgUploadHeaders(): MsgUploadHeaders {
  return {
    headers: [],
    signer: ""
  };
}
export const MsgUploadHeaders = {
  typeUrl: "/lorenzo.bnblightclient.v1.MsgUploadHeaders",
  aminoType: "lorenzo/bnblightclient/MsgUploadHeaders",
  is(o: any): o is MsgUploadHeaders {
    return o && (o.$typeUrl === MsgUploadHeaders.typeUrl || Array.isArray(o.headers) && (!o.headers.length || Header.is(o.headers[0])) && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgUploadHeadersSDKType {
    return o && (o.$typeUrl === MsgUploadHeaders.typeUrl || Array.isArray(o.headers) && (!o.headers.length || Header.isSDK(o.headers[0])) && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgUploadHeadersAmino {
    return o && (o.$typeUrl === MsgUploadHeaders.typeUrl || Array.isArray(o.headers) && (!o.headers.length || Header.isAmino(o.headers[0])) && typeof o.signer === "string");
  },
  encode(message: MsgUploadHeaders, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.headers) {
      Header.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUploadHeaders {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUploadHeaders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.headers.push(Header.decode(reader, reader.uint32()));
          break;
        case 2:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUploadHeaders>): MsgUploadHeaders {
    const message = createBaseMsgUploadHeaders();
    message.headers = object.headers?.map(e => Header.fromPartial(e)) || [];
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgUploadHeadersSDKType): MsgUploadHeaders {
    return {
      headers: Array.isArray(object?.headers) ? object.headers.map((e: any) => Header.fromSDK(e)) : [],
      signer: object?.signer
    };
  },
  toSDK(message: MsgUploadHeaders): MsgUploadHeadersSDKType {
    const obj: any = {};
    if (message.headers) {
      obj.headers = message.headers.map(e => e ? Header.toSDK(e) : undefined);
    } else {
      obj.headers = [];
    }
    obj.signer = message.signer;
    return obj;
  },
  fromAmino(object: MsgUploadHeadersAmino): MsgUploadHeaders {
    const message = createBaseMsgUploadHeaders();
    message.headers = object.headers?.map(e => Header.fromAmino(e)) || [];
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgUploadHeaders): MsgUploadHeadersAmino {
    const obj: any = {};
    if (message.headers) {
      obj.headers = message.headers.map(e => e ? Header.toAmino(e) : undefined);
    } else {
      obj.headers = message.headers;
    }
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgUploadHeadersAminoMsg): MsgUploadHeaders {
    return MsgUploadHeaders.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUploadHeaders): MsgUploadHeadersAminoMsg {
    return {
      type: "lorenzo/bnblightclient/MsgUploadHeaders",
      value: MsgUploadHeaders.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUploadHeadersProtoMsg): MsgUploadHeaders {
    return MsgUploadHeaders.decode(message.value);
  },
  toProto(message: MsgUploadHeaders): Uint8Array {
    return MsgUploadHeaders.encode(message).finish();
  },
  toProtoMsg(message: MsgUploadHeaders): MsgUploadHeadersProtoMsg {
    return {
      typeUrl: "/lorenzo.bnblightclient.v1.MsgUploadHeaders",
      value: MsgUploadHeaders.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUploadHeaders.typeUrl, MsgUploadHeaders);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUploadHeaders.aminoType, MsgUploadHeaders.typeUrl);
function createBaseMsgUploadHeadersResponse(): MsgUploadHeadersResponse {
  return {};
}
export const MsgUploadHeadersResponse = {
  typeUrl: "/lorenzo.bnblightclient.v1.MsgUploadHeadersResponse",
  is(o: any): o is MsgUploadHeadersResponse {
    return o && o.$typeUrl === MsgUploadHeadersResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUploadHeadersResponseSDKType {
    return o && o.$typeUrl === MsgUploadHeadersResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUploadHeadersResponseAmino {
    return o && o.$typeUrl === MsgUploadHeadersResponse.typeUrl;
  },
  encode(_: MsgUploadHeadersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUploadHeadersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUploadHeadersResponse();
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
  fromPartial(_: Partial<MsgUploadHeadersResponse>): MsgUploadHeadersResponse {
    const message = createBaseMsgUploadHeadersResponse();
    return message;
  },
  fromSDK(_: MsgUploadHeadersResponseSDKType): MsgUploadHeadersResponse {
    return {};
  },
  toSDK(_: MsgUploadHeadersResponse): MsgUploadHeadersResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUploadHeadersResponseAmino): MsgUploadHeadersResponse {
    const message = createBaseMsgUploadHeadersResponse();
    return message;
  },
  toAmino(_: MsgUploadHeadersResponse): MsgUploadHeadersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUploadHeadersResponseAminoMsg): MsgUploadHeadersResponse {
    return MsgUploadHeadersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUploadHeadersResponseProtoMsg): MsgUploadHeadersResponse {
    return MsgUploadHeadersResponse.decode(message.value);
  },
  toProto(message: MsgUploadHeadersResponse): Uint8Array {
    return MsgUploadHeadersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUploadHeadersResponse): MsgUploadHeadersResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.bnblightclient.v1.MsgUploadHeadersResponse",
      value: MsgUploadHeadersResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUploadHeadersResponse.typeUrl, MsgUploadHeadersResponse);
function createBaseMsgUpdateHeader(): MsgUpdateHeader {
  return {
    header: undefined,
    deleteSubsequentHeaders: false,
    signer: ""
  };
}
export const MsgUpdateHeader = {
  typeUrl: "/lorenzo.bnblightclient.v1.MsgUpdateHeader",
  aminoType: "lorenzo/bnblightclient/MsgUpdateHeader",
  is(o: any): o is MsgUpdateHeader {
    return o && (o.$typeUrl === MsgUpdateHeader.typeUrl || typeof o.deleteSubsequentHeaders === "boolean" && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgUpdateHeaderSDKType {
    return o && (o.$typeUrl === MsgUpdateHeader.typeUrl || typeof o.delete_subsequent_headers === "boolean" && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgUpdateHeaderAmino {
    return o && (o.$typeUrl === MsgUpdateHeader.typeUrl || typeof o.delete_subsequent_headers === "boolean" && typeof o.signer === "string");
  },
  encode(message: MsgUpdateHeader, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.deleteSubsequentHeaders === true) {
      writer.uint32(16).bool(message.deleteSubsequentHeaders);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateHeader {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.deleteSubsequentHeaders = reader.bool();
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateHeader>): MsgUpdateHeader {
    const message = createBaseMsgUpdateHeader();
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.deleteSubsequentHeaders = object.deleteSubsequentHeaders ?? false;
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgUpdateHeaderSDKType): MsgUpdateHeader {
    return {
      header: object.header ? Header.fromSDK(object.header) : undefined,
      deleteSubsequentHeaders: object?.delete_subsequent_headers,
      signer: object?.signer
    };
  },
  toSDK(message: MsgUpdateHeader): MsgUpdateHeaderSDKType {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toSDK(message.header) : undefined);
    obj.delete_subsequent_headers = message.deleteSubsequentHeaders;
    obj.signer = message.signer;
    return obj;
  },
  fromAmino(object: MsgUpdateHeaderAmino): MsgUpdateHeader {
    const message = createBaseMsgUpdateHeader();
    if (object.header !== undefined && object.header !== null) {
      message.header = Header.fromAmino(object.header);
    }
    if (object.delete_subsequent_headers !== undefined && object.delete_subsequent_headers !== null) {
      message.deleteSubsequentHeaders = object.delete_subsequent_headers;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgUpdateHeader): MsgUpdateHeaderAmino {
    const obj: any = {};
    obj.header = message.header ? Header.toAmino(message.header) : undefined;
    obj.delete_subsequent_headers = message.deleteSubsequentHeaders === false ? undefined : message.deleteSubsequentHeaders;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateHeaderAminoMsg): MsgUpdateHeader {
    return MsgUpdateHeader.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateHeader): MsgUpdateHeaderAminoMsg {
    return {
      type: "lorenzo/bnblightclient/MsgUpdateHeader",
      value: MsgUpdateHeader.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateHeaderProtoMsg): MsgUpdateHeader {
    return MsgUpdateHeader.decode(message.value);
  },
  toProto(message: MsgUpdateHeader): Uint8Array {
    return MsgUpdateHeader.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateHeader): MsgUpdateHeaderProtoMsg {
    return {
      typeUrl: "/lorenzo.bnblightclient.v1.MsgUpdateHeader",
      value: MsgUpdateHeader.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateHeader.typeUrl, MsgUpdateHeader);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateHeader.aminoType, MsgUpdateHeader.typeUrl);
function createBaseMsgUpdateHeaderResponse(): MsgUpdateHeaderResponse {
  return {};
}
export const MsgUpdateHeaderResponse = {
  typeUrl: "/lorenzo.bnblightclient.v1.MsgUpdateHeaderResponse",
  is(o: any): o is MsgUpdateHeaderResponse {
    return o && o.$typeUrl === MsgUpdateHeaderResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateHeaderResponseSDKType {
    return o && o.$typeUrl === MsgUpdateHeaderResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateHeaderResponseAmino {
    return o && o.$typeUrl === MsgUpdateHeaderResponse.typeUrl;
  },
  encode(_: MsgUpdateHeaderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateHeaderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateHeaderResponse();
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
  fromPartial(_: Partial<MsgUpdateHeaderResponse>): MsgUpdateHeaderResponse {
    const message = createBaseMsgUpdateHeaderResponse();
    return message;
  },
  fromSDK(_: MsgUpdateHeaderResponseSDKType): MsgUpdateHeaderResponse {
    return {};
  },
  toSDK(_: MsgUpdateHeaderResponse): MsgUpdateHeaderResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateHeaderResponseAmino): MsgUpdateHeaderResponse {
    const message = createBaseMsgUpdateHeaderResponse();
    return message;
  },
  toAmino(_: MsgUpdateHeaderResponse): MsgUpdateHeaderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateHeaderResponseAminoMsg): MsgUpdateHeaderResponse {
    return MsgUpdateHeaderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateHeaderResponseProtoMsg): MsgUpdateHeaderResponse {
    return MsgUpdateHeaderResponse.decode(message.value);
  },
  toProto(message: MsgUpdateHeaderResponse): Uint8Array {
    return MsgUpdateHeaderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateHeaderResponse): MsgUpdateHeaderResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.bnblightclient.v1.MsgUpdateHeaderResponse",
      value: MsgUpdateHeaderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateHeaderResponse.typeUrl, MsgUpdateHeaderResponse);
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/lorenzo.bnblightclient.v1.MsgUpdateParams",
  aminoType: "lorenzo/bnblightclient/MsgUpdateParams",
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
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "lorenzo/bnblightclient/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/lorenzo.bnblightclient.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParams.aminoType, MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/lorenzo.bnblightclient.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/lorenzo.bnblightclient.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);