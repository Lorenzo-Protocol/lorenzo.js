//@ts-nocheck
import * as _149 from "./agent/v1/agent";
import * as _150 from "./agent/v1/event";
import * as _151 from "./agent/v1/genesis";
import * as _152 from "./agent/v1/params";
import * as _153 from "./agent/v1/query";
import * as _154 from "./agent/v1/tx";
import * as _155 from "./bnblightclient/v1/client";
import * as _156 from "./bnblightclient/v1/genesis";
import * as _157 from "./bnblightclient/v1/params";
import * as _158 from "./bnblightclient/v1/query";
import * as _159 from "./bnblightclient/v1/tx";
import * as _160 from "./btclightclient/v1/btclightclient";
import * as _161 from "./btclightclient/v1/event";
import * as _162 from "./btclightclient/v1/genesis";
import * as _163 from "./btclightclient/v1/params";
import * as _164 from "./btclightclient/v1/query";
import * as _165 from "./btclightclient/v1/tx";
import * as _166 from "./btcstaking/v1/event";
import * as _167 from "./btcstaking/v1/genesis";
import * as _168 from "./btcstaking/v1/params";
import * as _169 from "./btcstaking/v1/query";
import * as _170 from "./btcstaking/v1/staking_record";
import * as _171 from "./btcstaking/v1/tx";
import * as _172 from "./fee/v1/genesis";
import * as _173 from "./fee/v1/params";
import * as _174 from "./fee/v1/query";
import * as _175 from "./fee/v1/tx";
import * as _176 from "./plan/v1/genesis";
import * as _177 from "./plan/v1/params";
import * as _178 from "./plan/v1/plan";
import * as _179 from "./plan/v1/query";
import * as _180 from "./plan/v1/tx";
import * as _181 from "./token/v1/events";
import * as _182 from "./token/v1/genesis";
import * as _183 from "./token/v1/query";
import * as _184 from "./token/v1/token";
import * as _185 from "./token/v1/tx";
import * as _299 from "./agent/v1/tx.amino";
import * as _300 from "./bnblightclient/v1/tx.amino";
import * as _301 from "./btclightclient/v1/tx.amino";
import * as _302 from "./btcstaking/v1/tx.amino";
import * as _303 from "./fee/v1/tx.amino";
import * as _304 from "./plan/v1/tx.amino";
import * as _305 from "./token/v1/tx.amino";
import * as _306 from "./agent/v1/tx.registry";
import * as _307 from "./bnblightclient/v1/tx.registry";
import * as _308 from "./btclightclient/v1/tx.registry";
import * as _309 from "./btcstaking/v1/tx.registry";
import * as _310 from "./fee/v1/tx.registry";
import * as _311 from "./plan/v1/tx.registry";
import * as _312 from "./token/v1/tx.registry";
import * as _313 from "./agent/v1/query.lcd";
import * as _314 from "./bnblightclient/v1/query.lcd";
import * as _315 from "./btclightclient/v1/query.lcd";
import * as _316 from "./btcstaking/v1/query.lcd";
import * as _317 from "./fee/v1/query.lcd";
import * as _318 from "./plan/v1/query.lcd";
import * as _319 from "./token/v1/query.lcd";
import * as _320 from "./agent/v1/query.rpc.Query";
import * as _321 from "./bnblightclient/v1/query.rpc.Query";
import * as _322 from "./btclightclient/v1/query.rpc.Query";
import * as _323 from "./btcstaking/v1/query.rpc.Query";
import * as _324 from "./fee/v1/query.rpc.Query";
import * as _325 from "./plan/v1/query.rpc.Query";
import * as _326 from "./token/v1/query.rpc.Query";
import * as _327 from "./agent/v1/tx.rpc.msg";
import * as _328 from "./bnblightclient/v1/tx.rpc.msg";
import * as _329 from "./btclightclient/v1/tx.rpc.msg";
import * as _330 from "./btcstaking/v1/tx.rpc.msg";
import * as _331 from "./fee/v1/tx.rpc.msg";
import * as _332 from "./plan/v1/tx.rpc.msg";
import * as _333 from "./token/v1/tx.rpc.msg";
import * as _340 from "./lcd";
import * as _341 from "./rpc.query";
import * as _342 from "./rpc.tx";
export namespace lorenzo {
  export namespace agent {
    export const v1 = {
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._299,
      ..._306,
      ..._313,
      ..._320,
      ..._327
    };
  }
  export namespace bnblightclient {
    export const v1 = {
      ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._300,
      ..._307,
      ..._314,
      ..._321,
      ..._328
    };
  }
  export namespace btclightclient {
    export const v1 = {
      ..._160,
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._301,
      ..._308,
      ..._315,
      ..._322,
      ..._329
    };
  }
  export namespace btcstaking {
    export const v1 = {
      ..._166,
      ..._167,
      ..._168,
      ..._169,
      ..._170,
      ..._171,
      ..._302,
      ..._309,
      ..._316,
      ..._323,
      ..._330
    };
  }
  export namespace fee {
    export const v1 = {
      ..._172,
      ..._173,
      ..._174,
      ..._175,
      ..._303,
      ..._310,
      ..._317,
      ..._324,
      ..._331
    };
  }
  export namespace plan {
    export const v1 = {
      ..._176,
      ..._177,
      ..._178,
      ..._179,
      ..._180,
      ..._304,
      ..._311,
      ..._318,
      ..._325,
      ..._332
    };
  }
  export namespace token {
    export const v1 = {
      ..._181,
      ..._182,
      ..._183,
      ..._184,
      ..._185,
      ..._305,
      ..._312,
      ..._319,
      ..._326,
      ..._333
    };
  }
  export const ClientFactory = {
    ..._340,
    ..._341,
    ..._342
  };
}