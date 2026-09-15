async function createUser() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "krishna",
        email: "krishn@example.com"
      })
    }
  );

  const data = await response.json();

  console.log(data);
}

createUser();