// @generated by protoc-gen-es v1.0.0
// @generated from file cosmos/slashing/v1beta1/genesis.proto (package cosmos.slashing.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Params, ValidatorSigningInfo } from "./slashing_pb.js";

/**
 * GenesisState defines the slashing module's genesis state.
 *
 * @generated from message cosmos.slashing.v1beta1.GenesisState
 */
export const GenesisState = proto3.makeMessageType(
  "cosmos.slashing.v1beta1.GenesisState",
  () => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "signing_infos", kind: "message", T: SigningInfo, repeated: true },
    { no: 3, name: "missed_blocks", kind: "message", T: ValidatorMissedBlocks, repeated: true },
  ],
);

/**
 * SigningInfo stores validator signing info of corresponding address.
 *
 * @generated from message cosmos.slashing.v1beta1.SigningInfo
 */
export const SigningInfo = proto3.makeMessageType(
  "cosmos.slashing.v1beta1.SigningInfo",
  () => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "validator_signing_info", kind: "message", T: ValidatorSigningInfo },
  ],
);

/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 *
 * @generated from message cosmos.slashing.v1beta1.ValidatorMissedBlocks
 */
export const ValidatorMissedBlocks = proto3.makeMessageType(
  "cosmos.slashing.v1beta1.ValidatorMissedBlocks",
  () => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "missed_blocks", kind: "message", T: MissedBlock, repeated: true },
  ],
);

/**
 * MissedBlock contains height and missed status as boolean.
 *
 * @generated from message cosmos.slashing.v1beta1.MissedBlock
 */
export const MissedBlock = proto3.makeMessageType(
  "cosmos.slashing.v1beta1.MissedBlock",
  () => [
    { no: 1, name: "index", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "missed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

