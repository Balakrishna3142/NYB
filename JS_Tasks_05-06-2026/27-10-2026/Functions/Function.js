
const output = document.getElementById("output");

function show(title, result) {
  const p = document.createElement("p");
  p.textContent = title + ": " + result;
  output.appendChild(p);
  console.log(title + ":", result);
}

//  Function Declaration
function greet(name) {
  return "Hello, " + name;
}
show("1. Function Declaration", greet("Ravi"));

//  Function Expression
const add = function (a, b) {
  return a + b;
};
show("2. Function Expression", add(10, 20));

//  Arrow Function
const square = n => n * n;
show("3. Arrow Function", square(5));

//  Parameters
function introduce(name, city) {
  return name + " lives in " + city;
}
show("4. Parameters", introduce("Anu", "Hyderabad"));

//  Arguments
function multiply(a, b) {
  return a * b;
}
show("5. Arguments", multiply(4, 5));

//  Default Parameters
function welcome(name = "Guest") {
  return "Welcome " + name;
}
show("6. Default Parameters", welcome());

//  Rest Parameters
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
show("7. Rest Parameters", sum(1, 2, 3, 4));

//  Return Values
function subtract(a, b) {
  return a - b;
}
show("8. Return Values", subtract(10, 3));

//  Callback Functions
function process(callback) {
  return callback("javascript");
}

function uppercase(text) {
  return text.toUpperCase();
}
show("9. Callback Functions", process(uppercase));

//  Higher-Order Functions
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
show("10. Higher-Order Functions", double(8));

//  Immediately Invoked Function Expression (IIFE)
const iifeResult = (function () {
  return "Executed immediately!";
})();
show("11. IIFE", iifeResult);

// Pure Functions
function pureAdd(a, b) {
  return a + b;
}
show("12. Pure Functions", pureAdd(5, 7));

//  Function Scope
function functionScope() {
  const message = "Local variable";
  return message;
}
show("13. Function Scope", functionScope());

//  Lexical Scope
const outerMessage = "Accessible from inner function";

function outer() {
  function inner() {
    return outerMessage;
  }
  return inner();
}
show("14. Lexical Scope", outer());

//  Closures
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
show("15. Closures - First Call", counter());  // 1
show("15. Closures - Second Call", counter()); // 2
show("15. Closures - Third Call", counter());  // 3
