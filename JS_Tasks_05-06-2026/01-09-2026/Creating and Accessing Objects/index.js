



//  Creating an object
let student = {
    name: "balakishna",
    age: 20,
    course: "JavaScript"
};

console.log("1. Student Object:", student);


// . Accessing properties using dot notation
console.log("2. Name:", student.name);
console.log("   Age:", student.age);
console.log("   Course:", student.course);


// . Accessing properties using bracket notation
console.log("3. Name:", student["name"]);
console.log("   Age:", student["age"]);


// . Adding a new property
student.city = "Hyderabad";

console.log("4. After adding city:", student);


// . Modifying an existing property
student.age = 21;

console.log("5. Updated age:", student.age);


//  Deleting a property
delete student.city;

console.log("6. After deleting city:", student);


//  Creating an object with different data types
let employee = {
    name: "Pavani",
    age: 25,
    salary: 30000,
    isEmployee: true
};

console.log("7. Employee Name:", employee.name);
console.log("   Salary:", employee.salary);
console.log("   Employee:", employee.isEmployee);


// . Object containing an array
let person = {
    name: "naresh",
    hobbies: ["Reading", "Cricket", "Music"]
};

console.log("8. Person Name:", person.name);
console.log("   First Hobby:", person.hobbies[0]);
console.log("   All Hobbies:", person.hobbies);


// . Object containing another object
let college = {
    name: "jkc College",
    address: {
        city: "guntur",
        state: "ap"
    }
};

console.log("9. College Name:", college.name);
console.log("   City:", college.address.city);
console.log("   State:", college.address.state);


// . Object with a method
let calculator = {
    a: 10,
    b: 20,

    add: function() {
        return this.a + this.b;
    }
};

console.log("10. Addition:", calculator.add());