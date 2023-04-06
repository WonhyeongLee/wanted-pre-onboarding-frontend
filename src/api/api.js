import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop/",
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use(
  (config) => {
    // 요청이 전달되기 전에 작업 수행
    const token = localStorage.getItem("token");
    token && (config.headers.Authorization = `Bearer ${token}`);
    return config;
  },
  (error) => {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);

export default instance;
