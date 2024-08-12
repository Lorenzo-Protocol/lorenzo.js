// @generated by protoc-gen-es v1.0.0
// @generated from file ethermint/evm/v1/genesis.proto (package ethermint.evm.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Params, State } from "./evm_pb.js";

/**
 * GenesisState defines the evm module's genesis state.
 *
 * @generated from message ethermint.evm.v1.GenesisState
 */
export const GenesisState = proto3.makeMessageType(
  "ethermint.evm.v1.GenesisState",
  () => [
    { no: 1, name: "accounts", kind: "message", T: GenesisAccount, repeated: true },
    { no: 2, name: "params", kind: "message", T: Params },
  ],
);

/**
 * GenesisAccount defines an account to be initialized in the genesis state.
 * Its main difference between with Geth's GenesisAccount is that it uses a
 * custom storage type and that it doesn't contain the private key field.
 *
 * @generated from message ethermint.evm.v1.GenesisAccount
 */
export const GenesisAccount = proto3.makeMessageType(
  "ethermint.evm.v1.GenesisAccount",
  () => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "storage", kind: "message", T: State, repeated: true },
  ],
);

