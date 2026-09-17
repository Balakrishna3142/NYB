

let students = [
    {
        id: 1,
        name: "Rahul",
        marks: [80, 75, 90]
    },
    {
        id: 2,
        name: "Priya",
        marks: [95, 88, 92]
    },
    {
        id: 3,
        name: "Arun",
        marks: [60, 55, 70]
    },
    {
        id: 4,
        name: "Sneha",
        marks: [85, 90, 80]
    }
];

// 1. Calculate total and average for each student
let results = students.map(student => {
    let total = student.marks.reduce((sum, mark) => sum + mark, 0);
    let average = total / student.marks.length;

    return {
        ...student,
        total: total,
        average: average
    };
});

console.log("Student Results:");
console.log(results);


// 2. Find students who scored average >= 80
let passedStudents = results.filter(student => student.average >= 80);

console.log("\nStudents with average >= 80:");
console.log(passedStudents);


// 3. Get only the names of passed students
let passedNames = passedStudents.map(student => student.name);

console.log("\nPassed Student Names:");
console.log(passedNames);


// 4. Find the student with the highest average
let topStudent = results.reduce((top, student) => {
    return student.average > top.average ? student : top;
});

console.log("\nTop Student:");
console.log(topStudent);


// 5. Create an object using student ID as the key
let studentSummary = Object.fromEntries(
    results.map(student => [
        student.id,
        {
            name: student.name,
            average: student.average
        }
    ])
);

console.log("\nStudent Summary:");
console.log(studentSummary);