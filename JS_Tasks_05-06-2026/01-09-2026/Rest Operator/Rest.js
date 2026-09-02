let student = {
    name: "krishna",
    age: 30,
    course: "JavaScript",
    marks: 90
};

let { name, ...details } = student;

console.log(name);
console.log(details);