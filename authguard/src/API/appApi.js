import axiosInstance from "./ClientAxiosInstance";

function createApp(app, clientId) {
  const resp = axiosInstance.post(`apps/${clientId}`, { app });
}

export { createApp };
