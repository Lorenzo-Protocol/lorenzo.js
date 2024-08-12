//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgRegisterCoin, MsgRegisterCoinResponse, MsgRegisterERC20, MsgRegisterERC20Response, MsgToggleConversion, MsgToggleConversionResponse, MsgConvertCoin, MsgConvertCoinResponse, MsgConvertERC20, MsgConvertERC20Response, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export interface Msg {
  /** RegisterCoin registers a token pair for existing coin */
  registerCoin(request: MsgRegisterCoin): Promise<MsgRegisterCoinResponse>;
  /** RegisterERC20 registers a token pair for existing erc20 contract */
  registerERC20(request: MsgRegisterERC20): Promise<MsgRegisterERC20Response>;
  /** ToggleConversion toggles the conversion for a token pair */
  toggleConversion(request: MsgToggleConversion): Promise<MsgToggleConversionResponse>;
  /** ConvertCoin converts a coin to an ERC20 token */
  convertCoin(request: MsgConvertCoin): Promise<MsgConvertCoinResponse>;
  /** ConvertERC20 converts an ERC20 token to a coin */
  convertERC20(request: MsgConvertERC20): Promise<MsgConvertERC20Response>;
  /** UpdateParams updates the convert module parameters */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerCoin = this.registerCoin.bind(this);
    this.registerERC20 = this.registerERC20.bind(this);
    this.toggleConversion = this.toggleConversion.bind(this);
    this.convertCoin = this.convertCoin.bind(this);
    this.convertERC20 = this.convertERC20.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  registerCoin(request: MsgRegisterCoin): Promise<MsgRegisterCoinResponse> {
    const data = MsgRegisterCoin.encode(request).finish();
    const promise = this.rpc.request("lorenzo.token.v1.Msg", "RegisterCoin", data);
    return promise.then(data => MsgRegisterCoinResponse.decode(new BinaryReader(data)));
  }
  registerERC20(request: MsgRegisterERC20): Promise<MsgRegisterERC20Response> {
    const data = MsgRegisterERC20.encode(request).finish();
    const promise = this.rpc.request("lorenzo.token.v1.Msg", "RegisterERC20", data);
    return promise.then(data => MsgRegisterERC20Response.decode(new BinaryReader(data)));
  }
  toggleConversion(request: MsgToggleConversion): Promise<MsgToggleConversionResponse> {
    const data = MsgToggleConversion.encode(request).finish();
    const promise = this.rpc.request("lorenzo.token.v1.Msg", "ToggleConversion", data);
    return promise.then(data => MsgToggleConversionResponse.decode(new BinaryReader(data)));
  }
  convertCoin(request: MsgConvertCoin): Promise<MsgConvertCoinResponse> {
    const data = MsgConvertCoin.encode(request).finish();
    const promise = this.rpc.request("lorenzo.token.v1.Msg", "ConvertCoin", data);
    return promise.then(data => MsgConvertCoinResponse.decode(new BinaryReader(data)));
  }
  convertERC20(request: MsgConvertERC20): Promise<MsgConvertERC20Response> {
    const data = MsgConvertERC20.encode(request).finish();
    const promise = this.rpc.request("lorenzo.token.v1.Msg", "ConvertERC20", data);
    return promise.then(data => MsgConvertERC20Response.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("lorenzo.token.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};