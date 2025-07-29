import OauthaxiosInstance from "./OathAxiosInstance";
import UseraxiosInstance from "./UserAxiosInstance";

async function genrateCode(payload) {

  const response = await UseraxiosInstance.post("/user/app/code", payload, {
    withCredentials: true,
  });
  console.log(response)
  return response;
}

export { genrateCode };
