import { combineReducers } from "redux";
import getAllProductsReducer from "../store/ducks/products/getAllProducts";
import getASingleProductReducer from "../store/ducks/products/getASingleProduct";

const rootReducer = () =>
  combineReducers({
    getAllProducts: getAllProductsReducer,
    getASingleProduct: getASingleProductReducer,
  });

export default rootReducer;
