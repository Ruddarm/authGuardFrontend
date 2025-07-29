import axios from "axios";

const OauthaxiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
  },
});

let oauthAccessToken = null;
export const setOauthAccessTokenAPI = (token) => {
  oauthAccessToken = token;
};
OauthaxiosInstance.interceptors.request.use(
  (config) => {
    if (oauthAccessToken) {
      config.headers.Authorization = `Bearer ${oauthAccessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

OauthaxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
    //   console.log(" API Error:", error.response.data);
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry=true;
        const res = axios.get("auth/user/refresh",{withCredentials:true});
        
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

export default OauthaxiosInstance;
