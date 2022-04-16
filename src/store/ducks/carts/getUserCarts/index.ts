import getUserCartsTypes from "./types";

const initialState = {
  carts: [],
  loading: false,
};

const reducer = (state = initialState, action: any) => {
  console.log();
  switch (action.type) {
    case getUserCartsTypes.GET_USER_CARTS_START:
      return {
        ...state,
        carts: [],
        loading: true,
      };
    case getUserCartsTypes.GET_USER_CARTS_SUCCESS:
      return {
        ...state,
        carts: action.payload,
        loading: false,
      };
    case getUserCartsTypes.GET_USER_CARTS_FAILURE:
      return {
        ...state,
        carts: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
