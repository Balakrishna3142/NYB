
import api from "./axiosInstance";

// GET: Fetch all products
export const getProducts = async () => {
  const response = await api.get("/posts");
  return response.data;
};

// GET: Fetch one product
export const getProductById = async (id) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};

// POST: Create a product
export const createProduct = async (product) => {
  const response = await api.post("/posts", product);
  return response.data;
};

// PUT: Update a product
export const updateProduct = async (id, product) => {
  const response = await api.put(`/posts/${id}`, product);
  return response.data;
};

// DELETE: Delete a product
export const deleteProduct = async (id) => {
  const response = await api.delete(`/posts/${id}`);
  return response.data;
};
