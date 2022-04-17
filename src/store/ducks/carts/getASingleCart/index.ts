import getASingleCartTypes from "./types";

const initialState = {
  cart: {},
  loading: false,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case getASingleCartTypes.GET_A_SINGLE_CART_START:
      return {
        ...state,
        cart: {},
        loading: true,
      };
    case getASingleCartTypes.GET_A_SINGLE_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
        loading: false,
      };
    case getASingleCartTypes.GET_A_SINGLE_CART_FAILURE:
      return {
        ...state,
        cart: {},
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
