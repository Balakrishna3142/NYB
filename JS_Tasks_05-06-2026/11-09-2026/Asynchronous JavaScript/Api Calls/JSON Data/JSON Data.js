const user = {
  name: "bala",
  age: 22,
  city: "Guntur"
};

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(user)
})
  .then(response => response.json())
  .then(data => console.log(data));