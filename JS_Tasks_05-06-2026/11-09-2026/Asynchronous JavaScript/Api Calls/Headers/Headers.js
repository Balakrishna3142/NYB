fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer myToken"
  }
})
  .then(response => response.json())
  .then(data => console.log(data));