//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryPlansRequest, QueryPlansResponse, QueryPlanRequest, QueryPlanResponse, QueryClaimLeafNodeRequest, QueryClaimLeafNodeResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Plans queries all plans. */
  plans(request?: QueryPlansRequest): Promise<QueryPlansResponse>;
  /** Plan queries a plan by id. */
  plan(request: QueryPlanRequest): Promise<QueryPlanResponse>;
  /** ClaimLeafNode queries a plan by id. */
  claimLeafNode(request: QueryClaimLeafNodeRequest): Promise<QueryClaimLeafNodeResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.plans = this.plans.bind(this);
    this.plan = this.plan.bind(this);
    this.claimLeafNode = this.claimLeafNode.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lorenzo.plan.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  plans(request: QueryPlansRequest = {
    pagination: undefined
  }): Promise<QueryPlansResponse> {
    const data = QueryPlansRequest.encode(request).finish();
    const promise = this.rpc.request("lorenzo.plan.v1.Query", "Plans", data);
    return promise.then(data => QueryPlansResponse.decode(new BinaryReader(data)));
  }
  plan(request: QueryPlanRequest): Promise<QueryPlanResponse> {
    const data = QueryPlanRequest.encode(request).finish();
    const promise = this.rpc.request("lorenzo.plan.v1.Query", "Plan", data);
    return promise.then(data => QueryPlanResponse.decode(new BinaryReader(data)));
  }
  claimLeafNode(request: QueryClaimLeafNodeRequest): Promise<QueryClaimLeafNodeResponse> {
    const data = QueryClaimLeafNodeRequest.encode(request).finish();
    const promise = this.rpc.request("lorenzo.plan.v1.Query", "ClaimLeafNode", data);
    return promise.then(data => QueryClaimLeafNodeResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    plans(request?: QueryPlansRequest): Promise<QueryPlansResponse> {
      return queryService.plans(request);
    },
    plan(request: QueryPlanRequest): Promise<QueryPlanResponse> {
      return queryService.plan(request);
    },
    claimLeafNode(request: QueryClaimLeafNodeRequest): Promise<QueryClaimLeafNodeResponse> {
      return queryService.claimLeafNode(request);
    }
  };
};