

// Object
let student = {
    name: "Rahul",
    age: 20,
    course: "JavaScript"
};

console.log("Original Object:");
console.log(student);


//  Convert Object into Array
let objectArray = Object.entries(student);

console.log("\nObject converted into Array:");
console.log(objectArray);


//  Convert Array back into Object
let newObject = Object.fromEntries(objectArray);

console.log("\nArray converted back into Object:");
console.log(newObject);


//  Another example: Array of objects
let students = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Priya" },
    { id: 3, name: "Arun" }
];

console.log("\nArray of Objects:");
console.log(students);


//. Convert Array of Objects into Object
let studentObject = Object.fromEntries(
    students.map(student => [student.id, student])
);

console.log("\nArray converted into Object:");
console.log(studentObject);