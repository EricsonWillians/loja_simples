import axios from "axios";
import getBaseUrl from "../baseUrl";

const deleteCart = async (cart: any) => {
  const baseUrl = getBaseUrl();
  const request = axios
    .delete(`${baseUrl}/carts/${cart.id}`)
    .then((response: any) => {
      console.log("DELETE CART RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("DELETE CART ERROR", error);
    });
  return await request;
};

export default deleteCart;
