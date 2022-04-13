import axios from "axios";
import getBaseUrl from "../baseUrl";

const getUserCarts = async (userId: number) => {
  const baseUrl = getBaseUrl();
  const request = axios
    .get(`${baseUrl}/carts/user/${userId}`)
    .then((response: any) => {
      console.log("GET USER CART RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("GET USER CART ERROR", error);
    });
  return await request;
};

export default getUserCarts;
