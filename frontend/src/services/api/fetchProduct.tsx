import axios from "axios";
import { getToken } from "../auth/AuthService";
import { ProductData } from "../../types";

const REST_API_BASE_URL = "http://localhost:8080/api/products";

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

export const fetchProduct = () => axios.get(REST_API_BASE_URL);

export const fetchProductById = (productId: string) =>
  axios.get(`${REST_API_BASE_URL}/${productId}`);

export const addProduct = (product: object) =>
  axios.post(REST_API_BASE_URL, product);

export const updateProduct = async (
  productId: number,
  productData: ProductData
) => {
  try {
    const response = await axios.put(
      `${REST_API_BASE_URL}/${productId}`, // Use template literals for correct URL construction
      productData
    );

    // Log the response for further debugging
    console.log("Update Product Response:", response);

    if (!response.data) {
      throw new Error(`Failed to update product: ${response.statusText}`);
    }

    return response.data;
  } catch (error) {
    console.error("Error updating product:", (error as Error).message);
    throw error;
  }
};

export const deleteProduct = (id: number) =>
  axios.delete(REST_API_BASE_URL + "/" + id);
