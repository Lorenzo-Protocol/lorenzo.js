// Since: cosmos-sdk 0.47

// @generated by protoc-gen-es v1.0.0
// @generated from file cosmos/consensus/v1/query.proto (package cosmos.consensus.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { ConsensusParams } from "../../../tendermint/types/params_pb.js";

/**
 * QueryParamsRequest defines the request type for querying x/consensus parameters.
 *
 * @generated from message cosmos.consensus.v1.QueryParamsRequest
 */
export const QueryParamsRequest = proto3.makeMessageType(
  "cosmos.consensus.v1.QueryParamsRequest",
  [],
);

/**
 * QueryParamsResponse defines the response type for querying x/consensus parameters.
 *
 * @generated from message cosmos.consensus.v1.QueryParamsResponse
 */
export const QueryParamsResponse = proto3.makeMessageType(
  "cosmos.consensus.v1.QueryParamsResponse",
  () => [
    { no: 1, name: "params", kind: "message", T: ConsensusParams },
  ],
);

