import {
  Algo as CosmjsAlgo,
  AccountData as CosmjsAccountData,
  OfflineAminoSigner as CosmjsOfflineAminoSigner, AminoSignResponse,
  StdSignDoc,
} from '@cosmjs/amino'

export type Algo = CosmjsAlgo | 'eth_secp256k1'

export interface AccountData extends Omit<CosmjsAccountData, 'algo'> {
  algo: Algo
}

export interface OfflineAminoSigner extends Omit<CosmjsOfflineAminoSigner, 'getAccounts'> {
  readonly getAccounts: () => Promise<readonly AccountData[]>
  readonly signAmino: (signerAddress: string, stdSignDoc: StdSignDoc) => Promise<AminoSignResponse>;
  readonly setEIP712Enabled?: (enabled: boolean) => void;
  readonly getEIP712Enabled?: () => boolean;
}
