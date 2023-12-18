import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/products";

export const fetchProduct = async () => {
  try {
    const response = await axios.get(REST_API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching product data:", error);
    throw error;
  }
};
