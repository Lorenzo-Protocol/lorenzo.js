import { LorenzoClient } from './client';
import { LorenzoOfflineSigner, SigningMode } from './signer';
import { EncodeObject } from '@cosmjs/proto-signing';
import { StdFee } from '@cosmjs/stargate';
import dotenv from 'dotenv';

dotenv.config();
const mnemonic = process.env.MNEMONICS;
const rpcUrl = process.env.ENDPOINT;

describe('LorenzoClient', () => {
    let client: LorenzoClient;
    let directSigner: LorenzoOfflineSigner;

    beforeAll(async () => {
        directSigner = await LorenzoOfflineSigner.fromMnemonic(SigningMode.DIRECT, mnemonic, 'lrz');
        client = await LorenzoClient.connectWithEthSigner(rpcUrl, directSigner);
    });

    const testSignAndBroadcast = async (eip712Enabled: boolean) => {
        if (eip712Enabled) {
            client.setEIP712Enabled(true);
            expect(client.isEIP712Enabled()).toBe(true);
        }

        const [account] = await directSigner.getAccounts();

        const messages: EncodeObject[] = [
            {
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: {
                    fromAddress: account.address,
                    toAddress: 'lrz144ysmwalylpju9yuplfh2a900pugv5lyjkfkrp', // Replace with a valid address
                    amount: [{ denom: 'stBTC', amount: '1' }]
                }
            }
        ];

        const fee: StdFee = {
            amount: [{ denom: 'stBTC', amount: '400000000000000' }],
            gas: '200000',
        };

        const result = await client.signAndBroadcast(account.address, messages, fee, 'memo');
        expect(result).toBeDefined();
        expect(result.transactionHash).toBeDefined();
    };

    it('should sign with direct mode', async () => {
        await testSignAndBroadcast(false);
    });

    it('should enable EIP712 signing with direct mode', async () => {
        await testSignAndBroadcast(true);
    });
});