import { EncodeObject } from "@cosmjs/proto-signing";
import { StdFee } from "@cosmjs/stargate";

import { LorenzoClient,LorenzoOfflineSigner, SigningMode } from "../../src";
import { MessageComposer } from "../../src/telescope/lorenzo/btcstaking/v1/tx.registry"
import {
    setupTest,
    delay5s,
    directSignAndBroadcast,
    directSignAndBroadcastEIP712
} from "../index";

describe("Lorenzo Client Tests: Burn stBTC", () => {
    describe("DIRECT SignMode", () => {
        let client: LorenzoClient;
        let signer: LorenzoOfflineSigner;
        let messages: EncodeObject[];
        let fee: StdFee;

        beforeAll(async () => {
            ({ client, signer } = await setupTest(SigningMode.DIRECT));

            const [account] = await signer.getAccounts();

            messages = [
                // NOTE: construct the message using the MessageComposer
                MessageComposer.fromPartial.burn({
                    signer: account.address,
                    amount: "100",
                    btcTargetAddress: "tb1qlqvwc0wwz929546v8f9lmhsgqhkhpnj2klffh2"
                })
            ]

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
