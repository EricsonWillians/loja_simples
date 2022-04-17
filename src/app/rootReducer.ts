import { combineReducers } from "redux";
import getAllProductsReducer from "../store/ducks/products/getAllProducts";
import getASingleProductReducer from "../store/ducks/products/getASingleProduct";
import getUserCartsReducer from "../store/ducks/carts/getUserCarts";
import updateCartReducer from "../store/ducks/carts/updateCart";
import getASingleCartReducer from "../store/ducks/carts/getASingleCart";

const rootReducer = () =>
  combineReducers({
    getAllProducts: getAllProductsReducer,
    getASingleProduct: getASingleProductReducer,
    getUserCarts: getUserCartsReducer,
    updateCart: updateCartReducer,
    getASingleCart: getASingleCartReducer,
  });

export default rootReducer;
