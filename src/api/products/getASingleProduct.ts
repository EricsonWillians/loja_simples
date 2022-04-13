import axios from "axios";
import getBaseUrl from "../baseUrl";

const getASingleProduct = async (id: string) => {
  const baseUrl = getBaseUrl();
  const request = axios
    .get(`${baseUrl}/products/${id}`)
    .then((response: any) => {
      console.log("GET A SINGLE PRODUCT RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("GET A SINGLE PRODUCT ERROR", error);
    })
    .then(() => {
      // always executed
    });
  return await request;
};

export default getASingleProduct;
