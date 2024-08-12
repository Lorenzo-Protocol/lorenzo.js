// @generated by protoc-gen-es v1.0.0
// @generated from file cosmos/app/v1alpha1/config.proto (package cosmos.app.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Any, proto3 } from "@bufbuild/protobuf";

/**
 * Config represents the configuration for a Cosmos SDK ABCI app.
 * It is intended that all state machine logic including the version of
 * baseapp and tx handlers (and possibly even Tendermint) that an app needs
 * can be described in a config object. For compatibility, the framework should
 * allow a mixture of declarative and imperative app wiring, however, apps
 * that strive for the maximum ease of maintainability should be able to describe
 * their state machine with a config object alone.
 *
 * @generated from message cosmos.app.v1alpha1.Config
 */
export const Config = proto3.makeMessageType(
  "cosmos.app.v1alpha1.Config",
  () => [
    { no: 1, name: "modules", kind: "message", T: ModuleConfig, repeated: true },
    { no: 2, name: "golang_bindings", kind: "message", T: GolangBinding, repeated: true },
  ],
);

/**
 * ModuleConfig is a module configuration for an app.
 *
 * @generated from message cosmos.app.v1alpha1.ModuleConfig
 */
export const ModuleConfig = proto3.makeMessageType(
  "cosmos.app.v1alpha1.ModuleConfig",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "config", kind: "message", T: Any },
    { no: 3, name: "golang_bindings", kind: "message", T: GolangBinding, repeated: true },
  ],
);

/**
 * GolangBinding is an explicit interface type to implementing type binding for dependency injection.
 *
 * @generated from message cosmos.app.v1alpha1.GolangBinding
 */
export const GolangBinding = proto3.makeMessageType(
  "cosmos.app.v1alpha1.GolangBinding",
  () => [
    { no: 1, name: "interface_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "implementation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

