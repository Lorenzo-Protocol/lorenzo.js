import { MsgParams } from ".";
import { AminoMsg, Coin, Msg, ProtoMsg } from "./types";

export interface MsgSendParams extends MsgParams {
    from_address: string;
    to_address: string;
    amount: Coin[];
}

export class MsgSend implements Msg {
    public from_address: string;
    public to_address: string;
    public amount: Coin[];

    constructor({ from_address, to_address, amount }: MsgSendParams) {
        this.from_address = from_address;
        this.to_address = to_address;
        this.amount = amount;
    }

    async toProto(): Promise<ProtoMsg> {
        const msgContent = {
            from_address: this.from_address,
            to_address: this.to_address,
            amount: this.amount,
        };

        return {
            type_url: "/cosmos.bank.v1beta1.MsgSend",
            value: msgContent,
            encode: async () =>
                (await import("../proto/cosmos/bank/v1beta1/tx")).MsgSend.encode(
                    msgContent,
                ).finish(),
        };
    }

    async toAmino(): Promise<AminoMsg> {
        return {
            type: "cosmos-sdk/MsgSend",
            value: {
                from_address: this.from_address,
                to_address: this.to_address,
                amount: this.amount,
            },
        };
    }
}