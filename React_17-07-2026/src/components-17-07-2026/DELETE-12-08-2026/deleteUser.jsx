async function deleteUser() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1",
    {
      method: "DELETE"
    }
  );

  if (response.ok) {
    console.log("User deleted successfully");
  }
}

deleteUser();