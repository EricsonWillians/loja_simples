import getASingleProductTypes from "./types";

const initialState = {
  product: {},
  loading: false,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case getASingleProductTypes.GET_A_SINGLE_PRODUCT_START:
      return {
        ...state,
        product: {},
        loading: true,
      };
    case getASingleProductTypes.GET_A_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
    case getASingleProductTypes.GET_A_SINGLE_PRODUCT_FAILURE:
      return {
        ...state,
        product: {},
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
