import axios from "axios";
import getBaseUrl from "../baseUrl";

const deleteProduct = async (id: number) => {
  const baseUrl = getBaseUrl();
  const request = axios
    .delete(`${baseUrl}/products/${id}`)
    .then((response: any) => {
      console.log("DELETE PRODUCT RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("DELETE PRODUCT ERROR", error);
    });
  return await request;
};

export default deleteProduct;
