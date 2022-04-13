interface ICategoriesState {
  categories: any[];
}

const initialState: ICategoriesState = {
  categories: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_ALL_CATEGORIES_START":
      return {
        ...state,
        categories: [],
      };
    case "GET_ALL_CATEGORIES_SUCCESS":
      return {
        ...state,
        categories: action.payload,
      };
    case "GET_ALL_CATEGORIES_FAILURE":
      return {
        ...state,
        categories: [],
      };
    default:
      return state;
  }
};

export default reducer;
