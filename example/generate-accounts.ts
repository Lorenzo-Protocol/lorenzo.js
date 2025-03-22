import { Mnemonic, HDNodeWallet } from "ethers";
import { LorenzoOfflineSigner, SigningMode } from "../src/client/signer";
import fs from "fs";
import path from "path";
import crypto from "crypto";

interface Account {
  mnemonic: string;
  address: string;
  evmAddress: string;
  amount?: string;
}

interface Recipient {
  address: string;
  amount: string;
}

interface Config {
  rpcUrl: string;
  mnemonic: string;
  gasWanted: string;
  gasFee: string;
  gasDenom: string;
  input: {
    denom: string;
    amount: string;
  };
  recipients: Recipient[];
  accounts?: Account[];
}

function generateRandomMnemonic(): string {
  const entropy = crypto.randomBytes(16);
  const mnemonic = Mnemonic.fromEntropy(entropy);
  return mnemonic.phrase;
}

async function getAddressFromMnemonic(mnemonic: string): Promise<{address: string, evmAddress: string}> {
  const wallet = HDNodeWallet.fromPhrase(mnemonic);
  const evmAddress = wallet.address;
  const signer = await LorenzoOfflineSigner.fromMnemonic(
    SigningMode.DIRECT,
    mnemonic,
    "lrz"
  );

  const [account] = await signer.getAccounts();
  return { address: account.address, evmAddress };
}

function generateRandomAmount(maxAmount: number): string {
  return Math.floor(Math.random() * maxAmount) + 1 + "";
}

async function generateRandomAccounts(count: number, maxAmount: number): Promise<Account[]> {
  const accounts: Account[] = [];
  
  console.log(`Generating ${count} random mnemonics and addresses with amounts up to ${maxAmount}...`);
  
  for (let i = 0; i < count; i++) {
    const mnemonic = generateRandomMnemonic();
    const address = await getAddressFromMnemonic(mnemonic);
    const amount = generateRandomAmount(maxAmount);
    
    accounts.push({
      mnemonic,
      address: address.address,
      evmAddress: address.evmAddress,
      amount
    });
  }
  
  return accounts;
}

function updateConfigFile(accounts: Account[], configPath: string, useAccountsAsRecipients: boolean = true): void {
  try {
    // Read existing config
    const configData = fs.readFileSync(configPath, 'utf8');
    const config: Config = JSON.parse(configData);
    
    // Calculate sum of all amounts
    const sum = accounts.reduce((total, account) => 
      total + (account.amount ? parseInt(account.amount) : 0), 0).toString();
    
    console.log(`Total amount sum: ${sum}`);
    
    // Create recipients from accounts if requested
    if (useAccountsAsRecipients) {
      config.recipients = accounts.map(account => ({
        address: account.address,
        amount: account.amount || "1" // Default to 1 if no amount
      }));
      
      // Update input amount with the sum
      config.input.amount = sum;
    }
  
    // Remove accounts field if it exists
    delete config.accounts;
    
    // Write updated config back to file
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    console.log(`Config file updated at: ${configPath}`);
  } catch (error) {
    console.error(`Error updating config file: ${error}`);
  }
}

/**
 * Save accounts to a separate JSON file
 * @param accounts Array of mnemonic and address pairs
 * @param filePath Path to output file
 */
function saveAccountsToFile(accounts: Account[], filePath: string): void {
  try {
    fs.writeFileSync(filePath, JSON.stringify(accounts, null, 2));
    console.log(`Accounts saved to: ${filePath}`);
  } catch (error) {
    console.error(`Error saving accounts to file: ${error}`);
  }
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);
  const options = parseCommandLineArgs(args);
  
  const accounts = await generateRandomAccounts(options.count, options.maxAmount);
  
  const configPath = path.join(__dirname, options.outputFile);
  updateConfigFile(accounts, configPath, options.useAsRecipients);
  
  const accountsPath = path.join(__dirname, 'generated-accounts.json');
  saveAccountsToFile(accounts, accountsPath);
}

function parseCommandLineArgs(args: string[]): {
  count: number;
  maxAmount: number;
  useAsRecipients: boolean;
  outputFile: string;
} {
  let options = {
    count: 5,
    maxAmount: 10,
    useAsRecipients: true,
    outputFile: 'config.json'
  };

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--count' && i + 1 < args.length) {
      options.count = parseInt(args[i + 1]);
      i++;
    } else if (args[i] === '--max' && i + 1 < args.length) {
      options.maxAmount = parseInt(args[i + 1]);
      i++;
    } else if (args[i] === '--no-recipients') {
      options.useAsRecipients = false;
    } else if (args[i] === '--output' && i + 1 < args.length) {
      options.outputFile = args[i + 1];
      i++;
    } else if (!isNaN(parseInt(args[i]))) {
      if (i === 0) {
        options.count = parseInt(args[i]);
      } else if (i === 1) {
        options.maxAmount = parseInt(args[i]);
      }
    }
  }
  
  return options;
}

// Run the main function
main().catch(error => {
  console.error('Error:', error);
  process.exit(1);
});
