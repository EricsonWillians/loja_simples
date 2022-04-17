import { call, put } from "redux-saga/effects";
import getUserCarts from "../../../../api/carts/getUserCarts";
import updateCart from "../../../../api/carts/updateCart";
import { updateCartFailure, updateCartSuccess } from "./actions";
import { IUpdateCartStartAction } from "./types";

export const updateCartSaga = function* (payload: IUpdateCartStartAction): any {
  try {
    const response = yield call(updateCart, payload);
    yield put(updateCartSuccess(response.data));
  } catch (err) {
    yield put(updateCartFailure());
  }
};
