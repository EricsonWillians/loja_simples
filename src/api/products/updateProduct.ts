import axios from "axios";
import getBaseUrl from "../baseUrl";

const updateProduct = async (product: any) => {
  const baseUrl = getBaseUrl();
  const request = axios
    .put(`${baseUrl}/products/${product.id}`, product)
    .then((response: any) => {
      console.log("UPDATE PRODUCT RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("UPDATE PRODUCT ERROR", error);
    });
  return await request;
};

export default updateProduct;
