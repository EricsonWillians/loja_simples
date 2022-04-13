import axios from "axios";
import getBaseUrl from "../baseUrl";

const getAllProducts = async () => {
  const baseUrl = getBaseUrl();
  const request = await axios
    .get(`${baseUrl}/products`)
    .then((response: any) => {
      console.log("GET ALL PRODUCTS RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("GET ALL PRODUCTS ERROR", error);
    });
  return request;
};

export default getAllProducts;
