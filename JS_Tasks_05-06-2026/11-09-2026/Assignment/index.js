//  VARIABLES AND DATA TYPES
let name = "Rahul";       
let age = 20;            
let student = true;       
let marks = [80, 90, 75]; 
let college = {           
    name: "ABC College",
    city: "Guntur"
};

console.log("Name:", name);
console.log("Age:", age);
console.log("Student:", student);


//  CONDITIONAL STATEMENT
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}


// . LOOPS
console.log("Marks:");

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}


//  FUNCTIONS
function calculateTotal(a, b, c) {
    return a + b + c;
}

let total = calculateTotal(80, 90, 75);
console.log("Total:", total);


// ARRAYS AND ARRAY METHODS
let numbers = [10, 20, 30, 40, 50];

numbers.push(60);          // Add element
numbers.pop();             // Remove last element

let doubled = numbers.map(num => num * 2);

console.log("Array:", numbers);
console.log("Doubled:", doubled);


//  OBJECTS
let studentInfo = {
    name: "Rahul",
    age: 20,
    course: "JavaScript"
};

console.log("Student Name:", studentInfo.name);
console.log("Course:", studentInfo.course);


//  MODERN JAVASCRIPT FEATURES


const course = "JavaScript";

const greet = (name) => {
    return `Hello ${name}, welcome to ${course}`;
};

console.log(greet(name));


// Destructuring
const { city } = college;
console.log("College City:", city);


//  DOM MANIPULATION

document.getElementById("message").innerHTML =
    "Welcome to JavaScript!";


//  EVENT HANDLING


document.getElementById("btn").addEventListener("click", function () {
    console.log("Button was clicked!");
});


//  LOCAL STORAGE
localStorage.setItem("studentName", name);

let savedName = localStorage.getItem("studentName");

console.log("Saved Name:", savedName);


//  ASYNCHRONOUS JAVASCRIPT
console.log("Start");

setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

console.log("End");


// API CALL
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        if (!response.ok) {
            throw new Error("API Error: " + response.status);
        }

        return response.json();
    })
    .then(data => {
        console.log("API Response:");
        console.log(data);
    })
    .catch(error => {
        console.log("Error:", error.message);
    });