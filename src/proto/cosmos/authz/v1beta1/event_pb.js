// Since: cosmos-sdk 0.43

// @generated by protoc-gen-es v1.0.0
// @generated from file cosmos/authz/v1beta1/event.proto (package cosmos.authz.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * EventGrant is emitted on Msg/Grant
 *
 * @generated from message cosmos.authz.v1beta1.EventGrant
 */
export const EventGrant = proto3.makeMessageType(
  "cosmos.authz.v1beta1.EventGrant",
  () => [
    { no: 2, name: "msg_type_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * EventRevoke is emitted on Msg/Revoke
 *
 * @generated from message cosmos.authz.v1beta1.EventRevoke
 */
export const EventRevoke = proto3.makeMessageType(
  "cosmos.authz.v1beta1.EventRevoke",
  () => [
    { no: 2, name: "msg_type_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

