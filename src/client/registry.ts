import {
  defaultRegistryTypes,
  AminoTypes,
  createDefaultAminoConverters,
} from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import {
  ethermintAminoConverters,
  ethermintProtoRegistry,
  lorenzoAminoConverters,
  lorenzoProtoRegistry,
} from "../telescope";

export function createRegistry(): Registry {
  return new Registry([
    ...defaultRegistryTypes,
    ...lorenzoProtoRegistry,
    ...ethermintProtoRegistry,
  ]);
}

export function createAminoTypes(): AminoTypes {
  return new AminoTypes({
    ...createDefaultAminoConverters(),

    ...lorenzoAminoConverters,
    ...ethermintAminoConverters,
  });
}
