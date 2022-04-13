import axios from "axios";
import getBaseUrl from "../baseUrl";

const getAllUsers = async () => {
  const baseUrl = getBaseUrl();
  const request = axios
    .get(`${baseUrl}/users`)
    .then((response: any) => {
      console.log("GET ALL USERS RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("GET ALL USERS ERROR", error);
    });
  return await request;
};

export default getAllUsers;
