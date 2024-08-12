import { cosmos } from '../src/telescope';
import { getSigningCosmosClient } from '../src/telescope';
import { coins } from '@cosmjs/amino';

import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { assertIsDeliverTxSuccess, SigningStargateClient, StargateClient } from "@cosmjs/stargate";
import { stringToPath } from "@cosmjs/crypto";



async function testSend() {
    try {
        // NOTE： dont expect this to work.
        // expect address: lrz144ysmwalylpju9yuplfh2a900pugv5lyjkfkrp
        // pubkey: '{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"A8MWXTbEfp3kX2JJKgcYJKmOhDxl/PRGxWIYgOjCRdOu"}'
        const mnemonic = "surround miss nominee dream gap cross assault thank captain prosper drop duty group candy wealth weather scale put";
        const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
            bip39Password: "optional password here",
            hdPaths: [stringToPath("m/44'/60'/0'/0/0")],
            prefix: "lrz"
        }
        );
        const [firstAccount] = await wallet.getAccounts();
        console.log(firstAccount);

        const rpcEndpoint = "http://149.28.138.216:26657";

        // NOTE: This is how you would actually use the SigningStargateClient.
        const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, wallet);

        const recipient = "lrz1rppk6jrage27wxf9smyk93ys5mkdkye2hszw4d";

        const amount = {
            denom: "stBTC",
            amount: "1000",
        };

        const fee = {
            amount: coins('stBTC', '100000000000000'), // 0.1 stBTC
            gas: '2000000',
            denom: 'stBTC',
        };

        const result = await client.sendTokens(firstAccount.address, recipient, [amount], fee, "Have fun with your star coins");
        assertIsDeliverTxSuccess(result);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

testSend().then(r => {
    console.log("success")
});