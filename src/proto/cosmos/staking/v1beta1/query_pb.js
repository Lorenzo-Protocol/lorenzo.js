// @generated by protoc-gen-es v1.0.0
// @generated from file cosmos/staking/v1beta1/query.proto (package cosmos.staking.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";
import { DelegationResponse, HistoricalInfo, Params, Pool, RedelegationResponse, UnbondingDelegation, Validator } from "./staking_pb.js";

/**
 * QueryValidatorsRequest is request type for Query/Validators RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryValidatorsRequest
 */
export const QueryValidatorsRequest = proto3.makeMessageType(
  "cosmos.staking.v1beta1.QueryValidatorsRequest",
  () => [
    { no: 1, name: "status", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
  ],
);

/**
 * QueryValidatorsResponse is response type for the Query/Validators RPC method
 *
 * @generated from message cosmos.staking.v1beta1.QueryValidatorsResponse
 */
export const QueryValidatorsResponse = proto3.makeMessageType(
  "cosmos.staking.v1beta1.QueryValidatorsResponse",
  () => [
    { no: 1, name: "validators", kind: "message", T: Validator, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ],
);

/**
 * QueryValidatorRequest is response type for the Query/Validator RPC method
 *
 * @generated from message cosmos.staking.v1beta1.QueryValidatorRequest
 */
export const QueryValidatorRequest = proto3.makeMessageType(
  "cosmos.staking.v1beta1.QueryValidatorRequest",
  () => [
    { no: 1, name: "validator_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * QueryValidatorResponse is response type for the Query/Validator RPC method
 *
 * @generated from message cosmos.staking.v1beta1.QueryValidatorResponse
 */
export const QueryValidatorResponse = proto3.makeMessageType(
  "cosmos.staking.v1beta1.QueryValidatorResponse",
  () => [
    { no: 1, name: "validator", kind: "message", T: Validator },
  ],
);

/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 *
 * @generated from message cosmos.staking.v1beta1.QueryValidatorDelegationsRequest
 */
export const QueryValidatorDelegationsRequest = proto3.makeMessageType(
  "cosmos.staking.v1beta1.QueryValidatorDelegationsRequest",
  () => [
    { no: 1, name: "validator_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
  ],
);

/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 *
 * @generated from message cosmos.staking.v1beta1.QueryValidatorDelegationsResponse
 */
export const QueryValidatorDelegationsResponse = proto3.makeMessageType(
  "cosmos.staking.v1beta1.QueryValidatorDelegationsResponse",
  () => [
    { no: 1, name: "delegation_responses", kind: "message", T: DelegationResponse, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ],
);

/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 *
 * @generated from message cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest
 */
export const QueryValidatorUnbondingDelegationsRequest = proto3.makeMessageType(
  "cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest",
  () => [
    { no: 1, name: "validator_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
  ],
);

/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse
 */
export const QueryValidatorUnbondingDelegationsResponse = proto3.makeMessageType(
  "cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse",
  () => [
    { no: 1, name: "unbonding_responses", kind: "message", T: UnbondingDelegation, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ],
);

/**
 * QueryDelegationRequest is request type for the Query/Delegation RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryDelegationRequest
 */
export const QueryDelegationRequest = proto3.makeMessageType(
  "cosmos.staking.v1beta1.QueryDelegationRequest",
  () => [
    { no: 1, name: "delegator_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "validator_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * QueryDelegationResponse is response type for the Query/Delegation RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryDelegationResponse
 */
export const QueryDelegationResponse = proto3.makeMessageType(
  "cosmos.staking.v1beta1.QueryDelegationResponse",
  () => [
    { no: 1, name: "delegation_response", kind: "message", T: DelegationResponse },
  ],
);

/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryUnbondingDelegationRequest
 */
export const QueryUnbondingDelegationRequest = proto3.makeMessageType(
  "cosmos.staking.v1beta1.QueryUnbondingDelegationRequest",
  () => [
    { no: 1, name: "delegator_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "validator_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryUnbondingDelegationResponse
 */
export const QueryUnbondingDelegationResponse = proto3.makeMessageType(
  "cosmos.staking.v1beta1.QueryUnbondingDelegationResponse",
  () => [
    { no: 1, name: "unbond", kind: "message", T: UnbondingDelegation },
  ],
);

/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest
 */
export const QueryDelegatorDelegationsRequest = proto3.makeMessageType(
  "cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest",
  () => [
    { no: 1, name: "delegator_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
  ],
);

/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse
 */
export const QueryDelegatorDelegationsResponse = proto3.makeMessageType(
  "cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse",
  () => [
    { no: 1, name: "delegation_responses", kind: "message", T: DelegationResponse, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ],
);

/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest
 */
export const QueryDelegatorUnbondingDelegationsRequest = proto3.makeMessageType(
  "cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest",
  () => [
    { no: 1, name: "delegator_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
  ],
);

/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse
 */
export const QueryDelegatorUnbondingDelegationsResponse = proto3.makeMessageType(
  "cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse",
  () => [
    { no: 1, name: "unbonding_responses", kind: "message", T: UnbondingDelegation, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ],
);

/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryRedelegationsRequest
 */
export const QueryRedelegationsRequest = proto3.makeMessageType(
  "cosmos.staking.v1beta1.QueryRedelegationsRequest",
  () => [
    { no: 1, name: "delegator_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "src_validator_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "dst_validator_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "pagination", kind: "message", T: PageRequest },
  ],
);

/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryRedelegationsResponse
 */
export const QueryRedelegationsResponse = proto3.makeMessageType(
  "cosmos.staking.v1beta1.QueryRedelegationsResponse",
  () => [
    { no: 1, name: "redelegation_responses", kind: "message", T: RedelegationResponse, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ],
);

/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest
 */
export const QueryDelegatorValidatorsRequest = proto3.makeMessageType(
  "cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest",
  () => [
    { no: 1, name: "delegator_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
  ],
);

/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse
 */
export const QueryDelegatorValidatorsResponse = proto3.makeMessageType(
  "cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse",
  () => [
    { no: 1, name: "validators", kind: "message", T: Validator, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ],
);

/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryDelegatorValidatorRequest
 */
export const QueryDelegatorValidatorRequest = proto3.makeMessageType(
  "cosmos.staking.v1beta1.QueryDelegatorValidatorRequest",
  () => [
    { no: 1, name: "delegator_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "validator_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryDelegatorValidatorResponse
 */
export const QueryDelegatorValidatorResponse = proto3.makeMessageType(
  "cosmos.staking.v1beta1.QueryDelegatorValidatorResponse",
  () => [
    { no: 1, name: "validator", kind: "message", T: Validator },
  ],
);

/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryHistoricalInfoRequest
 */
export const QueryHistoricalInfoRequest = proto3.makeMessageType(
  "cosmos.staking.v1beta1.QueryHistoricalInfoRequest",
  () => [
    { no: 1, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryHistoricalInfoResponse
 */
export const QueryHistoricalInfoResponse = proto3.makeMessageType(
  "cosmos.staking.v1beta1.QueryHistoricalInfoResponse",
  () => [
    { no: 1, name: "hist", kind: "message", T: HistoricalInfo },
  ],
);

/**
 * QueryPoolRequest is request type for the Query/Pool RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryPoolRequest
 */
export const QueryPoolRequest = proto3.makeMessageType(
  "cosmos.staking.v1beta1.QueryPoolRequest",
  [],
);

/**
 * QueryPoolResponse is response type for the Query/Pool RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryPoolResponse
 */
export const QueryPoolResponse = proto3.makeMessageType(
  "cosmos.staking.v1beta1.QueryPoolResponse",
  () => [
    { no: 1, name: "pool", kind: "message", T: Pool },
  ],
);

/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryParamsRequest
 */
export const QueryParamsRequest = proto3.makeMessageType(
  "cosmos.staking.v1beta1.QueryParamsRequest",
  [],
);

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryParamsResponse
 */
export const QueryParamsResponse = proto3.makeMessageType(
  "cosmos.staking.v1beta1.QueryParamsResponse",
  () => [
    { no: 1, name: "params", kind: "message", T: Params },
  ],
);

