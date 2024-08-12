// @generated by protoc-gen-es v1.0.0
// @generated from file cosmos/vesting/v1beta1/tx.proto (package cosmos.vesting.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../base/v1beta1/coin_pb.js";
import { Period } from "./vesting_pb.js";

/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 *
 * @generated from message cosmos.vesting.v1beta1.MsgCreateVestingAccount
 */
export const MsgCreateVestingAccount = proto3.makeMessageType(
  "cosmos.vesting.v1beta1.MsgCreateVestingAccount",
  () => [
    { no: 1, name: "from_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "to_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin, repeated: true },
    { no: 4, name: "end_time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "delayed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type.
 *
 * @generated from message cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse
 */
export const MsgCreateVestingAccountResponse = proto3.makeMessageType(
  "cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse",
  [],
);

/**
 * MsgCreatePermanentLockedAccount defines a message that enables creating a permanent
 * locked account.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount
 */
export const MsgCreatePermanentLockedAccount = proto3.makeMessageType(
  "cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
  () => [
    { no: 1, name: "from_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "to_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin, repeated: true },
  ],
);

/**
 * MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse
 */
export const MsgCreatePermanentLockedAccountResponse = proto3.makeMessageType(
  "cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse",
  [],
);

/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount
 */
export const MsgCreatePeriodicVestingAccount = proto3.makeMessageType(
  "cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
  () => [
    { no: 1, name: "from_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "to_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "start_time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "vesting_periods", kind: "message", T: Period, repeated: true },
  ],
);

/**
 * MsgCreateVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
 * response type.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse
 */
export const MsgCreatePeriodicVestingAccountResponse = proto3.makeMessageType(
  "cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse",
  [],
);

