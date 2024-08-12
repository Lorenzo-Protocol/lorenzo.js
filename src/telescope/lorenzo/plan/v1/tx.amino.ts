//@ts-nocheck
import { MsgUpdateParams, MsgUpgradePlan, MsgCreatePlan, MsgSetMerkleRoot, MsgClaims, MsgUpdatePlanStatus, MsgCreateYAT, MsgSetMinter, MsgRemoveMinter } from "./tx";
export const AminoConverter = {
  "/lorenzo.plan.v1.MsgUpdateParams": {
    aminoType: "/lorenzo.plan.v1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/lorenzo.plan.v1.MsgUpgradePlan": {
    aminoType: "/lorenzo.plan.v1.MsgUpgradePlan",
    toAmino: MsgUpgradePlan.toAmino,
    fromAmino: MsgUpgradePlan.fromAmino
  },
  "/lorenzo.plan.v1.MsgCreatePlan": {
    aminoType: "/lorenzo.plan.v1.MsgCreatePlan",
    toAmino: MsgCreatePlan.toAmino,
    fromAmino: MsgCreatePlan.fromAmino
  },
  "/lorenzo.plan.v1.MsgSetMerkleRoot": {
    aminoType: "/lorenzo.plan.v1.MsgSetMerkleRoot",
    toAmino: MsgSetMerkleRoot.toAmino,
    fromAmino: MsgSetMerkleRoot.fromAmino
  },
  "/lorenzo.plan.v1.MsgClaims": {
    aminoType: "/lorenzo.plan.v1.MsgClaims",
    toAmino: MsgClaims.toAmino,
    fromAmino: MsgClaims.fromAmino
  },
  "/lorenzo.plan.v1.MsgUpdatePlanStatus": {
    aminoType: "/lorenzo.plan.v1.MsgUpdatePlanStatus",
    toAmino: MsgUpdatePlanStatus.toAmino,
    fromAmino: MsgUpdatePlanStatus.fromAmino
  },
  "/lorenzo.plan.v1.MsgCreateYAT": {
    aminoType: "/lorenzo.plan.v1.MsgCreateYAT",
    toAmino: MsgCreateYAT.toAmino,
    fromAmino: MsgCreateYAT.fromAmino
  },
  "/lorenzo.plan.v1.MsgSetMinter": {
    aminoType: "/lorenzo.plan.v1.MsgSetMinter",
    toAmino: MsgSetMinter.toAmino,
    fromAmino: MsgSetMinter.fromAmino
  },
  "/lorenzo.plan.v1.MsgRemoveMinter": {
    aminoType: "/lorenzo.plan.v1.MsgRemoveMinter",
    toAmino: MsgRemoveMinter.toAmino,
    fromAmino: MsgRemoveMinter.fromAmino
  }
};