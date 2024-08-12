//@ts-nocheck
import * as _149 from "./agent/v1/agent";
import * as _150 from "./agent/v1/event";
import * as _151 from "./agent/v1/genesis";
import * as _152 from "./agent/v1/params";
import * as _153 from "./agent/v1/query";
import * as _154 from "./agent/v1/tx";
import * as _155 from "./btclightclient/v1/btclightclient";
import * as _156 from "./btclightclient/v1/event";
import * as _157 from "./btclightclient/v1/genesis";
import * as _158 from "./btclightclient/v1/params";
import * as _159 from "./btclightclient/v1/query";
import * as _160 from "./btclightclient/v1/tx";
import * as _161 from "./btcstaking/v1/event";
import * as _162 from "./btcstaking/v1/genesis";
import * as _163 from "./btcstaking/v1/params";
import * as _164 from "./btcstaking/v1/query";
import * as _165 from "./btcstaking/v1/staking_record";
import * as _166 from "./btcstaking/v1/tx";
import * as _167 from "./fee/v1/genesis";
import * as _168 from "./fee/v1/params";
import * as _169 from "./fee/v1/query";
import * as _170 from "./fee/v1/tx";
import * as _171 from "./plan/v1/genesis";
import * as _172 from "./plan/v1/params";
import * as _173 from "./plan/v1/plan";
import * as _174 from "./plan/v1/query";
import * as _175 from "./plan/v1/tx";
import * as _176 from "./token/v1/events";
import * as _177 from "./token/v1/genesis";
import * as _178 from "./token/v1/query";
import * as _179 from "./token/v1/token";
import * as _180 from "./token/v1/tx";
import * as _294 from "./agent/v1/tx.amino";
import * as _295 from "./btclightclient/v1/tx.amino";
import * as _296 from "./btcstaking/v1/tx.amino";
import * as _297 from "./fee/v1/tx.amino";
import * as _298 from "./plan/v1/tx.amino";
import * as _299 from "./token/v1/tx.amino";
import * as _300 from "./agent/v1/tx.registry";
import * as _301 from "./btclightclient/v1/tx.registry";
import * as _302 from "./btcstaking/v1/tx.registry";
import * as _303 from "./fee/v1/tx.registry";
import * as _304 from "./plan/v1/tx.registry";
import * as _305 from "./token/v1/tx.registry";
import * as _306 from "./agent/v1/query.lcd";
import * as _307 from "./btclightclient/v1/query.lcd";
import * as _308 from "./btcstaking/v1/query.lcd";
import * as _309 from "./fee/v1/query.lcd";
import * as _310 from "./plan/v1/query.lcd";
import * as _311 from "./token/v1/query.lcd";
import * as _312 from "./agent/v1/query.rpc.Query";
import * as _313 from "./btclightclient/v1/query.rpc.Query";
import * as _314 from "./btcstaking/v1/query.rpc.Query";
import * as _315 from "./fee/v1/query.rpc.Query";
import * as _316 from "./plan/v1/query.rpc.Query";
import * as _317 from "./token/v1/query.rpc.Query";
import * as _318 from "./agent/v1/tx.rpc.msg";
import * as _319 from "./btclightclient/v1/tx.rpc.msg";
import * as _320 from "./btcstaking/v1/tx.rpc.msg";
import * as _321 from "./fee/v1/tx.rpc.msg";
import * as _322 from "./plan/v1/tx.rpc.msg";
import * as _323 from "./token/v1/tx.rpc.msg";
import * as _330 from "./lcd";
import * as _331 from "./rpc.query";
import * as _332 from "./rpc.tx";
export namespace lorenzo {
  export namespace agent {
    export const v1 = {
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._294,
      ..._300,
      ..._306,
      ..._312,
      ..._318
    };
  }
  export namespace btclightclient {
    export const v1 = {
      ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._295,
      ..._301,
      ..._307,
      ..._313,
      ..._319
    };
  }
  export namespace btcstaking {
    export const v1 = {
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._166,
      ..._296,
      ..._302,
      ..._308,
      ..._314,
      ..._320
    };
  }
  export namespace fee {
    export const v1 = {
      ..._167,
      ..._168,
      ..._169,
      ..._170,
      ..._297,
      ..._303,
      ..._309,
      ..._315,
      ..._321
    };
  }
  export namespace plan {
    export const v1 = {
      ..._171,
      ..._172,
      ..._173,
      ..._174,
      ..._175,
      ..._298,
      ..._304,
      ..._310,
      ..._316,
      ..._322
    };
  }
  export namespace token {
    export const v1 = {
      ..._176,
      ..._177,
      ..._178,
      ..._179,
      ..._180,
      ..._299,
      ..._305,
      ..._311,
      ..._317,
      ..._323
    };
  }
  export const ClientFactory = {
    ..._330,
    ..._331,
    ..._332
  };
}