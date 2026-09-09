//  Function Declaration
function add(a, b) {
    return a + b;
}

console.log("Function Declaration:", add(10, 20));


//  Function Expression
const multiply = function(a, b) {
    return a * b;
};

console.log("Function Expression:", multiply(5, 4));


//  Arrow Function
const square = (n) => n * n;

console.log("Arrow Function:", square(6));


//  Parameters and Arguments
function greet(name) {       // name = parameter
    return "Hello " + name;
}

console.log("Parameters & Arguments:", greet("John")); // John = argument


//  Default Parameters
function welcome(name = "Guest") {
    return "Welcome " + name;
}

console.log("Default Parameter:", welcome());
console.log("Default Parameter:", welcome("Alice"));


//  Rest Parameters
function sum(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log("Rest Parameters:", sum(10, 20, 30, 40));


//  Arguments Object
function showArguments() {
    console.log("Arguments Object:");

    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

showArguments("Apple", "Banana", "Mango");


//. Recursive Function
function factorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log("Recursive Function:", factorial(5));


// . Callback Function
function calculate(a, b, operation) {
    return operation(a, b);
}

function subtract(x, y) {
    return x - y;
}

console.log("Callback Function:", calculate(20, 8, subtract));