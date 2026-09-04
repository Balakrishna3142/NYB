async function getUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    // Check if API returned an error status
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    console.log("User:", data.name);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getUser();