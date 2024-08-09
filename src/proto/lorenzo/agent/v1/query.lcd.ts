//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAgentsRequest, QueryAgentsResponseSDKType, QueryAgentRequest, QueryAgentResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.agents = this.agents.bind(this);
    this.agent = this.agent.bind(this);
  }
  /* Params queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `lorenzo/plan/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Agent queries all agents */
  async agents(params: QueryAgentsRequest = {
    pagination: undefined
  }): Promise<QueryAgentsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `lorenzo/agent/v1/agents`;
    return await this.req.get<QueryAgentsResponseSDKType>(endpoint, options);
  }
  /* Agent queries the agent of the specified escrow_address */
  async agent(params: QueryAgentRequest): Promise<QueryAgentResponseSDKType> {
    const endpoint = `lorenzo/agent/v1/agents/${params.id}`;
    return await this.req.get<QueryAgentResponseSDKType>(endpoint);
  }
}