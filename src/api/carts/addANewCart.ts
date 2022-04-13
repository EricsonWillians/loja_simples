import axios from "axios";
import getBaseUrl from "../baseUrl";

const addANewCart = async (cart: any) => {
  const baseUrl = getBaseUrl();
  const request = axios
    .post(`${baseUrl}/carts`, cart)
    .then((response: any) => {
      console.log("ADD A NEW CART RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("ADD A NEW CART ERROR", error);
    });
  return await request;
};

export default addANewCart;
