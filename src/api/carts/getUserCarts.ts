import axios from "axios";
import { IGetUserCartsStartAction } from "../../store/ducks/carts/getUserCarts/types";
import getBaseUrl from "../baseUrl";

const getUserCarts = async ({ id }: IGetUserCartsStartAction) => {
  const baseUrl = getBaseUrl();
  const request = axios
    .get(`${baseUrl}/carts/user/${id}`)
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
