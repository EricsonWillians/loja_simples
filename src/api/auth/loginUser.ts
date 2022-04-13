import axios from "axios";
import getBaseUrl from "../baseUrl";

const loginUser = async (userCredentials: any) => {
  const baseUrl = getBaseUrl();
  const request = axios
    .post(`${baseUrl}/auth/login`, userCredentials)
    .then((response: any) => {
      console.log("LOGIN USER RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("LOGIN USER ERROR", error);
    })
    .then(() => {
      // always executed
    });
  return await request;
};

export default loginUser;
