import { Any } from "cosmjs-types/google/protobuf/any";
import { EthAccount } from "../telescope/ethermint/types/v1/account";
import { Account, accountFromAny } from "@cosmjs/stargate";
import { assert } from "@cosmjs/utils";
import {BaseAccount} from "../telescope/cosmos/auth/v1beta1/auth";

export function ethAccountParser(input: Any): Account {
    const { typeUrl, value } = input;

    switch (typeUrl) {
        case '/ethermint.types.v1.EthAccount':
            const baseAccount = EthAccount.decode(value).baseAccount;
            assert(baseAccount);
            return accountFromAny(Any.fromPartial({
                typeUrl: '/cosmos.auth.v1beta1.BaseAccount',
                value: BaseAccount.encode(baseAccount).finish(),
            }));
        default:
            return accountFromAny(input);
    }
}