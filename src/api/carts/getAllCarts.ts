import axios from "axios";
import getBaseUrl from "../baseUrl";

const getAllCarts = async () => {
  const baseUrl = getBaseUrl();
  const request = axios
    .get(`${baseUrl}/carts`)
    .then((response: any) => {
      console.log("GET ALL CARTS RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("GET ALL CARTS ERROR", error);
    })
    .then(() => {
      // always executed
    });
  return await request;
};

export default getAllCarts;
