// @generated by protoc-gen-es v1.0.0
// @generated from file cosmos/bank/v1beta1/bank.proto (package cosmos.bank.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../base/v1beta1/coin_pb.js";

/**
 * Params defines the parameters for the bank module.
 *
 * @generated from message cosmos.bank.v1beta1.Params
 */
export const Params = proto3.makeMessageType(
  "cosmos.bank.v1beta1.Params",
  () => [
    { no: 1, name: "send_enabled", kind: "message", T: SendEnabled, repeated: true },
    { no: 2, name: "default_send_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * SendEnabled maps coin denom to a send_enabled status (whether a denom is
 * sendable).
 *
 * @generated from message cosmos.bank.v1beta1.SendEnabled
 */
export const SendEnabled = proto3.makeMessageType(
  "cosmos.bank.v1beta1.SendEnabled",
  () => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Input models transaction input.
 *
 * @generated from message cosmos.bank.v1beta1.Input
 */
export const Input = proto3.makeMessageType(
  "cosmos.bank.v1beta1.Input",
  () => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "coins", kind: "message", T: Coin, repeated: true },
  ],
);

/**
 * Output models transaction outputs.
 *
 * @generated from message cosmos.bank.v1beta1.Output
 */
export const Output = proto3.makeMessageType(
  "cosmos.bank.v1beta1.Output",
  () => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "coins", kind: "message", T: Coin, repeated: true },
  ],
);

/**
 * Supply represents a struct that passively keeps track of the total supply
 * amounts in the network.
 * This message is deprecated now that supply is indexed by denom.
 *
 * @generated from message cosmos.bank.v1beta1.Supply
 * @deprecated
 */
export const Supply = proto3.makeMessageType(
  "cosmos.bank.v1beta1.Supply",
  () => [
    { no: 1, name: "total", kind: "message", T: Coin, repeated: true },
  ],
);

/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 *
 * @generated from message cosmos.bank.v1beta1.DenomUnit
 */
export const DenomUnit = proto3.makeMessageType(
  "cosmos.bank.v1beta1.DenomUnit",
  () => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "exponent", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "aliases", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * Metadata represents a struct that describes
 * a basic token.
 *
 * @generated from message cosmos.bank.v1beta1.Metadata
 */
export const Metadata = proto3.makeMessageType(
  "cosmos.bank.v1beta1.Metadata",
  () => [
    { no: 1, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "denom_units", kind: "message", T: DenomUnit, repeated: true },
    { no: 3, name: "base", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "display", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "symbol", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "uri_hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

