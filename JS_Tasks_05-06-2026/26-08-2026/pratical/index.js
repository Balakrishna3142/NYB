// Parent class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    }
}

// Child class inherits from Person
class Student extends Person {
    constructor(name, age, course) {
        super(name, age); // Call Person's constructor
        this.course = course;
    }

    study() {
        console.log(`${this.name} is studying ${this.course}.`);
    }
}

// Creating objects
const student1 = new Student("bala", 20, "JavaScript");
const student2 = new Student("krishna", 21, "Python");

// Using inherited method
student1.introduce();

// Using Student'method
student1.study();

student2.introduce();
student2.study();