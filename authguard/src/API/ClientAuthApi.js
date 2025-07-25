import ClientAuthPage from "../Page/Auth/ClientAuthPage";
import ClientaxiosInstance from "./ClientAxiosInstance";
import axiosInstance from "./ClientAxiosInstance";

const clientAuthenticate = async (email, password) => {
  const payload = { username: email, password: password };
  const response = await ClientaxiosInstance.post("auth/client/login", payload, {
    withCredentials: true,
  });
  return response;
};
const signupClient = async (user) => {
  const response = await ClientaxiosInstance.post("auth/client/signup", user);
  return response;
};
const getClient = async () => {
  const response = await ClientaxiosInstance.get("client/profile");
  return response;
};
export { getClient, signupClient ,clientAuthenticate};
