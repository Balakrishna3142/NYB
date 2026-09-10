// Array Methods 

const students = [
    { id: 1, name: "krisha", age: 20, marks: 85 },
    { id: 2, name: "Priya", age: 21, marks: 92 },
    { id: 3, name: "varun", age: 19, marks: 76 },
    { id: 4, name: "Anu", age: 20, marks: 88 }
];

// 1. Destructuring
const [firstStudent, secondStudent] = students;

const { name, marks } = firstStudent;

console.log("First Student:", name);
console.log("Marks:", marks);

// 2. map() - Create a new array
const studentNames = students.map(student => student.name);

console.log("Student Names:", studentNames);

// 3. filter() - Get students with marks above 80
const passedStudents = students.filter(student => student.marks > 80);

console.log("Students above 80:", passedStudents);

// 4. reduce() - Calculate total marks
const totalMarks = students.reduce((total, student) => {
    return total + student.marks;
}, 0);

console.log("Total Marks:", totalMarks);

// 5. find() - Find a particular student
const student = students.find(student => student.id === 3);

console.log("Found Student:", student);

// 6. Object manipulation using spread operator
const updatedStudent = {
    ...firstStudent,
    marks: 95
};

console.log("Updated Student:", updatedStudent);

// 7. Spread operator with arrays
const newStudents = [
    ...students,
    { id: 5, name: "Arjun", age: 22, marks: 90 }
];

console.log("New Students:", newStudents);

// 8. Rest operator in a function
function calculateAverage(...marks) {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    return total / marks.length;
}

console.log("Average Marks:", calculateAverage(85, 92, 76, 88));

// 9. Object destructuring with default value
const { name: studentName, city = "Vinukonda" } = firstStudent;

console.log("Name:", studentName);
console.log("City:", city);

// 10. Modern JavaScript - template literals
console.log(
    `${studentName} scored ${updatedStudent.marks} marks.`
);