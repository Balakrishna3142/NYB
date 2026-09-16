
//  OBJECT CREATION


let student = {
    name: "krishna",
    age: 20,
    course: "JavaScript",
    marks: 85
};

console.log("Student:", student);



//  NESTED OBJECTS


let employee = {
    name: "Anil",
    age: 25,
    address: {
        city: "Guntur",
        state: "Andhra Pradesh",
        pincode: 522001
    }
};

console.log("City:", employee.address.city);
console.log("Pincode:", employee.address.pincode);



// ACCESSING AND UPDATING PROPERTIES


// Accessing properties
console.log(student.name);
console.log(student["age"]);

// Updating properties
student.age = 21;
student["marks"] = 90;

console.log("Updated Student:", student);



// 4 OBJECT METHODS


let person = {
    name: "Ravi",
    age: 22,

    // Method
    greet: function () {
        return "Hello, my name is " + this.name;
    }
};

console.log(person.greet());



//  Object.keys()


console.log("Keys:", Object.keys(student));



// Object.values()


console.log("Values:", Object.values(student));



//  Object.entries()


console.log("Entries:", Object.entries(student));


// 
// 8. OBJECT DESTRUCTURING


let { name, age, marks } = student;

console.log("Name:", name);
console.log("Age:", age);
console.log("Marks:", marks);


// Nested object destructuring
let { address: { city, state } } = employee;

console.log("City:", city);
console.log("State:", state);



//  SPREAD OPERATOR (...)


// Combining objects
let collegeStudent = {
    name: "Suresh",
    course: "BCA"
};

let studentDetails = {
    age: 21,
    marks: 88
};

let completeStudent = {
    ...collegeStudent,
    ...studentDetails
};

console.log("Combined Object:", completeStudent);


// 10. REST OPERATOR (...)


let user = {
    username: "Rahul",
    age: 20,
    city: "Guntur",
    course: "BCA"
};

let { username, ...otherDetails } = user;

console.log("Username:", username);
console.log("Other Details:", otherDetails);



// 11. SHALLOW COPY


let original = {
    name: "Ravi",
    age: 25
};

// Shallow copy using spread
let shallowCopy = { ...original };

shallowCopy.name = "Kiran";

console.log("Original:", original);
console.log("Shallow Copy:", shallowCopy);


// ==========================================
//  DEEP COPY
// ==========================================

let originalObject = {
    name: "Anil",
    address: {
        city: "Guntur",
        pincode: 522001
    }
};

// Deep copy
let deepCopy = structuredClone(originalObject);

// Change nested property
deepCopy.address.city = "Vijayawada";

console.log("Original Object:", originalObject);
console.log("Deep Copy:", deepCopy);