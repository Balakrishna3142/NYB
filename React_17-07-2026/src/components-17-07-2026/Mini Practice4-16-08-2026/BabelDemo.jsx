import React from "react";
import Feature from "./Feature";

function BabelDemo() {

  // 1. Arrow Function
  const add = (a, b) => a + b;


  // 2. Template Literal
  const name = "Ravi";

  const greeting = `Hello ${name}`;


  // 3. Destructuring
  const student = {
    name: "Kiran",
    age: 22
  };

  const { name: studentName, age } = student;


  // 4. Spread Operator
  const numbers = [10, 20, 30];

  const newNumbers = [
    ...numbers,
    40
  ];


  // 5. Default Parameter
  const greet = (
    userName = "Guest"
  ) => {
    return `Welcome ${userName}`;
  };


  // 6. Optional Chaining
  const user = {
    profile: {
      city: "Hyderabad"
    }
  };

  const city = user?.profile?.city;


  return (
    <div>

      <h2>Babel Modern JavaScript Demo</h2>

      <Feature
        title="1. Arrow Function"
        result={`10 + 20 = ${add(10, 20)}`}
      />

      <Feature
        title="2. Template Literal"
        result={greeting}
      />

      <Feature
        title="3. Destructuring"
        result={`Name: ${studentName}, Age: ${age}`}
      />

      <Feature
        title="4. Spread Operator"
        result={newNumbers.join(", ")}
      />

      <Feature
        title="5. Default Parameter"
        result={greet()}
      />

      <Feature
        title="6. Optional Chaining"
        result={`City: ${city}`}
      />

    </div>
  );
}

export default BabelDemo;