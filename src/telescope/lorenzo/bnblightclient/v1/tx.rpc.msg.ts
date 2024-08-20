//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgUploadHeaders, MsgUploadHeadersResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgUpdateHeader, MsgUpdateHeaderResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** UploadHeaders adds a batch of headers to the bnb light client chain */
  uploadHeaders(request: MsgUploadHeaders): Promise<MsgUploadHeadersResponse>;
  /**
   * UpdateParams defines a method for updating bnb light client module
   * parameters.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** UpdateHeader defines a method for updating bnb light client header. */
  updateHeader(request: MsgUpdateHeader): Promise<MsgUpdateHeaderResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.uploadHeaders = this.uploadHeaders.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.updateHeader = this.updateHeader.bind(this);
  }
  uploadHeaders(request: MsgUploadHeaders): Promise<MsgUploadHeadersResponse> {
    const data = MsgUploadHeaders.encode(request).finish();
    const promise = this.rpc.request("lorenzo.bnblightclient.v1.Msg", "UploadHeaders", data);
    return promise.then(data => MsgUploadHeadersResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("lorenzo.bnblightclient.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  updateHeader(request: MsgUpdateHeader): Promise<MsgUpdateHeaderResponse> {
    const data = MsgUpdateHeader.encode(request).finish();
    const promise = this.rpc.request("lorenzo.bnblightclient.v1.Msg", "UpdateHeader", data);
    return promise.then(data => MsgUpdateHeaderResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};