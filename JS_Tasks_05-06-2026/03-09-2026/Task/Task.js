const output = document.createElement("div");
document.body.appendChild(output);

// Loading message
output.innerHTML = "Loading data...";

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const users = await response.json();

    // Display data dynamically
    output.innerHTML = "<h2>Users</h2>";

    users.forEach((user) => {
      const userElement = document.createElement("p");

      userElement.textContent =
        `Name: ${user.name} | Email: ${user.email}`;

      output.appendChild(userElement);
    });

  } catch (error) {
    // Error handling
    output.innerHTML = `Error: ${error.message}`;
  }
}

fetchUsers();