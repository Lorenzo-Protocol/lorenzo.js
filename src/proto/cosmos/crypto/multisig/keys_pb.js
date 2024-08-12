// @generated by protoc-gen-es v1.0.0
// @generated from file cosmos/crypto/multisig/keys.proto (package cosmos.crypto.multisig, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Any, proto3 } from "@bufbuild/protobuf";

/**
 * LegacyAminoPubKey specifies a public key type
 * which nests multiple public keys and a threshold,
 * it uses legacy amino address rules.
 *
 * @generated from message cosmos.crypto.multisig.LegacyAminoPubKey
 */
export const LegacyAminoPubKey = proto3.makeMessageType(
  "cosmos.crypto.multisig.LegacyAminoPubKey",
  () => [
    { no: 1, name: "threshold", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "public_keys", kind: "message", T: Any, repeated: true },
  ],
);

