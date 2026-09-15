async function getUser() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  const data = await response.json();

  console.log(data);
}

getUser();