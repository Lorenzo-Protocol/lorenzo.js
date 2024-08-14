import { SignTypedDataVersion, TypedDataUtils } from '@metamask/eth-sig-util'

import '../index'

export function typedDataAndHash(typedData: any ) {
    try {
        const domainSeparator = TypedDataUtils.hashStruct(
            'EIP712Domain',
            typedData.domain,
            typedData.types,
            SignTypedDataVersion.V4,
        )
        const typedDataHash = TypedDataUtils.hashStruct(
            typedData.primaryType,
            typedData.message as Record<string, unknown>,
            typedData.types,
            SignTypedDataVersion.V4,
        )

        const prefix = new Uint8Array([0x19, 0x01]);
        const rawData = new Uint8Array(prefix.length + domainSeparator.length + typedDataHash.length);
        rawData.set(prefix, 0);
        rawData.set(domainSeparator, prefix.length);
        rawData.set(typedDataHash, prefix.length + domainSeparator.length);

        return rawData
    } catch (e) {
        throw new Error(`Could not hash EIP-712 object: ${e}`)
    }
}