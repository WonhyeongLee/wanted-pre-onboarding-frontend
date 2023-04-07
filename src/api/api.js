import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop/",
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use((config) => {
  // 요청이 전달되기 전에 작업 수행
  const userToken = localStorage.getItem("userToken");
  userToken && (config.headers.Authorization = `Bearer ${userToken}`);
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const errorMessage = error.response ? error.response.data.message : "에러";
    console.error(errorMessage);
    return Promise.reject(error);
  }
);

export default instance;
