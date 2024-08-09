import { Metadata, MetadataAmino, MetadataSDKType, Params, ParamsAmino, ParamsSDKType } from "../../../cosmos/bank/v1beta1/bank";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * MsgRegisterCoin registers a token pair for existing coin
 * NOTE: this is a governance message.
 */
export interface MsgRegisterCoin {
  /** authority is the address that can update the parameters */
  authority: string;
  /** metadata slice of coins */
  metadata: Metadata[];
}
export interface MsgRegisterCoinProtoMsg {
  typeUrl: "/lorenzo.token.v1.MsgRegisterCoin";
  value: Uint8Array;
}
/**
 * MsgRegisterCoin registers a token pair for existing coin
 * NOTE: this is a governance message.
 */
export interface MsgRegisterCoinAmino {
  /** authority is the address that can update the parameters */
  authority?: string;
  /** metadata slice of coins */
  metadata?: MetadataAmino[];
}
export interface MsgRegisterCoinAminoMsg {
  type: "/lorenzo.token.v1.MsgRegisterCoin";
  value: MsgRegisterCoinAmino;
}
/**
 * MsgRegisterCoin registers a token pair for existing coin
 * NOTE: this is a governance message.
 */
export interface MsgRegisterCoinSDKType {
  authority: string;
  metadata: MetadataSDKType[];
}
export interface MsgRegisterCoinResponse {}
export interface MsgRegisterCoinResponseProtoMsg {
  typeUrl: "/lorenzo.token.v1.MsgRegisterCoinResponse";
  value: Uint8Array;
}
export interface MsgRegisterCoinResponseAmino {}
export interface MsgRegisterCoinResponseAminoMsg {
  type: "/lorenzo.token.v1.MsgRegisterCoinResponse";
  value: MsgRegisterCoinResponseAmino;
}
export interface MsgRegisterCoinResponseSDKType {}
/**
 * MsgRegisterERC20 registers a token pair for existing erc20 contract
 * NOTE: this is a governance message.
 */
export interface MsgRegisterERC20 {
  /** authority is the address that can update the parameters */
  authority: string;
  /** metadata slice of erc20 token contract addresses */
  contractAddresses: string[];
}
export interface MsgRegisterERC20ProtoMsg {
  typeUrl: "/lorenzo.token.v1.MsgRegisterERC20";
  value: Uint8Array;
}
/**
 * MsgRegisterERC20 registers a token pair for existing erc20 contract
 * NOTE: this is a governance message.
 */
export interface MsgRegisterERC20Amino {
  /** authority is the address that can update the parameters */
  authority?: string;
  /** metadata slice of erc20 token contract addresses */
  contract_addresses?: string[];
}
export interface MsgRegisterERC20AminoMsg {
  type: "/lorenzo.token.v1.MsgRegisterERC20";
  value: MsgRegisterERC20Amino;
}
/**
 * MsgRegisterERC20 registers a token pair for existing erc20 contract
 * NOTE: this is a governance message.
 */
export interface MsgRegisterERC20SDKType {
  authority: string;
  contract_addresses: string[];
}
export interface MsgRegisterERC20Response {}
export interface MsgRegisterERC20ResponseProtoMsg {
  typeUrl: "/lorenzo.token.v1.MsgRegisterERC20Response";
  value: Uint8Array;
}
export interface MsgRegisterERC20ResponseAmino {}
export interface MsgRegisterERC20ResponseAminoMsg {
  type: "/lorenzo.token.v1.MsgRegisterERC20Response";
  value: MsgRegisterERC20ResponseAmino;
}
export interface MsgRegisterERC20ResponseSDKType {}
/**
 * MsgToggleConversion toggles the conversion for a token pair
 * NOTE: this is a governance message.
 */
export interface MsgToggleConversion {
  /** authority is the address that can update the parameters */
  authority: string;
  /** token is in format of either coin base denom or erc20 contract address */
  token: string;
}
export interface MsgToggleConversionProtoMsg {
  typeUrl: "/lorenzo.token.v1.MsgToggleConversion";
  value: Uint8Array;
}
/**
 * MsgToggleConversion toggles the conversion for a token pair
 * NOTE: this is a governance message.
 */
