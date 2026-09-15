// Function and Scope Practice

// Global Scope
let name = "Ravi";

// Normal Function
function add(a, b) {
    return a + b;
}

// Function with Scope
function calculate() {
    let age = 20; // Function Scope

    console.log("Name:", name);
    console.log("Age:", age);

    // Arrow Function
    const multiply = (x, y) => x * y;

    console.log("Addition:", add(10, 20));
    console.log("Multiplication:", multiply(10, 5));
}

// Callback Function
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function welcome() {
    console.log("Welcome to JavaScript");
}

// Function Calls
calculate();
greet(name, welcome);