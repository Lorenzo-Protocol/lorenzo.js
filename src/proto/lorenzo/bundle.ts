import * as _134 from "./agent/v1/agent";
import * as _135 from "./agent/v1/event";
import * as _136 from "./agent/v1/genesis";
import * as _137 from "./agent/v1/params";
import * as _138 from "./agent/v1/query";
import * as _139 from "./agent/v1/tx";
import * as _140 from "./btclightclient/v1/btclightclient";
import * as _141 from "./btclightclient/v1/event";
import * as _142 from "./btclightclient/v1/genesis";
import * as _143 from "./btclightclient/v1/params";
import * as _144 from "./btclightclient/v1/query";
import * as _145 from "./btclightclient/v1/tx";
import * as _146 from "./btcstaking/v1/event";
import * as _147 from "./btcstaking/v1/genesis";
import * as _148 from "./btcstaking/v1/params";
import * as _149 from "./btcstaking/v1/query";
import * as _150 from "./btcstaking/v1/staking_record";
import * as _151 from "./btcstaking/v1/tx";
import * as _152 from "./fee/v1/genesis";
import * as _153 from "./fee/v1/params";
import * as _154 from "./fee/v1/query";
import * as _155 from "./fee/v1/tx";
import * as _156 from "./plan/v1/genesis";
import * as _157 from "./plan/v1/params";
import * as _158 from "./plan/v1/plan";
import * as _159 from "./plan/v1/query";
import * as _160 from "./plan/v1/tx";
import * as _161 from "./token/v1/events";
import * as _162 from "./token/v1/genesis";
import * as _163 from "./token/v1/query";
import * as _164 from "./token/v1/token";
import * as _165 from "./token/v1/tx";
import * as _269 from "./agent/v1/tx.amino";
import * as _270 from "./btclightclient/v1/tx.amino";
import * as _271 from "./btcstaking/v1/tx.amino";
import * as _272 from "./fee/v1/tx.amino";
import * as _273 from "./plan/v1/tx.amino";
import * as _274 from "./token/v1/tx.amino";
import * as _275 from "./agent/v1/tx.registry";
import * as _276 from "./btclightclient/v1/tx.registry";
import * as _277 from "./btcstaking/v1/tx.registry";
import * as _278 from "./fee/v1/tx.registry";
import * as _279 from "./plan/v1/tx.registry";
import * as _280 from "./token/v1/tx.registry";
import * as _281 from "./agent/v1/query.lcd";
import * as _282 from "./btclightclient/v1/query.lcd";
import * as _283 from "./btcstaking/v1/query.lcd";
import * as _284 from "./fee/v1/query.lcd";
import * as _285 from "./plan/v1/query.lcd";
import * as _286 from "./token/v1/query.lcd";
import * as _287 from "./agent/v1/query.rpc.Query";
import * as _288 from "./btclightclient/v1/query.rpc.Query";
import * as _289 from "./btcstaking/v1/query.rpc.Query";
import * as _290 from "./fee/v1/query.rpc.Query";
import * as _291 from "./plan/v1/query.rpc.Query";
import * as _292 from "./token/v1/query.rpc.Query";
import * as _293 from "./agent/v1/tx.rpc.msg";
import * as _294 from "./btclightclient/v1/tx.rpc.msg";
import * as _295 from "./btcstaking/v1/tx.rpc.msg";
import * as _296 from "./fee/v1/tx.rpc.msg";
import * as _297 from "./plan/v1/tx.rpc.msg";
import * as _298 from "./token/v1/tx.rpc.msg";
import * as _302 from "./lcd";
import * as _303 from "./rpc.query";
import * as _304 from "./rpc.tx";
export namespace lorenzo {
  export namespace agent {
    export const v1 = {
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._269,
      ..._275,
      ..._281,
      ..._287,
      ..._293
    };
  }
  export namespace btclightclient {
    export const v1 = {
      ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._144,
      ..._145,
      ..._270,
      ..._276,
      ..._282,
      ..._288,
      ..._294
    };
  }
  export namespace btcstaking {
    export const v1 = {
      ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._271,
      ..._277,
      ..._283,
      ..._289,
      ..._295
    };
  }
  export namespace fee {
    export const v1 = {
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._272,
      ..._278,
      ..._284,
      ..._290,
      ..._296
    };
  }
  export namespace plan {
    export const v1 = {
      ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._273,
      ..._279,
      ..._285,
      ..._291,
      ..._297
    };
  }
  export namespace token {
    export const v1 = {
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._274,
      ..._280,
      ..._286,
      ..._292,
      ..._298
    };
  }
  export const ClientFactory = {
    ..._302,
    ..._303,
    ..._304
  };
}