// @generated by protoc-gen-es v1.0.0
// @generated from file lorenzo/token/v1/genesis.proto (package lorenzo.token.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { TokenPair } from "./token_pb.js";

/**
 * GenesisState defines the token module's genesis state.
 *
 * @generated from message lorenzo.token.v1.GenesisState
 */
export const GenesisState = proto3.makeMessageType(
  "lorenzo.token.v1.GenesisState",
  () => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "token_pairs", kind: "message", T: TokenPair, repeated: true },
  ],
);

/**
 * Params defines the token module parameters.
 *
 * @generated from message lorenzo.token.v1.Params
 */
export const Params = proto3.makeMessageType(
  "lorenzo.token.v1.Params",
  () => [
    { no: 1, name: "enable_conversion", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "enable_evm_hook", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

