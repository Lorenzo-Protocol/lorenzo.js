# Batch Send Example

**WARN**: ALWAYS TRY AND CHECK OUTCOME ON TESTNET FIRST THEN ON MAINNET.

## Config

```
1. rpcUrl: The URL of the node to connect to
2. mnemonic: The mnemonic of the account to use
3. gasWanted: The amount of gas to use
4. gasFee: The fee of gas
5. gasDenom: The denomination of gas
6. input: The input amount and denomination
7. recipients: The recipients and their amounts
```

## Usage

```bash
npm install

# @count: number of accounts to generate
# @max: maximum amount of stBTC generated for each account
npx ts-node example/generate-accounts.ts --count 15 --max 20

npx ts-node example/batch-send.ts
```

## Note 

1. If gasFee or gasLimit is not sufficient, adjust it appropriately: gasFee > gasLimit * gasPrice(2000000).
2. The sum of recipients' amounts should be equal to the input amount.
3. All `stBTC` amount in this example is small unit.

