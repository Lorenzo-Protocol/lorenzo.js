// @generated by protoc-gen-es v1.0.0
// @generated from file ethermint/feemarket/v1/feemarket.proto (package ethermint.feemarket.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * Params defines the EVM module parameters
 *
 * @generated from message ethermint.feemarket.v1.Params
 */
export const Params = proto3.makeMessageType(
  "ethermint.feemarket.v1.Params",
  () => [
    { no: 1, name: "no_base_fee", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "base_fee_change_denominator", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "elasticity_multiplier", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 5, name: "enable_height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "base_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "min_gas_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "min_gas_multiplier", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

