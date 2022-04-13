import { combineReducers } from "redux";
import getAllProductsReducer from "../store/ducks/products/getAllProducts";

const rootReducer = () =>
  combineReducers({
    getAllProducts: getAllProductsReducer,
  });

export default rootReducer;
