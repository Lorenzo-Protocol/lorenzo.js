import { LorenzoClient,LorenzoOfflineSigner, SigningMode } from "../../src";
import { MessageComposer } from "../../src/telescope/lorenzo/btcstaking/v1/tx.registry"
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

    // NOTE: get the compose object from the registry
    const encodeObject = MessageComposer.fromPartial.burn({
        signer: account.address,
        amount: "100",
        btcTargetAddress: "tb1qlqvwc0wwz929546v8f9lmhsgqhkhpnj2klffh2"
    })

    const messages: EncodeObject[] = [encodeObject];
    console.log(messages);

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

describe("Lorenzo Client Tests: Burn stBTC", () => {
    describe("DIRECT SignMode", () => {
        let client: LorenzoClient;
        let signer: LorenzoOfflineSigner;

        beforeAll(async () => {
            ({ client, signer } = await setupTest(SigningMode.DIRECT));
        });

        // 18D49090D97D2C59E4461C3DABB7C95A27E2284A57A8C187997BEAA2665811EC
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
