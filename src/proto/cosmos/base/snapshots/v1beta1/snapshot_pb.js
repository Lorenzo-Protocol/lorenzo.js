// @generated by protoc-gen-es v1.0.0
// @generated from file cosmos/base/snapshots/v1beta1/snapshot.proto (package cosmos.base.snapshots.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * Snapshot contains Tendermint state sync snapshot info.
 *
 * @generated from message cosmos.base.snapshots.v1beta1.Snapshot
 */
export const Snapshot = proto3.makeMessageType(
  "cosmos.base.snapshots.v1beta1.Snapshot",
  () => [
    { no: 1, name: "height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "format", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "chunks", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "metadata", kind: "message", T: Metadata },
  ],
);

/**
 * Metadata contains SDK-specific snapshot metadata.
 *
 * @generated from message cosmos.base.snapshots.v1beta1.Metadata
 */
export const Metadata = proto3.makeMessageType(
  "cosmos.base.snapshots.v1beta1.Metadata",
  () => [
    { no: 1, name: "chunk_hashes", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
  ],
);

/**
 * SnapshotItem is an item contained in a rootmulti.Store snapshot.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.base.snapshots.v1beta1.SnapshotItem
 */
export const SnapshotItem = proto3.makeMessageType(
  "cosmos.base.snapshots.v1beta1.SnapshotItem",
  () => [
    { no: 1, name: "store", kind: "message", T: SnapshotStoreItem, oneof: "item" },
    { no: 2, name: "iavl", kind: "message", T: SnapshotIAVLItem, oneof: "item" },
    { no: 3, name: "extension", kind: "message", T: SnapshotExtensionMeta, oneof: "item" },
    { no: 4, name: "extension_payload", kind: "message", T: SnapshotExtensionPayload, oneof: "item" },
    { no: 5, name: "kv", kind: "message", T: SnapshotKVItem, oneof: "item" },
    { no: 6, name: "schema", kind: "message", T: SnapshotSchema, oneof: "item" },
  ],
);

/**
 * SnapshotStoreItem contains metadata about a snapshotted store.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.base.snapshots.v1beta1.SnapshotStoreItem
 */
export const SnapshotStoreItem = proto3.makeMessageType(
  "cosmos.base.snapshots.v1beta1.SnapshotStoreItem",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * SnapshotIAVLItem is an exported IAVL node.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.base.snapshots.v1beta1.SnapshotIAVLItem
 */
export const SnapshotIAVLItem = proto3.makeMessageType(
  "cosmos.base.snapshots.v1beta1.SnapshotIAVLItem",
  () => [
    { no: 1, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "version", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "height", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * SnapshotExtensionMeta contains metadata about an external snapshotter.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta
 */
export const SnapshotExtensionMeta = proto3.makeMessageType(
  "cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "format", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * SnapshotExtensionPayload contains payloads of an external snapshotter.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload
 */
export const SnapshotExtensionPayload = proto3.makeMessageType(
  "cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload",
  () => [
    { no: 1, name: "payload", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * SnapshotKVItem is an exported Key/Value Pair
 *
 * Since: cosmos-sdk 0.46
 * Deprecated: This message was part of store/v2alpha1 which has been deleted from v0.47.
 *
 * @generated from message cosmos.base.snapshots.v1beta1.SnapshotKVItem
 * @deprecated
 */
export const SnapshotKVItem = proto3.makeMessageType(
  "cosmos.base.snapshots.v1beta1.SnapshotKVItem",
  () => [
    { no: 1, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * SnapshotSchema is an exported schema of smt store
 *
 * Since: cosmos-sdk 0.46
 * Deprecated: This message was part of store/v2alpha1 which has been deleted from v0.47.
 *
 * @generated from message cosmos.base.snapshots.v1beta1.SnapshotSchema
 * @deprecated
 */
export const SnapshotSchema = proto3.makeMessageType(
  "cosmos.base.snapshots.v1beta1.SnapshotSchema",
  () => [
    { no: 1, name: "keys", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
  ],
);

