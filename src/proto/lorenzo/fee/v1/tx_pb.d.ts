// @generated by protoc-gen-es v1.0.0
// @generated from file lorenzo/fee/v1/tx.proto (package lorenzo.fee.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Params } from "./params_pb.js";

/**
 * MsgUpdateParams defines a message for updating fee module parameters.
 *
 * @generated from message lorenzo.fee.v1.MsgUpdateParams
 */
export declare class MsgUpdateParams extends Message<MsgUpdateParams> {
  /**
   * authority is the address of the governance account.
   * just FYI: cosmos.AddressString marks that this field should use type alias
   * for AddressString instead of string, but the functionality is not yet
   * implemented in cosmos-proto
   *
   * @generated from field: string authority = 1;
   */
  authority: string;

  /**
   * params defines the fee parameters to update.
   *
   * NOTE: All parameters must be supplied.
   *
   * @generated from field: lorenzo.fee.v1.Params params = 2;
   */
  params?: Params;

  constructor(data?: PartialMessage<MsgUpdateParams>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "lorenzo.fee.v1.MsgUpdateParams";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParams;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParams;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParams;

  static equals(a: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined, b: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined): boolean;
}

/**
 * MsgUpdateParamsResponse is the response to the MsgUpdateParams message.
 *
 * @generated from message lorenzo.fee.v1.MsgUpdateParamsResponse
 */
export declare class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
  constructor(data?: PartialMessage<MsgUpdateParamsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "lorenzo.fee.v1.MsgUpdateParamsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;

  static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean;
}

