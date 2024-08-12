//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryAgentsRequest, QueryAgentsResponse, QueryAgentRequest, QueryAgentResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Agent queries all agents */
  agents(request?: QueryAgentsRequest): Promise<QueryAgentsResponse>;
  /** Agent queries the agent of the specified escrow_address */
  agent(request: QueryAgentRequest): Promise<QueryAgentResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.agents = this.agents.bind(this);
    this.agent = this.agent.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lorenzo.agent.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  agents(request: QueryAgentsRequest = {
    pagination: undefined
  }): Promise<QueryAgentsResponse> {
    const data = QueryAgentsRequest.encode(request).finish();
    const promise = this.rpc.request("lorenzo.agent.v1.Query", "Agents", data);
    return promise.then(data => QueryAgentsResponse.decode(new BinaryReader(data)));
  }
  agent(request: QueryAgentRequest): Promise<QueryAgentResponse> {
    const data = QueryAgentRequest.encode(request).finish();
    const promise = this.rpc.request("lorenzo.agent.v1.Query", "Agent", data);
    return promise.then(data => QueryAgentResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    agents(request?: QueryAgentsRequest): Promise<QueryAgentsResponse> {
      return queryService.agents(request);
    },
    agent(request: QueryAgentRequest): Promise<QueryAgentResponse> {
      return queryService.agent(request);
    }
  };
};