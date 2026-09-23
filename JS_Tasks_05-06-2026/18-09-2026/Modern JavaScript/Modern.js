// ======================================================
// ES6+ FEATURES - SINGLE JAVASCRIPT PROGRAM
// ======================================================

// 1. DESTRUCTURING
// ======================================================

const student = {
    name: "Rahul",
    age: 21,
    course: "JavaScript",
    marks: 85
};

// Object Destructuring
const { name, age, course } = student;

console.log("Name:", name);
console.log("Age:", age);
console.log("Course:", course);

// Array Destructuring
const numbers = [10, 20, 30, 40];

const [first, second, ...remainingNumbers] = numbers;

console.log("First:", first);
console.log("Second:", second);
console.log("Remaining:", remainingNumbers);


// 2. SPREAD OPERATOR
// ======================================================

// Array Spread
const fruits1 = ["Apple", "Banana"];
const fruits2 = ["Mango", "Orange"];

const allFruits = [...fruits1, ...fruits2];

console.log("All Fruits:", allFruits);

// Object Spread
const studentDetails = {
    name: "Rahul",
    age: 21
};

const updatedStudent = {
    ...studentDetails,
    course: "JavaScript",
    marks: 90
};

console.log("Updated Student:", updatedStudent);


// 3. REST OPERATOR
// ======================================================

function calculateTotal(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

console.log("Total:", calculateTotal(10, 20, 30, 40));


// 4. TEMPLATE LITERALS
// ======================================================

const userName = "Rahul";
const userAge = 21;

const message = `Hello, my name is ${userName} and I am ${userAge} years old.`;

console.log(message);


// 5. OPTIONAL CHAINING (?.)
// ======================================================

const user = {
    name: "Rahul",
    address: {
        city: "Guntur"
    }
};

console.log("City:", user.address?.city);

// If address does not exist, it returns undefined
console.log("Country:", user.address?.country);

// Without optional chaining, accessing a missing nested
// property can cause an error if an intermediate property is null/undefined.


// 6. NULLISH COALESCING (??)
// ======================================================

const username = null;

const displayName = username ?? "Guest";

console.log("Display Name:", displayName);

// ?? uses the right side only when the left side is
// null or undefined.

const score = 0;

console.log("Score:", score ?? 100);
// Output: 0

// Difference:
// || treats 0, "", false, null and undefined as false.
// ?? only treats null and undefined as missing.


// 7. MAP
// ======================================================

const students = new Map();

students.set(1, "Rahul");
students.set(2, "Priya");
students.set(3, "Arun");

console.log("Student with ID 1:", students.get(1));
console.log("Map Size:", students.size);

console.log("All Students:");

students.forEach((studentName, id) => {
    console.log(id, studentName);
});

console.log("Has ID 2:", students.has(2));

students.delete(3);

console.log("After Delete:", students);


// 8. SET
// ======================================================

const uniqueNumbers = new Set();

uniqueNumbers.add(10);
uniqueNumbers.add(20);
uniqueNumbers.add(30);
uniqueNumbers.add(10); // Duplicate is ignored

console.log("Set:", uniqueNumbers);
console.log("Set Size:", uniqueNumbers.size);
console.log("Has 20:", uniqueNumbers.has(20));

uniqueNumbers.delete(30);

console.log("After Delete:", uniqueNumbers);


// Remove duplicates from an array using Set

const duplicateNumbers = [10, 20, 10, 30, 20, 40];

const uniqueArray = [...new Set(duplicateNumbers)];

console.log("Unique Array:", uniqueArray);


// 9. WEAKMAP

const weakMap = new WeakMap();

const user1 = {
    name: "Rahul"
};

const user2 = {
    name: "Priya"
};

weakMap.set(user1, "User 1 Data");
weakMap.set(user2, "User 2 Data");

console.log("WeakMap User1:", weakMap.get(user1));
console.log("WeakMap Has User2:", weakMap.has(user2));

weakMap.delete(user2);

console.log("WeakMap Has User2 After Delete:", weakMap.has(user2));





// 10. WEAKSET


const weakSet = new WeakSet();

const person1 = {
    name: "Rahul"
};

const person2 = {
    name: "Priya"
};

weakSet.add(person1);
weakSet.add(person2);

console.log("WeakSet Has Person1:", weakSet.has(person1));
console.log("WeakSet Has Person2:", weakSet.has(person2));

weakSet.delete(person2);

console.log("WeakSet Has Person2 After Delete:", weakSet.has(person2));


// 11. MODULES

// FINAL OUTPUT


console.log("================================");
console.log("ES6+ Concepts Completed!");
console.log("================================");