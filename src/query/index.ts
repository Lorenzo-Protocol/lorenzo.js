// Cosmos Msg Type



// Lorenzo Msg Type
import {
    MsgConvertCoin,
    MsgConvertERC20,
} from "../proto/lorenzo/token/v1/tx"

export type MsgDecoder = {
    decode(input: Uint8Array): any;
};

export const MsgRegistry = new Map<string, MsgDecoder>([
    ["/lorenzo.token.v1.MsgConvertCoin", MsgConvertCoin],
    ["/lorenzo.token.v1.MsgConvertERC20", MsgConvertERC20],
])