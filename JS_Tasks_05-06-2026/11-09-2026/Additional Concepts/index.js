

// Module function
function add(a, b) {
    return a + b;
}

// 2. CLASS AND OBJECT
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    display() {
        console.log("Name:", this.name);
        console.log("Marks:", this.marks);
    }
}

// Creating an object
const student = new Student("Rahul", 85);


// 3. PROTOTYPE
Student.prototype.grade = function () {
    if (this.marks >= 80) {
        return "A";
    } else {
        return "B";
    }
};


// 4. ITERATOR
const numbers = [10, 20, 30];

const iterator = numbers[Symbol.iterator]();

console.log("Iterator:");
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);


// 5. GENERATOR
function* numberGenerator() {
    yield 100;
    yield 200;
    yield 300;
}

const generator = numberGenerator();

console.log("Generator:");
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);


// CLASS AND OBJECT OUTPUT
console.log("Student Details:");
student.display();

console.log("Grade:", student.grade());


// MODULE FUNCTION OUTPUT
console.log("Module Function:");
console.log("Addition:", add(10, 20));