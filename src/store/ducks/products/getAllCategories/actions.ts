export const getAllCategoriesStart = () => ({
  type: "@products/GET_ALL_CATEGORIES_START",
});

export const getAllCategoriesSuccess = (categories: []) => ({
  type: "@products/GET_ALL_CATEGORIES_SUCCESS",
  payload: categories,
});

export const getAllCategoriesFailure = () => ({
  type: "@products/GET_ALL_CATEGORIES_FAILURE",
});
