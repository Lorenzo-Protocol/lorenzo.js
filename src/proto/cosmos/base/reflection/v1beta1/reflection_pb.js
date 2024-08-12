// @generated by protoc-gen-es v1.0.0
// @generated from file cosmos/base/reflection/v1beta1/reflection.proto (package cosmos.base.reflection.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC.
 *
 * @generated from message cosmos.base.reflection.v1beta1.ListAllInterfacesRequest
 */
export const ListAllInterfacesRequest = proto3.makeMessageType(
  "cosmos.base.reflection.v1beta1.ListAllInterfacesRequest",
  [],
);

/**
 * ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC.
 *
 * @generated from message cosmos.base.reflection.v1beta1.ListAllInterfacesResponse
 */
export const ListAllInterfacesResponse = proto3.makeMessageType(
  "cosmos.base.reflection.v1beta1.ListAllInterfacesResponse",
  () => [
    { no: 1, name: "interface_names", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 *
 * @generated from message cosmos.base.reflection.v1beta1.ListImplementationsRequest
 */
export const ListImplementationsRequest = proto3.makeMessageType(
  "cosmos.base.reflection.v1beta1.ListImplementationsRequest",
  () => [
    { no: 1, name: "interface_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 *
 * @generated from message cosmos.base.reflection.v1beta1.ListImplementationsResponse
 */
export const ListImplementationsResponse = proto3.makeMessageType(
  "cosmos.base.reflection.v1beta1.ListImplementationsResponse",
  () => [
    { no: 1, name: "implementation_message_names", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

