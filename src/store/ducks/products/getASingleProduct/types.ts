import { Action } from "@reduxjs/toolkit";

export interface IGetASingleProductStartAction extends Action {
  type: "@products/GET_A_SINGLE_PRODUCT_START";
}

export interface IGetASingleProductStartAction {
  id: string | undefined;
}

const types = {
  GET_A_SINGLE_PRODUCT_START: "@products/GET_A_SINGLE_PRODUCT_START",
  GET_A_SINGLE_PRODUCT_SUCCESS: "@products/GET_A_SINGLE_PRODUCT_SUCCESS",
  GET_A_SINGLE_PRODUCT_FAILURE: "@products/GET_A_SINGLE_PRODUCT_FAILURE",
};

export default types;
