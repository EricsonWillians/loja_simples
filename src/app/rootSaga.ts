import { all, takeEvery } from "redux-saga/effects";
import { getAllProductsSaga } from "../store/ducks/products/getAllProducts/sagas";
import { getASingleProductSaga } from "../store/ducks/products/getASingleProduct/sagas";

import getAllProductsTypes from "../store/ducks/products/getAllProducts/types";
import getASingleProductTypes, {
  IGetASingleProductStartAction,
} from "../store/ducks/products/getASingleProduct/types";

import getUserCartsTypes, {
  IGetUserCartsStartAction,
} from "../store/ducks/carts/getUserCarts/types";
import { getUserCartsSaga } from "../store/ducks/carts/getUserCarts/sagas";

import updateCartTypes, {
  IUpdateCartStartAction,
} from "../store/ducks/carts/updateCart/types";
import { updateCartSaga } from "../store/ducks/carts/updateCart/sagas";

export default function* rootSaga() {
  yield all([
    takeEvery(getAllProductsTypes.GET_ALL_PRODUCTS_START, getAllProductsSaga),
    takeEvery<IGetUserCartsStartAction>(
      getUserCartsTypes.GET_USER_CARTS_START,
      getUserCartsSaga
    ),
    takeEvery<IGetASingleProductStartAction>(
      getASingleProductTypes.GET_A_SINGLE_PRODUCT_START,
      getASingleProductSaga
    ),
    takeEvery<IUpdateCartStartAction>(
      updateCartTypes.UPDATE_CART_START,
      updateCartSaga
    ),
  ]);
}
