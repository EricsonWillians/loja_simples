import axios from "axios";
import getBaseUrl from "../baseUrl";

const getAllCategories = async () => {
  const baseUrl = getBaseUrl();
  const request = axios
    .get(`${baseUrl}/products/categories`)
    .then((response: any) => {
      console.log("GET ALL CATEGORIES RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("GET ALL CATEGORIES ERROR", error);
    });
  return await request;
};

export default getAllCategories;
