import axios from "axios";
import getBaseUrl from "../baseUrl";

const addNewProduct = async (product: any) => {
  const baseUrl = getBaseUrl();
  const request = axios
    .post(`${baseUrl}/products`, product)
    .then((response: any) => {
      console.log("ADD NEW PRODUCT RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("ADD NEW PRODUCT ERROR", error);
    });
  return await request;
};

export default addNewProduct;
