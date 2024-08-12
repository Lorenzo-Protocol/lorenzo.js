// @generated by protoc-gen-es v1.0.0
// @generated from file lorenzo/btcstaking/v1/genesis.proto (package lorenzo.btcstaking.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Params } from "./params_pb.js";

/**
 * GenesisState defines the btcstaking module's genesis state.
 *
 * @generated from message lorenzo.btcstaking.v1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
  /**
   * @generated from field: lorenzo.btcstaking.v1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<GenesisState>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "lorenzo.btcstaking.v1.GenesisState";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;

  static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}

