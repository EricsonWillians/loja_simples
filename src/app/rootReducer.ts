import { combineReducers } from "redux";
import getAllProductsReducer from "../store/ducks/products/getAllProducts";
import getASingleProductReducer from "../store/ducks/products/getASingleProduct";
import getUserCartsReducer from "../store/ducks/carts/getUserCarts";

const rootReducer = () =>
  combineReducers({
    getAllProducts: getAllProductsReducer,
    getASingleProduct: getASingleProductReducer,
    getUserCarts: getUserCartsReducer,
  });

export default rootReducer;
