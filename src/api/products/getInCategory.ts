import axios from "axios";
import getBaseUrl from "../baseUrl";

const getInCategory = async (category: string) => {
  const baseUrl = getBaseUrl();
  const request = axios
    .get(`${baseUrl}/products/category/${category}`)
    .then((response: any) => {
      console.log("GET IN CATEGORY RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("GET IN CATEGORY ERROR", error);
    })
    .then(() => {
      // always executed
    });
  return await request;
};

export default getInCategory;
