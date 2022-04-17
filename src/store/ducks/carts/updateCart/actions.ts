import { IProductForUpdate } from "../../../../types/ProductType";

export const updateCartStart = (
  userId: string | undefined,
  date: string | undefined,
  products: IProductForUpdate[]
) => ({
  type: "@carts/UPDATE_CART_START",
  userId,
  date,
  products,
});

export const updateCartSuccess = (updatedCart: {}) => ({
  type: "@carts/UPDATE_CART_SUCCESS",
  payload: updatedCart,
});

export const updateCartFailure = () => ({
  type: "@carts/UPDATE_CART_FAILURE",
});
