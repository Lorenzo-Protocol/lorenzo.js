//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryHeaderRequest, QueryHeaderResponse, QueryHeaderByHashRequest, QueryHeaderByHashResponse, QueryLatestHeaderRequest, QueryLatestHeaderResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Header returns the header in bnb chain by number */
  header(request: QueryHeaderRequest): Promise<QueryHeaderResponse>;
  /** HeaderByHash returns the header in bnb chain by hash */
  headerByHash(request: QueryHeaderByHashRequest): Promise<QueryHeaderByHashResponse>;
  /** LatestHeader returns the latest header in bnb chain */
  latestHeader(request?: QueryLatestHeaderRequest): Promise<QueryLatestHeaderResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.header = this.header.bind(this);
    this.headerByHash = this.headerByHash.bind(this);
    this.latestHeader = this.latestHeader.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lorenzo.bnblightclient.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  header(request: QueryHeaderRequest): Promise<QueryHeaderResponse> {
    const data = QueryHeaderRequest.encode(request).finish();
    const promise = this.rpc.request("lorenzo.bnblightclient.v1.Query", "Header", data);
    return promise.then(data => QueryHeaderResponse.decode(new BinaryReader(data)));
  }
  headerByHash(request: QueryHeaderByHashRequest): Promise<QueryHeaderByHashResponse> {
    const data = QueryHeaderByHashRequest.encode(request).finish();
    const promise = this.rpc.request("lorenzo.bnblightclient.v1.Query", "HeaderByHash", data);
    return promise.then(data => QueryHeaderByHashResponse.decode(new BinaryReader(data)));
  }
  latestHeader(request: QueryLatestHeaderRequest = {}): Promise<QueryLatestHeaderResponse> {
    const data = QueryLatestHeaderRequest.encode(request).finish();
    const promise = this.rpc.request("lorenzo.bnblightclient.v1.Query", "LatestHeader", data);
    return promise.then(data => QueryLatestHeaderResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    header(request: QueryHeaderRequest): Promise<QueryHeaderResponse> {
      return queryService.header(request);
    },
    headerByHash(request: QueryHeaderByHashRequest): Promise<QueryHeaderByHashResponse> {
      return queryService.headerByHash(request);
    },
    latestHeader(request?: QueryLatestHeaderRequest): Promise<QueryLatestHeaderResponse> {
      return queryService.latestHeader(request);
    }
  };
};