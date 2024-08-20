import { GlobalDecoderRegistry } from "../../telescope/";

describe('convertMessagesToAmino', () => {
    it('convert BurnRequest to Amino', () => {
        const testAny: any[] = [
            {
                typeUrl: '/lorenzo.btcstaking.v1.MsgBurnRequest',
                value: new Uint8Array([
                    10,  42, 108, 114, 122,  49, 114, 112, 112, 107,  54, 106,
                    114,  97, 103, 101,  50,  55, 119, 120, 102,  57, 115, 109,
                    121, 107,  57,  51, 121, 115,  53, 109, 107, 100, 107, 121,
                    101,  50, 104, 115, 122, 119,  52, 100,  18,  42, 116,  98,
                    49, 113, 108, 113, 118, 119,  99,  48, 119, 119, 122,  57,
                    50,  57,  53,  52,  54, 118,  56, 102,  57, 108, 109, 104,
                    115, 103, 113, 104, 107, 104, 112, 110, 106,  50, 107, 108,
                    102, 102, 104,  50,  26,   3,  49,  48,  48
                ])
            }
        ];

        const result = convertMessagesToAmino(testAny);
        console.log(result);
    });

    it('convert MsgSend to Amino', () => {
        const testAny: any[] = [
            {
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: new Uint8Array ([
                    10,  42, 108, 114, 122,  49, 114, 112, 112, 107,  54, 106,
                    114,  97, 103, 101,  50,  55, 119, 120, 102,  57, 115, 109,
                    121, 107,  57,  51, 121, 115,  53, 109, 107, 100, 107, 121,
                    101,  50, 104, 115, 122, 119,  52, 100,  18,  42, 108, 114,
                    122,  49,  52,  52, 121, 115, 109, 119,  97, 108, 121, 108,
                    112, 106, 117,  57, 121, 117, 112, 108, 102, 104,  50,  97,
                    57,  48,  48, 112, 117, 103, 118,  53, 108, 121, 106, 107,
                    102, 107, 114, 112,  26,  10,  10,   5, 115, 116,  66,  84,
                    67,  18,   1,  49
                ])
            }
        ]

        const result = convertMessagesToAmino(testAny);
        console.log(result);
    });
});

function convertMessagesToAmino(messages: any[]): any[] {
    return messages.map((msg) => {
        const decodedMsg = GlobalDecoderRegistry.unwrapAny(msg);
        return GlobalDecoderRegistry.toAminoMsg(decodedMsg);
    });
}