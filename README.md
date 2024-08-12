# Lorenzo JavaScript SDK

This is the JavaScript SDK for [Lorenzo](https://github.com/Lorenzo-Protocol/lorenzo).

## Generate Proto

The Lorenzo JavaScript SDK must keep its proto definition consistent with the Lorenzo chain's.

Run `./scripts/protogen.sh` to fetch proto files directly from the Lorenzo repo and Cosmos BSR.

We use both `telescope` and `buf` to generate proto codes in `src/telescope` and `src/proto`.

Run `./scripts/protogen.sh` and `npm run-script codegen` to generate proto codes.

TODO: Use buf dep rather than building them from source.

## Code Structures

### EIP-712

EIP-712 currently has two implementations: `LegacyTypedData` and `TypedData`:

1. `eip712/encoding` and `eip712/messages` create legacy eip-712 typed data in the same way as `LegacyWrapTxToTypedData`.
2. `eip712/payload` creates eip-712 typed data in the way of `WrapTxToTypedData`.

Since `ethsecp256k1` uses the `LegacyWrapTxToTypedData` sign doc format to verify eip-712 signatures, we only use `LegacyTypedData` here.

**NOTE**: Don't use `eip712/payload` for now.

### Lorenzo Client

Through Single Stargate Client, we can sign transactions in Amino and Proto format and broadcast them to the chain.

However, we need to sign transactions in EIP-712 format as well.

1. Lorenzo uses `ethSecp256k1` to generate keys, which is not supported by `cosmjs` by default.
2. Lorenzo needs to support both signing an eip-712 extensive transaction and a native cosmos transaction.