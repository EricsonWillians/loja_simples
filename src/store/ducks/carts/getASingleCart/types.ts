import { Action } from "@reduxjs/toolkit";

export interface IGetASingleCartStartAction extends Action {
  type: "@carts/GET_A_SINGLE_CART_START";
}

export interface IGetASingleCartStartAction {
  id: string | undefined;
}

const types = {
  GET_A_SINGLE_CART_START: "@carts/GET_A_SINGLE_CART_START",
  GET_A_SINGLE_CART_SUCCESS: "@carts/GET_A_SINGLE_CART_SUCCESS",
  GET_A_SINGLE_CART_FAILURE: "@carts/GET_A_SINGLE_CART_FAILURE",
};

export default types;
