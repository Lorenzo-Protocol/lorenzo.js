import { Type, createType } from './types'
import { FlattenPayloadResponse, payloadMsgFieldForIndex } from './flattenPayload'
import { JSONObject, addMsgTypesToRoot } from './message'

export const createBaseTypes = () => ({
    EIP712Domain: [
        { name: 'name', type: 'string' },
        { name: 'version', type: 'string' },
        { name: 'chainId', type: 'uint256' },
        { name: 'verifyingContract', type: 'string' },
        { name: 'salt', type: 'string' },
    ],
    Tx: [
        { name: 'account_number', type: 'string' },
        { name: 'chain_id', type: 'string' },
        { name: 'fee', type: 'Fee' },
        { name: 'memo', type: 'string' },
        { name: 'sequence', type: 'string' },
    ],
    Fee: [
        { name: 'amount', type: 'Coin[]' },
        { name: 'gas', type: 'string' },
    ],
    Coin: [
        { name: 'denom', type: 'string' },
        { name: 'amount', type: 'string' },
    ],
})

export const createTypes = (flattenedPayload: FlattenPayloadResponse) => {
    const { numMessages, payload } = flattenedPayload
    const types = createBaseTypes()

    for (let i = 0; i < numMessages; i++) {
        const key = payloadMsgFieldForIndex(i)
        const msg = payload[key]

        const typedef = addMsgTypesToRoot(types, msg)
        const txType = createType(key, typedef)
        addMsgTypedef(types, txType)
    }

    return types as JSONObject
}


const addMsgTypedef = (types: JSONObject, newType: Type) => {
    types.Tx.push(newType)
}

