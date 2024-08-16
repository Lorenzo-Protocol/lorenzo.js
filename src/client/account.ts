import { Any } from "cosmjs-types/google/protobuf/any";
import { EthAccount } from "../telescope/ethermint/types/v1/account";
import { Account, accountFromAny } from "@cosmjs/stargate";
import { assert } from "@cosmjs/utils";
import { BaseAccount } from "../telescope/cosmos/auth/v1beta1/auth";

export function ethAccountParser(input: Any): Account {
  const { typeUrl, value } = input;

  switch (typeUrl) {
    case "/ethermint.types.v1.EthAccount":
      const baseAccount = EthAccount.decode(value).baseAccount;
      const pubKey = baseAccount.pubKey;
      assert(baseAccount);
      return {
        address: baseAccount.address,
        pubkey: pubKey
          ? {
              type: "/ethermint.crypto.v1.ethsecp256k1.PubKey",
              value: Buffer.from(pubKey.value).toString("base64"),
            }
          : null,
        accountNumber: Number(baseAccount.accountNumber),
        sequence: Number(baseAccount.sequence),
      };
    default:
      return accountFromAny(input);
  }
}
