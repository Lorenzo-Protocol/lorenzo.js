// @generated by protoc-gen-es v1.0.0
// @generated from file ethermint/types/v1/account.proto (package ethermint.types.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { BaseAccount } from "../../../cosmos/auth/v1beta1/auth_pb.js";

/**
 * EthAccount implements the authtypes.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 *
 * @generated from message ethermint.types.v1.EthAccount
 */
export const EthAccount = proto3.makeMessageType(
  "ethermint.types.v1.EthAccount",
  () => [
    { no: 1, name: "base_account", kind: "message", T: BaseAccount },
    { no: 2, name: "code_hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

