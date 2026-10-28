
//  Different function syntax styles

function add(a, b) {
  return a + b;
}

const multiply = function (a, b) {
  return a * b;
};

const subtract = (a, b) => a - b;


//  Callback and higher-order function

function calculate(a, b, callback) {
  return callback(a, b);
}

const result = calculate(10, 5, (a, b) => a + b);


//  Closure

function createCounter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const counter = createCounter();


//  Array methods

const numbers = [10, 5, 20, 8, 15];

const doubled = numbers.map(n => n * 2);

const filtered = numbers.filter(n => n > 10);

const total = numbers.reduce((sum, n) => sum + n, 0);

const found = numbers.find(n => n > 10);

const sorted = [...numbers].sort((a, b) => a - b);


//  Nested objects

const student = {
  name: "Rahul",
  age: 21,
  address: {
    city: "Hyderabad",
    country: "India"
  }
};

student.address.city = "Chennai";


// 6. Destructuring

const { name, age } = student;

const [first, second, ...remaining] = numbers;


// 7. Spread and rest

const moreNumbers = [...numbers, 25, 30];

const updatedStudent = {
  ...student,
  age: 22
};

function sumAll(...values) {
  return values.reduce((sum, value) => sum + value, 0);
}


// 8. Convert traditional code to ES6+

// Traditional
var oldDouble = function (n) {
  return n * 2;
};

// Modern ES6+
const newDouble = n => n * 2;


// 9. Reusable utility functions

const capitalize = text =>
  text.charAt(0).toUpperCase() + text.slice(1);

const average = values =>
  values.length
    ? values.reduce((sum, n) => sum + n, 0) / values.length
    : 0;


// 10. Combine arrays, objects, and functions

const products = [
  { name: "Laptop", price: 50000, inStock: true },
  { name: "Mouse", price: 500, inStock: false },
  { name: "Keyboard", price: 1500, inStock: true }
];

const availableProducts = products.filter(
  product => product.inStock
);

const productNames = availableProducts.map(
  ({ name }) => name
);

const inventoryValue = availableProducts.reduce(
  (sum, product) => sum + product.price,
  0
);


// Display results in HTML

function runExamples() {
  const results = {
    add: add(10, 5),
    multiply: multiply(10, 5),
    subtract: subtract(10, 5),
    callbackResult: result,
    closureCounter: [counter(), counter(), counter()],
    doubled,
    filtered,
    total,
    found,
    sorted,
    student,
    destructuredName: name,
    destructuredAge: age,
    first,
    second,
    remaining,
    moreNumbers,
    updatedStudent,
    sumAll: sumAll(1, 2, 3, 4),
    oldDouble: oldDouble(5),
    newDouble: newDouble(5),
    capitalized: capitalize("javascript"),
    average: average([10, 20, 30]),
    availableProducts,
    productNames,
    inventoryValue
  };

  document.getElementById("output").textContent =
    JSON.stringify(results, null, 2);
}

document.getElementById("runButton")
  .addEventListener("click", runExamples);

runExamples();
