console.log("Loading...");

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(data => {
    console.log("Data loaded:");
    console.log(data);
  });