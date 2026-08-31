//WeakMap
let student = {
    name: "pavani"
};

let marks = new WeakMap();

marks.set(student, 95);

console.log(marks.get(student));

//WeakSet
let student1 = {
    name: "Bala"
};

let student2 = {
    name: "krishna"
};

let students = new WeakSet();

students.add(student1);
students.add(student2);

console.log(students.has(student1));
console.log(students.has(student2));