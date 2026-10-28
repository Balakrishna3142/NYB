
"use strict";

//  Variables: var, let, const
var name = "Ravi";
let age = 20;
const country = "India";

console.log(name, age, country);

//  Scope
function scopeExample() {
  let message = "Function scope example";

  if (true) {
    let blockMessage = "Block scope";
    console.log(blockMessage);
  }

  console.log(message);
}
scopeExample();

//  Data types
let str = "Hello";
let num = 25;
let bigNum = 123n;
let bool = true;
let nothing = null;
let notAssigned;
let symbolValue = Symbol("id");
let person = { name: "Ravi" };
let numbers = [10, 20, 30];

console.log(typeof str);
console.log(typeof num);
console.log(typeof bigNum);
console.log(typeof bool);
console.log(typeof nothing); // object (JavaScript quirk)
console.log(typeof notAssigned);
console.log(typeof symbolValue);
console.log(typeof person);
console.log(Array.isArray(numbers));

//  Type conversion
let convertedNumber = Number("100");
let convertedString = String(123);
let convertedBoolean = Boolean(1);

console.log(convertedNumber, typeof convertedNumber);
console.log(convertedString, typeof convertedString);
console.log(convertedBoolean);

//  Type coercion
console.log("5" + 2);  // "52"
console.log("5" - 2);  // 3
console.log(true + 1); // 2

//  Operators
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a > b);
console.log(a === b);
console.log(a > 5 && b < 5);
console.log(a > 20 || b < 5);
console.log(!(a > b));

//  Conditional statements
let mark = 75;

if (mark >= 90) {
  console.log("Grade A");
} else if (mark >= 75) {
  console.log("Grade B");
} else if (mark >= 35) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// 8. Switch
let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid day");
}

// 9. For loop
for (let i = 1; i <= 5; i++) {
  console.log("For loop:", i);
}

// 10. While loop
let i = 1;

while (i <= 3) {
  console.log("While loop:", i);
  i++;
}

// 11. Do-while loop
let j = 1;

do {
  console.log("Do-while:", j);
  j++;
} while (j <= 3);

// 12. For...of loop
for (const value of [10, 20, 30]) {
  console.log(value);
}

// 13. For...in loop
const student = { name: "Ravi", age: 20 };

for (const key in student) {
  console.log(key, student[key]);
}

// 14. Break and continue
for (let n = 1; n <= 10; n++) {
  if (n === 3) continue;
  if (n === 8) break;
  console.log(n);
}

// 15. Optional chaining
const user = {
  address: {
    city: "Hyderabad"
  }
};

console.log(user?.address?.city);
console.log(user?.contact?.phone);

// 16. Nullish coalescing
let username = null;
console.log(username ?? "Guest");
console.log(0 ?? 100); // 0

// 17. Even or odd
function evenOrOdd(n) {
  return n % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOdd(7));

// 18. Largest of three numbers
function largest(a, b, c) {
  return Math.max(a, b, c);
}
console.log(largest(10, 25, 17));

// 19. Factorial
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    return "Enter a non-negative integer";
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}
console.log(factorial(5)); // 120

// 20. Reverse a string
function reverseString(text) {
  return [...text].reverse().join("");
}
console.log(reverseString("hello"));

// 21. FizzBuzz
for (let n = 1; n <= 15; n++) {
  if (n % 15 === 0) {
    console.log("FizzBuzz");
  } else if (n % 3 === 0) {
    console.log("Fizz");
  } else if (n % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(n);
  }
}
