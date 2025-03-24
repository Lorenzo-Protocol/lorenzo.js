import fs from "fs";
import path from "path";
import crypto from "crypto";

import { Mnemonic, HDNodeWallet } from "ethers";
import { LorenzoOfflineSigner, SigningMode } from "../src/client/signer";

// Add type declaration for global.gc
declare global {
  interface Global {
    gc?: () => void;
  }
}

interface Account {
  mnemonic: string;
  address: string;
  evmAddress: string;
  amount?: string;
  index: number;  // Account index, starting from 1
}

interface MainAccount extends Account {
  // Main account with calculated sum of batch amounts
}

interface BatchAccount extends Account {
  // Batch account with random amount
}

interface BatchesConfig {
  mainAccounts: number;      // Number of main accounts
  accountsPerBatch: number;  // Number of accounts per batch
  minAmount: number;         // Minimum amount for batch accounts
  maxAmount: number;         // Maximum amount for batch accounts
  feeAmount: number;         // Fee amount to add to main accounts
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

function generateRandomAmount(minAmount: number, maxAmount: number): string {
  return Math.floor(Math.random() * (maxAmount - minAmount + 1)) + minAmount + "";
}

async function generateAccount(index: number, generateAmount = false, minAmount = 0, maxAmount = 0): Promise<Account> {
  const mnemonic = generateRandomMnemonic();
  const { address, evmAddress } = await getAddressFromMnemonic(mnemonic);
  
  return {
    mnemonic,
    address,
    evmAddress,
    amount: generateAmount ? generateRandomAmount(minAmount, maxAmount) : "0",
    index: index + 1  // Start from 1
  };
}

/**
 * Generate batch accounts
 */
async function generateBatchAccounts(
  mainAccountIndex: number,
  accountsCount: number, 
  minAmount: number,
  maxAmount: number
): Promise<BatchAccount[]> {
  console.log(`Generating batch with ${accountsCount} accounts for main account ${mainAccountIndex}...`);
  
  const accountPromises = Array.from({ length: accountsCount }, (_, i) => 
    generateAccount(i, true, minAmount, maxAmount) as Promise<BatchAccount>);
  
  return Promise.all(accountPromises);
}

// Helper functions for file operations with improved error handling
const fileUtils = {
  // Ensure directory exists
  ensureDirectory(dirPath: string): void {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`Created directory: ${dirPath}`);
    }
  },

  // Save data to file with error handling
  saveToFile<T>(data: T, filePath: string, description = "Data"): void {
    try {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      console.log(`${description} saved to: ${filePath}`);
    } catch (error) {
      console.error(`Error saving ${description.toLowerCase()} to file: ${error}`);
    }
  },

  // Read data from file with error handling
  readFromFile<T>(filePath: string, defaultValue: T): T {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data) as T;
    } catch (error) {
      console.error(`Error reading file ${filePath}: ${error}`);
      return defaultValue;
    }
  }
};

// Format batch filename 
function formatBatchFilename(mainAccountIndex: number): string {
  return `batch_${mainAccountIndex.toString().padStart(3, '0')}`;
}



/**
 * Generate and immediately save batch accounts, tracking totals for main accounts
 */
async function generateAndSaveBatchAccounts(config: BatchesConfig, accountsDir: string): Promise<Record<number, number>> {
  // We'll collect the batch sums here to update main accounts later
  const mainAccountTotals: Record<number, number> = {};
  
  // Total number of batches to process
  const totalBatches = config.mainAccounts;
  console.log(`Generating ${totalBatches} batches (${config.accountsPerBatch} accounts per batch)...`);
  
  for (let batchIndex = 1; batchIndex <= totalBatches; batchIndex++) {
    console.log(`Processing batch ${batchIndex}/${totalBatches}...`);
    
    const batchAccounts = await generateBatchAccounts(
      batchIndex,
      config.accountsPerBatch,
      config.minAmount,
      config.maxAmount
    );
    
    const batchSum = batchAccounts.reduce((sum, account) => 
      sum + (account.amount ? parseInt(account.amount) : 0), 0);
    
    mainAccountTotals[batchIndex] = batchSum;
    
    const batchFilename = formatBatchFilename(batchIndex);
    const batchFilePath = path.join(accountsDir, `${batchFilename}.json`);
    fileUtils.saveToFile(batchAccounts, batchFilePath, batchFilename);
    
    if (global.gc) {
      try {
        global.gc();
      } catch (e) {
        // Ignore errors
      }
    }
  }
  
  console.log('All batches have been generated and saved.');
  return mainAccountTotals;
}

