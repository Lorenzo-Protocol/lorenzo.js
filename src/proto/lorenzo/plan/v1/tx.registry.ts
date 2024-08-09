//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgUpgradePlan, MsgCreatePlan, MsgSetMerkleRoot, MsgClaims, MsgUpdatePlanStatus, MsgCreateYAT, MsgSetMinter, MsgRemoveMinter } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/lorenzo.plan.v1.MsgUpdateParams", MsgUpdateParams], ["/lorenzo.plan.v1.MsgUpgradePlan", MsgUpgradePlan], ["/lorenzo.plan.v1.MsgCreatePlan", MsgCreatePlan], ["/lorenzo.plan.v1.MsgSetMerkleRoot", MsgSetMerkleRoot], ["/lorenzo.plan.v1.MsgClaims", MsgClaims], ["/lorenzo.plan.v1.MsgUpdatePlanStatus", MsgUpdatePlanStatus], ["/lorenzo.plan.v1.MsgCreateYAT", MsgCreateYAT], ["/lorenzo.plan.v1.MsgSetMinter", MsgSetMinter], ["/lorenzo.plan.v1.MsgRemoveMinter", MsgRemoveMinter]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/lorenzo.plan.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    upgradePlan(value: MsgUpgradePlan) {
      return {
        typeUrl: "/lorenzo.plan.v1.MsgUpgradePlan",
        value: MsgUpgradePlan.encode(value).finish()
      };
    },
    createPlan(value: MsgCreatePlan) {
      return {
        typeUrl: "/lorenzo.plan.v1.MsgCreatePlan",
        value: MsgCreatePlan.encode(value).finish()
      };
    },
    setMerkleRoot(value: MsgSetMerkleRoot) {
      return {
        typeUrl: "/lorenzo.plan.v1.MsgSetMerkleRoot",
        value: MsgSetMerkleRoot.encode(value).finish()
      };
    },
    claims(value: MsgClaims) {
      return {
        typeUrl: "/lorenzo.plan.v1.MsgClaims",
        value: MsgClaims.encode(value).finish()
      };
    },
    updatePlanStatus(value: MsgUpdatePlanStatus) {
      return {
        typeUrl: "/lorenzo.plan.v1.MsgUpdatePlanStatus",
        value: MsgUpdatePlanStatus.encode(value).finish()
      };
    },
    createYAT(value: MsgCreateYAT) {
      return {
        typeUrl: "/lorenzo.plan.v1.MsgCreateYAT",
        value: MsgCreateYAT.encode(value).finish()
      };
    },
    setMinter(value: MsgSetMinter) {
      return {
        typeUrl: "/lorenzo.plan.v1.MsgSetMinter",
        value: MsgSetMinter.encode(value).finish()
      };
    },
    removeMinter(value: MsgRemoveMinter) {
      return {
        typeUrl: "/lorenzo.plan.v1.MsgRemoveMinter",
        value: MsgRemoveMinter.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/lorenzo.plan.v1.MsgUpdateParams",
        value
      };
    },
    upgradePlan(value: MsgUpgradePlan) {
      return {
        typeUrl: "/lorenzo.plan.v1.MsgUpgradePlan",
        value
      };
    },
    createPlan(value: MsgCreatePlan) {
      return {
        typeUrl: "/lorenzo.plan.v1.MsgCreatePlan",
        value
      };
    },
    setMerkleRoot(value: MsgSetMerkleRoot) {
      return {
        typeUrl: "/lorenzo.plan.v1.MsgSetMerkleRoot",
        value
      };
    },
    claims(value: MsgClaims) {
      return {
        typeUrl: "/lorenzo.plan.v1.MsgClaims",
        value
      };
    },
    updatePlanStatus(value: MsgUpdatePlanStatus) {
      return {
        typeUrl: "/lorenzo.plan.v1.MsgUpdatePlanStatus",
        value
      };
    },
    createYAT(value: MsgCreateYAT) {
      return {
        typeUrl: "/lorenzo.plan.v1.MsgCreateYAT",
        value
      };
    },
    setMinter(value: MsgSetMinter) {
      return {
        typeUrl: "/lorenzo.plan.v1.MsgSetMinter",
        value
      };
    },
    removeMinter(value: MsgRemoveMinter) {
      return {
        typeUrl: "/lorenzo.plan.v1.MsgRemoveMinter",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/lorenzo.plan.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    upgradePlan(value: MsgUpgradePlan) {
      return {
        typeUrl: "/lorenzo.plan.v1.MsgUpgradePlan",
        value: MsgUpgradePlan.fromPartial(value)
      };
    },
    createPlan(value: MsgCreatePlan) {
      return {
        typeUrl: "/lorenzo.plan.v1.MsgCreatePlan",
        value: MsgCreatePlan.fromPartial(value)
      };
    },
    setMerkleRoot(value: MsgSetMerkleRoot) {
      return {
        typeUrl: "/lorenzo.plan.v1.MsgSetMerkleRoot",
        value: MsgSetMerkleRoot.fromPartial(value)
      };
    },
    claims(value: MsgClaims) {
      return {
        typeUrl: "/lorenzo.plan.v1.MsgClaims",
        value: MsgClaims.fromPartial(value)
      };
    },
    updatePlanStatus(value: MsgUpdatePlanStatus) {
      return {
        typeUrl: "/lorenzo.plan.v1.MsgUpdatePlanStatus",
        value: MsgUpdatePlanStatus.fromPartial(value)
      };
    },
    createYAT(value: MsgCreateYAT) {
      return {
        typeUrl: "/lorenzo.plan.v1.MsgCreateYAT",
        value: MsgCreateYAT.fromPartial(value)
      };
    },
    setMinter(value: MsgSetMinter) {
      return {
        typeUrl: "/lorenzo.plan.v1.MsgSetMinter",
        value: MsgSetMinter.fromPartial(value)
      };
    },
    removeMinter(value: MsgRemoveMinter) {
      return {
        typeUrl: "/lorenzo.plan.v1.MsgRemoveMinter",
        value: MsgRemoveMinter.fromPartial(value)
      };
    }
  }
};