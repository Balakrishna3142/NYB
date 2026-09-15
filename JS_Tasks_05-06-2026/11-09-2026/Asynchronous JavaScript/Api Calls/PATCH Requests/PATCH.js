async function updateEmail() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1",
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: "newemail@example.com"
      })
    }
  );

  const data = await response.json();

  console.log(data);
}

updateEmail();