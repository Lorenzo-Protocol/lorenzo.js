// EIP712Type is inner type of an EIP-712 message.
export interface Type {
    name: string
    type: string
}

export const createType = (name: string, type: string): Type => ({
    name,
    type,
})

// Contract - Types must be in the same sorted order.
export const typesAreEqual = (types1: Type[], types2: Type[]) => {
    if (types1.length !== types2.length) {
        return false
    }

    for (let i = 0; i < types1.length; i++) {
        if (
            types1[i].type !== types2[i].type ||
            types1[i].name !== types2[i].name
        ) {
            return false
        }
    }

    return true
}

// Adjusts the type definition by converting it to an array
// if isArray is true.
export const typeArrayAdjusted = (
    typeDef: string,
    isArray: boolean | undefined,
) => {
    if (isArray) {
        return `${typeDef}[]`
    }
    return typeDef
}

