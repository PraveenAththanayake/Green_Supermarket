import axios from "axios";
import { getToken } from "../auth/AuthService";

const REST_API_BASE_URL = "http://localhost:8080/api/products";

//add a request interceptor
axios.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const fetchProduct = async () => {
  try {
    const response = await axios.get(REST_API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching product data:", error);
    throw error;
  }
};
