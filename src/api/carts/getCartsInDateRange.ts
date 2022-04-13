import axios from "axios";
import getBaseUrl from "../baseUrl";

const getCartsInDateRage = async (startDate: string, endDate: string) => {
  const baseUrl = getBaseUrl();
  const request = axios
    .get(`${baseUrl}/carts?startDate=${startDate}&endDate=${endDate}`)
    .then((response: any) => {
      console.log("GET CARTS IN RANGE RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("GET CARTS IN RANGE ERROR", error);
    })
    .then(() => {
      // always executed
    });
  return await request;
};

export default getCartsInDateRage;
