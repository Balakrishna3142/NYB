async function apiDemo() {
    try {
        // Loading
        console.log("Loading...");

        //  GET Request 
        const getResponse = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        if (!getResponse.ok) {
            throw new Error("GET request failed");
        }

        const getData = await getResponse.json();

        console.log("\nGET Response:");
        console.log(getData);


        //  POST Request 
        const newPost = {
            title: "JavaScript",
            body: "Learning API requests",
            userId: 1
        };

        const postResponse = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newPost)
            }
        );

        if (!postResponse.ok) {
            throw new Error("POST request failed");
        }

        const postData = await postResponse.json();

        console.log("\nPOST Response:");
        console.log(postData);


        //  PUT Request
        const updatePost = {
            id: 1,
            title: "Updated JavaScript",
            body: "Learning Async/Await",
            userId: 1
        };

        const putResponse = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatePost)
            }
        );

        if (!putResponse.ok) {
            throw new Error("PUT request failed");
        }

        const putData = await putResponse.json();

        console.log("\nPUT Response:");
        console.log(putData);


        //  DELETE Request 
        const deleteResponse = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                method: "DELETE"
            }
        );

        if (!deleteResponse.ok) {
            throw new Error("DELETE request failed");
        }

        console.log("\nDELETE Response:");
        console.log("Post deleted successfully");


        console.log("\nAPI operations completed successfully.");

    } catch (error) {
        console.log("\nError:", error.message);
    }
}

apiDemo();