import axiosInstance from "./AxiosInstance";

const authenticate = async (email,password) => {
    const payload = {username:email,password:password}
    const response = axiosInstance.post("auth/client/login",payload);
    return response;
};
const getClient = async()=>{
    const response = await axiosInstance.get("client/profile");
    return response;
}
export default authenticate;
export {getClient}
