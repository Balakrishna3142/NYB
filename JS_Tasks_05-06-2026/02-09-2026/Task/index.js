
let user = {
  name: "krishna",
  age: 20,
  email: "ravi@gmail.com"
};

try {
  // Convert object into JSON string
  let userData = JSON.stringify(user);

  // Store data in Local Storage
  localStorage.setItem("user", userData);

  console.log("User data stored successfully!");

  // Get data from Local Storage
  let storedData = localStorage.getItem("user");

  // Convert JSON string back to object
  let newUser = JSON.parse(storedData);

  console.log("Name:", newUser.name);
  console.log("Age:", newUser.age);
  console.log("Email:", newUser.email);

} catch (error) {
  console.log("Error:", error.message);
}