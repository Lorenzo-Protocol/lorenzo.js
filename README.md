# Lorenzo JavaScript SDK

This is the JavaScript SDK for [Lorenzo](https://github.com/Lorenzo-Protocol/lorenzo).

The repo is still under development and may not be stable.

## Generate Proto

The Lorenzo JavaScript SDK must keep its proto definition consistent with the Lorenzo chain's.

Run `./scripts/protogen.sh` to fetch proto files directly from the Lorenzo repo and Cosmos BSR.

You should specify tag in the script to fetch the correct version of the proto files.

Run `npm run-script codegen` to generate proto codes with powerful `telescope`.

Telescope provides convenient methods to encode and decode proto messages as well as amino messages.

## Code Structures

### EIP-712

EIP-712 creates an EIP-712 `TypedData` given the Amino encoded `StdSignDoc`.

Since Lorenzo supports both `TypedData` and `LegacyTypedData`, we implement only the `TypedData` format.

This repo doesn't include components like `GetEIP712BytesForMsg` and focus only on constructing `TypeData`. 

### Client

Through Single Stargate Client, we can sign transactions in Amino and Proto format and broadcast them to the chain.

However, we need to sign transactions in EIP-712 format as well.

1. Lorenzo uses `ethSecp256k1` to generate keys, which is not supported by `cosmjs` by default.
2. Lorenzo needs to support both signing an eip-712 extensive transaction and a native cosmos transaction.

NOTE: amino signing is not supported in this SDK.

### Signer

Signer allows us to sign transactions with `eth_secp256k1` cryptography as well as recover addresses from the mnemonic.

## Example

```javascript
import { LorenzoClient } from "./client";
import { LorenzoOfflineSigner, SigningMode } from "./signer";
import { EncodeObject } from "@cosmjs/proto-signing";
import { StdFee } from "@cosmjs/stargate";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();
const mnemonic = process.env.MNEMONICS;
const rpcUrl = process.env.ENDPOINT;

async function main() {
  // Setup the signer and client
  const signer = await LorenzoOfflineSigner.fromMnemonic(
    SigningMode.DIRECT,
    mnemonic,
    "lrz"
  );
  const client = await LorenzoClient.connectWithEthSigner(rpcUrl, signer);

  // Get the account
  const [account] = await signer.getAccounts();

  // Prepare the message
  const messages: EncodeObject[] = [
    {
      typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      value: {
        fromAddress: account.address,
        toAddress: "lrz144ysmwalylpju9yuplfh2a900pugv5lyjkfkrp",
        amount: [{ denom: "stBTC", amount: "1" }],
      },
    },
  ];

  // Prepare the fee
  const fee: StdFee = {
    amount: [{ denom: "stBTC", amount: "400000000000000" }],
    gas: "200000",
  };

  // Send transaction with EIP712 disabled
  console.log("Sending transaction with EIP712 disabled...");
  client.setEIP712Enabled(false);
  let result = await client.signAndBroadcast(
    account.address,
    messages,
    fee,
    "Transaction with EIP712 disabled"
  );
  console.log("Transaction hash:", result.transactionHash);

  // Send transaction with EIP712 enabled
  console.log("\nSending transaction with EIP712 enabled...");
  client.setEIP712Enabled(true);
  result = await client.signAndBroadcast(
    account.address,
    messages,
    fee,
    "Transaction with EIP712 enabled"
  );
  console.log("Transaction hash:", result.transactionHash);
}

main().catch((error) => {
  console.error("An error occurred:", error);
});
```

## What's Next?

- Amino support: though Amino is deprecated, some Ledger may still require Amino signing mode.
- Estimate gas: the SDK should provide a way to estimate gas for a transaction.
- Wallet Adapter: consider integrating multiple wallet adapters using cosmos-kit.