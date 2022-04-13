import axios from "axios";
import getBaseUrl from "../baseUrl";

const addNewUser = async (user: any) => {
  const baseUrl = getBaseUrl();
  const request = axios
    .post(`${baseUrl}/users`, user)
    .then((response: any) => {
      console.log("ADD A NEW USER RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("ADD A NEW USER ERROR", error);
    })
    .then(() => {
      // always executed
    });
  return await request;
};

export default addNewUser;
