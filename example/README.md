# README

**WARN**: ALWAYS TRY AND CHECK OUTCOME ON TESTNET FIRST THEN ON MAINNET.

## Config

```
1. rpcUrl: The URL of the node to connect to
2. mnemonic: The mnemonic of the account to use
```

## Fee Calculation

We estimate the gas fee with the following formula:

```
gas-price = 2,000,000
estimate-gas = 200,000 + (outputsCount) * 30,000
gas-fee = 2,000,000 * estimate-gas
```

It's not most gas efficient, but it's enough for sending to up to 500 recipients:

- 440: 2680.0,000,000,000 is 2680 satoshi (2.33 usd)
- 500: 3040.0,000,000,000 is 3040 satoshi (2.64 usd)

Each main account requires:
- no less than 268900000000 stBTC for each batch account
- at least 26800000000000 stBTC for gas fee
- in total 27240000440000 stBTC

Thus, for the initial account it requires:
- no less than 145116000000000 for each main account 
- at least 30400000000000 stBTC for gas fee
- in total 13650400220000000 stBTC (0.0137 BTC)

**NOTE**: all stBTC here is small unit of BTC, 1 stBTC = 10e-18 BTC

## Generate Accounts

It takes 3 to 5 seconds to generate 440 accounts per batch.

```bash
# @batch: number of batches
# @accounts-per-batch: number of accounts per batch
# @amount-min: minimum amount of stBTC generated for each account
# @amount-max: maximum amount of stBTC generated for each account
# @fee-amount: fee amount to add to main accounts

npx ts-node example/generate.ts \
--batch 500 \
--accounts-per-batch 440 \
--amount-min 1000000000 \
--amount-max 1000001000 \
--fee-amount 26800000000000
```

After generation, the accounts will be saved in `accounts` directory:
- main.json (main accounts) First you transfer stBTC to these accounts
- batch_xxx.json (batch accounts) Then you use main accounts to send stBTC to recipients

## Send

```bash
# Send stBTC to main accounts as per accounts/main.json
# @begin: start index
# @end: end index (inclusive)
# @fee: tx fee (estimated if not provided)
# @WARN: if range is not provided, all accounts will be sent
npx ts-node example/send.ts --send-main --begin 1 --end 500

# Send stBTC to batch accounts as per accounts/batch_xxx.json
# @begin: start index
# @end: end index (inclusive)
# @fee: tx fee (estimated if not provided)
# @WARN: if range is not provided, all accounts will be sent
npx ts-node example/send.ts --send-batch --begin 1 --end 500

# Show tx result
npx ts-node example/send.ts --report
```

