import { lorenzo } from '../src/telescope';

async function testQueryBlance() {
    try {
        const { createRPCQueryClient } = lorenzo.ClientFactory;
        const client = await createRPCQueryClient({ rpcEndpoint: "http://149.28.138.216:26657" });

        // now you can query the cosmos modules
        const balance = await client.cosmos.bank.v1beta1
            .allBalances({ address: 'lrz1rppk6jrage27wxf9smyk93ys5mkdkye2hszw4d' });

        console.log(balance);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

testQueryBlance().then(r => {
    console.log("success")
});