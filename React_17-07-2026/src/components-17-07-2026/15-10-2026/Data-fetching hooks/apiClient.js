
const BASE_URL = "https://fakestoreapi.com";

export async function apiGet(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}
