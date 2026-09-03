// Store data
sessionStorage.setItem("username", "pavani");
sessionStorage.setItem("course", "JavaScript");

// Get data
let username = sessionStorage.getItem("username");
let course = sessionStorage.getItem("course");

console.log("Username:", username);
console.log("Course:", course);