// Student object
let student = {
    name: "Rahul",
    age: 20,
    course: "JavaScript"
};

// Convert JavaScript object into JSON string
let studentData = JSON.stringify(student);

// local storage

// Store data in Local Storage
localStorage.setItem("student", studentData);

// Get data from Local Storage
let localData = localStorage.getItem("student");

// Convert JSON string back into JavaScript object
let localStudent = JSON.parse(localData);

console.log("Local Storage:");
console.log(localStudent);
console.log("Student Name:", localStudent.name);


// sessio storage

// Store data in Session Storage
sessionStorage.setItem("student", studentData);

// Get data from Session Storage
let sessionData = sessionStorage.getItem("student");

// Convert JSON string back into JavaScript object
let sessionStudent = JSON.parse(sessionData);

console.log("Session Storage:");
console.log(sessionStudent);
console.log("Student Course:", sessionStudent.course);