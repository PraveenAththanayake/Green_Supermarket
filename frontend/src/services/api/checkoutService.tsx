import axios from "axios";
import { getToken } from "../auth/AuthService";

const REST_API_BASE_URL = "http://localhost:8080/api/checkout";

export const getCheckouts = () => axios.get(REST_API_BASE_URL);

export const submitCheckout = (checkout: object) =>
  axios.post(REST_API_BASE_URL, checkout);

//add a request interceptor
axios.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] = getToken();

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export const deleteCheckout = (id: number) =>
  axios.delete(`${REST_API_BASE_URL}/${id}`);
