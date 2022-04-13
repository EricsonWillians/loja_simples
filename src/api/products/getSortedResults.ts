import axios from "axios";
import getBaseUrl from "../baseUrl";

const getSortedResults = async (sortOrder: string) => {
  const baseUrl = getBaseUrl();
  const request = axios
    .get(`${baseUrl}/products?sort=${sortOrder}`)
    .then((response: any) => {
      console.log("GET SORTED PRODUCTS RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("GET SORTED PRODUCTS ERROR", error);
    })
    .then(() => {
      // always executed
    });
  return await request;
};

export default getSortedResults;
