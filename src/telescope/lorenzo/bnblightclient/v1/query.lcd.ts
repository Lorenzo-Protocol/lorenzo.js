//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryHeaderRequest, QueryHeaderResponseSDKType, QueryHeaderByHashRequest, QueryHeaderByHashResponseSDKType, QueryLatestHeaderRequest, QueryLatestHeaderResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.header = this.header.bind(this);
    this.headerByHash = this.headerByHash.bind(this);
    this.latestHeader = this.latestHeader.bind(this);
  }
  /* Params queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `lorenzo/bnblightclient/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Header returns the header in bnb chain by number */
  async header(params: QueryHeaderRequest): Promise<QueryHeaderResponseSDKType> {
    const endpoint = `lorenzo/bnblightclient/v1/header/${params.number}`;
    return await this.req.get<QueryHeaderResponseSDKType>(endpoint);
  }
  /* HeaderByHash returns the header in bnb chain by hash */
  async headerByHash(params: QueryHeaderByHashRequest): Promise<QueryHeaderByHashResponseSDKType> {
    const endpoint = `lorenzo/bnblightclient/v1/header/${params.hash}/hash`;
    return await this.req.get<QueryHeaderByHashResponseSDKType>(endpoint);
  }
  /* LatestHeader returns the latest header in bnb chain */
  async latestHeader(_params: QueryLatestHeaderRequest = {}): Promise<QueryLatestHeaderResponseSDKType> {
    const endpoint = `lorenzo/bnblightclient/v1/latest_header`;
    return await this.req.get<QueryLatestHeaderResponseSDKType>(endpoint);
  }
}