export const getASingleProductStart = (id: string | undefined) => ({
  type: "@products/GET_A_SINGLE_PRODUCT_START",
  id,
});

export const getASingleProductSuccess = (product: {}) => ({
  type: "@products/GET_A_SINGLE_PRODUCT_SUCCESS",
  payload: product,
});

export const getASingleProductFailure = () => ({
  type: "@products/GET_A_SINGLE_PRODUCT_FAILURE",
});
