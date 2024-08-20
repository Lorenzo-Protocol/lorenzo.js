import dotenv from "dotenv";
import {LorenzoClient, LorenzoOfflineSigner, SigningMode} from "../src";

dotenv.config();

const mnemonic = process.env.MNEMONICS;
const rpcUrl = process.env.ENDPOINT;
jest.setTimeout(15000)

export const setupTest = async (signingMode: SigningMode) => {
    const signer = await LorenzoOfflineSigner.fromMnemonic(
        signingMode,
        mnemonic,
        "lrz"
    );
    const client = await LorenzoClient.connectWithEthSigner(rpcUrl, signer);
    return { client, signer };
};

export const delay5s = () => new Promise(resolve => setTimeout(resolve, 10000));
