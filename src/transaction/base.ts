import { Chain,Sender, Fee, TxPayload} from './common'
import { generateFee, generateMessageWithMultipleTransactions,  createEIP712 } from '../eip712'
import { createTypedData} from "../eip712/payload/createTypedData";
import { MessageGenerated } from "./message";
import { createStdFee, createStdSignDocFromProto, createTransactionWithMultipleMessages} from "./transaction";

export interface TxContext {
    chain: Chain
    sender: Sender
    fee: Fee
    memo: string
}

// Payload
export interface EIP712TypedData {
    types: object
    message: object | object[]
}

const wrapTypeToArray = <T>(obj: T | T[]) => {
    return Array.isArray(obj) ? obj : [obj]
}

const createLegacyEIP712Payload = (
    context: TxContext,
    typedData: EIP712TypedData,
) => {
    const { fee, sender, chain, memo } = context

    const feeObject = generateFee(
        fee.amount,
        fee.denom,
        fee.gas,
        sender.accountAddress,
    )

    const payloadMessages = wrapTypeToArray(typedData.message)

    const messages = generateMessageWithMultipleTransactions(
        sender.accountNumber.toString(),
        sender.sequence.toString(),
        chain.cosmosChainId,
        memo,
        feeObject,
        payloadMessages,
    )

    return createEIP712(typedData.types, chain.chainId, messages)
}

const createEIP712TypedData = (
    context: TxContext,
    protoMsgs: MessageGenerated | MessageGenerated[],
) => {
    const { fee, sender, chain, memo } = context
    const protoMsgsArray = wrapTypeToArray(protoMsgs)

    try {
        const stdFee = createStdFee(fee.amount, fee.denom, parseInt(fee.gas, 10))
        const stdSignDoc = createStdSignDocFromProto(
            protoMsgsArray,
            stdFee,
            chain.cosmosChainId,
            memo,
            sender.sequence,
            sender.accountNumber,
        )

        return createTypedData(chain.chainId, stdSignDoc)
    } catch {
        return undefined
    }
}

const createCosmosPayload = (
    context: TxContext,
    cosmosPayload: any | any[], // TODO: re-export Protobuf Message type from /proto
) => {
    const { fee, sender, chain, memo } = context

    const messages = wrapTypeToArray(cosmosPayload)

    return createTransactionWithMultipleMessages(
        messages,
        memo,
        fee.amount,
        fee.denom,
        parseInt(fee.gas, 10),
        'ethsecp256',
        sender.pubkey,
        sender.sequence,
        sender.accountNumber,
        chain.cosmosChainId,
    )
}

export const createTransactionPayload = (
    context: TxContext,
    typedData: EIP712TypedData,
    cosmosMessage: any, // TODO: re-export Protobuf Message type from /proto
): TxPayload => {
    const eip712Payload = createLegacyEIP712Payload(context, typedData)

    const cosmosPayload = createCosmosPayload(context, cosmosMessage)

    return {
        signDirect: cosmosPayload.signDirect,
        legacyAmino: cosmosPayload.legacyAmino,
        eipToSign: eip712Payload,
    }
}

export const newCreateTransactionPayload = (
    context: TxContext,
    messages: MessageGenerated | MessageGenerated[],
) => {
    const cosmosPayload = createCosmosPayload(context, messages)
    const eip712Payload = createEIP712TypedData(context, messages)

    return {
        signDirect: cosmosPayload.signDirect,
        legacyAmino: cosmosPayload.legacyAmino,
        eipToSign: eip712Payload,
    }
}
