import {
    JsonWriteOptions,
    Message,
    AnyMessage,
} from '@bufbuild/protobuf'

import {
    createDefaultAminoConverters as createDefaultCosmosAminoConverters,
    AminoTypes as AminoTypesClass,
} from '@cosmjs/stargate'

export function createDefaultAminoConverters() {
    return {
        ...createDefaultCosmosAminoConverters(),
    }
}

export const AminoTypes = new AminoTypesClass(createDefaultAminoConverters())

type AnyJSON = any

interface ProtobufObject {
    typeUrl: string
    value: AnyJSON
}

export const AminoJSONOptions: JsonWriteOptions = {
    emitDefaultValues: true,
    enumAsInteger: true,
    useProtoFieldName: true,
}

export function convertProtoMessageToObject<T extends Message<T> = AnyMessage>(
    msg: Message<T>,
): ProtobufObject {
    return {
        typeUrl: `/${msg.getType().typeName}`,
        value: msg.toJson(),
    }
}

export function convertProtoValueToMessage<T extends Message<T> = AnyMessage>(
    protoValue: any,
    ProtoMessage: typeof Message<T>,
): Message<T> {
    return new ProtoMessage().fromJson(protoValue)
}

export function convertProtoValueToDefaultAmino<
    T extends Message<T> = AnyMessage,
>(protoValue: any, ProtoMessage: typeof Message<T>): AnyJSON {
    const protoMessage = convertProtoValueToMessage(protoValue, ProtoMessage)
    return protoMessage.toJson(AminoJSONOptions)
}

export const snakeToCamelCase = (str: string) =>
    str.replace(/_[a-zA-Z]/g, (substr) => substr[1].toUpperCase())

export function convertSnakeKeysToCamel(item: any) {
    if (typeof item !== 'object') {
        return item
    }

    if (Array.isArray(item)) {
        const arrayWithCamel: any[] = []
        item.forEach((el) => {
            arrayWithCamel.push(convertSnakeKeysToCamel(el))
        })
        return arrayWithCamel
    }

    const objectWithCamel: any = {}
    Object.keys(item).forEach((key) => {
        objectWithCamel[snakeToCamelCase(key)] = convertSnakeKeysToCamel(item[key])
    })

    return objectWithCamel
}

export function convertAminoToProtoValue<T extends Message<T> = AnyMessage>(
    aminoValue: any,
    ProtoMessage: typeof Message<T>,
): AnyJSON {
    const protoValue = convertSnakeKeysToCamel(aminoValue)
    const protoMessage = convertProtoValueToMessage(protoValue, ProtoMessage)
    return protoMessage.toJson()
}

export function createAminoConverter<T extends Message<T> = AnyMessage>(
    ProtoMessage: typeof Message<T>,
    aminoType: string,
    toAmino: typeof convertProtoValueToDefaultAmino = convertProtoValueToDefaultAmino,
    fromAmino: typeof convertAminoToProtoValue = convertAminoToProtoValue,
) {
    const protoTypeUrl = `/${new ProtoMessage().getType().typeName}`

    function convertToAmino(protoValue: any) {
        return toAmino(protoValue, ProtoMessage)
    }

    function convertFromAmino(aminoValue: any) {
        return fromAmino(aminoValue, ProtoMessage)
    }

    return {
        [protoTypeUrl]: {
            aminoType,
            toAmino: convertToAmino,
            fromAmino: convertFromAmino,
        },
    }
}
