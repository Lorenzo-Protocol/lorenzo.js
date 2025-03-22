import { LorenzoClient, LorenzoOfflineSigner, SigningMode } from "../src/client";
import { EncodeObject } from "@cosmjs/proto-signing";
import { StdFee } from "@cosmjs/stargate";
import fs from "fs";
import path from "path";

// Define recipient interface
interface Recipient {
  address: string;
  amount: string;
}

// Load configuration from config.json
const configPath = path.join(__dirname, 'config.json');
const configData = fs.readFileSync(configPath, 'utf8');
const config = JSON.parse(configData);
const { mnemonic, rpcUrl, gasWanted, gasFee, gasDenom, input, recipients } = config;

async function main() {
  const signer = await LorenzoOfflineSigner.fromMnemonic(
    SigningMode.DIRECT,
    mnemonic,
    "lrz"
  );

  const client = await LorenzoClient.connectWithEthSigner(rpcUrl, signer);
  const [account] = await signer.getAccounts();
  if (!recipients || recipients.length === 0) {
    console.error('No valid recipients found in the config file');
    return;
  }
  
  console.log(`Loaded ${recipients.length} recipients from config file`);
  
  const inputs = [{
    address: account.address,
    coins: [{
      denom: input.denom,
      amount: input.amount
    }]
  }];
  
  const outputs = recipients.map((recipient: Recipient) => ({
    address: recipient.address,
    coins: [{ denom: input.denom, amount: recipient.amount }]
  }));
  
  const messages: EncodeObject[] = [
    {
      typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
      value: {
        inputs,
        outputs
      },
    },
  ];

  console.log(`Messages: ${JSON.stringify(messages)}`);

  const fee: StdFee = {
    gas: gasWanted,
    amount: [{
      denom: gasDenom,
      amount: gasFee,
    }]
  };
  
  console.log(`Gas: ${fee.gas}`);
  console.log(`Fee: ${fee.amount[0].amount} ${fee.amount[0].denom}`);
  
  try {
    client.setEIP712Enabled(false);
    const result = await client.signAndBroadcast(
      account.address,
      messages,
      fee,
    );
    console.log("Transaction hash:", result.transactionHash);
    if (result.code !== 0) {
      console.error("Transaction failed with code:", result.code, result);
      return;
    }
    console.log("Transaction successful!");
  } catch (error) {
    console.error("Transaction failed:", error);
  }
}

main().catch((error) => {
  console.error("An error occurred:", error);
});