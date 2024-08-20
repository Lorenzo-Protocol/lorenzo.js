//@ts-nocheck
import * as _127 from "./crypto/v1/ethsecp256k1/keys";
import * as _128 from "./evm/v1/events";
import * as _129 from "./evm/v1/evm";
import * as _130 from "./evm/v1/genesis";
import * as _131 from "./evm/v1/query";
import * as _132 from "./evm/v1/tx";
import * as _133 from "./feemarket/v1/events";
import * as _134 from "./feemarket/v1/feemarket";
import * as _135 from "./feemarket/v1/genesis";
import * as _136 from "./feemarket/v1/query";
import * as _137 from "./feemarket/v1/tx";
import * as _138 from "./types/v1/account";
import * as _139 from "./types/v1/dynamic_fee";
import * as _140 from "./types/v1/indexer";
import * as _141 from "./types/v1/web3";
import * as _289 from "./evm/v1/tx.amino";
import * as _290 from "./feemarket/v1/tx.amino";
import * as _291 from "./evm/v1/tx.registry";
import * as _292 from "./feemarket/v1/tx.registry";
import * as _293 from "./evm/v1/query.lcd";
import * as _294 from "./feemarket/v1/query.lcd";
import * as _295 from "./evm/v1/query.rpc.Query";
import * as _296 from "./feemarket/v1/query.rpc.Query";
import * as _297 from "./evm/v1/tx.rpc.msg";
import * as _298 from "./feemarket/v1/tx.rpc.msg";
import * as _337 from "./lcd";
import * as _338 from "./rpc.query";
import * as _339 from "./rpc.tx";
export namespace ethermint {
  export namespace crypto {
    export namespace v1 {
      export const ethsecp256k1 = {
        ..._127
      };
    }
  }
  export namespace evm {
    export const v1 = {
      ..._128,
      ..._129,
      ..._130,
      ..._131,
      ..._132,
      ..._289,
      ..._291,
      ..._293,
      ..._295,
      ..._297
    };
  }
  export namespace feemarket {
    export const v1 = {
      ..._133,
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._290,
      ..._292,
      ..._294,
      ..._296,
      ..._298
    };
  }
  export namespace types {
    export const v1 = {
      ..._138,
      ..._139,
      ..._140,
      ..._141
    };
  }
  export const ClientFactory = {
    ..._337,
    ..._338,
    ..._339
  };
}