import { call, put } from "redux-saga/effects";
import getASingleProduct from "../../../../api/products/getASingleProduct";
import { getASingleProductFailure, getASingleProductSuccess } from "./actions";
import { IGetASingleProductStartAction } from "./types";

export const getASingleProductSaga = function* (
  payload: IGetASingleProductStartAction
): any {
  try {
    const response = yield call(getASingleProduct, payload);
    yield put(getASingleProductSuccess(response.data));
  } catch (err) {
    yield put(getASingleProductFailure());
  }
};
