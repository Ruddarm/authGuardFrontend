import UserAuthPage from "../Page/Auth/UserAuthPage";
import UseraxiosInstance from "./UserAxiosInstance";

const UserAuthenticate = async (email, password) => {
  const payload = { username: email, password: password };
  const response = await UseraxiosInstance.post("auth/user/login", payload, {
    withCredentials: true,
  });
  return response;
};
const signupUser = async (user) => {
  const response = await UseraxiosInstance.post("auth/user/signup", user, {
    withCredentials: false,
  });
  return response;
};
const getUser = async () => {
  const response = await UseraxiosInstance.get("user/profile");
  return response;
};
export { getUser, signupUser, UserAuthenticate };
