import { LorenzoClient, LorenzoOfflineSigner, SigningMode } from "../src/client";
import { EncodeObject } from "@cosmjs/proto-signing";
import { StdFee } from "@cosmjs/stargate";
import fs from "fs";
import path from "path";
import { parseArgs } from "node:util";

// Define interfaces
interface Account {
  mnemonic: string;
  address: string;
  evmAddress: string;
  amount: string;
  index: number;
}

interface TransactionResult {
  success: boolean;
  hash?: string;
  error?: string;
  timestamp: string;
  from?: string;
  to?: string[];
  amounts?: string[];
  gasUsed?: string;
  fee?: string;
  code?: number;
  raw_log?: string;
}

// Command line options
interface CommandLineOptions {
  sendMain: boolean;
  sendBatch: boolean;
  begin?: number;
  end?: number;
  report: boolean;
  fee?: string;
}

// File utility functions
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
  },
  
  // Format batch filename 
  formatBatchFilename(batchIndex: number): string {
    return `batch_${batchIndex.toString().padStart(3, '0')}`;
  }
};

// Load configuration from config.json
const configPath = path.join(__dirname, 'config.json');
const configData = fs.readFileSync(configPath, 'utf8');
const config = JSON.parse(configData);
const { mnemonic, rpcUrl } = config;

/**
 * Calculate gas estimate and transaction fee
 * @param outputsCount - Number of outputs in transaction
 * @param totalAmount - Total amount being sent (for logging)
 * @param customFee - Optional custom fee amount
 * @returns StdFee object and calculated gas fee
 */
function calculateFee(outputsCount: number, totalAmount: string, customFee?: string): { fee: StdFee, gasFee: string, gasEstimate: number } {  
  const gasEstimate = 200000 + (outputsCount) * 30000; // Base gas + per output
  let gasFee: string;
  
  if (customFee) {
    gasFee = customFee;
  } else {
    gasFee = (BigInt(gasEstimate) * BigInt("2000000")).toString();
  }
  
  const fee: StdFee = {
    gas: gasEstimate.toString(),
    amount: [{
      denom: 'stBTC',
      amount: gasFee,
    }]
  };
  
  console.log(`Sending to ${outputsCount} accounts`);
  console.log(`   Total amount: ${totalAmount} stBTC`);
  console.log(`   Gas estimate: ${gasEstimate}`);
  console.log(`   Gas price: 2000000`);
  console.log(`   Fee: ${gasFee} stBTC`);
  
  return { fee, gasFee, gasEstimate };
}

/**
 * Send transactions to main accounts in specified range
 */
