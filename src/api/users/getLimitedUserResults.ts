import axios from "axios";
import getBaseUrl from "../baseUrl";

const getLimitedUserResults = async (limit: number) => {
  const baseUrl = getBaseUrl();
  const request = axios
    .get(`${baseUrl}/users?limit=${limit}`)
    .then((response: any) => {
      console.log("GET LIMITED USER RESULTS RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("GET LIMITED USER RESULTS ERROR", error);
    })
    .then(() => {
      // always executed
    });
  return await request;
};

export default getLimitedUserResults;
