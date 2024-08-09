import { EncryptionUtils } from "..";

// MsgParams represents message params.
export interface MsgParams {}

export interface ProtoMsg {
    type_url: string;
    value: any;
    encode(): Promise<Uint8Array>;
}

export type AminoMsg = {
    type: string;
    value: any;
};

// Msg represents a message in cosmos tx.
export interface Msg {
    toProto(utils: EncryptionUtils): Promise<ProtoMsg>;
    toAmino(utils: EncryptionUtils): Promise<AminoMsg>;
}

export type Coin = {
    denom: string;
    amount: string;
};