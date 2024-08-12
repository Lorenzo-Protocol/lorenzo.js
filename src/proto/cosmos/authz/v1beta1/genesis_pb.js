// Since: cosmos-sdk 0.43

// @generated by protoc-gen-es v1.0.0
// @generated from file cosmos/authz/v1beta1/genesis.proto (package cosmos.authz.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { GrantAuthorization } from "./authz_pb.js";

/**
 * GenesisState defines the authz module's genesis state.
 *
 * @generated from message cosmos.authz.v1beta1.GenesisState
 */
export const GenesisState = proto3.makeMessageType(
  "cosmos.authz.v1beta1.GenesisState",
  () => [
    { no: 1, name: "authorization", kind: "message", T: GrantAuthorization, repeated: true },
  ],
);

