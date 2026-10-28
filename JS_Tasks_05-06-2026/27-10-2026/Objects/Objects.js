
//  Creating Objects
const student = {
    name: "Ravi",
    age: 20
};

//  Properties
console.log(student.name);
student.age = 21;
student.city = "Hyderabad";

// Methods
const person = {
    name: "Ravi",
    greet() {
        return "Hello " + this.name;
    }
};
console.log(person.greet());

//. Nested Objects
const employee = {
    name: "Anu",
    address: {
        city: "Chennai",
        country: "India"
    }
};
console.log(employee.address.city);

//  Object Destructuring
const { name, age } = student;
console.log(name, age);

//  Array Destructuring
const colors = ["Red", "Green", "Blue"];
const [first, second] = colors;
console.log(first, second);

// . Spread Operator
const oldUser = { name: "Ravi", age: 20 };
const newUser = { ...oldUser, city: "Delhi" };
console.log(newUser);

// . Rest Operator
function addNumbers(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(addNumbers(10, 20, 30));

const { name: userName, ...details } = {
    name: "Anu",
    age: 22,
    city: "Mumbai"
};
console.log(userName, details);

// 9. Computed Properties
const key = "email";
const user = {
    name: "Sam",
    [key]: "sam@example.com"
};
console.log(user);

// 10. Object.keys()
const book = {
    title: "JavaScript",
    price: 500,
    author: "John"
};
console.log(Object.keys(book));

// 11. Object.values()
console.log(Object.values(book));

// 12. Object.entries()
console.log(Object.entries(book));


// Display results on the webpage
function runExamples() {
    const output = document.getElementById("output");

    output.textContent =
        "1. Creating Objects: " + JSON.stringify(student) + "\n\n" +
        "2. Properties: " + student.name + ", " + student.age + "\n\n" +
        "3. Methods: " + person.greet() + "\n\n" +
        "4. Nested Objects: " + employee.address.city + "\n\n" +
        "5. Object Destructuring: " + name + ", " + age + "\n\n" +
        "6. Array Destructuring: " + first + ", " + second + "\n\n" +
        "7. Spread Operator: " + JSON.stringify(newUser) + "\n\n" +
        "8. Rest Operator: " + addNumbers(10, 20, 30) + "\n\n" +
        "9. Computed Properties: " + JSON.stringify(user) + "\n\n" +
        "10. Object.keys(): " + JSON.stringify(Object.keys(book)) + "\n\n" +
        "11. Object.values(): " + JSON.stringify(Object.values(book)) + "\n\n" +
        "12. Object.entries(): " + JSON.stringify(Object.entries(book));
}
