

// . FUNCTIONS
function greetStudent(name) {
    return `Welcome, ${name}!`;
}

console.log(greetStudent("Rahul"));


// . HIGHER ORDER FUNCTION


function calculateMarks(marks, operation) {
    return marks.map(operation);
}

let marks = [70, 80, 90];

let increasedMarks = calculateMarks(marks, function(mark) {
    return mark + 5;
});

console.log("Updated Marks:", increasedMarks);


// . OBJECT MANIPULATION

let student = {
    name: "pavan",
    age: 20,
    course: "JavaScript"
};

// Adding a property
student.phone = "9876543210";

// Updating a property
student.age = 21;

// Deleting a property
delete student.course;

console.log("Student:", student);


// . CLASSES

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}


// . INHERITANCE

class Student extends Person {
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }

    showCourse() {
        console.log(`Course: ${this.course}`);
    }
}

let s1 = new Student("Anil", 20, "JavaScript");

s1.display();
s1.showCourse();


// PROMISE

function getStudentData() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Student data received!");
        }, 1000);

    });
}

getStudentData().then((data) => {
    console.log(data);
});


//  ASYNC / AWAIT

async function displayStudentData() {

    let data = await getStudentData();

    console.log("Async/Await:", data);
}

displayStudentData();


//  EVENT LOOP AND ASYNCHRONOUS EXECUTION

console.log("Start");

setTimeout(() => {
    console.log("setTimeout executed");
}, 0);

console.log("End");


//  MODERN ES6+ FEATURES

// let and const
const college = "ABC College";
let year = 2026;


// Arrow Function
const add = (a, b) => a + b;

console.log("Addition:", add(10, 20));


// Template Literal
console.log(`College: ${college}, Year: ${year}`);


// Destructuring
let { name, age } = student;

console.log("Destructured Name:", name);
console.log("Destructured Age:", age);


// Spread Operator
let oldMarks = [70, 80, 90];
let allMarks = [...oldMarks, 95];

console.log("Spread:", allMarks);


// Rest Operator
function totalMarks(...numbers) {
    return numbers.reduce((sum, n) => sum + n, 0);
}

console.log("Total Marks:", totalMarks(70, 80, 90));


// Optional Chaining
console.log("Email:", student.contact?.email);


// Nullish Coalescing
let email = null;

console.log("Email:", email ?? "Email Not Available");