
// API URL
const API = "https://jsonplaceholder.typicode.com/posts";

// GET METHOD
async function getData() {

    document.getElementById("status").innerText = "Loading...";

    try {
        const response = await fetch(API);

        if (!response.ok) {
            throw new Error("Something went wrong");
        }

        const data = await response.json();

        document.getElementById("status").innerText = "Success!";

        document.getElementById("output").innerHTML =
            JSON.stringify(data.slice(0, 5), null, 2);

    } catch (error) {
        document.getElementById("status").innerText =
            "Error: " + error.message;
    }
}


// POST METHOD
async function postData() {

    const newPost = {
        title: "My New Post",
        body: "Learning REST API",
        userId: 1
    };

    try {
        const response = await fetch(API, {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(newPost)
        });

        const data = await response.json();

        document.getElementById("output").innerText =
            JSON.stringify(data, null, 2);

    } catch (error) {
        console.log(error);
    }
}


// PUT METHOD
async function putData() {

    const updatedPost = {
        id: 1,
        title: "Updated Title",
        body: "Updated Complete Data",
        userId: 1
    };

    const response = await fetch(API + "/1", {
        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(updatedPost)
    });

    const data = await response.json();

    document.getElementById("output").innerText =
        JSON.stringify(data, null, 2);
}


// PATCH METHOD
async function patchData() {

    const response = await fetch(API + "/1", {
        method: "PATCH",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            title: "Only Title Updated"
        })
    });

    const data = await response.json();

    document.getElementById("output").innerText =
        JSON.stringify(data, null, 2);
}


// DELETE METHOD
async function deleteData() {

    const response = await fetch(API + "/1", {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("Delete failed");
    }

    document.getElementById("output").innerText =
        "Post deleted successfully!";
}
