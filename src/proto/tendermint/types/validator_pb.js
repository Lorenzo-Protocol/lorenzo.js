// @generated by protoc-gen-es v1.0.0
// @generated from file tendermint/types/validator.proto (package tendermint.types, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { PublicKey } from "../crypto/keys_pb.js";

/**
 * @generated from message tendermint.types.ValidatorSet
 */
export const ValidatorSet = proto3.makeMessageType(
  "tendermint.types.ValidatorSet",
  () => [
    { no: 1, name: "validators", kind: "message", T: Validator, repeated: true },
    { no: 2, name: "proposer", kind: "message", T: Validator },
    { no: 3, name: "total_voting_power", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message tendermint.types.Validator
 */
export const Validator = proto3.makeMessageType(
  "tendermint.types.Validator",
  () => [
    { no: 1, name: "address", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "pub_key", kind: "message", T: PublicKey },
    { no: 3, name: "voting_power", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "proposer_priority", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message tendermint.types.SimpleValidator
 */
export const SimpleValidator = proto3.makeMessageType(
  "tendermint.types.SimpleValidator",
  () => [
    { no: 1, name: "pub_key", kind: "message", T: PublicKey },
    { no: 2, name: "voting_power", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

