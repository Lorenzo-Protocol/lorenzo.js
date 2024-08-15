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

    it('should sign with direct mode', async () => {
        const [account] = await directSigner.getAccounts();
        console.log(account);

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
        expect(result.transactionHash).toBeDefined()
    });

    // it('should enable EIP712 signing', async () => {
    //     client.setEIP712Enabled(true);
    //     expect(client.isEIP712Enabled()).toBe(true);
    //
    //     const [account] = await directSigner.getAccounts();
    //     const messages: EncodeObject[] = [
    //         {
    //             typeUrl: '/cosmos.bank.v1beta1.MsgSend',
    //             value: {
    //                 fromAddress: account.address,
    //                 toAddress: 'lrz1...', // Replace with a valid address
    //                 amount: [{ denom: 'stBTC', amount: '1000' }]
    //             }
    //         }
    //     ];
    //
    //     const fee: StdFee = {
    //         amount: [{ denom: 'stBTC', amount: '400000000000000' }],
    //         gas: '200000',
    //     };
    //
    //     const result = await client.signAndBroadcast(account.address, messages, fee, 'memo');
    //     expect(result).toBeDefined();
    //     expect(result.transactionHash).toBeDefined()
    // });
});


// describe('LorenzoClient', () => {
//     let client: LorenzoClient;
//     let signer: LorenzoOfflineSigner;
//
//     beforeAll(async () => {
//         signer = await LorenzoOfflineSigner.fromMnemonic(SigningMode.AMINO, mnemonic, 'lrz');
//         client = await LorenzoClient.connectWithEthSigner(rpcUrl, signer);
//     });
//
//     it('should sign with amino mode', async () => {
//         const [account] = await signer.getAccounts();
//         const messages: EncodeObject[] = [
//             {
//                 typeUrl: '/cosmos.bank.v1beta1.MsgSend',
//                 value: {
//                     fromAddress: account.address,
//                     toAddress: 'lrz1...', // Replace with a valid address
//                     amount: [{ denom: 'ulrz', amount: '1000' }]
//                 }
//             }
//         ];
//         const fee: StdFee = {
//             amount: [{ denom: 'ulrz', amount: '5000' }],
//             gas: '200000',
//         };
//
//         const result = await client.sign(account.address, messages, fee, 'memo');
//         expect(result).toBeDefined();
//         expect(result.signatures).toHaveLength(1);
//     });
//
//     it('should enable EIP712 signing', async () => {
//         client.setEIP712Enabled(true);
//         expect(client.isEIP712Enabled()).toBe(true);
//
//         const [account] = await signer.getAccounts();
//         const messages: EncodeObject[] = [
//             {
//                 typeUrl: '/cosmos.bank.v1beta1.MsgSend',
//                 value: {
//                     fromAddress: account.address,
//                     toAddress: 'lrz1...', // Replace with a valid address
//                     amount: [{ denom: 'stBTC', amount: '1000' }]
//                 }
//             }
//         ];
//         const fee: StdFee = {
//             amount: [{ denom: 'ulrz', amount: '5000' }],
//             gas: '200000',
//         };
//
//         const result = await client.sign(account.address, messages, fee, 'memo');
//         expect(result).toBeDefined();
//         expect(result.signatures).toHaveLength(1);
//         // You may want to add more specific checks for EIP712 signature format
//     });
//
//     it('should recover eth_secp256k1 private key from mnemonic', async () => {
//         const recoveredAminoSigner = await AminoEthSecp256k1Signer.fromMnemonic(mnemonic);
//         const [aminoAccount] = await recoveredAminoSigner.getAccounts();
//         expect(aminoAccount.address).toBeDefined();
//         expect(aminoAccount.pubkey).toBeDefined();
//         expect(aminoAccount.algo).toBe('eth_secp256k1');
//     });
// });