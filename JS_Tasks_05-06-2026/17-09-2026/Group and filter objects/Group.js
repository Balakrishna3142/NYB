const students = [
    { name: "Rahul", age: 20, department: "CSE", marks: 85 },
    { name: "Priya", age: 21, department: "ECE", marks: 72 },
    { name: "Arjun", age: 19, department: "CSE", marks: 90 },
    { name: "Sneha", age: 20, department: "ECE", marks: 65 },
    { name: "Kiran", age: 22, department: "CSE", marks: 78 }
];

// 1. Filter students who scored 75 or more
const passedStudents = students.filter(student => student.marks >= 75);

console.log("Students with marks >= 75:");
console.log(passedStudents);

// 2. Group students by department
const groupedStudents = students.reduce((groups, student) => {
    if (!groups[student.department]) {
        groups[student.department] = [];
    }

    groups[student.department].push(student);
    return groups;
}, {});

console.log("\nStudents grouped by department:");
console.log(groupedStudents);

// 3. Filter students from CSE department
const cseStudents = students.filter(student => student.department === "CSE");

console.log("\nCSE Students:");
console.log(cseStudents);