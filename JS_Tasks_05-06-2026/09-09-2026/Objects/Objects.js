// Creating an Object
let student = {
    name: "Rahul",
    age: 20,
    course: "JavaScript",
    marks: 85
};

console.log("Student:", student);


// Accessing Properties
console.log("Name:", student.name);
console.log("Age:", student["age"]);


// Updating Properties
student.age = 21;
student.marks = 90;

console.log("Updated Age:", student.age);
console.log("Updated Marks:", student.marks);


// Nested Objects
let college = {
    name: "ABC College",
    location: {
        city: "Vinukonda",
        state: "Andhra Pradesh"
    }
};

console.log("College:", college.name);
console.log("City:", college.location.city);
console.log("State:", college.location.state);


// Object Methods
let person = {
    name: "Rahul",
    age: 21,

    greet: function() {
        return "Hello, my name is " + this.name;
    }
};

console.log(person.greet());


// Object.keys()
console.log("Keys:", Object.keys(student));


// Object.values()
console.log("Values:", Object.values(student));


// Object.entries()
console.log("Entries:", Object.entries(student));


// Shallow Copy
let original = {
    name: "Rahul",
    age: 21,
    address: {
        city: "Vinukonda"
    }
};

let shallowCopy = { ...original };

shallowCopy.name = "Ravi";
shallowCopy.address.city = "Guntur";

console.log("Original after shallow copy:", original);
console.log("Shallow Copy:", shallowCopy);


// Deep Copy
let original2 = {
    name: "Rahul",
    age: 21,
    address: {
        city: "podili"
    }
};

let deepCopy = JSON.parse(JSON.stringify(original2));

deepCopy.name = "Ravi";
deepCopy.address.city = "Guntur";

console.log("Original after deep copy:", original2);
console.log("Deep Copy:", deepCopy);