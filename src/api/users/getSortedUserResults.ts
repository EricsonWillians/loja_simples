import axios from "axios";
import getBaseUrl from "../baseUrl";

const getSortedUserResults = async (sortOrder: string) => {
  const baseUrl = getBaseUrl();
  const request = axios
    .get(`${baseUrl}/users?sort=${sortOrder}`)
    .then((response: any) => {
      console.log("GET SORTED USER RESULTS RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("GET SORTED USER RESULTS ERROR", error);
    });
  return await request;
};

export default getSortedUserResults;