async function sendToMainAccounts(begin: number = 1, end?: number, customFee?: string): Promise<TransactionResult> {
  // Load main accounts
  const accountsDir = path.join(__dirname, 'accounts');
  const mainAccountsPath = path.join(accountsDir, 'main.json');
  
  if (!fs.existsSync(mainAccountsPath)) {
    console.error(`Main accounts file not found at ${mainAccountsPath}`);
    return {
      success: false,
      error: `Main accounts file not found at ${mainAccountsPath}`,
      timestamp: new Date().toISOString()
    };
  }
  
  const allMainAccounts = fileUtils.readFromFile<Account[]>(mainAccountsPath, []);
  
  if (allMainAccounts.length === 0) {
    console.error('No main accounts found');
    return {
      success: false,
      error: 'No main accounts found',
      timestamp: new Date().toISOString()
    };
  }
  
  if (!end || end > allMainAccounts.length) {
    end = allMainAccounts.length;
  }
  
  if (begin < 1) {
    begin = 1;
  }
  
  if (begin > end) {
    return {
      success: false,
      error: `Invalid range: begin (${begin}) is greater than end (${end})`,
      timestamp: new Date().toISOString()
    };
  }
  
  const mainAccounts = allMainAccounts.filter(account => 
    account.index >= begin && account.index <= end
  );
  
  if (mainAccounts.length === 0) {
    console.error(`No main accounts found in range [${begin}, ${end}]`);
    return {
      success: false,
      error: `No main accounts found in range [${begin}, ${end}]`,
      timestamp: new Date().toISOString()
    };
  }
  
  console.log(`Loaded ${mainAccounts.length} main accounts in range [${begin}, ${end}]`);
  
  // Initialize signer from config
  const signer = await LorenzoOfflineSigner.fromMnemonic(
    SigningMode.DIRECT,
    mnemonic,
    "lrz"
  );

  const client = await LorenzoClient.connectWithEthSigner(rpcUrl, signer);
  const [account] = await signer.getAccounts();
  
  // Prepare outputs for all main accounts
  const outputs = mainAccounts.map(mainAccount => ({
    address: mainAccount.address,
    coins: [{ denom: 'stBTC', amount: mainAccount.amount }]
  }));
  
  // Calculate total amount
  const totalAmount = mainAccounts.reduce(
    (sum, account) => sum + BigInt(account.amount), 
    BigInt(0)
  );
  
  // Create input
  const inputs = [{
    address: account.address,
    coins: [{
      denom: 'stBTC',
      amount: totalAmount.toString()
    }]
  }];
  
  const messages: EncodeObject[] = [
    {
      typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
      value: {
        inputs,
        outputs
      },
    },
  ];

  const { fee, gasFee } = calculateFee(outputs.length, totalAmount.toString(), customFee);
  
  // Override the generic log message with more specific one
  console.log(`Sending to ${outputs.length} main accounts`);
  
  try {
    client.setEIP712Enabled(false);
    const result = await client.signAndBroadcast(
      account.address,
      messages,
      fee,
    );
    
    console.log("Transaction hash:", result.transactionHash);
    
    if (result.code !== 0) {
      console.error("Transaction failed with code:", result.code);
      return {
        success: false,
        hash: result.transactionHash,
        error: `Transaction failed with code: ${result.code}`,
        code: result.code,
        timestamp: new Date().toISOString(),
        from: account.address,
        gasUsed: result.gasUsed?.toString() || 'unknown',
        fee: gasFee,
        raw_log: result.rawLog
      };
    }
    
    console.log("Transaction successful!");
    
    return {
      success: true,
      hash: result.transactionHash,
      timestamp: new Date().toISOString(),
      from: account.address,
      to: mainAccounts.map(account => account.address),
      amounts: mainAccounts.map(account => account.amount),
      gasUsed: result.gasUsed?.toString() || 'unknown',
      fee: gasFee,
      raw_log: result.rawLog
    };
  } catch (error) {
    console.error("Transaction failed:", error);
    return {
      success: false,
      error: `Transaction failed: ${error}`,
      timestamp: new Date().toISOString(),
      from: account.address,
      fee: gasFee
    };
  }
}

/**
 * Send transactions from a main account to its batch accounts
 */
