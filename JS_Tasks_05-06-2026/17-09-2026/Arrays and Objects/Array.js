

// 1. Find the largest number
let numbers = [10, 25, 7, 40, 15];

let largest = Math.max(...numbers);
console.log("1. Largest:", largest);


// 2. Find the sum of array elements
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("2. Sum:", sum);


// 3. Find even numbers
let even = numbers.filter(num => num % 2 === 0);
console.log("3. Even numbers:", even);


// 4. Remove duplicate values
let values = [10, 20, 10, 30, 20, 40];

let unique = [...new Set(values)];
console.log("4. Unique values:", unique);


// 5. Reverse an array
let fruits = ["Apple", "Banana", "Mango", "Orange"];

let reverse = [...fruits].reverse();
console.log("5. Reverse:", reverse);


// 6. Convert object into array
let student = {
    name: "Rahul",
    age: 20,
    course: "JavaScript"
};

let objectArray = Object.entries(student);
console.log("6. Object to Array:", objectArray);


// 7. Convert array into object
let data = [
    ["name", "Priya"],
    ["age", 21],
    ["course", "JavaScript"]
];

let object = Object.fromEntries(data);
console.log("7. Array to Object:", object);


// 8. Find students who passed
let students = [
    { name: "Rahul", marks: 75 },
    { name: "Priya", marks: 45 },
    { name: "Arun", marks: 85 }
];

let passed = students.filter(student => student.marks >= 50);
console.log("8. Passed students:", passed);


// 9. Count repeated values
let colors = ["red", "blue", "red", "green", "blue", "red"];

let count = {};

colors.forEach(color => {
    count[color] = (count[color] || 0) + 1;
});

console.log("9. Count:", count);


// 10. Find student with highest marks
let studentList = [
    { name: "Rahul", marks: 75 },
    { name: "Priya", marks: 92 },
    { name: "Arun", marks: 85 }
];

let topper = studentList.reduce((highest, student) => {
    return student.marks > highest.marks ? student : highest;
});

console.log("10. Topper:", topper);