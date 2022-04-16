import { call, put } from "redux-saga/effects";
import getUserCarts from "../../../../api/carts/getUserCarts";
import { getUserCartsFailure, getUserCartsSuccess } from "./actions";
import { IGetUserCartsStartAction } from "./types";

export const getUserCartsSaga = function* (
  payload: IGetUserCartsStartAction
): any {
  try {
    const response = yield call(getUserCarts, payload);
    yield put(getUserCartsSuccess(response.data));
  } catch (err) {
    yield put(getUserCartsFailure());
  }
};
