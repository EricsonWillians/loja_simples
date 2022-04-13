import axios from "axios";
import getBaseUrl from "../baseUrl";

const getLimitedResults = async (limit: number) => {
  const baseUrl = getBaseUrl();
  const request = axios
    .get(`${baseUrl}/products?limit=${limit}`)
    .then((response: any) => {
      console.log("GET LIMITED RESULTS RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("GET LIMITED RESULTS ERROR", error);
    })
    .then(() => {
      // always executed
    });
  return await request;
};

export default getLimitedResults;
