import { call, put } from "redux-saga/effects";
import getAllProducts from "../../../../api/products/getAllProducts";
import { getAllProductsFailure, getAllProductsSuccess } from "./actions";

export const getAllProductsSaga = function* (): any {
  try {
    const response = yield call(getAllProducts);
    if (response?.status !== 200) {
      yield put(getAllProductsFailure());
    } else {
      yield put(getAllProductsSuccess(response.data));
    }
  } catch (err) {
    yield put(getAllProductsFailure());
  }
};
