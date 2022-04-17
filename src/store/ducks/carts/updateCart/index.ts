import updatedCartTypes from "./types";

const initialState = {
  updatedCart: {},
  loading: false,
};

const reducer = (state = initialState, action: any) => {
  console.log();
  switch (action.type) {
    case updatedCartTypes.UPDATE_CART_START:
      return {
        ...state,
        updatedCart: {},
        loading: true,
      };
    case updatedCartTypes.UPDATE_CART_SUCCESS:
      return {
        ...state,
        updatedCart: action.payload,
        loading: false,
      };
    case updatedCartTypes.UPDATE_CART_FAILURE:
      return {
        ...state,
        updatedCart: {},
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
