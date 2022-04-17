import { Action } from "@reduxjs/toolkit";
import IProduct from "../../../../types/ProductType";

export interface IUpdateCartStartAction extends Action {
  type: "@carts/UPDATE_CART_START";
}

export interface IUpdateCartStartAction {
  userId: string | undefined;
  date: string | undefined;
  products: IProduct[];
}

const types = {
  UPDATE_CART_START: "@carts/UPDATE_CART_START",
  UPDATE_CART_SUCCESS: "@carts/UPDATE_CART_SUCCESS",
  UPDATE_CART_FAILURE: "@carts/UPDATE_CART_FAILURE",
};

export default types;
