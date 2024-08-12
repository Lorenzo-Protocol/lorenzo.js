// @generated by protoc-gen-es v1.0.0
// @generated from file cosmos/base/tendermint/v1beta1/query.proto (package cosmos.base.tendermint.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Any, proto3 } from "@bufbuild/protobuf";
import { PageRequest, PageResponse } from "../../query/v1beta1/pagination_pb.js";
import { BlockID } from "../../../../tendermint/types/types_pb.js";
import { Block } from "../../../../tendermint/types/block_pb.js";
import { Block as Block$1 } from "./types_pb.js";
import { DefaultNodeInfo } from "../../../../tendermint/p2p/types_pb.js";

/**
 * GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest
 */
export const GetValidatorSetByHeightRequest = proto3.makeMessageType(
  "cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest",
  () => [
    { no: 1, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
  ],
);

/**
 * GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse
 */
export const GetValidatorSetByHeightResponse = proto3.makeMessageType(
  "cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse",
  () => [
    { no: 1, name: "block_height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "validators", kind: "message", T: Validator, repeated: true },
    { no: 3, name: "pagination", kind: "message", T: PageResponse },
  ],
);

/**
 * GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest
 */
export const GetLatestValidatorSetRequest = proto3.makeMessageType(
  "cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest",
  () => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ],
);

/**
 * GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse
 */
export const GetLatestValidatorSetResponse = proto3.makeMessageType(
  "cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse",
  () => [
    { no: 1, name: "block_height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "validators", kind: "message", T: Validator, repeated: true },
    { no: 3, name: "pagination", kind: "message", T: PageResponse },
  ],
);

/**
 * Validator is the type for the validator-set.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.Validator
 */
export const Validator = proto3.makeMessageType(
  "cosmos.base.tendermint.v1beta1.Validator",
  () => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pub_key", kind: "message", T: Any },
    { no: 3, name: "voting_power", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "proposer_priority", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest
 */
export const GetBlockByHeightRequest = proto3.makeMessageType(
  "cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest",
  () => [
    { no: 1, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse
 */
export const GetBlockByHeightResponse = proto3.makeMessageType(
  "cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse",
  () => [
    { no: 1, name: "block_id", kind: "message", T: BlockID },
    { no: 2, name: "block", kind: "message", T: Block },
    { no: 3, name: "sdk_block", kind: "message", T: Block$1 },
  ],
);

/**
 * GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetLatestBlockRequest
 */
export const GetLatestBlockRequest = proto3.makeMessageType(
  "cosmos.base.tendermint.v1beta1.GetLatestBlockRequest",
  [],
);

/**
 * GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetLatestBlockResponse
 */
export const GetLatestBlockResponse = proto3.makeMessageType(
  "cosmos.base.tendermint.v1beta1.GetLatestBlockResponse",
  () => [
    { no: 1, name: "block_id", kind: "message", T: BlockID },
    { no: 2, name: "block", kind: "message", T: Block },
    { no: 3, name: "sdk_block", kind: "message", T: Block$1 },
  ],
);

/**
 * GetSyncingRequest is the request type for the Query/GetSyncing RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetSyncingRequest
 */
export const GetSyncingRequest = proto3.makeMessageType(
  "cosmos.base.tendermint.v1beta1.GetSyncingRequest",
  [],
);

/**
 * GetSyncingResponse is the response type for the Query/GetSyncing RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetSyncingResponse
 */
export const GetSyncingResponse = proto3.makeMessageType(
  "cosmos.base.tendermint.v1beta1.GetSyncingResponse",
  () => [
    { no: 1, name: "syncing", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetNodeInfoRequest
 */
export const GetNodeInfoRequest = proto3.makeMessageType(
  "cosmos.base.tendermint.v1beta1.GetNodeInfoRequest",
  [],
);

/**
 * GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetNodeInfoResponse
 */
export const GetNodeInfoResponse = proto3.makeMessageType(
  "cosmos.base.tendermint.v1beta1.GetNodeInfoResponse",
  () => [
    { no: 1, name: "default_node_info", kind: "message", T: DefaultNodeInfo },
    { no: 2, name: "application_version", kind: "message", T: VersionInfo },
  ],
);

/**
 * VersionInfo is the type for the GetNodeInfoResponse message.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.VersionInfo
 */
export const VersionInfo = proto3.makeMessageType(
  "cosmos.base.tendermint.v1beta1.VersionInfo",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "app_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "git_commit", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "build_tags", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "go_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "build_deps", kind: "message", T: Module, repeated: true },
    { no: 8, name: "cosmos_sdk_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Module is the type for VersionInfo
 *
 * @generated from message cosmos.base.tendermint.v1beta1.Module
 */
export const Module = proto3.makeMessageType(
  "cosmos.base.tendermint.v1beta1.Module",
  () => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "sum", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ABCIQueryRequest defines the request structure for the ABCIQuery gRPC query.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.ABCIQueryRequest
 */
export const ABCIQueryRequest = proto3.makeMessageType(
  "cosmos.base.tendermint.v1beta1.ABCIQueryRequest",
  () => [
    { no: 1, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "prove", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * ABCIQueryResponse defines the response structure for the ABCIQuery gRPC query.
 *
 * Note: This type is a duplicate of the ResponseQuery proto type defined in
 * Tendermint.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.ABCIQueryResponse
 */
export const ABCIQueryResponse = proto3.makeMessageType(
  "cosmos.base.tendermint.v1beta1.ABCIQueryResponse",
  () => [
    { no: 1, name: "code", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "log", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "info", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "index", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 7, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 8, name: "proof_ops", kind: "message", T: ProofOps },
    { no: 9, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "codespace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ProofOp defines an operation used for calculating Merkle root. The data could
 * be arbitrary format, providing necessary data for example neighbouring node
 * hash.
 *
 * Note: This type is a duplicate of the ProofOp proto type defined in Tendermint.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.ProofOp
 */
export const ProofOp = proto3.makeMessageType(
  "cosmos.base.tendermint.v1beta1.ProofOp",
  () => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * ProofOps is Merkle proof defined by the list of ProofOps.
 *
 * Note: This type is a duplicate of the ProofOps proto type defined in Tendermint.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.ProofOps
 */
export const ProofOps = proto3.makeMessageType(
  "cosmos.base.tendermint.v1beta1.ProofOps",
  () => [
    { no: 1, name: "ops", kind: "message", T: ProofOp, repeated: true },
  ],
);

