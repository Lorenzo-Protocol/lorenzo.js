//@ts-nocheck
import { MsgUpdateParams, MsgUpgradePlan, MsgCreatePlan, MsgSetMerkleRoot, MsgClaims, MsgUpdatePlanStatus, MsgCreateYAT, MsgSetMinter, MsgRemoveMinter } from "./tx";
export const AminoConverter = {
  "/lorenzo.plan.v1.MsgUpdateParams": {
    aminoType: "lorenzo/plan/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/lorenzo.plan.v1.MsgUpgradePlan": {
    aminoType: "lorenzo/plan/MsgUpgradePlan",
    toAmino: MsgUpgradePlan.toAmino,
    fromAmino: MsgUpgradePlan.fromAmino
  },
  "/lorenzo.plan.v1.MsgCreatePlan": {
    aminoType: "lorenzo/plan/MsgCreatePlan",
    toAmino: MsgCreatePlan.toAmino,
    fromAmino: MsgCreatePlan.fromAmino
  },
  "/lorenzo.plan.v1.MsgSetMerkleRoot": {
    aminoType: "lorenzo/plan/MsgSetMerkleRoot",
    toAmino: MsgSetMerkleRoot.toAmino,
    fromAmino: MsgSetMerkleRoot.fromAmino
  },
  "/lorenzo.plan.v1.MsgClaims": {
    aminoType: "lorenzo/plan/MsgClaims",
    toAmino: MsgClaims.toAmino,
    fromAmino: MsgClaims.fromAmino
  },
  "/lorenzo.plan.v1.MsgUpdatePlanStatus": {
    aminoType: "lorenzo/plan/MsgUpdatePlanStatus",
    toAmino: MsgUpdatePlanStatus.toAmino,
    fromAmino: MsgUpdatePlanStatus.fromAmino
  },
  "/lorenzo.plan.v1.MsgCreateYAT": {
    aminoType: "lorenzo/plan/MsgCreateYAT",
    toAmino: MsgCreateYAT.toAmino,
    fromAmino: MsgCreateYAT.fromAmino
  },
  "/lorenzo.plan.v1.MsgSetMinter": {
    aminoType: "lorenzo/plan/MsgSetMinter",
    toAmino: MsgSetMinter.toAmino,
    fromAmino: MsgSetMinter.fromAmino
  },
  "/lorenzo.plan.v1.MsgRemoveMinter": {
    aminoType: "lorenzo/plan/MsgRemoveMinter",
    toAmino: MsgRemoveMinter.toAmino,
    fromAmino: MsgRemoveMinter.fromAmino
  }
};