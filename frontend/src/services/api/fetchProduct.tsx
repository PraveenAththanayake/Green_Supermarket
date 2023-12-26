import axios from "axios";
import { getToken, isUserLoggedIn } from "../auth/AuthService";

const REST_API_BASE_URL = "http://localhost:8080/api/products";

//add a request interceptor
axios.interceptors.request.use(
  function (config) {
    const token = getToken();

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    } else {
      // Handle case where token is not available, e.g., redirect to login
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const fetchProduct = () => axios.get(REST_API_BASE_URL);

export const addProduct = async (product: object) => {
  try {
    // Check if the user is logged in
    if (!isUserLoggedIn()) {
      // Handle case where user is not logged in, e.g., redirect to login
      throw new Error("User is not logged in");
    }

    // Get the token
    const token = getToken();

    // Make the POST request with the token
    const response = await axios.post(REST_API_BASE_URL, product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    // Handle error (e.g., log it or show a user-friendly message)
    console.error("Error adding product:", error);
    throw error;
  }
};
