import axios from "axios";
import getBaseUrl from "../baseUrl";

const getSortedCartResults = async (sortOrder: string) => {
  const baseUrl = getBaseUrl();
  const request = axios
    .get(`${baseUrl}/carts?sort=${sortOrder}`)
    .then((response: any) => {
      console.log("GET SORTED CART RESULTS RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("GET SORTED CART RESULTS ERROR", error);
    })
    .then(() => {
      // always executed
    });
  return await request;
};

export default getSortedCartResults;
