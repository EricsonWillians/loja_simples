import axios from "axios";
import getBaseUrl from "../baseUrl";

const getASingleUser = async (user: any) => {
  const baseUrl = getBaseUrl();
  const request = axios
    .get(`${baseUrl}/users/${user.id}`)
    .then((response: any) => {
      console.log("GET A SINGLE USER RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("GET A SINGLE USER ERROR", error);
    })
    .then(() => {
      // always executed
    });
  return await request;
};

export default getASingleUser;
