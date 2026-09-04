async function getUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    // Check if API request was successful
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    // Convert response to JSON
    const data = await response.json();

    console.log("API Response:", data);

    return data;

  } catch (error) {
    console.error("API Error:", error.message);
  }
}

getUser();