//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryStakingRecordRequest, QueryStakingRecordResponseSDKType, QueryBTCBStakingRecordRequest, QueryBTCBStakingRecordResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.stakingRecord = this.stakingRecord.bind(this);
    this.bTCBStakingRecord = this.bTCBStakingRecord.bind(this);
  }
  /* Params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `lorenzo/btcstaking/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* StakingRecord */
  async stakingRecord(params: QueryStakingRecordRequest): Promise<QueryStakingRecordResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.txHash !== "undefined") {
      options.params.txHash = params.txHash;
    }
    const endpoint = `lorenzo/btcstaking/v1/stakingRecord`;
    return await this.req.get<QueryStakingRecordResponseSDKType>(endpoint, options);
  }
  /* BTCBStakingRecord */
  async bTCBStakingRecord(params: QueryBTCBStakingRecordRequest): Promise<QueryBTCBStakingRecordResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.chainId !== "undefined") {
      options.params.chain_id = params.chainId;
    }
    if (typeof params?.contract !== "undefined") {
      options.params.contract = params.contract;
    }
    if (typeof params?.stakingIdx !== "undefined") {
      options.params.staking_idx = params.stakingIdx;
    }
    const endpoint = `lorenzo/btcstaking/v1/btcb-staking-record`;
    return await this.req.get<QueryBTCBStakingRecordResponseSDKType>(endpoint, options);
  }
}