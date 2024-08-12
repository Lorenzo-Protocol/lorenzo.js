//@ts-nocheck
import * as _2 from "./app/runtime/v1alpha1/module";
import * as _3 from "./app/v1alpha1/config";
import * as _4 from "./app/v1alpha1/module";
import * as _5 from "./app/v1alpha1/query";
import * as _6 from "./auth/module/v1/module";
import * as _7 from "./auth/v1beta1/auth";
import * as _8 from "./auth/v1beta1/genesis";
import * as _9 from "./auth/v1beta1/query";
import * as _10 from "./auth/v1beta1/tx";
import * as _11 from "./authz/module/v1/module";
import * as _12 from "./authz/v1beta1/authz";
import * as _13 from "./authz/v1beta1/event";
import * as _14 from "./authz/v1beta1/genesis";
import * as _15 from "./authz/v1beta1/query";
import * as _16 from "./authz/v1beta1/tx";
import * as _17 from "./autocli/v1/options";
import * as _18 from "./autocli/v1/query";
import * as _19 from "./bank/module/v1/module";
import * as _20 from "./bank/v1beta1/authz";
import * as _21 from "./bank/v1beta1/bank";
import * as _22 from "./bank/v1beta1/genesis";
import * as _23 from "./bank/v1beta1/query";
import * as _24 from "./bank/v1beta1/tx";
import * as _25 from "./base/abci/v1beta1/abci";
import * as _26 from "./base/kv/v1beta1/kv";
import * as _27 from "./base/node/v1beta1/query";
import * as _28 from "./base/query/v1beta1/pagination";
import * as _29 from "./base/reflection/v1beta1/reflection";
import * as _30 from "./base/reflection/v2alpha1/reflection";
import * as _31 from "./base/snapshots/v1beta1/snapshot";
import * as _32 from "./base/store/v1beta1/commit_info";
import * as _33 from "./base/store/v1beta1/listening";
import * as _34 from "./base/tendermint/v1beta1/query";
import * as _35 from "./base/tendermint/v1beta1/types";
import * as _36 from "./base/v1beta1/coin";
import * as _37 from "./capability/module/v1/module";
import * as _38 from "./capability/v1beta1/capability";
import * as _39 from "./capability/v1beta1/genesis";
import * as _40 from "./consensus/module/v1/module";
import * as _41 from "./consensus/v1/query";
import * as _42 from "./consensus/v1/tx";
import * as _43 from "./crisis/module/v1/module";
import * as _44 from "./crisis/v1beta1/genesis";
import * as _45 from "./crisis/v1beta1/tx";
import * as _46 from "./crypto/ed25519/keys";
import * as _47 from "./crypto/hd/v1/hd";
import * as _48 from "./crypto/keyring/v1/record";
import * as _49 from "./crypto/multisig/keys";
import * as _50 from "./crypto/secp256k1/keys";
import * as _51 from "./crypto/secp256r1/keys";
import * as _52 from "./distribution/module/v1/module";
import * as _53 from "./distribution/v1beta1/distribution";
import * as _54 from "./distribution/v1beta1/genesis";
import * as _55 from "./distribution/v1beta1/query";
import * as _56 from "./distribution/v1beta1/tx";
import * as _57 from "./evidence/module/v1/module";
import * as _58 from "./evidence/v1beta1/evidence";
import * as _59 from "./evidence/v1beta1/genesis";
import * as _60 from "./evidence/v1beta1/query";
import * as _61 from "./evidence/v1beta1/tx";
import * as _62 from "./feegrant/module/v1/module";
import * as _63 from "./feegrant/v1beta1/feegrant";
import * as _64 from "./feegrant/v1beta1/genesis";
import * as _65 from "./feegrant/v1beta1/query";
import * as _66 from "./feegrant/v1beta1/tx";
import * as _67 from "./genutil/module/v1/module";
import * as _68 from "./genutil/v1beta1/genesis";
import * as _69 from "./gov/module/v1/module";
import * as _70 from "./gov/v1/genesis";
import * as _71 from "./gov/v1/gov";
import * as _72 from "./gov/v1/query";
import * as _73 from "./gov/v1/tx";
import * as _74 from "./gov/v1beta1/genesis";
import * as _75 from "./gov/v1beta1/gov";
import * as _76 from "./gov/v1beta1/query";
import * as _77 from "./gov/v1beta1/tx";
import * as _78 from "./group/module/v1/module";
import * as _79 from "./group/v1/events";
import * as _80 from "./group/v1/genesis";
import * as _81 from "./group/v1/query";
import * as _82 from "./group/v1/tx";
import * as _83 from "./group/v1/types";
import * as _84 from "./mint/module/v1/module";
import * as _85 from "./mint/v1beta1/genesis";
import * as _86 from "./mint/v1beta1/mint";
import * as _87 from "./mint/v1beta1/query";
import * as _88 from "./mint/v1beta1/tx";
import * as _89 from "./msg/v1/msg";
import * as _90 from "./nft/module/v1/module";
import * as _91 from "./nft/v1beta1/event";
import * as _92 from "./nft/v1beta1/genesis";
import * as _93 from "./nft/v1beta1/nft";
import * as _94 from "./nft/v1beta1/query";
import * as _95 from "./nft/v1beta1/tx";
import * as _96 from "./orm/module/v1alpha1/module";
import * as _97 from "./orm/query/v1alpha1/query";
import * as _98 from "./orm/v1/orm";
import * as _99 from "./orm/v1alpha1/schema";
import * as _100 from "./params/module/v1/module";
import * as _101 from "./params/v1beta1/params";
import * as _102 from "./params/v1beta1/query";
import * as _103 from "./query/v1/query";
import * as _104 from "./reflection/v1/reflection";
import * as _105 from "./slashing/module/v1/module";
import * as _106 from "./slashing/v1beta1/genesis";
import * as _107 from "./slashing/v1beta1/query";
import * as _108 from "./slashing/v1beta1/slashing";
import * as _109 from "./slashing/v1beta1/tx";
import * as _110 from "./staking/module/v1/module";
import * as _111 from "./staking/v1beta1/authz";
import * as _112 from "./staking/v1beta1/genesis";
import * as _113 from "./staking/v1beta1/query";
import * as _114 from "./staking/v1beta1/staking";
import * as _115 from "./staking/v1beta1/tx";
import * as _116 from "./tx/config/v1/config";
import * as _117 from "./tx/signing/v1beta1/signing";
import * as _118 from "./tx/v1beta1/service";
import * as _119 from "./tx/v1beta1/tx";
import * as _120 from "./upgrade/module/v1/module";
import * as _121 from "./upgrade/v1beta1/query";
import * as _122 from "./upgrade/v1beta1/tx";
import * as _123 from "./upgrade/v1beta1/upgrade";
import * as _124 from "./vesting/module/v1/module";
import * as _125 from "./vesting/v1beta1/tx";
import * as _126 from "./vesting/v1beta1/vesting";
import * as _192 from "./auth/v1beta1/tx.amino";
import * as _193 from "./authz/v1beta1/tx.amino";
import * as _194 from "./bank/v1beta1/tx.amino";
import * as _195 from "./consensus/v1/tx.amino";
import * as _196 from "./crisis/v1beta1/tx.amino";
import * as _197 from "./distribution/v1beta1/tx.amino";
import * as _198 from "./evidence/v1beta1/tx.amino";
import * as _199 from "./feegrant/v1beta1/tx.amino";
import * as _200 from "./gov/v1/tx.amino";
import * as _201 from "./gov/v1beta1/tx.amino";
import * as _202 from "./group/v1/tx.amino";
import * as _203 from "./mint/v1beta1/tx.amino";
import * as _204 from "./nft/v1beta1/tx.amino";
import * as _205 from "./slashing/v1beta1/tx.amino";
import * as _206 from "./staking/v1beta1/tx.amino";
import * as _207 from "./upgrade/v1beta1/tx.amino";
import * as _208 from "./vesting/v1beta1/tx.amino";
import * as _209 from "./auth/v1beta1/tx.registry";
import * as _210 from "./authz/v1beta1/tx.registry";
import * as _211 from "./bank/v1beta1/tx.registry";
import * as _212 from "./consensus/v1/tx.registry";
import * as _213 from "./crisis/v1beta1/tx.registry";
import * as _214 from "./distribution/v1beta1/tx.registry";
import * as _215 from "./evidence/v1beta1/tx.registry";
import * as _216 from "./feegrant/v1beta1/tx.registry";
import * as _217 from "./gov/v1/tx.registry";
import * as _218 from "./gov/v1beta1/tx.registry";
import * as _219 from "./group/v1/tx.registry";
import * as _220 from "./mint/v1beta1/tx.registry";
import * as _221 from "./nft/v1beta1/tx.registry";
import * as _222 from "./slashing/v1beta1/tx.registry";
import * as _223 from "./staking/v1beta1/tx.registry";
import * as _224 from "./upgrade/v1beta1/tx.registry";
import * as _225 from "./vesting/v1beta1/tx.registry";
import * as _226 from "./auth/v1beta1/query.lcd";
import * as _227 from "./authz/v1beta1/query.lcd";
import * as _228 from "./bank/v1beta1/query.lcd";
import * as _229 from "./base/node/v1beta1/query.lcd";
import * as _230 from "./base/tendermint/v1beta1/query.lcd";
import * as _231 from "./consensus/v1/query.lcd";
import * as _232 from "./distribution/v1beta1/query.lcd";
import * as _233 from "./evidence/v1beta1/query.lcd";
import * as _234 from "./feegrant/v1beta1/query.lcd";
import * as _235 from "./gov/v1/query.lcd";
import * as _236 from "./gov/v1beta1/query.lcd";
import * as _237 from "./group/v1/query.lcd";
import * as _238 from "./mint/v1beta1/query.lcd";
import * as _239 from "./nft/v1beta1/query.lcd";
import * as _240 from "./params/v1beta1/query.lcd";
import * as _241 from "./slashing/v1beta1/query.lcd";
import * as _242 from "./staking/v1beta1/query.lcd";
import * as _243 from "./tx/v1beta1/service.lcd";
import * as _244 from "./upgrade/v1beta1/query.lcd";
import * as _245 from "./app/v1alpha1/query.rpc.Query";
import * as _246 from "./auth/v1beta1/query.rpc.Query";
import * as _247 from "./authz/v1beta1/query.rpc.Query";
import * as _248 from "./autocli/v1/query.rpc.Query";
import * as _249 from "./bank/v1beta1/query.rpc.Query";
import * as _250 from "./base/node/v1beta1/query.rpc.Service";
import * as _251 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _252 from "./consensus/v1/query.rpc.Query";
import * as _253 from "./distribution/v1beta1/query.rpc.Query";
import * as _254 from "./evidence/v1beta1/query.rpc.Query";
import * as _255 from "./feegrant/v1beta1/query.rpc.Query";
import * as _256 from "./gov/v1/query.rpc.Query";
import * as _257 from "./gov/v1beta1/query.rpc.Query";
import * as _258 from "./group/v1/query.rpc.Query";
import * as _259 from "./mint/v1beta1/query.rpc.Query";
import * as _260 from "./nft/v1beta1/query.rpc.Query";
import * as _261 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _262 from "./params/v1beta1/query.rpc.Query";
import * as _263 from "./slashing/v1beta1/query.rpc.Query";
import * as _264 from "./staking/v1beta1/query.rpc.Query";
import * as _265 from "./tx/v1beta1/service.rpc.Service";
import * as _266 from "./upgrade/v1beta1/query.rpc.Query";
import * as _267 from "./auth/v1beta1/tx.rpc.msg";
import * as _268 from "./authz/v1beta1/tx.rpc.msg";
import * as _269 from "./bank/v1beta1/tx.rpc.msg";
import * as _270 from "./consensus/v1/tx.rpc.msg";
import * as _271 from "./crisis/v1beta1/tx.rpc.msg";
import * as _272 from "./distribution/v1beta1/tx.rpc.msg";
import * as _273 from "./evidence/v1beta1/tx.rpc.msg";
import * as _274 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _275 from "./gov/v1/tx.rpc.msg";
import * as _276 from "./gov/v1beta1/tx.rpc.msg";
import * as _277 from "./group/v1/tx.rpc.msg";
import * as _278 from "./mint/v1beta1/tx.rpc.msg";
import * as _279 from "./nft/v1beta1/tx.rpc.msg";
import * as _280 from "./slashing/v1beta1/tx.rpc.msg";
import * as _281 from "./staking/v1beta1/tx.rpc.msg";
import * as _282 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _283 from "./vesting/v1beta1/tx.rpc.msg";
import * as _324 from "./lcd";
import * as _325 from "./rpc.query";
import * as _326 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._2
      };
    }
    export const v1alpha1 = {
      ..._3,
      ..._4,
      ..._5,
      ..._245
    };
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._6
      };
    }
    export const v1beta1 = {
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._192,
      ..._209,
      ..._226,
      ..._246,
      ..._267
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._11
      };
    }
    export const v1beta1 = {
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._193,
      ..._210,
      ..._227,
      ..._247,
      ..._268
    };
  }
  export namespace autocli {
    export const v1 = {
      ..._17,
      ..._18,
      ..._248
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._19
      };
    }
    export const v1beta1 = {
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._194,
      ..._211,
      ..._228,
      ..._249,
      ..._269
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._25
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._26
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._27,
        ..._229,
        ..._250
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._28
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._29
      };
      export const v2alpha1 = {
        ..._30
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._31
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._32,
        ..._33
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._34,
        ..._35,
        ..._230,
        ..._251
      };
    }
    export const v1beta1 = {
      ..._36
    };
  }
  export namespace capability {
    export namespace module {
      export const v1 = {
        ..._37
      };
    }
    export const v1beta1 = {
      ..._38,
      ..._39
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._40
      };
    }
    export const v1 = {
      ..._41,
      ..._42,
      ..._195,
      ..._212,
      ..._231,
      ..._252,
      ..._270
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._43
      };
    }
    export const v1beta1 = {
      ..._44,
      ..._45,
      ..._196,
      ..._213,
      ..._271
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._46
    };
    export namespace hd {
      export const v1 = {
        ..._47
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._48
      };
    }
    export const multisig = {
      ..._49
    };
    export const secp256k1 = {
      ..._50
    };
    export const secp256r1 = {
      ..._51
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._52
      };
    }
    export const v1beta1 = {
      ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._197,
      ..._214,
      ..._232,
      ..._253,
      ..._272
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._57
      };
    }
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._198,
      ..._215,
      ..._233,
      ..._254,
      ..._273
    };
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._62
      };
    }
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._199,
      ..._216,
      ..._234,
      ..._255,
      ..._274
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._67
      };
    }
    export const v1beta1 = {
      ..._68
    };
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._69
      };
    }
    export const v1 = {
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._200,
      ..._217,
      ..._235,
      ..._256,
      ..._275
    };
    export const v1beta1 = {
      ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._201,
      ..._218,
      ..._236,
      ..._257,
      ..._276
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._78
      };
    }
    export const v1 = {
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._202,
      ..._219,
      ..._237,
      ..._258,
      ..._277
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._84
      };
    }
    export const v1beta1 = {
      ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._203,
      ..._220,
      ..._238,
      ..._259,
      ..._278
    };
  }
  export namespace msg {
    export const v1 = {
      ..._89
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._90
      };
    }
    export const v1beta1 = {
      ..._91,
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._204,
      ..._221,
      ..._239,
      ..._260,
      ..._279
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._96
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._97,
        ..._261
      };
    }
    export const v1 = {
      ..._98
    };
    export const v1alpha1 = {
      ..._99
    };
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._100
      };
    }
    export const v1beta1 = {
      ..._101,
      ..._102,
      ..._240,
      ..._262
    };
  }
  export namespace query {
    export const v1 = {
      ..._103
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._104
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._105
      };
    }
    export const v1beta1 = {
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._205,
      ..._222,
      ..._241,
      ..._263,
      ..._280
    };
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._110
      };
    }
    export const v1beta1 = {
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._206,
      ..._223,
      ..._242,
      ..._264,
      ..._281
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._116
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._117
      };
    }
    export const v1beta1 = {
      ..._118,
      ..._119,
      ..._243,
      ..._265
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._120
      };
    }
    export const v1beta1 = {
      ..._121,
      ..._122,
      ..._123,
      ..._207,
      ..._224,
      ..._244,
      ..._266,
      ..._282
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._124
      };
    }
    export const v1beta1 = {
      ..._125,
      ..._126,
      ..._208,
      ..._225,
      ..._283
    };
  }
  export const ClientFactory = {
    ..._324,
    ..._325,
    ..._326
  };
}