/**
 * Generate main accounts with batch totals
 */
async function generateMainAccountsWithTotals(
  count: number, 
  batchTotals: Record<number, number>,
  feeAmount: number
): Promise<MainAccount[]> {
  console.log(`Generating ${count} main accounts with calculated totals...`);
  
  // Create main accounts in parallel
  const accountPromises = Array.from({ length: count }, async (_, i) => {
    // Generate the base account
    const index = i + 1; // 1-indexed
    const account = await generateAccount(i) as MainAccount;
    
    // Add the calculated total from batch + fee
    const batchTotal = batchTotals[index] || 0;
    const totalWithFee = batchTotal + feeAmount;
    account.amount = totalWithFee.toString();
    
    return account;
  });
  
  return Promise.all(accountPromises);
}

/**
 * Main function - optimized to first generate and save batches, then generate main accounts
 */
async function main() {
  const args = process.argv.slice(2);
  const options = parseCommandLineArgs(args);
  
  // Ensure accounts directory exists
  const accountsDir = path.join(__dirname, 'accounts');
  fileUtils.ensureDirectory(accountsDir);
  
  // Start measuring time
  console.time('Total generation time');
  
  const config = {
    mainAccounts: options.mainAccounts,
    accountsPerBatch: options.accountsPerBatch,
    minAmount: options.minAmount,
    maxAmount: options.maxAmount,
    feeAmount: options.feeAmount
  };
  
  try {
    // STEP 1: Generate and save all batch accounts first, getting back the totals
    console.time('Batch generation time');
    const batchTotals = await generateAndSaveBatchAccounts(config, accountsDir);
    console.timeEnd('Batch generation time');
    
    // STEP 2: Only after all batches are saved, generate main accounts with the totals
    console.time('Main accounts generation time');
    const mainAccounts = await generateMainAccountsWithTotals(
      config.mainAccounts, 
      batchTotals,
      config.feeAmount
    );
    console.timeEnd('Main accounts generation time');
    
    // STEP 3: Save main accounts
    const mainAccountsPath = path.join(accountsDir, 'main.json');
    fileUtils.saveToFile(mainAccounts, mainAccountsPath, "Main accounts");
    
    // Print summary
    const totalBatches = options.mainAccounts; // One batch per main account
    const totalAccounts = totalBatches * options.accountsPerBatch + options.mainAccounts;
    
    console.log(`\nGeneration complete:`);
    console.log(`- ${options.mainAccounts} main accounts`);
    console.log(`- ${totalBatches} batches`);
    console.log(`- ${options.accountsPerBatch} accounts per batch`);
    console.log(`- ${totalAccounts} total accounts`);
    console.timeEnd('Total generation time');
  } catch (error) {
    console.error('Error during account generation:', error);
  }
}

interface CommandLineOptions {
  mainAccounts: number;     // Number of main accounts
  accountsPerBatch: number; // Number of accounts per batch
  minAmount: number;        // Minimum amount for batch accounts
  maxAmount: number;        // Maximum amount for batch accounts
  feeAmount: number;        // Fee amount to add to main accounts
}

function parseCommandLineArgs(args: string[]): CommandLineOptions {
  // Default options
  const options: CommandLineOptions = {
    mainAccounts: 2,
    accountsPerBatch: 5,
    minAmount: 1,
    maxAmount: 10,
    feeAmount: 5
  };

  // Parse arguments
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    
    // Handle numeric options
    if (i + 1 < args.length) {
      if (arg === '--batch') {
        options.mainAccounts = parseInt(args[i + 1]);
        i++;
      } else if (arg === '--accounts-per-batch') {
        options.accountsPerBatch = parseInt(args[i + 1]);
        i++;
      } else if (arg === '--amount-min') {
        options.minAmount = parseInt(args[i + 1]);
        i++;
      } else if (arg === '--amount-max') {
        options.maxAmount = parseInt(args[i + 1]);
        i++;
      } else if (arg === '--fee-amount') {
        options.feeAmount = parseInt(args[i + 1]);
        i++;
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
