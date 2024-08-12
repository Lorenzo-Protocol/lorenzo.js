// @generated by protoc-gen-es v1.0.0
// @generated from file lorenzo/agent/v1/agent.proto (package lorenzo.agent.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * Agent defines the details of a project
 *
 * @generated from message lorenzo.agent.v1.Agent
 */
export const Agent = proto3.makeMessageType(
  "lorenzo.agent.v1.Agent",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "btc_receiving_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "eth_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

