import { Action } from "@reduxjs/toolkit";

export interface IGetUserCartsStartAction extends Action {
  type: "@products/GET_USER_CARTS_START";
}

export interface IGetUserCartsStartAction {
  id: string | undefined;
}

const types = {
  GET_USER_CARTS_START: "@carts/GET_USER_CARTS_START",
  GET_USER_CARTS_SUCCESS: "@carts/GET_USER_CARTS_SUCCESS",
  GET_USER_CARTS_FAILURE: "@carts/GET_USER_CARTS_FAILURE",
};

export default types;
