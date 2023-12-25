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

export const fetchProduct = () => axios.get(REST_API_BASE_URL);

export const addProduct = (product: object) =>
  axios.post(REST_API_BASE_URL, product);
