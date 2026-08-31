// ========================================
// COMPLETE JAVASCRIPT REVISION PROGRAM
// ========================================

// . Destructuring
let student = {
    name: "balakrishna",
    age: 20,
    phone: "9876543210"
};

let { name, age, phone } = student;

console.log("Name:", name);
console.log("Age:", age);
console.log("Phone:", phone);


// . Template Literals
console.log(`Hello ${name}, you are ${age} years old.`);


//  Optional Chaining
console.log("Phone:", student.contact?.phone);


//  Nullish Coalescing
let email = null;

console.log("Email:", email ?? "Email Not Available");


//  Spread Operator
let marks = [80, 90, 85];

let newMarks = [...marks, 95];

console.log("Marks:", newMarks);


// . Rest Operator
function calculateTotal(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log("Total:", calculateTotal(10, 20, 30));


// . Map
let students = new Map();

students.set(1, "Rahul");
students.set(2, "Anil");
students.set(3, "Priya");

console.log("Student 1:", students.get(1));
console.log("Map Size:", students.size);


// . Set
let numbers = new Set([10, 20, 20, 30, 30, 40]);

console.log("Unique Numbers:", numbers);
console.log("Set Size:", numbers.size);


// . WeakMap
let studentObject = {
    name: "Rahul"
};

let studentMarks = new WeakMap();

studentMarks.set(studentObject, 95);

console.log("WeakMap Marks:", studentMarks.get(studentObject));


// . WeakSet
let student1 = {
    name: "Rahul"
};

let student2 = {
    name: "Anil"
};

let studentSet = new WeakSet();

studentSet.add(student1);
studentSet.add(student2);

console.log("Student 1 exists:", studentSet.has(student1));
console.log("Student 2 exists:", studentSet.has(student2));