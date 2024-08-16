import { JSONObject } from "./message";
import { createDomain } from "./createDomain";
import { createTypes } from "./createTypes";
import { flattenPayload } from "./flattenPayload";

export const PRIMARY_TYPE = "Tx";

/**
 * Create EIP-712 Typed Data (not legacy one)
 *
 * @param chainId
 * @param stdSignDoc
 *
 * TODO: accept @cosmjs/amino stdSignDoc instead of JSONObject
 */
export const createTypedData = (chainId: number, stdSignDoc: JSONObject) => {
  const transformResponse = flattenPayload(stdSignDoc);
  const types = createTypes(transformResponse);
  const domain = createDomain(chainId);
  const message = transformResponse.payload;

  return {
    types,
    primaryType: PRIMARY_TYPE,
    domain,
    message,
  };
};
