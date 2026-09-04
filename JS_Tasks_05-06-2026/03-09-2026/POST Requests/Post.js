const url = "https://jsonplaceholder.typicode.com/posts";

const data = {
  title: "Hello",
  body: "This is my first POST request",
  userId: 1072
};

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(result => {
    console.log("Response:", result);
  })
  .catch(error => {
    console.error("Error:", error);
  });