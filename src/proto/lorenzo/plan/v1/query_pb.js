// @generated by protoc-gen-es v1.0.0
// @generated from file lorenzo/plan/v1/query.proto (package lorenzo.plan.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination_pb.js";
import { Plan } from "./plan_pb.js";

/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message lorenzo.plan.v1.QueryParamsRequest
 */
export const QueryParamsRequest = proto3.makeMessageType(
  "lorenzo.plan.v1.QueryParamsRequest",
  [],
);

/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message lorenzo.plan.v1.QueryParamsResponse
 */
export const QueryParamsResponse = proto3.makeMessageType(
  "lorenzo.plan.v1.QueryParamsResponse",
  () => [
    { no: 1, name: "params", kind: "message", T: Params },
  ],
);

/**
 * PlansRequest is the request type for the Query.Plans RPC method.
 *
 * @generated from message lorenzo.plan.v1.QueryPlansRequest
 */
export const QueryPlansRequest = proto3.makeMessageType(
  "lorenzo.plan.v1.QueryPlansRequest",
  () => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ],
);

/**
 * PlansResponse is the response type for the Query.Plans RPC method.
 *
 * @generated from message lorenzo.plan.v1.QueryPlansResponse
 */
export const QueryPlansResponse = proto3.makeMessageType(
  "lorenzo.plan.v1.QueryPlansResponse",
  () => [
    { no: 1, name: "plans", kind: "message", T: Plan, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ],
);

/**
 * PlanRequest is the request type for the Query.Plan RPC method.
 *
 * @generated from message lorenzo.plan.v1.QueryPlanRequest
 */
export const QueryPlanRequest = proto3.makeMessageType(
  "lorenzo.plan.v1.QueryPlanRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * PlanResponse is the response type for the Query.Plan RPC method.
 *
 * @generated from message lorenzo.plan.v1.QueryPlanResponse
 */
export const QueryPlanResponse = proto3.makeMessageType(
  "lorenzo.plan.v1.QueryPlanResponse",
  () => [
    { no: 1, name: "plan", kind: "message", T: Plan },
  ],
);

/**
 * ClaimLeafNodeRequest is the request type for the Query.ClaimLeafNode RPC
 * method.
 *
 * @generated from message lorenzo.plan.v1.QueryClaimLeafNodeRequest
 */
export const QueryClaimLeafNodeRequest = proto3.makeMessageType(
  "lorenzo.plan.v1.QueryClaimLeafNodeRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "round_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "leaf_node", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ClaimLeafNodeResponse is the response type for the Query.ClaimLeafNode RPC
 * method.
 *
 * @generated from message lorenzo.plan.v1.QueryClaimLeafNodeResponse
 */
export const QueryClaimLeafNodeResponse = proto3.makeMessageType(
  "lorenzo.plan.v1.QueryClaimLeafNodeResponse",
  () => [
    { no: 1, name: "success", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

