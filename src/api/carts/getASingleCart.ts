import axios from "axios";
import { IGetASingleCartStartAction } from "../../store/ducks/carts/getASingleCart/types";
import getBaseUrl from "../baseUrl";

const getASingleCart = async (payload: IGetASingleCartStartAction) => {
  const baseUrl = getBaseUrl();
  const request = axios
    .get(`${baseUrl}/carts/${payload?.id}`)
    .then((response: any) => {
      console.log("GET A SINGLE CART RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("GET A SINGLE CART ERROR", error);
    });
  return await request;
};

export default getASingleCart;
