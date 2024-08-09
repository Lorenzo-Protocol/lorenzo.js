import { join } from 'path';
import { sync as rimraf } from 'rimraf';
import telescope from '@cosmology/telescope';

const protoDirs = [join(__dirname, '/../proto')];
const outPath = join(__dirname, '/../src/proto');
rimraf(outPath);

telescope({
    protoDirs,
    outPath,

    options: {
        prototypes: {
            addTypeUrlToDecoders: true,
            addTypeUrlToObjects: true,
            excluded: {
                hardProtos: [
                    // SINCE: lorenzo-v2.0.0-rc2
                    'lorenzo/plan/v1/event.proto', // empty proto so excluded!
                ]
            },
            methods: {
                fromJSON: false,
                toJSON: false,

                encode: true,
                decode: true,
                fromPartial: true,

                toSDK: true,
                fromSDK: true,

                toAmino: true,
                fromAmino: true,
            },
            parser: {
                keepCase: false
            },
            typingsFormat: {
                duration: 'duration',
                timestamp: 'date',
                useExact: false,
                useDeepPartial: false,
                num64: 'bigint',
                customTypes: {
                    useCosmosSDKDec: true
                }
            }
        },
        aminoEncoding: {
            enabled: true,
        },
        lcdClients: {
            enabled: true
        },
        rpcClients: {
            enabled: true,
            camelCase: true,
            useConnectComet: true
        }
    }
})
    .then(() => {
        console.log('✨ all done!');
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
