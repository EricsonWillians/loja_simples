import axios from "axios";
import getBaseUrl from "../baseUrl";

const updateUser = async (user: any) => {
  const baseUrl = getBaseUrl();
  const request = axios
    .put(`${baseUrl}/users/${user.id}`, user)
    .then((response: any) => {
      console.log("UPDATE USER RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("UPDATE USER ERROR", error);
    });
  return await request;
};

export default updateUser;
