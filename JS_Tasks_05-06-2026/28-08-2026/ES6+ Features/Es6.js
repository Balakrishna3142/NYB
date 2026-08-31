
//  let and const
let name = "Bala";
const age = 21;

//  Template Literals
console.log(`Name: ${name}, Age: ${age}`);

//  Arrow Function
const add = (a, b) => a + b;
console.log("Addition:", add(10, 20));

//  Default Parameters
const greet = (user = "Guest") => `Hello, ${user}!`;
console.log(greet());
console.log(greet("Bala"));

//  Destructuring – Array
const numbers = [10, 20, 30];
const [first, second, third] = numbers;
console.log("Array Destructuring:", first, second, third);

//  Destructuring – Object
const student = {
    studentName: "Bala",
    studentAge: 21,
    course: "JavaScript"
};

const { studentName, studentAge, course } = student;
console.log("Object Destructuring:", studentName, studentAge, course);

//  Spread Operator
const marks1 = [80, 85, 90];
const marks2 = [75, 88, 95];

const allMarks = [...marks1, ...marks2];
console.log("Spread Operator:", allMarks);

// . Rest Operator
const total = (...nums) => {
    return nums.reduce((sum, n) => sum + n, 0);
};

console.log("Rest Operator:", total(10, 20, 30, 40));

// . Enhanced Object Literals
const city = "Visakhapatnam";
const studentInfo = {
    studentName,
    studentAge,
    city
};

console.log("Enhanced Object:", studentInfo);

// . for...of Loop
console.log("for...of:");
for (const mark of allMarks) {
    console.log(mark);
}

// . Map()
const doubled = allMarks.map(mark => mark * 2);
console.log("Map:", doubled);

// . Filter()
const highMarks = allMarks.filter(mark => mark >= 85);
console.log("Filter:", highMarks);

// . Reduce()
const sum = allMarks.reduce((total, mark) => total + mark, 0);
console.log("Reduce:", sum);

// . Set – removes duplicate values
const uniqueMarks = new Set([80, 85, 90, 80, 85, 95]);
console.log("Set:", uniqueMarks);

//  Map – key/value pairs
const studentMap = new Map();
studentMap.set("name", "Rahul");
studentMap.set("age", 21);
studentMap.set("course", "JavaScript");

console.log("Map:", studentMap);
console.log("Student Name:", studentMap.get("name"));

// . Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(`Person: ${this.name}, Age: ${this.age}`);
    }
}

const person1 = new Person("Rahul", 21);
person1.display();

// . Inheritance
class Student extends Person {
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }

    showCourse() {
        console.log(`Course: ${this.course}`);
    }
}

const student1 = new Student("Anil", 22, "ES6+");
student1.display();
student1.showCourse();

//  Promises + async/await
const getData = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data received successfully!");
        }, 1000);
    });
};

async function fetchData() {
    const result = await getData();
    console.log("Async/Await:", result);
}

fetchData();

// . Optional Chaining
const user = {
    profile: {
        email: "rahul@example.com"
    }
};

console.log("Optional Chaining:", user.profile?.email);
console.log("Missing Property:", user.address?.city);

// . Nullish Coalescing
const username = null;
console.log("Nullish Coalescing:", username ?? "Guest");

//  Modules concept

console.log("ES6+ Revision Completed!");