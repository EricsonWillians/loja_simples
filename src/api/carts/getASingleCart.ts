import axios from "axios";
import getBaseUrl from "../baseUrl";

const getASingleCart = async (id: number) => {
  const baseUrl = getBaseUrl();
  const request = axios
    .get(`${baseUrl}/carts/${id}`)
    .then((response: any) => {
      console.log("GET A SINGLE CART RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("GET A SINGLE CART ERROR", error);
    })
    .then(() => {
      // always executed
    });
  return await request;
};

export default getASingleCart;
