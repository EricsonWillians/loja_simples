import axios from "axios";
import getBaseUrl from "../baseUrl";

const deleteUser = async (user: any) => {
  const baseUrl = getBaseUrl();
  const request = axios
    .delete(`${baseUrl}/users/${user.id}`)
    .then((response: any) => {
      console.log("DELETE USER RESPONSE: ", response);
      return response;
    })
    .catch((error: any) => {
      console.log("DELETE USER ERROR", error);
    });
  return await request;
};

export default deleteUser;
