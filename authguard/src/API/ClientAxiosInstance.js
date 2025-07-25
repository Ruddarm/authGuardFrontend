import axios from "axios";

const ClientaxiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
  },
});

let clientAccessToken = null;
export const setClientAccessTokenAPI = (token) => {
  console.log(token)
  clientAccessToken = token;
};
ClientaxiosInstance.interceptors.request.use(
  (config) => {
    if (clientAccessToken) {
      config.headers.Authorization = `Bearer ${clientAccessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

ClientaxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.log(" API Error:", error.response.data);
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry=true;
        const res = axios.get("auth/client/refres",{withCredentials:true});
        
        alert("Session expired, login again");
      }
    } else if (error.request) {
      console.log(" No response from server");
    } else {
      console.log(" Something else went wrong");
    }
    return Promise.reject(error);
  }
);

export default ClientaxiosInstance;