export interface MsgToggleConversionAmino {
  /** authority is the address that can update the parameters */
  authority?: string;
  /** token is in format of either coin base denom or erc20 contract address */
  token?: string;
}
export interface MsgToggleConversionAminoMsg {
  type: "/lorenzo.token.v1.MsgToggleConversion";
  value: MsgToggleConversionAmino;
}
/**
 * MsgToggleConversion toggles the conversion for a token pair
 * NOTE: this is a governance message.
 */
export interface MsgToggleConversionSDKType {
  authority: string;
  token: string;
}
export interface MsgToggleConversionResponse {}
export interface MsgToggleConversionResponseProtoMsg {
  typeUrl: "/lorenzo.token.v1.MsgToggleConversionResponse";
  value: Uint8Array;
}
export interface MsgToggleConversionResponseAmino {}
export interface MsgToggleConversionResponseAminoMsg {
  type: "/lorenzo.token.v1.MsgToggleConversionResponse";
  value: MsgToggleConversionResponseAmino;
}
export interface MsgToggleConversionResponseSDKType {}
/** MsgConvertCoin converts a coin to an ERC20 token */
export interface MsgConvertCoin {
  /** coin to be converted */
  coin: Coin;
  /** receiver of the erc20 token, evm hex format address. */
  receiver: string;
  /** sender of the coin, lorenzo bech32 format address. */
  sender: string;
}
export interface MsgConvertCoinProtoMsg {
  typeUrl: "/lorenzo.token.v1.MsgConvertCoin";
  value: Uint8Array;
}
/** MsgConvertCoin converts a coin to an ERC20 token */
export interface MsgConvertCoinAmino {
  /** coin to be converted */
  coin?: CoinAmino;
  /** receiver of the erc20 token, evm hex format address. */
  receiver?: string;
  /** sender of the coin, lorenzo bech32 format address. */
  sender?: string;
}
export interface MsgConvertCoinAminoMsg {
  type: "/lorenzo.token.v1.MsgConvertCoin";
  value: MsgConvertCoinAmino;
}
/** MsgConvertCoin converts a coin to an ERC20 token */
export interface MsgConvertCoinSDKType {
  coin: CoinSDKType;
  receiver: string;
  sender: string;
}
export interface MsgConvertCoinResponse {}
export interface MsgConvertCoinResponseProtoMsg {
  typeUrl: "/lorenzo.token.v1.MsgConvertCoinResponse";
  value: Uint8Array;
}
export interface MsgConvertCoinResponseAmino {}
export interface MsgConvertCoinResponseAminoMsg {
  type: "/lorenzo.token.v1.MsgConvertCoinResponse";
  value: MsgConvertCoinResponseAmino;
}
export interface MsgConvertCoinResponseSDKType {}
/** MsgConvertERC20 converts an ERC20 token to a coin */
export interface MsgConvertERC20 {
  /** contract address of the ERC20 token */
  contractAddress: string;
  /** amount of tokens to be converted */
  amount: string;
  /** receiver of the coin */
  receiver: string;
  /** sender of the ERC20 token */
  sender: string;
}
export interface MsgConvertERC20ProtoMsg {
  typeUrl: "/lorenzo.token.v1.MsgConvertERC20";
  value: Uint8Array;
}
/** MsgConvertERC20 converts an ERC20 token to a coin */
export interface MsgConvertERC20Amino {
  /** contract address of the ERC20 token */
  contract_address?: string;
  /** amount of tokens to be converted */
  amount?: string;
  /** receiver of the coin */
  receiver?: string;
  /** sender of the ERC20 token */
  sender?: string;
}
export interface MsgConvertERC20AminoMsg {
  type: "/lorenzo.token.v1.MsgConvertERC20";
  value: MsgConvertERC20Amino;
}
/** MsgConvertERC20 converts an ERC20 token to a coin */
export interface MsgConvertERC20SDKType {
  contract_address: string;
  amount: string;
  receiver: string;
  sender: string;
}
export interface MsgConvertERC20Response {}
export interface MsgConvertERC20ResponseProtoMsg {
  typeUrl: "/lorenzo.token.v1.MsgConvertERC20Response";
  value: Uint8Array;
}
export interface MsgConvertERC20ResponseAmino {}
export interface MsgConvertERC20ResponseAminoMsg {
  type: "/lorenzo.token.v1.MsgConvertERC20Response";
  value: MsgConvertERC20ResponseAmino;
}
export interface MsgConvertERC20ResponseSDKType {}
/** MsgUpdateParams updates the convert module parameters */
export interface MsgUpdateParams {
  /** authority is the address that can update the parameters */
  authority: string;
  /** params are the new parameters */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/lorenzo.token.v1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams updates the convert module parameters */
export interface MsgUpdateParamsAmino {
  /** authority is the address that can update the parameters */
  authority?: string;
  /** params are the new parameters */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/lorenzo.token.v1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams updates the convert module parameters */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/lorenzo.token.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/lorenzo.token.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgRegisterCoin(): MsgRegisterCoin {
  return {
    authority: "",
    metadata: []
  };
}
export const MsgRegisterCoin = {
  typeUrl: "/lorenzo.token.v1.MsgRegisterCoin",
  encode(message: MsgRegisterCoin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.metadata) {
      Metadata.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterCoin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.metadata.push(Metadata.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRegisterCoin>): MsgRegisterCoin {
    const message = createBaseMsgRegisterCoin();
    message.authority = object.authority ?? "";
    message.metadata = object.metadata?.map(e => Metadata.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgRegisterCoinSDKType): MsgRegisterCoin {
    return {
      authority: object?.authority,
      metadata: Array.isArray(object?.metadata) ? object.metadata.map((e: any) => Metadata.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgRegisterCoin): MsgRegisterCoinSDKType {
    const obj: any = {};
    obj.authority = message.authority;
    if (message.metadata) {
      obj.metadata = message.metadata.map(e => e ? Metadata.toSDK(e) : undefined);
    } else {
      obj.metadata = [];
    }
    return obj;
  },
  fromAmino(object: MsgRegisterCoinAmino): MsgRegisterCoin {
    const message = createBaseMsgRegisterCoin();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    message.metadata = object.metadata?.map(e => Metadata.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgRegisterCoin): MsgRegisterCoinAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    if (message.metadata) {
      obj.metadata = message.metadata.map(e => e ? Metadata.toAmino(e) : undefined);
    } else {
      obj.metadata = message.metadata;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRegisterCoinAminoMsg): MsgRegisterCoin {
    return MsgRegisterCoin.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterCoinProtoMsg): MsgRegisterCoin {
    return MsgRegisterCoin.decode(message.value);
  },
  toProto(message: MsgRegisterCoin): Uint8Array {
    return MsgRegisterCoin.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterCoin): MsgRegisterCoinProtoMsg {
    return {
      typeUrl: "/lorenzo.token.v1.MsgRegisterCoin",
      value: MsgRegisterCoin.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterCoinResponse(): MsgRegisterCoinResponse {
  return {};
}
export const MsgRegisterCoinResponse = {
  typeUrl: "/lorenzo.token.v1.MsgRegisterCoinResponse",
  encode(_: MsgRegisterCoinResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterCoinResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCoinResponse();
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
  fromPartial(_: Partial<MsgRegisterCoinResponse>): MsgRegisterCoinResponse {
    const message = createBaseMsgRegisterCoinResponse();
    return message;
  },
  fromSDK(_: MsgRegisterCoinResponseSDKType): MsgRegisterCoinResponse {
    return {};
  },
  toSDK(_: MsgRegisterCoinResponse): MsgRegisterCoinResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgRegisterCoinResponseAmino): MsgRegisterCoinResponse {
    const message = createBaseMsgRegisterCoinResponse();
    return message;
  },
  toAmino(_: MsgRegisterCoinResponse): MsgRegisterCoinResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterCoinResponseAminoMsg): MsgRegisterCoinResponse {
    return MsgRegisterCoinResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterCoinResponseProtoMsg): MsgRegisterCoinResponse {
    return MsgRegisterCoinResponse.decode(message.value);
  },
  toProto(message: MsgRegisterCoinResponse): Uint8Array {
    return MsgRegisterCoinResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterCoinResponse): MsgRegisterCoinResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.token.v1.MsgRegisterCoinResponse",
      value: MsgRegisterCoinResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterERC20(): MsgRegisterERC20 {
  return {
    authority: "",
    contractAddresses: []
  };
}
export const MsgRegisterERC20 = {
  typeUrl: "/lorenzo.token.v1.MsgRegisterERC20",
  encode(message: MsgRegisterERC20, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.contractAddresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterERC20 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterERC20();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.contractAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRegisterERC20>): MsgRegisterERC20 {
    const message = createBaseMsgRegisterERC20();
    message.authority = object.authority ?? "";
    message.contractAddresses = object.contractAddresses?.map(e => e) || [];
    return message;
  },
  fromSDK(object: MsgRegisterERC20SDKType): MsgRegisterERC20 {
    return {
      authority: object?.authority,
      contractAddresses: Array.isArray(object?.contract_addresses) ? object.contract_addresses.map((e: any) => e) : []
    };
  },
  toSDK(message: MsgRegisterERC20): MsgRegisterERC20SDKType {
    const obj: any = {};
    obj.authority = message.authority;
    if (message.contractAddresses) {
      obj.contract_addresses = message.contractAddresses.map(e => e);
    } else {
      obj.contract_addresses = [];
    }
    return obj;
  },
  fromAmino(object: MsgRegisterERC20Amino): MsgRegisterERC20 {
    const message = createBaseMsgRegisterERC20();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    message.contractAddresses = object.contract_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgRegisterERC20): MsgRegisterERC20Amino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    if (message.contractAddresses) {
      obj.contract_addresses = message.contractAddresses.map(e => e);
    } else {
      obj.contract_addresses = message.contractAddresses;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRegisterERC20AminoMsg): MsgRegisterERC20 {
    return MsgRegisterERC20.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterERC20ProtoMsg): MsgRegisterERC20 {
    return MsgRegisterERC20.decode(message.value);
  },
  toProto(message: MsgRegisterERC20): Uint8Array {
    return MsgRegisterERC20.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterERC20): MsgRegisterERC20ProtoMsg {
    return {
      typeUrl: "/lorenzo.token.v1.MsgRegisterERC20",
      value: MsgRegisterERC20.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterERC20Response(): MsgRegisterERC20Response {
  return {};
}
export const MsgRegisterERC20Response = {
  typeUrl: "/lorenzo.token.v1.MsgRegisterERC20Response",
  encode(_: MsgRegisterERC20Response, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterERC20Response {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterERC20Response();
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
  fromPartial(_: Partial<MsgRegisterERC20Response>): MsgRegisterERC20Response {
    const message = createBaseMsgRegisterERC20Response();
    return message;
  },
  fromSDK(_: MsgRegisterERC20ResponseSDKType): MsgRegisterERC20Response {
    return {};
  },
  toSDK(_: MsgRegisterERC20Response): MsgRegisterERC20ResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgRegisterERC20ResponseAmino): MsgRegisterERC20Response {
    const message = createBaseMsgRegisterERC20Response();
    return message;
  },
  toAmino(_: MsgRegisterERC20Response): MsgRegisterERC20ResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterERC20ResponseAminoMsg): MsgRegisterERC20Response {
    return MsgRegisterERC20Response.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterERC20ResponseProtoMsg): MsgRegisterERC20Response {
    return MsgRegisterERC20Response.decode(message.value);
  },
  toProto(message: MsgRegisterERC20Response): Uint8Array {
    return MsgRegisterERC20Response.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterERC20Response): MsgRegisterERC20ResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.token.v1.MsgRegisterERC20Response",
      value: MsgRegisterERC20Response.encode(message).finish()
    };
  }
};
function createBaseMsgToggleConversion(): MsgToggleConversion {
  return {
    authority: "",
    token: ""
  };
}
export const MsgToggleConversion = {
  typeUrl: "/lorenzo.token.v1.MsgToggleConversion",
  encode(message: MsgToggleConversion, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgToggleConversion {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleConversion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgToggleConversion>): MsgToggleConversion {
    const message = createBaseMsgToggleConversion();
    message.authority = object.authority ?? "";
    message.token = object.token ?? "";
    return message;
  },
  fromSDK(object: MsgToggleConversionSDKType): MsgToggleConversion {
    return {
      authority: object?.authority,
      token: object?.token
    };
  },
  toSDK(message: MsgToggleConversion): MsgToggleConversionSDKType {
    const obj: any = {};
    obj.authority = message.authority;
    obj.token = message.token;
    return obj;
  },
  fromAmino(object: MsgToggleConversionAmino): MsgToggleConversion {
    const message = createBaseMsgToggleConversion();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    }
    return message;
  },
  toAmino(message: MsgToggleConversion): MsgToggleConversionAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.token = message.token === "" ? undefined : message.token;
    return obj;
  },
  fromAminoMsg(object: MsgToggleConversionAminoMsg): MsgToggleConversion {
    return MsgToggleConversion.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgToggleConversionProtoMsg): MsgToggleConversion {
    return MsgToggleConversion.decode(message.value);
  },
  toProto(message: MsgToggleConversion): Uint8Array {
    return MsgToggleConversion.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleConversion): MsgToggleConversionProtoMsg {
    return {
      typeUrl: "/lorenzo.token.v1.MsgToggleConversion",
      value: MsgToggleConversion.encode(message).finish()
    };
  }
};
function createBaseMsgToggleConversionResponse(): MsgToggleConversionResponse {
  return {};
}
export const MsgToggleConversionResponse = {
  typeUrl: "/lorenzo.token.v1.MsgToggleConversionResponse",
  encode(_: MsgToggleConversionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgToggleConversionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleConversionResponse();
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
  fromPartial(_: Partial<MsgToggleConversionResponse>): MsgToggleConversionResponse {
    const message = createBaseMsgToggleConversionResponse();
    return message;
  },
  fromSDK(_: MsgToggleConversionResponseSDKType): MsgToggleConversionResponse {
    return {};
  },
  toSDK(_: MsgToggleConversionResponse): MsgToggleConversionResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgToggleConversionResponseAmino): MsgToggleConversionResponse {
    const message = createBaseMsgToggleConversionResponse();
    return message;
  },
  toAmino(_: MsgToggleConversionResponse): MsgToggleConversionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgToggleConversionResponseAminoMsg): MsgToggleConversionResponse {
    return MsgToggleConversionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgToggleConversionResponseProtoMsg): MsgToggleConversionResponse {
    return MsgToggleConversionResponse.decode(message.value);
  },
  toProto(message: MsgToggleConversionResponse): Uint8Array {
    return MsgToggleConversionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleConversionResponse): MsgToggleConversionResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.token.v1.MsgToggleConversionResponse",
      value: MsgToggleConversionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConvertCoin(): MsgConvertCoin {
  return {
    coin: Coin.fromPartial({}),
    receiver: "",
    sender: ""
  };
}
export const MsgConvertCoin = {
  typeUrl: "/lorenzo.token.v1.MsgConvertCoin",
  encode(message: MsgConvertCoin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertCoin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgConvertCoin>): MsgConvertCoin {
    const message = createBaseMsgConvertCoin();
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromSDK(object: MsgConvertCoinSDKType): MsgConvertCoin {
    return {
      coin: object.coin ? Coin.fromSDK(object.coin) : undefined,
      receiver: object?.receiver,
      sender: object?.sender
    };
  },
  toSDK(message: MsgConvertCoin): MsgConvertCoinSDKType {
    const obj: any = {};
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toSDK(message.coin) : undefined);
    obj.receiver = message.receiver;
    obj.sender = message.sender;
    return obj;
  },
  fromAmino(object: MsgConvertCoinAmino): MsgConvertCoin {
    const message = createBaseMsgConvertCoin();
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgConvertCoin): MsgConvertCoinAmino {
    const obj: any = {};
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgConvertCoinAminoMsg): MsgConvertCoin {
    return MsgConvertCoin.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConvertCoinProtoMsg): MsgConvertCoin {
    return MsgConvertCoin.decode(message.value);
  },
  toProto(message: MsgConvertCoin): Uint8Array {
    return MsgConvertCoin.encode(message).finish();
  },
  toProtoMsg(message: MsgConvertCoin): MsgConvertCoinProtoMsg {
    return {
      typeUrl: "/lorenzo.token.v1.MsgConvertCoin",
      value: MsgConvertCoin.encode(message).finish()
    };
  }
};
function createBaseMsgConvertCoinResponse(): MsgConvertCoinResponse {
  return {};
}
export const MsgConvertCoinResponse = {
  typeUrl: "/lorenzo.token.v1.MsgConvertCoinResponse",
  encode(_: MsgConvertCoinResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertCoinResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertCoinResponse();
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
  fromPartial(_: Partial<MsgConvertCoinResponse>): MsgConvertCoinResponse {
    const message = createBaseMsgConvertCoinResponse();
    return message;
  },
  fromSDK(_: MsgConvertCoinResponseSDKType): MsgConvertCoinResponse {
    return {};
  },
  toSDK(_: MsgConvertCoinResponse): MsgConvertCoinResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgConvertCoinResponseAmino): MsgConvertCoinResponse {
    const message = createBaseMsgConvertCoinResponse();
    return message;
  },
  toAmino(_: MsgConvertCoinResponse): MsgConvertCoinResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConvertCoinResponseAminoMsg): MsgConvertCoinResponse {
    return MsgConvertCoinResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConvertCoinResponseProtoMsg): MsgConvertCoinResponse {
    return MsgConvertCoinResponse.decode(message.value);
  },
  toProto(message: MsgConvertCoinResponse): Uint8Array {
    return MsgConvertCoinResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConvertCoinResponse): MsgConvertCoinResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.token.v1.MsgConvertCoinResponse",
      value: MsgConvertCoinResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConvertERC20(): MsgConvertERC20 {
  return {
    contractAddress: "",
    amount: "",
    receiver: "",
    sender: ""
  };
}
export const MsgConvertERC20 = {
  typeUrl: "/lorenzo.token.v1.MsgConvertERC20",
  encode(message: MsgConvertERC20, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertERC20 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertERC20();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgConvertERC20>): MsgConvertERC20 {
    const message = createBaseMsgConvertERC20();
    message.contractAddress = object.contractAddress ?? "";
    message.amount = object.amount ?? "";
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromSDK(object: MsgConvertERC20SDKType): MsgConvertERC20 {
    return {
      contractAddress: object?.contract_address,
      amount: object?.amount,
      receiver: object?.receiver,
      sender: object?.sender
    };
  },
  toSDK(message: MsgConvertERC20): MsgConvertERC20SDKType {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.amount = message.amount;
    obj.receiver = message.receiver;
    obj.sender = message.sender;
    return obj;
  },
  fromAmino(object: MsgConvertERC20Amino): MsgConvertERC20 {
    const message = createBaseMsgConvertERC20();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgConvertERC20): MsgConvertERC20Amino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgConvertERC20AminoMsg): MsgConvertERC20 {
    return MsgConvertERC20.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConvertERC20ProtoMsg): MsgConvertERC20 {
    return MsgConvertERC20.decode(message.value);
  },
  toProto(message: MsgConvertERC20): Uint8Array {
    return MsgConvertERC20.encode(message).finish();
  },
  toProtoMsg(message: MsgConvertERC20): MsgConvertERC20ProtoMsg {
    return {
      typeUrl: "/lorenzo.token.v1.MsgConvertERC20",
      value: MsgConvertERC20.encode(message).finish()
    };
  }
};
function createBaseMsgConvertERC20Response(): MsgConvertERC20Response {
  return {};
}
export const MsgConvertERC20Response = {
  typeUrl: "/lorenzo.token.v1.MsgConvertERC20Response",
  encode(_: MsgConvertERC20Response, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertERC20Response {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertERC20Response();
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
  fromPartial(_: Partial<MsgConvertERC20Response>): MsgConvertERC20Response {
    const message = createBaseMsgConvertERC20Response();
    return message;
  },
  fromSDK(_: MsgConvertERC20ResponseSDKType): MsgConvertERC20Response {
    return {};
  },
  toSDK(_: MsgConvertERC20Response): MsgConvertERC20ResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgConvertERC20ResponseAmino): MsgConvertERC20Response {
    const message = createBaseMsgConvertERC20Response();
    return message;
  },
  toAmino(_: MsgConvertERC20Response): MsgConvertERC20ResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConvertERC20ResponseAminoMsg): MsgConvertERC20Response {
    return MsgConvertERC20Response.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConvertERC20ResponseProtoMsg): MsgConvertERC20Response {
    return MsgConvertERC20Response.decode(message.value);
  },
  toProto(message: MsgConvertERC20Response): Uint8Array {
    return MsgConvertERC20Response.encode(message).finish();
  },
  toProtoMsg(message: MsgConvertERC20Response): MsgConvertERC20ResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.token.v1.MsgConvertERC20Response",
      value: MsgConvertERC20Response.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/lorenzo.token.v1.MsgUpdateParams",
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
      typeUrl: "/lorenzo.token.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/lorenzo.token.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/lorenzo.token.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};