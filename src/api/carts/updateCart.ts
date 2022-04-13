import axios from "axios";
import getBaseUrl from "../baseUrl";

const updateCart = async (cart: any) => {
  const baseUrl = getBaseUrl();
  const request = axios
    .put(`${baseUrl}/carts/${cart.id}`, cart)
    .then((response: any) => {
      console.log("UPDATE CART RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("UPDATE CART ERROR", error);
    })
    .then(() => {
      // always executed
    });
  return await request;
};

export default updateCart;
