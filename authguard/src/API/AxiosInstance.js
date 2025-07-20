import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
  },
});

let accessToken = null;
export const setAccessToken = (token) => {
  accessToken = token;
};
axiosInstance.interceptors.request.use(
  (config) => {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.log(" API Error:", error.response.data);
      if (error.response.status === 401) {
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

export default axiosInstance;
