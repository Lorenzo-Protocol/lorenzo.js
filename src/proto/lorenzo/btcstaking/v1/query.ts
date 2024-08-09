//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BTCStakingRecord, BTCStakingRecordAmino, BTCStakingRecordSDKType } from "./staking_record";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/lorenzo.btcstaking.v1.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/lorenzo.btcstaking.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params?: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/lorenzo.btcstaking.v1.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/lorenzo.btcstaking.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface StakingRecordDisplay {
  txId: string;
  receiverAddress: string;
  amount: string;
  agentName: string;
  agentBtcAddr: string;
  chainId: number;
}
export interface StakingRecordDisplayProtoMsg {
  typeUrl: "/lorenzo.btcstaking.v1.StakingRecordDisplay";
  value: Uint8Array;
}
export interface StakingRecordDisplayAmino {
  tx_id?: string;
  receiver_address?: string;
  amount?: string;
  agent_name?: string;
  agent_btc_addr?: string;
  chain_id?: number;
}
export interface StakingRecordDisplayAminoMsg {
  type: "/lorenzo.btcstaking.v1.StakingRecordDisplay";
  value: StakingRecordDisplayAmino;
}
export interface StakingRecordDisplaySDKType {
  tx_id: string;
  receiver_address: string;
  amount: string;
  agent_name: string;
  agent_btc_addr: string;
  chain_id: number;
}
export interface QueryStakingRecordRequest {
  txHash: Uint8Array;
}
export interface QueryStakingRecordRequestProtoMsg {
  typeUrl: "/lorenzo.btcstaking.v1.QueryStakingRecordRequest";
  value: Uint8Array;
}
export interface QueryStakingRecordRequestAmino {
  txHash?: string;
}
export interface QueryStakingRecordRequestAminoMsg {
  type: "/lorenzo.btcstaking.v1.QueryStakingRecordRequest";
  value: QueryStakingRecordRequestAmino;
}
export interface QueryStakingRecordRequestSDKType {
  txHash: Uint8Array;
}
export interface QueryStakingRecordResponse {
  record?: BTCStakingRecord;
}
export interface QueryStakingRecordResponseProtoMsg {
  typeUrl: "/lorenzo.btcstaking.v1.QueryStakingRecordResponse";
  value: Uint8Array;
}
export interface QueryStakingRecordResponseAmino {
  record?: BTCStakingRecordAmino;
}
export interface QueryStakingRecordResponseAminoMsg {
  type: "/lorenzo.btcstaking.v1.QueryStakingRecordResponse";
  value: QueryStakingRecordResponseAmino;
}
export interface QueryStakingRecordResponseSDKType {
  record?: BTCStakingRecordSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lorenzo.btcstaking.v1.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },
  toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/lorenzo.btcstaking.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  typeUrl: "/lorenzo.btcstaking.v1.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.btcstaking.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseStakingRecordDisplay(): StakingRecordDisplay {
  return {
    txId: "",
    receiverAddress: "",
    amount: "",
    agentName: "",
    agentBtcAddr: "",
    chainId: 0
  };
}
export const StakingRecordDisplay = {
  typeUrl: "/lorenzo.btcstaking.v1.StakingRecordDisplay",
  is(o: any): o is StakingRecordDisplay {
    return o && (o.$typeUrl === StakingRecordDisplay.typeUrl || typeof o.txId === "string" && typeof o.receiverAddress === "string" && typeof o.amount === "string" && typeof o.agentName === "string" && typeof o.agentBtcAddr === "string" && typeof o.chainId === "number");
  },
  isSDK(o: any): o is StakingRecordDisplaySDKType {
    return o && (o.$typeUrl === StakingRecordDisplay.typeUrl || typeof o.tx_id === "string" && typeof o.receiver_address === "string" && typeof o.amount === "string" && typeof o.agent_name === "string" && typeof o.agent_btc_addr === "string" && typeof o.chain_id === "number");
  },
  isAmino(o: any): o is StakingRecordDisplayAmino {
    return o && (o.$typeUrl === StakingRecordDisplay.typeUrl || typeof o.tx_id === "string" && typeof o.receiver_address === "string" && typeof o.amount === "string" && typeof o.agent_name === "string" && typeof o.agent_btc_addr === "string" && typeof o.chain_id === "number");
  },
  encode(message: StakingRecordDisplay, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txId !== "") {
      writer.uint32(10).string(message.txId);
    }
    if (message.receiverAddress !== "") {
      writer.uint32(18).string(message.receiverAddress);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
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
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakingRecordDisplay {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingRecordDisplay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txId = reader.string();
          break;
        case 2:
          message.receiverAddress = reader.string();
          break;
        case 3:
          message.amount = reader.string();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StakingRecordDisplay>): StakingRecordDisplay {
    const message = createBaseStakingRecordDisplay();
    message.txId = object.txId ?? "";
    message.receiverAddress = object.receiverAddress ?? "";
    message.amount = object.amount ?? "";
    message.agentName = object.agentName ?? "";
    message.agentBtcAddr = object.agentBtcAddr ?? "";
    message.chainId = object.chainId ?? 0;
    return message;
  },
  fromSDK(object: StakingRecordDisplaySDKType): StakingRecordDisplay {
    return {
      txId: object?.tx_id,
      receiverAddress: object?.receiver_address,
      amount: object?.amount,
      agentName: object?.agent_name,
      agentBtcAddr: object?.agent_btc_addr,
      chainId: object?.chain_id
    };
  },
  toSDK(message: StakingRecordDisplay): StakingRecordDisplaySDKType {
    const obj: any = {};
    obj.tx_id = message.txId;
    obj.receiver_address = message.receiverAddress;
    obj.amount = message.amount;
    obj.agent_name = message.agentName;
    obj.agent_btc_addr = message.agentBtcAddr;
    obj.chain_id = message.chainId;
    return obj;
  },
  fromAmino(object: StakingRecordDisplayAmino): StakingRecordDisplay {
    const message = createBaseStakingRecordDisplay();
    if (object.tx_id !== undefined && object.tx_id !== null) {
      message.txId = object.tx_id;
    }
    if (object.receiver_address !== undefined && object.receiver_address !== null) {
      message.receiverAddress = object.receiver_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
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
    return message;
  },
  toAmino(message: StakingRecordDisplay): StakingRecordDisplayAmino {
    const obj: any = {};
    obj.tx_id = message.txId === "" ? undefined : message.txId;
    obj.receiver_address = message.receiverAddress === "" ? undefined : message.receiverAddress;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.agent_name = message.agentName === "" ? undefined : message.agentName;
    obj.agent_btc_addr = message.agentBtcAddr === "" ? undefined : message.agentBtcAddr;
    obj.chain_id = message.chainId === 0 ? undefined : message.chainId;
    return obj;
  },
  fromAminoMsg(object: StakingRecordDisplayAminoMsg): StakingRecordDisplay {
    return StakingRecordDisplay.fromAmino(object.value);
  },
  fromProtoMsg(message: StakingRecordDisplayProtoMsg): StakingRecordDisplay {
    return StakingRecordDisplay.decode(message.value);
  },
  toProto(message: StakingRecordDisplay): Uint8Array {
    return StakingRecordDisplay.encode(message).finish();
  },
  toProtoMsg(message: StakingRecordDisplay): StakingRecordDisplayProtoMsg {
    return {
      typeUrl: "/lorenzo.btcstaking.v1.StakingRecordDisplay",
      value: StakingRecordDisplay.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StakingRecordDisplay.typeUrl, StakingRecordDisplay);
function createBaseQueryStakingRecordRequest(): QueryStakingRecordRequest {
  return {
    txHash: new Uint8Array()
  };
}
export const QueryStakingRecordRequest = {
  typeUrl: "/lorenzo.btcstaking.v1.QueryStakingRecordRequest",
  is(o: any): o is QueryStakingRecordRequest {
    return o && (o.$typeUrl === QueryStakingRecordRequest.typeUrl || o.txHash instanceof Uint8Array || typeof o.txHash === "string");
  },
  isSDK(o: any): o is QueryStakingRecordRequestSDKType {
    return o && (o.$typeUrl === QueryStakingRecordRequest.typeUrl || o.txHash instanceof Uint8Array || typeof o.txHash === "string");
  },
  isAmino(o: any): o is QueryStakingRecordRequestAmino {
    return o && (o.$typeUrl === QueryStakingRecordRequest.typeUrl || o.txHash instanceof Uint8Array || typeof o.txHash === "string");
  },
  encode(message: QueryStakingRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txHash.length !== 0) {
      writer.uint32(10).bytes(message.txHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStakingRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakingRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryStakingRecordRequest>): QueryStakingRecordRequest {
    const message = createBaseQueryStakingRecordRequest();
    message.txHash = object.txHash ?? new Uint8Array();
    return message;
  },
  fromSDK(object: QueryStakingRecordRequestSDKType): QueryStakingRecordRequest {
    return {
      txHash: object?.txHash
    };
  },
  toSDK(message: QueryStakingRecordRequest): QueryStakingRecordRequestSDKType {
    const obj: any = {};
    obj.txHash = message.txHash;
    return obj;
  },
  fromAmino(object: QueryStakingRecordRequestAmino): QueryStakingRecordRequest {
    const message = createBaseQueryStakingRecordRequest();
    if (object.txHash !== undefined && object.txHash !== null) {
      message.txHash = bytesFromBase64(object.txHash);
    }
    return message;
  },
  toAmino(message: QueryStakingRecordRequest): QueryStakingRecordRequestAmino {
    const obj: any = {};
    obj.txHash = message.txHash ? base64FromBytes(message.txHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStakingRecordRequestAminoMsg): QueryStakingRecordRequest {
    return QueryStakingRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakingRecordRequestProtoMsg): QueryStakingRecordRequest {
    return QueryStakingRecordRequest.decode(message.value);
  },
  toProto(message: QueryStakingRecordRequest): Uint8Array {
    return QueryStakingRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStakingRecordRequest): QueryStakingRecordRequestProtoMsg {
    return {
      typeUrl: "/lorenzo.btcstaking.v1.QueryStakingRecordRequest",
      value: QueryStakingRecordRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryStakingRecordRequest.typeUrl, QueryStakingRecordRequest);
function createBaseQueryStakingRecordResponse(): QueryStakingRecordResponse {
  return {
    record: undefined
  };
}
export const QueryStakingRecordResponse = {
  typeUrl: "/lorenzo.btcstaking.v1.QueryStakingRecordResponse",
  is(o: any): o is QueryStakingRecordResponse {
    return o && o.$typeUrl === QueryStakingRecordResponse.typeUrl;
  },
  isSDK(o: any): o is QueryStakingRecordResponseSDKType {
    return o && o.$typeUrl === QueryStakingRecordResponse.typeUrl;
  },
  isAmino(o: any): o is QueryStakingRecordResponseAmino {
    return o && o.$typeUrl === QueryStakingRecordResponse.typeUrl;
  },
  encode(message: QueryStakingRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.record !== undefined) {
      BTCStakingRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStakingRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakingRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = BTCStakingRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryStakingRecordResponse>): QueryStakingRecordResponse {
    const message = createBaseQueryStakingRecordResponse();
    message.record = object.record !== undefined && object.record !== null ? BTCStakingRecord.fromPartial(object.record) : undefined;
    return message;
  },
  fromSDK(object: QueryStakingRecordResponseSDKType): QueryStakingRecordResponse {
    return {
      record: object.record ? BTCStakingRecord.fromSDK(object.record) : undefined
    };
  },
  toSDK(message: QueryStakingRecordResponse): QueryStakingRecordResponseSDKType {
    const obj: any = {};
    message.record !== undefined && (obj.record = message.record ? BTCStakingRecord.toSDK(message.record) : undefined);
    return obj;
  },
  fromAmino(object: QueryStakingRecordResponseAmino): QueryStakingRecordResponse {
    const message = createBaseQueryStakingRecordResponse();
    if (object.record !== undefined && object.record !== null) {
      message.record = BTCStakingRecord.fromAmino(object.record);
    }
    return message;
  },
  toAmino(message: QueryStakingRecordResponse): QueryStakingRecordResponseAmino {
    const obj: any = {};
    obj.record = message.record ? BTCStakingRecord.toAmino(message.record) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStakingRecordResponseAminoMsg): QueryStakingRecordResponse {
    return QueryStakingRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakingRecordResponseProtoMsg): QueryStakingRecordResponse {
    return QueryStakingRecordResponse.decode(message.value);
  },
  toProto(message: QueryStakingRecordResponse): Uint8Array {
    return QueryStakingRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStakingRecordResponse): QueryStakingRecordResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.btcstaking.v1.QueryStakingRecordResponse",
      value: QueryStakingRecordResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryStakingRecordResponse.typeUrl, QueryStakingRecordResponse);