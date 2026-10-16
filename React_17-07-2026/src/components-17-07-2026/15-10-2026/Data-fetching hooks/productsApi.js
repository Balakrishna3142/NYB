
import { apiGet } from "./apiClient";

export function getProducts() {
  return apiGet("/products");
}
