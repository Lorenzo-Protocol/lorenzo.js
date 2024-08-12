// @generated by protoc-gen-es v1.0.0
// @generated from file ethermint/feemarket/v1/tx.proto (package ethermint.feemarket.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Params } from "./feemarket_pb.js";

/**
 * MsgUpdateParams defines a Msg for updating the x/feemarket module parameters.
 *
 * @generated from message ethermint.feemarket.v1.MsgUpdateParams
 */
export const MsgUpdateParams = proto3.makeMessageType(
  "ethermint.feemarket.v1.MsgUpdateParams",
  () => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "params", kind: "message", T: Params },
  ],
);

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * @generated from message ethermint.feemarket.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = proto3.makeMessageType(
  "ethermint.feemarket.v1.MsgUpdateParamsResponse",
  [],
);

