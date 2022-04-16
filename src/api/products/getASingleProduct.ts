import axios from "axios";
import { IGetASingleProductStartAction } from "../../store/ducks/products/getASingleProduct/types";
import getBaseUrl from "../baseUrl";

const getASingleProduct = async ({ id }: IGetASingleProductStartAction) => {
  const baseUrl = getBaseUrl();
  const request = axios
    .get(`${baseUrl}/products/${id}`)
    .then((response: any) => {
      console.log("GET A SINGLE PRODUCT RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("GET A SINGLE PRODUCT ERROR", error);
    });
  return await request;
};

export default getASingleProduct;
