export const getAllProductsStart = () => ({
  type: "@products/GET_ALL_PRODUCTS_START",
});

export const getAllProductsSuccess = (products: []) => ({
  type: "@products/GET_ALL_PRODUCTS_SUCCESS",
  payload: products,
});

export const getAllProductsFailure = () => ({
  type: "@products/GET_ALL_PRODUCTS_FAILURE",
});
