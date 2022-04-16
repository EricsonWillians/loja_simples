export const getUserCartsStart = (id: string | undefined) => ({
  type: "@carts/GET_USER_CARTS_START",
  id,
});

export const getUserCartsSuccess = (carts: []) => ({
  type: "@carts/GET_USER_CARTS_SUCCESS",
  payload: carts,
});

export const getUserCartsFailure = () => ({
  type: "@carts/GET_USER_CARTS_FAILURE",
});