async function sendToBatchAccounts(mainAccountIndex: number, customFee?: string): Promise<TransactionResult> {
  console.log(`Processing batch ${mainAccountIndex}...`);
  
  // Paths
  const accountsDir = path.join(__dirname, 'accounts');
  const mainAccountsPath = path.join(accountsDir, 'main.json');
  const batchFilename = fileUtils.formatBatchFilename(mainAccountIndex);
  const batchFilePath = path.join(accountsDir, `${batchFilename}.json`);
  
  // Check that files exist
  if (!fs.existsSync(mainAccountsPath)) {
    return {
      success: false,
      error: `Main accounts file not found at ${mainAccountsPath}`,
      timestamp: new Date().toISOString()
    };
  }
  
  if (!fs.existsSync(batchFilePath)) {
    return {
      success: false,
      error: `Batch file not found at ${batchFilePath}`,
      timestamp: new Date().toISOString()
    };
  }
  
  // Load accounts
  const mainAccounts = fileUtils.readFromFile<Account[]>(mainAccountsPath, []);
  const batchAccounts = fileUtils.readFromFile<Account[]>(batchFilePath, []);
  
  if (mainAccounts.length < mainAccountIndex) {
    return {
      success: false,
      error: `Main account index ${mainAccountIndex} is out of range`,
      timestamp: new Date().toISOString()
    };
  }
  
  // Get the main account (index - 1 because array is 0-indexed but our accounts are 1-indexed)
  const mainAccount = mainAccounts[mainAccountIndex - 1];
  
  if (!mainAccount) {
    return {
      success: false,
      error: `Main account ${mainAccountIndex} not found`,
      timestamp: new Date().toISOString()
    };
  }
  
  if (batchAccounts.length === 0) {
    return {
      success: false,
      error: `No batch accounts found in ${batchFilename}`,
      timestamp: new Date().toISOString()
    };
  }
  
  // Initialize signer from the main account's mnemonic
  const signer = await LorenzoOfflineSigner.fromMnemonic(
    SigningMode.DIRECT,
    mainAccount.mnemonic,
    "lrz"
  );

  const client = await LorenzoClient.connectWithEthSigner(rpcUrl, signer);
  const [account] = await signer.getAccounts();
  
  // Prepare outputs for all batch accounts
  const outputs = batchAccounts.map(batchAccount => ({
    address: batchAccount.address,
    coins: [{ denom: 'stBTC', amount: batchAccount.amount }]
  }));
  
  // Calculate total amount needed
  const totalAmount = batchAccounts.reduce(
    (sum, account) => sum + BigInt(account.amount), 
    BigInt(0)
  );
  
  // Create input
  const inputs = [{
    address: account.address,
    coins: [{
      denom: 'stBTC',
      amount: totalAmount.toString()
    }]
  }];
  
  const messages: EncodeObject[] = [
    {
      typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
      value: {
        inputs,
        outputs
      },
    },
  ];

  const { fee, gasFee, gasEstimate } = calculateFee(outputs.length, totalAmount.toString(), customFee);
  
  // Override generic log messages with context-specific information

  console.log(`Sending from main account ${mainAccountIndex} to ${outputs.length} batch accounts`);
  console.log(`   Main account address: ${account.address}`);
  console.log(`   Total amount to send: ${totalAmount.toString()} stBTC`);
  console.log(`   Gas estimate: ${gasEstimate}`);
  console.log(`   Fee: ${gasFee} stBTC`);
  
  try {
    client.setEIP712Enabled(false);
    const result = await client.signAndBroadcast(
      account.address,
      messages,
      fee,
    );
    
    console.log("Transaction hash:", result.transactionHash);
    
    if (result.code !== 0) {
      console.error("Transaction failed with code:", result.code);
      return {
        success: false,
        hash: result.transactionHash,
        error: `Transaction failed with code: ${result.code}`,
        code: result.code,
        timestamp: new Date().toISOString(),
        from: account.address,
        gasUsed: result.gasUsed?.toString() || 'unknown',
        fee: gasFee,
        raw_log: result.rawLog
      };
    }
    
    console.log(`Transaction for batch ${mainAccountIndex} successful!`);
    
    // Prepare transaction result
    return {
      success: true,
      hash: result.transactionHash,
      timestamp: new Date().toISOString(),
      from: account.address,
      to: batchAccounts.map(account => account.address),
      amounts: batchAccounts.map(account => account.amount),
      gasUsed: result.gasUsed?.toString() || 'unknown',
      fee: gasFee,
      raw_log: result.rawLog
    };
  } catch (error) {
    console.error("Transaction failed:", error);
    return {
      success: false,
      error: `Transaction failed: ${error}`,
      timestamp: new Date().toISOString(),
      from: account.address,
      fee: gasFee
    };
  }
}

/**
 * Send to batch accounts in specified range
 */
