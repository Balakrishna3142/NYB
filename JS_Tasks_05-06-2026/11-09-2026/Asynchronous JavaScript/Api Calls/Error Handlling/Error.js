fetch("https://wrong-url-example.com/users")
  .then(response => {
    if (!response.ok) {
      throw new Error("Server error: " + response.status);
    }

    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log("Error:", error.message);
  });