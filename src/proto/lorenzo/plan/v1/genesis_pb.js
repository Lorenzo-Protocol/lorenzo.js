// @generated by protoc-gen-es v1.0.0
// @generated from file lorenzo/plan/v1/genesis.proto (package lorenzo.plan.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { Plan } from "./plan_pb.js";

/**
 * GenesisState defines the agent module's genesis state.
 *
 * @generated from message lorenzo.plan.v1.GenesisState
 */
export const GenesisState = proto3.makeMessageType(
  "lorenzo.plan.v1.GenesisState",
  () => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "next_number", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "plans", kind: "message", T: Plan, repeated: true },
  ],
);

