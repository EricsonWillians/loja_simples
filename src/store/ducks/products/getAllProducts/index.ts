import getAllProductsTypes from "./types";
interface IProductsState {
  products: any[];
}

const initialState = {
  products: [],
  loading: false,
  error: false,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case getAllProductsTypes.GET_ALL_PRODUCTS_START:
      return {
        ...state,
        products: [],
        loading: true,
        error: false,
      };
    case getAllProductsTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: false,
      };
    case getAllProductsTypes.GET_ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        products: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
