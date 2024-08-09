//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryPlansRequest, QueryPlansResponseSDKType, QueryPlanRequest, QueryPlanResponseSDKType, QueryClaimLeafNodeRequest, QueryClaimLeafNodeResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.plans = this.plans.bind(this);
    this.plan = this.plan.bind(this);
    this.claimLeafNode = this.claimLeafNode.bind(this);
  }
  /* Params queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `lorenzo/plan/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Plans queries all plans. */
  async plans(params: QueryPlansRequest = {
    pagination: undefined
  }): Promise<QueryPlansResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `lorenzo/plan/v1/plans`;
    return await this.req.get<QueryPlansResponseSDKType>(endpoint, options);
  }
  /* Plan queries a plan by id. */
  async plan(params: QueryPlanRequest): Promise<QueryPlanResponseSDKType> {
    const endpoint = `lorenzo/plan/v1/plans/${params.id}`;
    return await this.req.get<QueryPlanResponseSDKType>(endpoint);
  }
  /* ClaimLeafNode queries a plan by id. */
  async claimLeafNode(params: QueryClaimLeafNodeRequest): Promise<QueryClaimLeafNodeResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.roundId !== "undefined") {
      options.params.round_id = params.roundId;
    }
    if (typeof params?.leafNode !== "undefined") {
      options.params.leaf_node = params.leafNode;
    }
    const endpoint = `lorenzo/plan/v1/plans/${params.id}/claim-leaf-node`;
    return await this.req.get<QueryClaimLeafNodeResponseSDKType>(endpoint, options);
  }
}