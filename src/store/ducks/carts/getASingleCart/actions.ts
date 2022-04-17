export const getASingleCartStart = (id: string | undefined) => ({
  type: "@carts/GET_A_SINGLE_CART_START",
  id,
});

export const getASingleCartSuccess = (cart: {}) => ({
  type: "@carts/GET_A_SINGLE_CART_SUCCESS",
  payload: cart,
});

export const getASingleCartFailure = () => ({
  type: "@carts/GET_A_SINGLE_CART_FAILURE",
});
