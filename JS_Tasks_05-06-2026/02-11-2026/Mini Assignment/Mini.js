
// API BASE URL
const API_URL = "https://dummyjson.com/products";

// Common API request function
async function request(url, options = {}) {

    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error("API request failed!");
    }

    return response.json();
}

// GET - Fetch all products
export async function getProducts() {
    const data = await request(API_URL);
    return data.products;
}

// GET - Fetch categories
export async function getCategories() {
    return request(API_URL + "/category-list");
}

// GET - Fetch single product
export async function getProduct(id) {
    return request(API_URL + "/" + id);
}

// POST - Add product
export async function addProduct(product) {
    return request(API_URL + "/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    });
}

// PUT - Edit product
export async function updateProduct(id, product) {
    return request(API_URL + "/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    });
}

// DELETE - Delete product
export async function deleteProduct(id) {
    return request(API_URL + "/" + id, {
        method: "DELETE"
    });
}
