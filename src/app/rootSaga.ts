import { all, takeEvery } from "redux-saga/effects";
import { getAllProductsSaga } from "../store/ducks/products/sagas";

import productTypes from "../store/ducks/products/types";

export default function* rootSaga() {
    yield all([
        takeEvery(productTypes.GET_ALL_PRODUCTS_START, getAllProductsSaga),
    ])
  }