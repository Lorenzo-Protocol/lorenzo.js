import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterCoin, MsgRegisterERC20, MsgToggleConversion, MsgConvertCoin, MsgConvertERC20, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/lorenzo.token.v1.MsgRegisterCoin", MsgRegisterCoin], ["/lorenzo.token.v1.MsgRegisterERC20", MsgRegisterERC20], ["/lorenzo.token.v1.MsgToggleConversion", MsgToggleConversion], ["/lorenzo.token.v1.MsgConvertCoin", MsgConvertCoin], ["/lorenzo.token.v1.MsgConvertERC20", MsgConvertERC20], ["/lorenzo.token.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerCoin(value: MsgRegisterCoin) {
      return {
        typeUrl: "/lorenzo.token.v1.MsgRegisterCoin",
        value: MsgRegisterCoin.encode(value).finish()
      };
    },
    registerERC20(value: MsgRegisterERC20) {
      return {
        typeUrl: "/lorenzo.token.v1.MsgRegisterERC20",
        value: MsgRegisterERC20.encode(value).finish()
      };
    },
    toggleConversion(value: MsgToggleConversion) {
      return {
        typeUrl: "/lorenzo.token.v1.MsgToggleConversion",
        value: MsgToggleConversion.encode(value).finish()
      };
    },
    convertCoin(value: MsgConvertCoin) {
      return {
        typeUrl: "/lorenzo.token.v1.MsgConvertCoin",
        value: MsgConvertCoin.encode(value).finish()
      };
    },
    convertERC20(value: MsgConvertERC20) {
      return {
        typeUrl: "/lorenzo.token.v1.MsgConvertERC20",
        value: MsgConvertERC20.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/lorenzo.token.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerCoin(value: MsgRegisterCoin) {
      return {
        typeUrl: "/lorenzo.token.v1.MsgRegisterCoin",
        value
      };
    },
    registerERC20(value: MsgRegisterERC20) {
      return {
        typeUrl: "/lorenzo.token.v1.MsgRegisterERC20",
        value
      };
    },
    toggleConversion(value: MsgToggleConversion) {
      return {
        typeUrl: "/lorenzo.token.v1.MsgToggleConversion",
        value
      };
    },
    convertCoin(value: MsgConvertCoin) {
      return {
        typeUrl: "/lorenzo.token.v1.MsgConvertCoin",
        value
      };
    },
    convertERC20(value: MsgConvertERC20) {
      return {
        typeUrl: "/lorenzo.token.v1.MsgConvertERC20",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/lorenzo.token.v1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    registerCoin(value: MsgRegisterCoin) {
      return {
        typeUrl: "/lorenzo.token.v1.MsgRegisterCoin",
        value: MsgRegisterCoin.fromPartial(value)
      };
    },
    registerERC20(value: MsgRegisterERC20) {
      return {
        typeUrl: "/lorenzo.token.v1.MsgRegisterERC20",
        value: MsgRegisterERC20.fromPartial(value)
      };
    },
    toggleConversion(value: MsgToggleConversion) {
      return {
        typeUrl: "/lorenzo.token.v1.MsgToggleConversion",
        value: MsgToggleConversion.fromPartial(value)
      };
    },
    convertCoin(value: MsgConvertCoin) {
      return {
        typeUrl: "/lorenzo.token.v1.MsgConvertCoin",
        value: MsgConvertCoin.fromPartial(value)
      };
    },
    convertERC20(value: MsgConvertERC20) {
      return {
        typeUrl: "/lorenzo.token.v1.MsgConvertERC20",
        value: MsgConvertERC20.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/lorenzo.token.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};