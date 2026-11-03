
// API BASE URL
const API_URL = "https://jsonplaceholder.typicode.com/posts";

// GET Operation
export async function getPosts() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("GET request failed");
    }

    return await response.json();
}

// POST Operation
export async function createPost() {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "JavaScript",
            body: "Learning API",
            userId: 1
        })
    });

    if (!response.ok) {
        throw new Error("POST request failed");
    }

    return await response.json();
}

// PUT Operation
export async function updatePost() {
    const response = await fetch(API_URL + "/1", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: 1,
            title: "Updated Title",
            body: "Updated Content",
            userId: 1
        })
    });

    if (!response.ok) {
        throw new Error("PUT request failed");
    }

    return await response.json();
}

// PATCH Operation
export async function patchPost() {
    const response = await fetch(API_URL + "/1", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "Partially Updated"
        })
    });

    if (!response.ok) {
        throw new Error("PATCH request failed");
    }

    return await response.json();
}

// DELETE Operation
export async function deletePost() {
    const response = await fetch(API_URL + "/1", {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("DELETE request failed");
    }

    return "Post deleted successfully";
}
