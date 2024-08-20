import { LorenzoClient,LorenzoOfflineSigner, SigningMode } from "../../src";
import { EncodeObject } from "@cosmjs/proto-signing";
import { StdFee } from "@cosmjs/stargate";
import dotenv from "dotenv";

dotenv.config();
const mnemonic = process.env.MNEMONICS;
const rpcUrl = process.env.ENDPOINT;
const SECONDS = 1000;
jest.setTimeout(10 * SECONDS)

const setupTest = async (signingMode: SigningMode) => {
    const signer = await LorenzoOfflineSigner.fromMnemonic(
        signingMode,
        mnemonic,
        "lrz"
    );
    const client = await LorenzoClient.connectWithEthSigner(rpcUrl, signer);
    return { client, signer };
};

const testSignAndBroadcast = async (
    client: LorenzoClient,
    signer: LorenzoOfflineSigner
) => {
    const [account] = await signer.getAccounts();

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

    const fee: StdFee = {
        amount: [{ denom: "stBTC", amount: "400000000000000" }],
        gas: "200000",
    };

    const result = await client.signAndBroadcast(
        account.address,
        messages,
        fee,
        "memo"
    );
    expect(result).toBeDefined();
    expect(result.transactionHash).toBeDefined();
    console.log(result);
};

describe("Lorenzo Client Tests", () => {
    describe("DIRECT SignMode", () => {
        let client: LorenzoClient;
        let signer: LorenzoOfflineSigner;

        beforeAll(async () => {
            ({ client, signer } = await setupTest(SigningMode.DIRECT));
        });

        it("should sign and broadcast successfully with EIP712 disabled", async () => {
            client.setEIP712Enabled(false);
            expect(client.isEIP712Enabled()).toBe(false);
            await testSignAndBroadcast(client, signer);
        });

        it("should sign and broadcast successfully with EIP712 enabled", async () => {
            client.setEIP712Enabled(true);
            expect(client.isEIP712Enabled()).toBe(true);
            await testSignAndBroadcast(client, signer);
        });
    });
});
