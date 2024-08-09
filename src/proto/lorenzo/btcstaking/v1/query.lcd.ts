import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryStakingRecordRequest, QueryStakingRecordResponseSDKType } from "./query";
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
}