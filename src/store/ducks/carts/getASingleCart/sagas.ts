import { call, put } from "redux-saga/effects";
import getASingleCart from "../../../../api/carts/getASingleCart";
import { getASingleCartFailure, getASingleCartSuccess } from "./actions";
import { IGetASingleCartStartAction } from "./types";

export const getASingleCartSaga = function* (
  payload: IGetASingleCartStartAction
): any {
  try {
    const response = yield call(getASingleCart, payload);
    yield put(getASingleCartSuccess(response.data));
  } catch (err) {
    yield put(getASingleCartFailure());
  }
};
