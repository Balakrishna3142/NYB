
// Template Literals
const name = "Ravi";
const age = 21;

console.log(`My name is ${name} and I am ${age} years old.`);

//  Destructuring
const colors = ["Red", "Green", "Blue"];
const [first, second] = colors;

console.log(first, second);

const student = { name: "Ravi", grade: "A" };
const { grade } = student;

console.log(grade);

//  Spread Operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);

//  Rest Operator
function add(...values) {
    return values.reduce((sum, value) => sum + value, 0);
}

console.log(add(10, 20, 30));

//  Default Parameters
function greet(person = "Guest") {
    return `Hello, ${person}!`;
}

console.log(greet("Ravi"));
console.log(greet());

//  Optional Chaining
const user = {
    profile: {
        email: "ravi@example.com"
    }
};

console.log(user.profile?.email);
console.log(user.address?.city);

//  Nullish Coalescing
const username = null;
const count = 0;

console.log(username ?? "Default User");
console.log(count ?? 100); // 0 is preserved

// Enhanced Object Literals
const productName = "Laptop";
const price = 50000;

const product = {
    productName,
    price,
    display() {
        return `${this.productName} costs ₹${this.price}`;
    }
};

console.log(product);
console.log(product.display());

// Display all examples on the HTML page
function runExamples() {
    const output = [
        `1. Template Literals: ${`Hello, ${name}!`}`,
        `2. Destructuring: ${first}, ${second}, Grade ${grade}`,
        `3. Spread Operator: ${JSON.stringify(newNumbers)}`,
        `4. Rest Operator: ${add(10, 20, 30)}`,
        `5. Default Parameters: ${greet()}`,
        `6. Optional Chaining: ${user.address?.city ?? "Not available"}`,
        `7. Nullish Coalescing: ${username ?? "Default User"}`,
        `8. Enhanced Object Literals: ${product.display()}`
    ];

    document.getElementById("output").textContent =
        output.join("\n");
}
