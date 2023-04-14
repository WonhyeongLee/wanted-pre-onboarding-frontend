import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop/",
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use((config) => {
  const access_token = localStorage.getItem("access_token");
  access_token && (config.headers.Authorization = `Bearer ${access_token}`);
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const errorMessage = error.response ? error.response.data.message : "알수없는에러";
    console.error(errorMessage);
    return Promise.reject(error);
  }
);

export default instance;
