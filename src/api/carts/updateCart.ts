import axios from "axios";
import { IUpdateCartStartAction } from "../../store/ducks/carts/updateCart/types";
import { IProductForUpdate } from "../../types/ProductType";
import getBaseUrl from "../baseUrl";

const updateCart = async (payload: IUpdateCartStartAction) => {
  const baseUrl = getBaseUrl();
  const request = axios
    .put(`${baseUrl}/carts/1`, {
      userId: payload?.userId,
      date: payload.date,
      products: payload.products,
    })
    .then((response: any) => {
      console.log("UPDATE CART RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("UPDATE CART ERROR", error);
    });
  return await request;
};

export default updateCart;
