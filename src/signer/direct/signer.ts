import {
  Algo as CosmjsAlgo,
  AccountData as CosmjsAccountData,
  OfflineDirectSigner as CosmjsOfflineDirectSigner,
  DirectSignResponse,
} from "@cosmjs/proto-signing";
import { SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";

export type Algo = CosmjsAlgo | "eth_secp256k1";

export interface AccountData extends Omit<CosmjsAccountData, "algo"> {
  algo: Algo;
}

export interface OfflineDirectSigner
  extends Omit<CosmjsOfflineDirectSigner, "getAccounts"> {
  readonly getAccounts: () => Promise<readonly AccountData[]>;
  readonly signDirect: (
    signerAddress: string,
    signDoc: SignDoc
  ) => Promise<DirectSignResponse>;
  readonly setEIP712Enabled?: (enabled: boolean) => void;
  readonly getEIP712Enabled?: () => boolean;
}
