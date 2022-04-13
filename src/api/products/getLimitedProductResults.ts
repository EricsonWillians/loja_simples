import axios from "axios";
import getBaseUrl from "../baseUrl";

const getLimitedProductResults = async (limit: number) => {
  const baseUrl = getBaseUrl();
  const request = axios
    .get(`${baseUrl}/products?limit=${limit}`)
    .then((response: any) => {
      console.log("GET LIMITED PRODUCT RESULTS RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("GET LIMITED PRODUCT RESULTS ERROR", error);
    })
    .then(() => {
      // always executed
    });
  return await request;
};

export default getLimitedProductResults;
