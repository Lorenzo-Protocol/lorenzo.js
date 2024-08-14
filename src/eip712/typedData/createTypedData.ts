import { JSONObject } from './message.js'
import { createDomain } from './createDomain.js'
import { createTypes } from './createTypes.js'
import { flattenPayload } from './flattenPayload.js'

export const PRIMARY_TYPE = 'Tx'

/**
 * Create EIP-712 Typed Data (not legacy one)
 *
 * @param chainId
 * @param stdSignDoc
 */
export const createTypedData = (chainId: number, stdSignDoc: JSONObject) => {
    const transformResponse = flattenPayload(stdSignDoc)
    const types = createTypes(transformResponse)
    const domain = createDomain(chainId)
    const message = transformResponse.payload

    return {
        types,
        primaryType: PRIMARY_TYPE,
        domain,
        message,
    }
}