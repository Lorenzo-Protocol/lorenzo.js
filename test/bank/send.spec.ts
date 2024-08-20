import { LorenzoClient,LorenzoOfflineSigner, SigningMode } from "../../src";
import { EncodeObject } from "@cosmjs/proto-signing";
import { StdFee } from "@cosmjs/stargate";
import {
    setupTest,
    delay5s,
    directSignAndBroadcastEIP712,
    directSignAndBroadcast
} from "../index";

describe("Lorenzo Client Tests", () => {
    describe("DIRECT SignMode", () => {
        let client: LorenzoClient;
        let signer: LorenzoOfflineSigner;
        let messages: EncodeObject[];
        let fee: StdFee;

        beforeAll(async () => {
            ({ client, signer } = await setupTest(SigningMode.DIRECT));

            const [account] = await signer.getAccounts();

            messages = [
                {
                    typeUrl: "/cosmos.bank.v1beta1.MsgSend",
                    value: {
                        fromAddress: account.address,
                        toAddress: "lrz144ysmwalylpju9yuplfh2a900pugv5lyjkfkrp",
                        amount: [{ denom: "stBTC", amount: "1" }],
                    },
                },
            ];

            fee = {
                amount: [{ denom: "stBTC", amount: "400000000000000" }],
                gas: "200000",
            };

        });

        afterEach(async () => {
            await delay5s();
        });

        it("should sign and broadcast successfully with EIP712 disabled", async () => {
            await directSignAndBroadcast(client, signer, messages, fee);
        });

        it("should sign and broadcast successfully with EIP712 enabled", async () => {
            await directSignAndBroadcastEIP712(client, signer, messages, fee);
        });
    });
});
