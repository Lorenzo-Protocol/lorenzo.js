//@ts-nocheck
import { Receiver, ReceiverAmino, ReceiverSDKType, Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface TransactionKey {
  index: number;
  hash: Uint8Array;
}
export interface TransactionKeyProtoMsg {
  typeUrl: "/lorenzo.btcstaking.v1.TransactionKey";
  value: Uint8Array;
}
export interface TransactionKeyAmino {
  index?: number;
  hash?: string;
}
export interface TransactionKeyAminoMsg {
  type: "/lorenzo.btcstaking.v1.TransactionKey";
  value: TransactionKeyAmino;
}
export interface TransactionKeySDKType {
  index: number;
  hash: Uint8Array;
}
/**
 * TransactionInfo is the info of a tx on Bitcoin,
 * including
 * - the position of the tx on BTC blockchain
 * - the full tx content
 * - the Merkle proof that this tx is on the above position
 */
export interface TransactionInfo {
  /**
   * key is the position (txIdx, blockHash) of this tx on BTC blockchain
   * Although it is already a part of SubmissionKey, we store it here again
   * to make TransactionInfo self-contained.
   * For example, storing the key allows TransactionInfo to not relay on
   * the fact that TransactionInfo will be ordered in the same order as
   * TransactionKeys in SubmissionKey.
   */
  key?: TransactionKey;
  /** transaction is the full transaction in bytes */
  transaction: Uint8Array;
  proof: Uint8Array;
}
export interface TransactionInfoProtoMsg {
  typeUrl: "/lorenzo.btcstaking.v1.TransactionInfo";
  value: Uint8Array;
}
/**
 * TransactionInfo is the info of a tx on Bitcoin,
 * including
 * - the position of the tx on BTC blockchain
 * - the full tx content
 * - the Merkle proof that this tx is on the above position
 */
export interface TransactionInfoAmino {
  /**
   * key is the position (txIdx, blockHash) of this tx on BTC blockchain
   * Although it is already a part of SubmissionKey, we store it here again
   * to make TransactionInfo self-contained.
   * For example, storing the key allows TransactionInfo to not relay on
   * the fact that TransactionInfo will be ordered in the same order as
   * TransactionKeys in SubmissionKey.
   */
  key?: TransactionKeyAmino;
  /** transaction is the full transaction in bytes */
  transaction?: string;
  proof?: string;
}
export interface TransactionInfoAminoMsg {
  type: "/lorenzo.btcstaking.v1.TransactionInfo";
  value: TransactionInfoAmino;
}
/**
 * TransactionInfo is the info of a tx on Bitcoin,
 * including
 * - the position of the tx on BTC blockchain
 * - the full tx content
 * - the Merkle proof that this tx is on the above position
 */
export interface TransactionInfoSDKType {
  key?: TransactionKeySDKType;
  transaction: Uint8Array;
  proof: Uint8Array;
}
export interface MsgCreateBTCStaking {
  signer: string;
  stakingTx?: TransactionInfo;
  /** deprecated */
  receiver: string;
  agentId: bigint;
}
export interface MsgCreateBTCStakingProtoMsg {
  typeUrl: "/lorenzo.btcstaking.v1.MsgCreateBTCStaking";
  value: Uint8Array;
}
export interface MsgCreateBTCStakingAmino {
  signer?: string;
  staking_tx?: TransactionInfoAmino;
  /** deprecated */
  receiver?: string;
  agent_id?: string;
}
export interface MsgCreateBTCStakingAminoMsg {
  type: "lorenzo/btcstaking/MsgCreateBTCStaking";
  value: MsgCreateBTCStakingAmino;
}
export interface MsgCreateBTCStakingSDKType {
  signer: string;
  staking_tx?: TransactionInfoSDKType;
  receiver: string;
  agent_id: bigint;
}
export interface MsgCreateBTCStakingResponse {}
export interface MsgCreateBTCStakingResponseProtoMsg {
  typeUrl: "/lorenzo.btcstaking.v1.MsgCreateBTCStakingResponse";
  value: Uint8Array;
}
export interface MsgCreateBTCStakingResponseAmino {}
export interface MsgCreateBTCStakingResponseAminoMsg {
  type: "/lorenzo.btcstaking.v1.MsgCreateBTCStakingResponse";
  value: MsgCreateBTCStakingResponseAmino;
}
export interface MsgCreateBTCStakingResponseSDKType {}
export interface MsgCreateBTCBStaking {
  signer: string;
  number: bigint;
  receipt: Uint8Array;
  proof: Uint8Array;
}
export interface MsgCreateBTCBStakingProtoMsg {
  typeUrl: "/lorenzo.btcstaking.v1.MsgCreateBTCBStaking";
  value: Uint8Array;
}
export interface MsgCreateBTCBStakingAmino {
  signer?: string;
  number?: string;
  receipt?: string;
  proof?: string;
}
export interface MsgCreateBTCBStakingAminoMsg {
  type: "lorenzo/btcstaking/MsgCreateBTCBStaking";
  value: MsgCreateBTCBStakingAmino;
}
export interface MsgCreateBTCBStakingSDKType {
  signer: string;
  number: bigint;
  receipt: Uint8Array;
  proof: Uint8Array;
}
export interface MsgCreateBTCBStakingResponse {}
export interface MsgCreateBTCBStakingResponseProtoMsg {
  typeUrl: "/lorenzo.btcstaking.v1.MsgCreateBTCBStakingResponse";
  value: Uint8Array;
}
export interface MsgCreateBTCBStakingResponseAmino {}
export interface MsgCreateBTCBStakingResponseAminoMsg {
  type: "/lorenzo.btcstaking.v1.MsgCreateBTCBStakingResponse";
  value: MsgCreateBTCBStakingResponseAmino;
}
export interface MsgCreateBTCBStakingResponseSDKType {}
export interface MsgBurnRequest {
  signer: string;
  btcTargetAddress: string;
  amount: string;
}
export interface MsgBurnRequestProtoMsg {
  typeUrl: "/lorenzo.btcstaking.v1.MsgBurnRequest";
  value: Uint8Array;
}
export interface MsgBurnRequestAmino {
  signer?: string;
  btc_target_address?: string;
  amount?: string;
}
export interface MsgBurnRequestAminoMsg {
  type: "lorenzo/btcstaking/MsgBurnRequest";
  value: MsgBurnRequestAmino;
}
export interface MsgBurnRequestSDKType {
  signer: string;
  btc_target_address: string;
  amount: string;
}
export interface MsgBurnResponse {}
export interface MsgBurnResponseProtoMsg {
  typeUrl: "/lorenzo.btcstaking.v1.MsgBurnResponse";
  value: Uint8Array;
}
export interface MsgBurnResponseAmino {}
export interface MsgBurnResponseAminoMsg {
  type: "/lorenzo.btcstaking.v1.MsgBurnResponse";
  value: MsgBurnResponseAmino;
}
export interface MsgBurnResponseSDKType {}
export interface MsgAddReceiver {
  authority: string;
  receiver: Receiver;
}
export interface MsgAddReceiverProtoMsg {
  typeUrl: "/lorenzo.btcstaking.v1.MsgAddReceiver";
  value: Uint8Array;
}
export interface MsgAddReceiverAmino {
  authority?: string;
  receiver?: ReceiverAmino;
}
export interface MsgAddReceiverAminoMsg {
  type: "lorenzo/btcstaking/MsgAddReceiver";
  value: MsgAddReceiverAmino;
}
export interface MsgAddReceiverSDKType {
  authority: string;
  receiver: ReceiverSDKType;
}
export interface MsgAddReceiverResponse {}
export interface MsgAddReceiverResponseProtoMsg {
  typeUrl: "/lorenzo.btcstaking.v1.MsgAddReceiverResponse";
  value: Uint8Array;
}
export interface MsgAddReceiverResponseAmino {}
export interface MsgAddReceiverResponseAminoMsg {
  type: "/lorenzo.btcstaking.v1.MsgAddReceiverResponse";
  value: MsgAddReceiverResponseAmino;
}
export interface MsgAddReceiverResponseSDKType {}
export interface MsgRemoveReceiver {
  authority: string;
  receiver: string;
}
export interface MsgRemoveReceiverProtoMsg {
  typeUrl: "/lorenzo.btcstaking.v1.MsgRemoveReceiver";
  value: Uint8Array;
}
export interface MsgRemoveReceiverAmino {
  authority?: string;
  receiver?: string;
}
export interface MsgRemoveReceiverAminoMsg {
  type: "lorenzo/btcstaking/MsgRemoveReceiver";
  value: MsgRemoveReceiverAmino;
}
export interface MsgRemoveReceiverSDKType {
  authority: string;
  receiver: string;
}
export interface MsgRemoveReceiverResponse {}
export interface MsgRemoveReceiverResponseProtoMsg {
  typeUrl: "/lorenzo.btcstaking.v1.MsgRemoveReceiverResponse";
  value: Uint8Array;
}
export interface MsgRemoveReceiverResponseAmino {}
export interface MsgRemoveReceiverResponseAminoMsg {
  type: "/lorenzo.btcstaking.v1.MsgRemoveReceiverResponse";
  value: MsgRemoveReceiverResponseAmino;
}
export interface MsgRemoveReceiverResponseSDKType {}
export interface MsgUpdateParams {
  authority: string;
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/lorenzo.btcstaking.v1.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  authority?: string;
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "lorenzo/btcstaking/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/lorenzo.btcstaking.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/lorenzo.btcstaking.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
function createBaseTransactionKey(): TransactionKey {
  return {
    index: 0,
    hash: new Uint8Array()
  };
}
export const TransactionKey = {
  typeUrl: "/lorenzo.btcstaking.v1.TransactionKey",
  is(o: any): o is TransactionKey {
    return o && (o.$typeUrl === TransactionKey.typeUrl || typeof o.index === "number" && (o.hash instanceof Uint8Array || typeof o.hash === "string"));
  },
  isSDK(o: any): o is TransactionKeySDKType {
    return o && (o.$typeUrl === TransactionKey.typeUrl || typeof o.index === "number" && (o.hash instanceof Uint8Array || typeof o.hash === "string"));
  },
  isAmino(o: any): o is TransactionKeyAmino {
    return o && (o.$typeUrl === TransactionKey.typeUrl || typeof o.index === "number" && (o.hash instanceof Uint8Array || typeof o.hash === "string"));
  },
  encode(message: TransactionKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TransactionKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;
        case 2:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TransactionKey>): TransactionKey {
    const message = createBaseTransactionKey();
    message.index = object.index ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
  fromSDK(object: TransactionKeySDKType): TransactionKey {
    return {
      index: object?.index,
      hash: object?.hash
    };
  },
  toSDK(message: TransactionKey): TransactionKeySDKType {
    const obj: any = {};
    obj.index = message.index;
    obj.hash = message.hash;
    return obj;
  },
  fromAmino(object: TransactionKeyAmino): TransactionKey {
    const message = createBaseTransactionKey();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    return message;
  },
  toAmino(message: TransactionKey): TransactionKeyAmino {
    const obj: any = {};
    obj.index = message.index === 0 ? undefined : message.index;
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    return obj;
  },
  fromAminoMsg(object: TransactionKeyAminoMsg): TransactionKey {
    return TransactionKey.fromAmino(object.value);
  },
  fromProtoMsg(message: TransactionKeyProtoMsg): TransactionKey {
    return TransactionKey.decode(message.value);
  },
  toProto(message: TransactionKey): Uint8Array {
    return TransactionKey.encode(message).finish();
  },
  toProtoMsg(message: TransactionKey): TransactionKeyProtoMsg {
    return {
      typeUrl: "/lorenzo.btcstaking.v1.TransactionKey",
      value: TransactionKey.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TransactionKey.typeUrl, TransactionKey);
function createBaseTransactionInfo(): TransactionInfo {
  return {
    key: undefined,
    transaction: new Uint8Array(),
    proof: new Uint8Array()
  };
}
export const TransactionInfo = {
  typeUrl: "/lorenzo.btcstaking.v1.TransactionInfo",
  is(o: any): o is TransactionInfo {
    return o && (o.$typeUrl === TransactionInfo.typeUrl || (o.transaction instanceof Uint8Array || typeof o.transaction === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string"));
  },
  isSDK(o: any): o is TransactionInfoSDKType {
    return o && (o.$typeUrl === TransactionInfo.typeUrl || (o.transaction instanceof Uint8Array || typeof o.transaction === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string"));
  },
  isAmino(o: any): o is TransactionInfoAmino {
    return o && (o.$typeUrl === TransactionInfo.typeUrl || (o.transaction instanceof Uint8Array || typeof o.transaction === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string"));
  },
  encode(message: TransactionInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== undefined) {
      TransactionKey.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.transaction.length !== 0) {
      writer.uint32(18).bytes(message.transaction);
    }
    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TransactionInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = TransactionKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.transaction = reader.bytes();
          break;
        case 3:
          message.proof = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TransactionInfo>): TransactionInfo {
    const message = createBaseTransactionInfo();
    message.key = object.key !== undefined && object.key !== null ? TransactionKey.fromPartial(object.key) : undefined;
    message.transaction = object.transaction ?? new Uint8Array();
    message.proof = object.proof ?? new Uint8Array();
    return message;
  },
  fromSDK(object: TransactionInfoSDKType): TransactionInfo {
    return {
      key: object.key ? TransactionKey.fromSDK(object.key) : undefined,
      transaction: object?.transaction,
      proof: object?.proof
    };
  },
  toSDK(message: TransactionInfo): TransactionInfoSDKType {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key ? TransactionKey.toSDK(message.key) : undefined);
    obj.transaction = message.transaction;
    obj.proof = message.proof;
    return obj;
  },
  fromAmino(object: TransactionInfoAmino): TransactionInfo {
    const message = createBaseTransactionInfo();
    if (object.key !== undefined && object.key !== null) {
      message.key = TransactionKey.fromAmino(object.key);
    }
    if (object.transaction !== undefined && object.transaction !== null) {
      message.transaction = bytesFromBase64(object.transaction);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    return message;
  },
  toAmino(message: TransactionInfo): TransactionInfoAmino {
    const obj: any = {};
    obj.key = message.key ? TransactionKey.toAmino(message.key) : undefined;
    obj.transaction = message.transaction ? base64FromBytes(message.transaction) : undefined;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    return obj;
  },
  fromAminoMsg(object: TransactionInfoAminoMsg): TransactionInfo {
    return TransactionInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: TransactionInfoProtoMsg): TransactionInfo {
    return TransactionInfo.decode(message.value);
  },
  toProto(message: TransactionInfo): Uint8Array {
    return TransactionInfo.encode(message).finish();
  },
  toProtoMsg(message: TransactionInfo): TransactionInfoProtoMsg {
    return {
      typeUrl: "/lorenzo.btcstaking.v1.TransactionInfo",
      value: TransactionInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TransactionInfo.typeUrl, TransactionInfo);
function createBaseMsgCreateBTCStaking(): MsgCreateBTCStaking {
  return {
    signer: "",
    stakingTx: undefined,
    receiver: "",
    agentId: BigInt(0)
  };
}
export const MsgCreateBTCStaking = {
  typeUrl: "/lorenzo.btcstaking.v1.MsgCreateBTCStaking",
  aminoType: "lorenzo/btcstaking/MsgCreateBTCStaking",
  is(o: any): o is MsgCreateBTCStaking {
    return o && (o.$typeUrl === MsgCreateBTCStaking.typeUrl || typeof o.signer === "string" && typeof o.receiver === "string" && typeof o.agentId === "bigint");
  },
  isSDK(o: any): o is MsgCreateBTCStakingSDKType {
    return o && (o.$typeUrl === MsgCreateBTCStaking.typeUrl || typeof o.signer === "string" && typeof o.receiver === "string" && typeof o.agent_id === "bigint");
  },
  isAmino(o: any): o is MsgCreateBTCStakingAmino {
    return o && (o.$typeUrl === MsgCreateBTCStaking.typeUrl || typeof o.signer === "string" && typeof o.receiver === "string" && typeof o.agent_id === "bigint");
  },
  encode(message: MsgCreateBTCStaking, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.stakingTx !== undefined) {
      TransactionInfo.encode(message.stakingTx, writer.uint32(18).fork()).ldelim();
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.agentId !== BigInt(0)) {
      writer.uint32(32).uint64(message.agentId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBTCStaking {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBTCStaking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.stakingTx = TransactionInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.agentId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateBTCStaking>): MsgCreateBTCStaking {
    const message = createBaseMsgCreateBTCStaking();
    message.signer = object.signer ?? "";
    message.stakingTx = object.stakingTx !== undefined && object.stakingTx !== null ? TransactionInfo.fromPartial(object.stakingTx) : undefined;
    message.receiver = object.receiver ?? "";
    message.agentId = object.agentId !== undefined && object.agentId !== null ? BigInt(object.agentId.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: MsgCreateBTCStakingSDKType): MsgCreateBTCStaking {
    return {
      signer: object?.signer,
      stakingTx: object.staking_tx ? TransactionInfo.fromSDK(object.staking_tx) : undefined,
      receiver: object?.receiver,
      agentId: object?.agent_id
    };
  },
  toSDK(message: MsgCreateBTCStaking): MsgCreateBTCStakingSDKType {
    const obj: any = {};
    obj.signer = message.signer;
    message.stakingTx !== undefined && (obj.staking_tx = message.stakingTx ? TransactionInfo.toSDK(message.stakingTx) : undefined);
    obj.receiver = message.receiver;
    obj.agent_id = message.agentId;
    return obj;
  },
  fromAmino(object: MsgCreateBTCStakingAmino): MsgCreateBTCStaking {
    const message = createBaseMsgCreateBTCStaking();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.staking_tx !== undefined && object.staking_tx !== null) {
      message.stakingTx = TransactionInfo.fromAmino(object.staking_tx);
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.agent_id !== undefined && object.agent_id !== null) {
      message.agentId = BigInt(object.agent_id);
    }
    return message;
  },
  toAmino(message: MsgCreateBTCStaking): MsgCreateBTCStakingAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.staking_tx = message.stakingTx ? TransactionInfo.toAmino(message.stakingTx) : undefined;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.agent_id = message.agentId !== BigInt(0) ? message.agentId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateBTCStakingAminoMsg): MsgCreateBTCStaking {
    return MsgCreateBTCStaking.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateBTCStaking): MsgCreateBTCStakingAminoMsg {
    return {
      type: "lorenzo/btcstaking/MsgCreateBTCStaking",
      value: MsgCreateBTCStaking.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateBTCStakingProtoMsg): MsgCreateBTCStaking {
    return MsgCreateBTCStaking.decode(message.value);
  },
  toProto(message: MsgCreateBTCStaking): Uint8Array {
    return MsgCreateBTCStaking.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBTCStaking): MsgCreateBTCStakingProtoMsg {
    return {
      typeUrl: "/lorenzo.btcstaking.v1.MsgCreateBTCStaking",
      value: MsgCreateBTCStaking.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateBTCStaking.typeUrl, MsgCreateBTCStaking);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateBTCStaking.aminoType, MsgCreateBTCStaking.typeUrl);
function createBaseMsgCreateBTCStakingResponse(): MsgCreateBTCStakingResponse {
  return {};
}
export const MsgCreateBTCStakingResponse = {
  typeUrl: "/lorenzo.btcstaking.v1.MsgCreateBTCStakingResponse",
  is(o: any): o is MsgCreateBTCStakingResponse {
    return o && o.$typeUrl === MsgCreateBTCStakingResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCreateBTCStakingResponseSDKType {
    return o && o.$typeUrl === MsgCreateBTCStakingResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCreateBTCStakingResponseAmino {
    return o && o.$typeUrl === MsgCreateBTCStakingResponse.typeUrl;
  },
  encode(_: MsgCreateBTCStakingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBTCStakingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBTCStakingResponse();
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
  fromPartial(_: Partial<MsgCreateBTCStakingResponse>): MsgCreateBTCStakingResponse {
    const message = createBaseMsgCreateBTCStakingResponse();
    return message;
  },
  fromSDK(_: MsgCreateBTCStakingResponseSDKType): MsgCreateBTCStakingResponse {
    return {};
  },
  toSDK(_: MsgCreateBTCStakingResponse): MsgCreateBTCStakingResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCreateBTCStakingResponseAmino): MsgCreateBTCStakingResponse {
    const message = createBaseMsgCreateBTCStakingResponse();
    return message;
  },
  toAmino(_: MsgCreateBTCStakingResponse): MsgCreateBTCStakingResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateBTCStakingResponseAminoMsg): MsgCreateBTCStakingResponse {
    return MsgCreateBTCStakingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBTCStakingResponseProtoMsg): MsgCreateBTCStakingResponse {
    return MsgCreateBTCStakingResponse.decode(message.value);
  },
  toProto(message: MsgCreateBTCStakingResponse): Uint8Array {
    return MsgCreateBTCStakingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBTCStakingResponse): MsgCreateBTCStakingResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.btcstaking.v1.MsgCreateBTCStakingResponse",
      value: MsgCreateBTCStakingResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateBTCStakingResponse.typeUrl, MsgCreateBTCStakingResponse);
function createBaseMsgCreateBTCBStaking(): MsgCreateBTCBStaking {
  return {
    signer: "",
    number: BigInt(0),
    receipt: new Uint8Array(),
    proof: new Uint8Array()
  };
}
export const MsgCreateBTCBStaking = {
  typeUrl: "/lorenzo.btcstaking.v1.MsgCreateBTCBStaking",
  aminoType: "lorenzo/btcstaking/MsgCreateBTCBStaking",
  is(o: any): o is MsgCreateBTCBStaking {
    return o && (o.$typeUrl === MsgCreateBTCBStaking.typeUrl || typeof o.signer === "string" && typeof o.number === "bigint" && (o.receipt instanceof Uint8Array || typeof o.receipt === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string"));
  },
  isSDK(o: any): o is MsgCreateBTCBStakingSDKType {
    return o && (o.$typeUrl === MsgCreateBTCBStaking.typeUrl || typeof o.signer === "string" && typeof o.number === "bigint" && (o.receipt instanceof Uint8Array || typeof o.receipt === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string"));
  },
  isAmino(o: any): o is MsgCreateBTCBStakingAmino {
    return o && (o.$typeUrl === MsgCreateBTCBStaking.typeUrl || typeof o.signer === "string" && typeof o.number === "bigint" && (o.receipt instanceof Uint8Array || typeof o.receipt === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string"));
  },
  encode(message: MsgCreateBTCBStaking, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.number !== BigInt(0)) {
      writer.uint32(16).uint64(message.number);
    }
    if (message.receipt.length !== 0) {
      writer.uint32(26).bytes(message.receipt);
    }
    if (message.proof.length !== 0) {
      writer.uint32(34).bytes(message.proof);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBTCBStaking {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBTCBStaking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.number = reader.uint64();
          break;
        case 3:
          message.receipt = reader.bytes();
          break;
        case 4:
          message.proof = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateBTCBStaking>): MsgCreateBTCBStaking {
    const message = createBaseMsgCreateBTCBStaking();
    message.signer = object.signer ?? "";
    message.number = object.number !== undefined && object.number !== null ? BigInt(object.number.toString()) : BigInt(0);
    message.receipt = object.receipt ?? new Uint8Array();
    message.proof = object.proof ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgCreateBTCBStakingSDKType): MsgCreateBTCBStaking {
    return {
      signer: object?.signer,
      number: object?.number,
      receipt: object?.receipt,
      proof: object?.proof
    };
  },
  toSDK(message: MsgCreateBTCBStaking): MsgCreateBTCBStakingSDKType {
    const obj: any = {};
    obj.signer = message.signer;
    obj.number = message.number;
    obj.receipt = message.receipt;
    obj.proof = message.proof;
    return obj;
  },
  fromAmino(object: MsgCreateBTCBStakingAmino): MsgCreateBTCBStaking {
    const message = createBaseMsgCreateBTCBStaking();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.number !== undefined && object.number !== null) {
      message.number = BigInt(object.number);
    }
    if (object.receipt !== undefined && object.receipt !== null) {
      message.receipt = bytesFromBase64(object.receipt);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    return message;
  },
  toAmino(message: MsgCreateBTCBStaking): MsgCreateBTCBStakingAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.number = message.number !== BigInt(0) ? message.number.toString() : undefined;
    obj.receipt = message.receipt ? base64FromBytes(message.receipt) : undefined;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateBTCBStakingAminoMsg): MsgCreateBTCBStaking {
    return MsgCreateBTCBStaking.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateBTCBStaking): MsgCreateBTCBStakingAminoMsg {
    return {
      type: "lorenzo/btcstaking/MsgCreateBTCBStaking",
      value: MsgCreateBTCBStaking.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateBTCBStakingProtoMsg): MsgCreateBTCBStaking {
    return MsgCreateBTCBStaking.decode(message.value);
  },
  toProto(message: MsgCreateBTCBStaking): Uint8Array {
    return MsgCreateBTCBStaking.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBTCBStaking): MsgCreateBTCBStakingProtoMsg {
    return {
      typeUrl: "/lorenzo.btcstaking.v1.MsgCreateBTCBStaking",
      value: MsgCreateBTCBStaking.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateBTCBStaking.typeUrl, MsgCreateBTCBStaking);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateBTCBStaking.aminoType, MsgCreateBTCBStaking.typeUrl);
function createBaseMsgCreateBTCBStakingResponse(): MsgCreateBTCBStakingResponse {
  return {};
}
export const MsgCreateBTCBStakingResponse = {
  typeUrl: "/lorenzo.btcstaking.v1.MsgCreateBTCBStakingResponse",
  is(o: any): o is MsgCreateBTCBStakingResponse {
    return o && o.$typeUrl === MsgCreateBTCBStakingResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCreateBTCBStakingResponseSDKType {
    return o && o.$typeUrl === MsgCreateBTCBStakingResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCreateBTCBStakingResponseAmino {
    return o && o.$typeUrl === MsgCreateBTCBStakingResponse.typeUrl;
  },
  encode(_: MsgCreateBTCBStakingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBTCBStakingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBTCBStakingResponse();
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
  fromPartial(_: Partial<MsgCreateBTCBStakingResponse>): MsgCreateBTCBStakingResponse {
    const message = createBaseMsgCreateBTCBStakingResponse();
    return message;
  },
  fromSDK(_: MsgCreateBTCBStakingResponseSDKType): MsgCreateBTCBStakingResponse {
    return {};
  },
  toSDK(_: MsgCreateBTCBStakingResponse): MsgCreateBTCBStakingResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCreateBTCBStakingResponseAmino): MsgCreateBTCBStakingResponse {
    const message = createBaseMsgCreateBTCBStakingResponse();
    return message;
  },
  toAmino(_: MsgCreateBTCBStakingResponse): MsgCreateBTCBStakingResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateBTCBStakingResponseAminoMsg): MsgCreateBTCBStakingResponse {
    return MsgCreateBTCBStakingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBTCBStakingResponseProtoMsg): MsgCreateBTCBStakingResponse {
    return MsgCreateBTCBStakingResponse.decode(message.value);
  },
  toProto(message: MsgCreateBTCBStakingResponse): Uint8Array {
    return MsgCreateBTCBStakingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBTCBStakingResponse): MsgCreateBTCBStakingResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.btcstaking.v1.MsgCreateBTCBStakingResponse",
      value: MsgCreateBTCBStakingResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateBTCBStakingResponse.typeUrl, MsgCreateBTCBStakingResponse);
function createBaseMsgBurnRequest(): MsgBurnRequest {
  return {
    signer: "",
    btcTargetAddress: "",
    amount: ""
  };
}
export const MsgBurnRequest = {
  typeUrl: "/lorenzo.btcstaking.v1.MsgBurnRequest",
  aminoType: "lorenzo/btcstaking/MsgBurnRequest",
  is(o: any): o is MsgBurnRequest {
    return o && (o.$typeUrl === MsgBurnRequest.typeUrl || typeof o.signer === "string" && typeof o.btcTargetAddress === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is MsgBurnRequestSDKType {
    return o && (o.$typeUrl === MsgBurnRequest.typeUrl || typeof o.signer === "string" && typeof o.btc_target_address === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is MsgBurnRequestAmino {
    return o && (o.$typeUrl === MsgBurnRequest.typeUrl || typeof o.signer === "string" && typeof o.btc_target_address === "string" && typeof o.amount === "string");
  },
  encode(message: MsgBurnRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.btcTargetAddress !== "") {
      writer.uint32(18).string(message.btcTargetAddress);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.btcTargetAddress = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBurnRequest>): MsgBurnRequest {
    const message = createBaseMsgBurnRequest();
    message.signer = object.signer ?? "";
    message.btcTargetAddress = object.btcTargetAddress ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromSDK(object: MsgBurnRequestSDKType): MsgBurnRequest {
    return {
      signer: object?.signer,
      btcTargetAddress: object?.btc_target_address,
      amount: object?.amount
    };
  },
  toSDK(message: MsgBurnRequest): MsgBurnRequestSDKType {
    const obj: any = {};
    obj.signer = message.signer;
    obj.btc_target_address = message.btcTargetAddress;
    obj.amount = message.amount;
    return obj;
  },
  fromAmino(object: MsgBurnRequestAmino): MsgBurnRequest {
    const message = createBaseMsgBurnRequest();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.btc_target_address !== undefined && object.btc_target_address !== null) {
      message.btcTargetAddress = object.btc_target_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgBurnRequest): MsgBurnRequestAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.btc_target_address = message.btcTargetAddress === "" ? undefined : message.btcTargetAddress;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgBurnRequestAminoMsg): MsgBurnRequest {
    return MsgBurnRequest.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBurnRequest): MsgBurnRequestAminoMsg {
    return {
      type: "lorenzo/btcstaking/MsgBurnRequest",
      value: MsgBurnRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBurnRequestProtoMsg): MsgBurnRequest {
    return MsgBurnRequest.decode(message.value);
  },
  toProto(message: MsgBurnRequest): Uint8Array {
    return MsgBurnRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnRequest): MsgBurnRequestProtoMsg {
    return {
      typeUrl: "/lorenzo.btcstaking.v1.MsgBurnRequest",
      value: MsgBurnRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgBurnRequest.typeUrl, MsgBurnRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgBurnRequest.aminoType, MsgBurnRequest.typeUrl);
function createBaseMsgBurnResponse(): MsgBurnResponse {
  return {};
}
export const MsgBurnResponse = {
  typeUrl: "/lorenzo.btcstaking.v1.MsgBurnResponse",
  is(o: any): o is MsgBurnResponse {
    return o && o.$typeUrl === MsgBurnResponse.typeUrl;
  },
  isSDK(o: any): o is MsgBurnResponseSDKType {
    return o && o.$typeUrl === MsgBurnResponse.typeUrl;
  },
  isAmino(o: any): o is MsgBurnResponseAmino {
    return o && o.$typeUrl === MsgBurnResponse.typeUrl;
  },
  encode(_: MsgBurnResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnResponse();
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
  fromPartial(_: Partial<MsgBurnResponse>): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  },
  fromSDK(_: MsgBurnResponseSDKType): MsgBurnResponse {
    return {};
  },
  toSDK(_: MsgBurnResponse): MsgBurnResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgBurnResponseAmino): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  },
  toAmino(_: MsgBurnResponse): MsgBurnResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBurnResponseAminoMsg): MsgBurnResponse {
    return MsgBurnResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnResponseProtoMsg): MsgBurnResponse {
    return MsgBurnResponse.decode(message.value);
  },
  toProto(message: MsgBurnResponse): Uint8Array {
    return MsgBurnResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnResponse): MsgBurnResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.btcstaking.v1.MsgBurnResponse",
      value: MsgBurnResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgBurnResponse.typeUrl, MsgBurnResponse);
function createBaseMsgAddReceiver(): MsgAddReceiver {
  return {
    authority: "",
    receiver: Receiver.fromPartial({})
  };
}
export const MsgAddReceiver = {
  typeUrl: "/lorenzo.btcstaking.v1.MsgAddReceiver",
  aminoType: "lorenzo/btcstaking/MsgAddReceiver",
  is(o: any): o is MsgAddReceiver {
    return o && (o.$typeUrl === MsgAddReceiver.typeUrl || typeof o.authority === "string" && Receiver.is(o.receiver));
  },
  isSDK(o: any): o is MsgAddReceiverSDKType {
    return o && (o.$typeUrl === MsgAddReceiver.typeUrl || typeof o.authority === "string" && Receiver.isSDK(o.receiver));
  },
  isAmino(o: any): o is MsgAddReceiverAmino {
    return o && (o.$typeUrl === MsgAddReceiver.typeUrl || typeof o.authority === "string" && Receiver.isAmino(o.receiver));
  },
  encode(message: MsgAddReceiver, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.receiver !== undefined) {
      Receiver.encode(message.receiver, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddReceiver {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddReceiver();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.receiver = Receiver.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddReceiver>): MsgAddReceiver {
    const message = createBaseMsgAddReceiver();
    message.authority = object.authority ?? "";
    message.receiver = object.receiver !== undefined && object.receiver !== null ? Receiver.fromPartial(object.receiver) : undefined;
    return message;
  },
  fromSDK(object: MsgAddReceiverSDKType): MsgAddReceiver {
    return {
      authority: object?.authority,
      receiver: object.receiver ? Receiver.fromSDK(object.receiver) : undefined
    };
  },
  toSDK(message: MsgAddReceiver): MsgAddReceiverSDKType {
    const obj: any = {};
    obj.authority = message.authority;
    message.receiver !== undefined && (obj.receiver = message.receiver ? Receiver.toSDK(message.receiver) : undefined);
    return obj;
  },
  fromAmino(object: MsgAddReceiverAmino): MsgAddReceiver {
    const message = createBaseMsgAddReceiver();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = Receiver.fromAmino(object.receiver);
    }
    return message;
  },
  toAmino(message: MsgAddReceiver): MsgAddReceiverAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.receiver = message.receiver ? Receiver.toAmino(message.receiver) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAddReceiverAminoMsg): MsgAddReceiver {
    return MsgAddReceiver.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddReceiver): MsgAddReceiverAminoMsg {
    return {
      type: "lorenzo/btcstaking/MsgAddReceiver",
      value: MsgAddReceiver.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddReceiverProtoMsg): MsgAddReceiver {
    return MsgAddReceiver.decode(message.value);
  },
  toProto(message: MsgAddReceiver): Uint8Array {
    return MsgAddReceiver.encode(message).finish();
  },
  toProtoMsg(message: MsgAddReceiver): MsgAddReceiverProtoMsg {
    return {
      typeUrl: "/lorenzo.btcstaking.v1.MsgAddReceiver",
      value: MsgAddReceiver.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAddReceiver.typeUrl, MsgAddReceiver);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgAddReceiver.aminoType, MsgAddReceiver.typeUrl);
function createBaseMsgAddReceiverResponse(): MsgAddReceiverResponse {
  return {};
}
export const MsgAddReceiverResponse = {
  typeUrl: "/lorenzo.btcstaking.v1.MsgAddReceiverResponse",
  is(o: any): o is MsgAddReceiverResponse {
    return o && o.$typeUrl === MsgAddReceiverResponse.typeUrl;
  },
  isSDK(o: any): o is MsgAddReceiverResponseSDKType {
    return o && o.$typeUrl === MsgAddReceiverResponse.typeUrl;
  },
  isAmino(o: any): o is MsgAddReceiverResponseAmino {
    return o && o.$typeUrl === MsgAddReceiverResponse.typeUrl;
  },
  encode(_: MsgAddReceiverResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddReceiverResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddReceiverResponse();
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
  fromPartial(_: Partial<MsgAddReceiverResponse>): MsgAddReceiverResponse {
    const message = createBaseMsgAddReceiverResponse();
    return message;
  },
  fromSDK(_: MsgAddReceiverResponseSDKType): MsgAddReceiverResponse {
    return {};
  },
  toSDK(_: MsgAddReceiverResponse): MsgAddReceiverResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgAddReceiverResponseAmino): MsgAddReceiverResponse {
    const message = createBaseMsgAddReceiverResponse();
    return message;
  },
  toAmino(_: MsgAddReceiverResponse): MsgAddReceiverResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddReceiverResponseAminoMsg): MsgAddReceiverResponse {
    return MsgAddReceiverResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddReceiverResponseProtoMsg): MsgAddReceiverResponse {
    return MsgAddReceiverResponse.decode(message.value);
  },
  toProto(message: MsgAddReceiverResponse): Uint8Array {
    return MsgAddReceiverResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddReceiverResponse): MsgAddReceiverResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.btcstaking.v1.MsgAddReceiverResponse",
      value: MsgAddReceiverResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAddReceiverResponse.typeUrl, MsgAddReceiverResponse);
function createBaseMsgRemoveReceiver(): MsgRemoveReceiver {
  return {
    authority: "",
    receiver: ""
  };
}
export const MsgRemoveReceiver = {
  typeUrl: "/lorenzo.btcstaking.v1.MsgRemoveReceiver",
  aminoType: "lorenzo/btcstaking/MsgRemoveReceiver",
  is(o: any): o is MsgRemoveReceiver {
    return o && (o.$typeUrl === MsgRemoveReceiver.typeUrl || typeof o.authority === "string" && typeof o.receiver === "string");
  },
  isSDK(o: any): o is MsgRemoveReceiverSDKType {
    return o && (o.$typeUrl === MsgRemoveReceiver.typeUrl || typeof o.authority === "string" && typeof o.receiver === "string");
  },
  isAmino(o: any): o is MsgRemoveReceiverAmino {
    return o && (o.$typeUrl === MsgRemoveReceiver.typeUrl || typeof o.authority === "string" && typeof o.receiver === "string");
  },
  encode(message: MsgRemoveReceiver, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveReceiver {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveReceiver();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRemoveReceiver>): MsgRemoveReceiver {
    const message = createBaseMsgRemoveReceiver();
    message.authority = object.authority ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromSDK(object: MsgRemoveReceiverSDKType): MsgRemoveReceiver {
    return {
      authority: object?.authority,
      receiver: object?.receiver
    };
  },
  toSDK(message: MsgRemoveReceiver): MsgRemoveReceiverSDKType {
    const obj: any = {};
    obj.authority = message.authority;
    obj.receiver = message.receiver;
    return obj;
  },
  fromAmino(object: MsgRemoveReceiverAmino): MsgRemoveReceiver {
    const message = createBaseMsgRemoveReceiver();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    return message;
  },
  toAmino(message: MsgRemoveReceiver): MsgRemoveReceiverAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveReceiverAminoMsg): MsgRemoveReceiver {
    return MsgRemoveReceiver.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoveReceiver): MsgRemoveReceiverAminoMsg {
    return {
      type: "lorenzo/btcstaking/MsgRemoveReceiver",
      value: MsgRemoveReceiver.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRemoveReceiverProtoMsg): MsgRemoveReceiver {
    return MsgRemoveReceiver.decode(message.value);
  },
  toProto(message: MsgRemoveReceiver): Uint8Array {
    return MsgRemoveReceiver.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveReceiver): MsgRemoveReceiverProtoMsg {
    return {
      typeUrl: "/lorenzo.btcstaking.v1.MsgRemoveReceiver",
      value: MsgRemoveReceiver.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRemoveReceiver.typeUrl, MsgRemoveReceiver);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRemoveReceiver.aminoType, MsgRemoveReceiver.typeUrl);
function createBaseMsgRemoveReceiverResponse(): MsgRemoveReceiverResponse {
  return {};
}
export const MsgRemoveReceiverResponse = {
  typeUrl: "/lorenzo.btcstaking.v1.MsgRemoveReceiverResponse",
  is(o: any): o is MsgRemoveReceiverResponse {
    return o && o.$typeUrl === MsgRemoveReceiverResponse.typeUrl;
  },
  isSDK(o: any): o is MsgRemoveReceiverResponseSDKType {
    return o && o.$typeUrl === MsgRemoveReceiverResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRemoveReceiverResponseAmino {
    return o && o.$typeUrl === MsgRemoveReceiverResponse.typeUrl;
  },
  encode(_: MsgRemoveReceiverResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveReceiverResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveReceiverResponse();
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
  fromPartial(_: Partial<MsgRemoveReceiverResponse>): MsgRemoveReceiverResponse {
    const message = createBaseMsgRemoveReceiverResponse();
    return message;
  },
  fromSDK(_: MsgRemoveReceiverResponseSDKType): MsgRemoveReceiverResponse {
    return {};
  },
  toSDK(_: MsgRemoveReceiverResponse): MsgRemoveReceiverResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgRemoveReceiverResponseAmino): MsgRemoveReceiverResponse {
    const message = createBaseMsgRemoveReceiverResponse();
    return message;
  },
  toAmino(_: MsgRemoveReceiverResponse): MsgRemoveReceiverResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveReceiverResponseAminoMsg): MsgRemoveReceiverResponse {
    return MsgRemoveReceiverResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveReceiverResponseProtoMsg): MsgRemoveReceiverResponse {
    return MsgRemoveReceiverResponse.decode(message.value);
  },
  toProto(message: MsgRemoveReceiverResponse): Uint8Array {
    return MsgRemoveReceiverResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveReceiverResponse): MsgRemoveReceiverResponseProtoMsg {
    return {
      typeUrl: "/lorenzo.btcstaking.v1.MsgRemoveReceiverResponse",
      value: MsgRemoveReceiverResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRemoveReceiverResponse.typeUrl, MsgRemoveReceiverResponse);
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/lorenzo.btcstaking.v1.MsgUpdateParams",
  aminoType: "lorenzo/btcstaking/MsgUpdateParams",
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
      type: "lorenzo/btcstaking/MsgUpdateParams",
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
      typeUrl: "/lorenzo.btcstaking.v1.MsgUpdateParams",
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
  typeUrl: "/lorenzo.btcstaking.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/lorenzo.btcstaking.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);