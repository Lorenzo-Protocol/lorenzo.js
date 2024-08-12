//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as lorenzoAgentV1TxRegistry from "./agent/v1/tx.registry";
import * as lorenzoBtclightclientV1TxRegistry from "./btclightclient/v1/tx.registry";
import * as lorenzoBtcstakingV1TxRegistry from "./btcstaking/v1/tx.registry";
import * as lorenzoFeeV1TxRegistry from "./fee/v1/tx.registry";
import * as lorenzoPlanV1TxRegistry from "./plan/v1/tx.registry";
import * as lorenzoTokenV1TxRegistry from "./token/v1/tx.registry";
import * as lorenzoAgentV1TxAmino from "./agent/v1/tx.amino";
import * as lorenzoBtclightclientV1TxAmino from "./btclightclient/v1/tx.amino";
import * as lorenzoBtcstakingV1TxAmino from "./btcstaking/v1/tx.amino";
import * as lorenzoFeeV1TxAmino from "./fee/v1/tx.amino";
import * as lorenzoPlanV1TxAmino from "./plan/v1/tx.amino";
import * as lorenzoTokenV1TxAmino from "./token/v1/tx.amino";
export const lorenzoAminoConverters = {
  ...lorenzoAgentV1TxAmino.AminoConverter,
  ...lorenzoBtclightclientV1TxAmino.AminoConverter,
  ...lorenzoBtcstakingV1TxAmino.AminoConverter,
  ...lorenzoFeeV1TxAmino.AminoConverter,
  ...lorenzoPlanV1TxAmino.AminoConverter,
  ...lorenzoTokenV1TxAmino.AminoConverter
};
export const lorenzoProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...lorenzoAgentV1TxRegistry.registry, ...lorenzoBtclightclientV1TxRegistry.registry, ...lorenzoBtcstakingV1TxRegistry.registry, ...lorenzoFeeV1TxRegistry.registry, ...lorenzoPlanV1TxRegistry.registry, ...lorenzoTokenV1TxRegistry.registry];
export const getSigningLorenzoClientOptions = ({
  defaultTypes = defaultRegistryTypes
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...lorenzoProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...lorenzoAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningLorenzoClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningLorenzoClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};