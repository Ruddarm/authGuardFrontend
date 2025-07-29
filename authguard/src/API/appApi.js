import axiosInstance from "./ClientAxiosInstance";

function createApp(app, clientId) {
  const res = axiosInstance.post(`apps/${clientId}`, { app });
}

export { createApp };
