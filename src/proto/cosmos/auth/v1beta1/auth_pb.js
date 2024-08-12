// @generated by protoc-gen-es v1.0.0
// @generated from file cosmos/auth/v1beta1/auth.proto (package cosmos.auth.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Any, proto3 } from "@bufbuild/protobuf";

/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 *
 * @generated from message cosmos.auth.v1beta1.BaseAccount
 */
export const BaseAccount = proto3.makeMessageType(
  "cosmos.auth.v1beta1.BaseAccount",
  () => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pub_key", kind: "message", T: Any },
    { no: 3, name: "account_number", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * ModuleAccount defines an account for modules that holds coins on a pool.
 *
 * @generated from message cosmos.auth.v1beta1.ModuleAccount
 */
export const ModuleAccount = proto3.makeMessageType(
  "cosmos.auth.v1beta1.ModuleAccount",
  () => [
    { no: 1, name: "base_account", kind: "message", T: BaseAccount },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "permissions", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * ModuleCredential represents a unclaimable pubkey for base accounts controlled by modules.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.auth.v1beta1.ModuleCredential
 */
export const ModuleCredential = proto3.makeMessageType(
  "cosmos.auth.v1beta1.ModuleCredential",
  () => [
    { no: 1, name: "module_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "derivation_keys", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
  ],
);

/**
 * Params defines the parameters for the auth module.
 *
 * @generated from message cosmos.auth.v1beta1.Params
 */
export const Params = proto3.makeMessageType(
  "cosmos.auth.v1beta1.Params",
  () => [
    { no: 1, name: "max_memo_characters", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "tx_sig_limit", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "tx_size_cost_per_byte", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "sig_verify_cost_ed25519", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "sig_verify_cost_secp256k1", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

