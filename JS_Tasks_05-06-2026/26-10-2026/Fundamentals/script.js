
//  VARIABLES: var, let, const

function runExamples() {
  const output = document.getElementById("output");
  const lines = [];

  function show(title, value) {
    lines.push(title + ": " + value);
  }

  // var: function-scoped, can be redeclared
  var oldVariable = "I am var";
  var oldVariable = "var can be redeclared";
  show("var", oldVariable);

  // let: block-scoped, can be reassigned
  let name = "Rahul";
  name = "Arun";
  show("let", name);

  // const: block-scoped, cannot be reassigned
  const country = "India";
  show("const", country);

  // const objects can still be modified
  const student = { name: "Priya" };
  student.name = "Anu";
  show("const object property", student.name);

  // ==================================================
  // 5. SCOPE
  // ==================================================

  // Global scope
  const globalMessage = "Global scope";

  function scopeExample() {
    // Function scope
    var functionVariable = "Function scope";

    // Block scope
    if (true) {
      let blockVariable = "Block scope";
      show("Block variable", blockVariable);
    }

    show("Function variable", functionVariable);
    show("Global variable", globalMessage);
  }

  scopeExample();

  // ==================================================
  // 6. HOISTING
  // ==================================================

  // var declarations are hoisted and initialized as undefined.
  show("var hoisting", hoistedVar);
  var hoistedVar = "Initialized";

  // Function declarations can be called before their definition.
  show("Function hoisting", hoistedFunction());

  function hoistedFunction() {
    return "Function declaration works";
  }

  // let and const are hoisted but cannot be accessed
  // before initialization (Temporal Dead Zone).
  show("TDZ", "Accessing let/const before initialization causes ReferenceError");

  // ==================================================
  // 7. DATA TYPES
  // ==================================================

  const text = "Hello JavaScript"; // String
  const age = 25;                  // Number
  const isStudent = true;          // Boolean
  let unknown;                     // Undefined
  const emptyValue = null;         // Null
  const bigNumber = 12345678901234567890n; // BigInt
  const uniqueId = Symbol("id");   // Symbol

  show("String", text);
  show("Number", age);
  show("Boolean", isStudent);
  show("Undefined", unknown);
  show("Null", emptyValue);
  show("BigInt", bigNumber);
  show("Symbol", uniqueId.toString());

  // Reference data types
  const person = { name: "Rahul", age: 25 };
  const numbers = [10, 20, 30];

  show("Object", JSON.stringify(person));
  show("Array", numbers.join(", "));

  // ==================================================
  // 8. TYPE CONVERSION AND COERCION
  // ==================================================

  const numericString = "100";

  show("String to number", Number(numericString));
  show("Number to string", String(123));
  show("String to boolean", Boolean("hello"));

  // Explicit conversion
  show("Explicit conversion", Number("5") + 2);

  // Implicit coercion
  show("Implicit coercion", "5" + 2);
  show("Implicit numeric coercion", "5" - 2);

  // typeof
  show("typeof string", typeof "Hello");
  show("typeof number", typeof 42);
  show("typeof boolean", typeof true);
  show("typeof undefined", typeof undefined);
  show("typeof object", typeof {});
  show("typeof array", typeof []);
  show("typeof null (historical quirk)", typeof null);

  // ==================================================
  // 9. OPERATORS
  // ==================================================

  // Arithmetic operators
  show("Addition", 10 + 5);
  show("Subtraction", 10 - 5);
  show("Multiplication", 10 * 5);
  show("Division", 10 / 5);
  show("Remainder", 10 % 3);
  show("Exponent", 2 ** 3);

  // Assignment operators
  let total = 10;
  total += 5;
  show("Assignment +=", total);

  // Comparison operators
  show("Equal value ==", 5 == "5");
  show("Strict equality ===", 5 === "5");
  show("Not equal !=", 5 != 3);
  show("Greater than", 10 > 5);

  // Logical operators
  show("AND &&", true && false);
  show("OR ||", true || false);
  show("NOT !", !true);

  // Ternary operator
  const result = age >= 18 ? "Adult" : "Minor";
  show("Ternary operator", result);

  // Nullish coalescing
  const userName = null;
  show("Nullish coalescing", userName ?? "Guest");

  // Optional chaining
  const user = { address: { city: "Hyderabad" } };
  show("Optional chaining", user.address?.city);
  show("Missing property", user.contact?.phone);

  // ==================================================
  // 10. CONDITIONAL STATEMENTS
  // ==================================================

  const marks = 75;

  if (marks >= 90) {
    show("if/else", "Grade A");
  } else if (marks >= 60) {
    show("if/else if", "Grade B");
  } else {
    show("else", "Grade C");
  }

  // switch
  const day = 2;

  switch (day) {
    case 1:
      show("Switch", "Monday");
      break;
    case 2:
      show("Switch", "Tuesday");
      break;
    default:
      show("Switch", "Other day");
  }

  // ==================================================
  // 11. LOOPS
  // ==================================================

  // for loop
  let forResult = "";

  for (let i = 1; i <= 5; i++) {
    forResult += i + " ";
  }

  show("for loop", forResult);

  // while loop
  let count = 1;
  let whileResult = "";

  while (count <= 3) {
    whileResult += count + " ";
    count++;
  }

  show("while loop", whileResult);

  // do...while executes at least once
  let number = 1;
  let doResult = "";

  do {
    doResult += number + " ";
    number++;
  } while (number <= 3);

  show("do...while", doResult);

  // break stops a loop
  let breakResult = "";

  for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    breakResult += i + " ";
  }

  show("break", breakResult);

  // continue skips the current iteration
  let continueResult = "";

  for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    continueResult += i + " ";
  }

  show("continue", continueResult);

  //  FINAL OUTPUT
  

  output.textContent = lines.join("\n");
}

function clearOutput() {
  document.getElementById("output").textContent =
    "Click 'Run All Examples' to see results.";
}
