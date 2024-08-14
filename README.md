# Lorenzo JavaScript SDK

This is the JavaScript SDK for [Lorenzo](https://github.com/Lorenzo-Protocol/lorenzo).

## Generate Proto

The Lorenzo JavaScript SDK must keep its proto definition consistent with the Lorenzo chain's.

Run `./scripts/protogen.sh` to fetch proto files directly from the Lorenzo repo and Cosmos BSR.

Run `./scripts/protogen.sh` and `npm run-script codegen` to generate proto codes.

TODO: Use buf dep rather than building them from source.

## Code Structures

### EIP-712

EIP-712 creates an EIP-712 `TypedData` given the Amino encoded `StdSignDoc`.

Since Lorenzo supports both `TypedData` and `LegacyTypedData`, we implement only the `TypedData` format.

This repo doesn't include components like `GetEIP712BytesForMsg` and focus only on constructing `TypeData`. 

### Lorenzo Client

Through Single Stargate Client, we can sign transactions in Amino and Proto format and broadcast them to the chain.

However, we need to sign transactions in EIP-712 format as well.

1. Lorenzo uses `ethSecp256k1` to generate keys, which is not supported by `cosmjs` by default.
2. Lorenzo needs to support both signing an eip-712 extensive transaction and a native cosmos transaction.