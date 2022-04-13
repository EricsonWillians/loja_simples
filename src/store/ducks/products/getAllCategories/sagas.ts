import { call, put } from "redux-saga/effects";
import getAllCategories from "../../../../api/products/getAllCategories";
import { getAllCategoriesFailure, getAllCategoriesSuccess } from "./actions";

export const getAllCategoriesSaga = function* (): any {
  try {
    const response = yield call(getAllCategories);
    yield put(getAllCategoriesSuccess(response.data));
  } catch (err) {
    yield put(getAllCategoriesFailure());
  }
};