async function sendToMultipleBatches(begin: number = 1, end?: number, customFee?: string): Promise<void> {
  const accountsDir = path.join(__dirname, 'accounts');
  const mainAccountsPath = path.join(accountsDir, 'main.json');
  
  if (!fs.existsSync(mainAccountsPath)) {
    console.error(`Main accounts file not found at ${mainAccountsPath}`);
    return;
  }
  
  const mainAccounts = fileUtils.readFromFile<Account[]>(mainAccountsPath, []);
  
  if (!end || end > mainAccounts.length) {
    end = mainAccounts.length;
  }
  
  if (begin < 1) {
    begin = 1;
  }
  
  if (begin > end) {
    console.error(`Invalid range: begin (${begin}) is greater than end (${end})`);
    return;
  }
  
  console.log(`Starting batch processing for range [${begin}, ${end}]`);
  
  // Create reports directory
  const reportsDir = path.join(__dirname, 'reports');
  fileUtils.ensureDirectory(reportsDir);
  
  // Process batches sequentially
  for (let batchIndex = begin; batchIndex <= end; batchIndex++) {
    console.log(`\nProcessing batch ${batchIndex} of range [${begin}, ${end}]...`);
    
    const result = await sendToBatchAccounts(batchIndex, customFee);
    const reportFilePath = path.join(reportsDir, `${fileUtils.formatBatchFilename(batchIndex)}.json`);
    
    // Save result to report file
    fileUtils.saveToFile(result, reportFilePath, `Batch ${batchIndex} report`);
    
    // If transaction failed, stop processing
    if (!result.success) {
      console.error(`Failed to process batch ${batchIndex}. Stopping batch processing.`);
      return;
    }
    
    // Simple delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log(`\nAll batches in range [${begin}, ${end}] have been processed successfully!`);
}

/**
 * Generate report for all transactions
 */
async function generateReport(): Promise<void> {
  const reportsDir = path.join(__dirname, 'reports');
  
  if (!fs.existsSync(reportsDir)) {
    console.error(`Reports directory not found at ${reportsDir}`);
    return;
  }
  
  // Get all report files
  const files = fs.readdirSync(reportsDir);
  const reportFiles = files.filter(file => file.endsWith('.json'));
  
  if (reportFiles.length === 0) {
    console.log('No report files found.');
    return;
  }
  
  console.log('\n=== Transaction Report ===');
  console.log('Batch\tStatus\tHash\tTimestamp\tGas Used\tFee');
  
  let successCount = 0;
  let failureCount = 0;
  
  // Process main report first if it exists
  const mainReportPath = path.join(reportsDir, 'main.json');
  if (fs.existsSync(mainReportPath)) {
    const mainReport = fileUtils.readFromFile<TransactionResult>(mainReportPath, { success: false, timestamp: '' });
    console.log(`main\t${mainReport.success ? 'SUCCESS' : 'FAILED'}\t${mainReport.hash || 'N/A'}\t${new Date(mainReport.timestamp).toLocaleString()}\t${mainReport.gasUsed || 'N/A'}\t${mainReport.fee || 'N/A'}`);
    
    if (mainReport.success) {
      successCount++;
    } else {
      failureCount++;
    }
  }
  
  // Process batch reports
  for (const file of reportFiles) {
    if (file === 'main.json') continue; // Skip main report as we already processed it
    
    const batchMatch = file.match(/batch_(\d+)\.json/);
    if (!batchMatch) continue;
    
    const batchNumber = batchMatch[1];
    const reportPath = path.join(reportsDir, file);
    const report = fileUtils.readFromFile<TransactionResult>(reportPath, { success: false, timestamp: '' });
    
    console.log(`${batchNumber}\t${report.success ? 'SUCCESS' : 'FAILED'}\t${report.hash || 'N/A'}\t${new Date(report.timestamp).toLocaleString()}\t${report.gasUsed || 'N/A'}\t${report.fee || 'N/A'}`);
    
    if (report.success) {
      successCount++;
    } else {
      failureCount++;
    }
  }
  
  console.log('\n=== Summary ===');
  console.log(`Total transactions: ${successCount + failureCount}`);
  console.log(`Successful: ${successCount}`);
  console.log(`Failed: ${failureCount}`);
}

/**
 * Main function
 */
async function main() {
  // Parse command line arguments
  const { values } = parseArgs({
    args: process.argv.slice(2),
    options: {
      'send-main': { type: 'boolean', default: false },
      'send-batch': { type: 'boolean', default: false },
      'begin': { type: 'string' },
      'end': { type: 'string' },
      'fee': { type: 'string' },
      'report': { type: 'boolean', default: false }
    },
    allowPositionals: false
  });
  
  const options: CommandLineOptions = {
    sendMain: values['send-main'] || false,
    sendBatch: values['send-batch'] || false,
    begin: values['begin'] ? parseInt(values['begin']) : undefined,
    end: values['end'] ? parseInt(values['end']) : undefined,
    report: values['report'] || false,
    fee: values['fee']
  };
  
  // Create reports directory
  const reportsDir = path.join(__dirname, 'reports');
  fileUtils.ensureDirectory(reportsDir);
  
  const begin = options.begin || 1;
  const end = options.end;
  
  // Execute requested operation
  if (options.sendMain) {
    console.log(`=== Sending to main accounts in range [${begin}, ${end || 'end'}] ===`);
    const result = await sendToMainAccounts(begin, end, options.fee);
    const reportFilePath = path.join(reportsDir, 'main.json');
    fileUtils.saveToFile(result, reportFilePath, 'Main accounts report');
    
    if (!result.success) {
      console.error('Failed to send to main accounts. Please check the report for details.');
      process.exit(1);
    }
  }
  
  if (options.sendBatch) {
    console.log(`=== Sending to batches in range [${begin}, ${end || 'end'}] ===`);
    await sendToMultipleBatches(begin, end, options.fee);
  }
  
  if (options.report) {
    await generateReport();
  }
  
  // If no options were specified, show usage
  if (!options.sendMain && !options.sendBatch && !options.report) {
    console.log('Usage:');
    console.log('  --send-main           Send to main accounts');
    console.log('  --send-batch          Send to batch accounts');
    console.log('  --begin <num>         Start from account/batch with specified index');
    console.log('  --end <num>           End at account/batch with specified index');
    console.log('  --fee <amount>        Specify a custom fee amount');
    console.log('  --report              Generate a transaction report');
  }
}

main().catch((error) => {
  console.error("An error occurred:", error);
  process.exit(1);
});