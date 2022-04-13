import axios from "axios";
import getBaseUrl from "../baseUrl";

const getLimitedCartResults = async (limit: number) => {
  const baseUrl = getBaseUrl();
  const request = axios
    .get(`${baseUrl}/carts?limit=${limit}`)
    .then((response: any) => {
      console.log("GET LIMITED CART RESULTS RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("GET LIMITED CART RESULTS ERROR", error);
    });
  return await request;
};

export default getLimitedCartResults;
