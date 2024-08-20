import {LorenzoClient, LorenzoOfflineSigner} from "../src";
import {EncodeObject} from "@cosmjs/proto-signing";
import {StdFee} from "@cosmjs/stargate";

export const directSignAndBroadcast = async (
    client: LorenzoClient,
    signer: LorenzoOfflineSigner,
    messages: EncodeObject[],
    fee: StdFee,
) => {
    const [account] = await signer.getAccounts();

    client.setEIP712Enabled(false);
    expect(client.isEIP712Enabled()).toBe(false);

    const result = await client.signAndBroadcast(
        account.address,
        messages,
        fee,
        "direct"
    );
    expect(result).toBeDefined();
    expect(result.transactionHash).toBeDefined();
    console.log(result);
};

export const directSignAndBroadcastEIP712 = async (
    client: LorenzoClient,
    signer: LorenzoOfflineSigner,
    messages: EncodeObject[],
    fee: StdFee,
) => {
    const [account] = await signer.getAccounts();

    client.setEIP712Enabled(false);
    expect(client.isEIP712Enabled()).toBe(false);

    const result = await client.signAndBroadcast(
        account.address,
        messages,
        fee,
        "direct-eip712"
    );
    expect(result).toBeDefined();
    expect(result.transactionHash).toBeDefined();
    console.log(result);
};