let student = {
    name: "Rahul",
    age: 20,
    course: "JavaScript"
};

// Store object
localStorage.setItem(
    "student",
    JSON.stringify(student)
);

// Retrieve object
let storedStudent = JSON.parse(
    localStorage.getItem("student")
);

console.log("Name:", storedStudent.name);
console.log("Age:", storedStudent.age);
console.log("Course:", storedStudent.course);