// @generated by protoc-gen-es v1.0.0
// @generated from file lorenzo/fee/v1/tx.proto (package lorenzo.fee.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";

/**
 * MsgUpdateParams defines a message for updating fee module parameters.
 *
 * @generated from message lorenzo.fee.v1.MsgUpdateParams
 */
export const MsgUpdateParams = proto3.makeMessageType(
  "lorenzo.fee.v1.MsgUpdateParams",
  () => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "params", kind: "message", T: Params },
  ],
);

/**
 * MsgUpdateParamsResponse is the response to the MsgUpdateParams message.
 *
 * @generated from message lorenzo.fee.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = proto3.makeMessageType(
  "lorenzo.fee.v1.MsgUpdateParamsResponse",
  [],
);

