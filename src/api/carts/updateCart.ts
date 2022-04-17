import axios from "axios";
import { IProductForUpdate } from "../../types/ProductType";
import getBaseUrl from "../baseUrl";

const updateCart = async (
  userId: string | undefined,
  date: string | undefined,
  products: IProductForUpdate[]
) => {
  const baseUrl = getBaseUrl();
  const request = axios
    .put(`${baseUrl}/carts/1`, {
      userId,
      date,
      products,
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
