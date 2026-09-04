
// 1. GET request
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => {
    console.log("1. GET Response:");
    console.log(data);
  })
  .catch(error => console.error("GET Error:", error));


// 2. GET multiple records
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    console.log("\n2. GET Multiple Posts:");
    console.log(data.slice(0, 3));
  })
  .catch(error => console.error("GET Multiple Error:", error));


// 3. POST request
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "My New Post",
    body: "Hello from Fetch API!",
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => {
    console.log("\n3. POST Response:");
    console.log(data);
  })
  .catch(error => console.error("POST Error:", error));


// 4. PUT request - update entire resource
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 1,
    title: "Updated Title",
    body: "Updated content",
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => {
    console.log("\n4. PUT Response:");
    console.log(data);
  })
  .catch(error => console.error("PUT Error:", error));


// 5. PATCH request - update part of a resource
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Partially Updated Title"
  })
})
  .then(response => response.json())
  .then(data => {
    console.log("\n5. PATCH Response:");
    console.log(data);
  })
  .catch(error => console.error("PATCH Error:", error));


// 6. DELETE request
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"
})
  .then(response => {
    console.log("\n6. DELETE Status:");
    console.log(response.status);
  })
  .catch(error => console.error("DELETE Error:", error));


// 7. Fetch using async/await
async function getUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const user = await response.json();

    console.log("\n7. Async/Await Response:");
    console.log(user);
  } catch (error) {
    console.error("Async/Await Error:", error);
  }
}

getUser();