// @generated by protoc-gen-es v1.0.0
// @generated from file cosmos/capability/v1beta1/genesis.proto (package cosmos.capability.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { CapabilityOwners } from "./capability_pb.js";

/**
 * GenesisOwners defines the capability owners with their corresponding index.
 *
 * @generated from message cosmos.capability.v1beta1.GenesisOwners
 */
export const GenesisOwners = proto3.makeMessageType(
  "cosmos.capability.v1beta1.GenesisOwners",
  () => [
    { no: 1, name: "index", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "index_owners", kind: "message", T: CapabilityOwners },
  ],
);

/**
 * GenesisState defines the capability module's genesis state.
 *
 * @generated from message cosmos.capability.v1beta1.GenesisState
 */
export const GenesisState = proto3.makeMessageType(
  "cosmos.capability.v1beta1.GenesisState",
  () => [
    { no: 1, name: "index", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "owners", kind: "message", T: GenesisOwners, repeated: true },
  ],
);

