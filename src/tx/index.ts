// Cosmos-sdk msg types
import {
    MsgMultiSend,
    MsgSend
} from "../proto/cosmos/bank/v1beta1/tx";

// Lorenzo msg types
import {
    MsgConvertCoin,
    MsgConvertERC20,
} from "../proto/lorenzo/token/v1/tx"

export * from "./types";
export * from "./bank";

// MsgDecoder accepts marshalled msg bytes and decode it to
export type MsgDecoder = {
    decode(input: Uint8Array): any;
};

// MsgRegistry is a map of msg url to its decoder.
export const MsgRegistry = new Map<string, MsgDecoder>([
    ["/cosmos.bank.v1beta1.MsgSend", MsgSend],
    ["/cosmos.bank.v1beta1.MsgMultiSend", MsgMultiSend],
    ["/lorenzo.token.v1.MsgConvertCoin", MsgConvertCoin],
    ["/lorenzo.token.v1.MsgConvertERC20", MsgConvertERC20],
])