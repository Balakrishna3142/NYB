import React from "react";

function Babel() {

  // =====================================
  // Arrow Function
  // =====================================

  const add = (a, b) => {
    return a + b;
  };


  // =====================================
  // Template Literal
  // =====================================

  const name = "React";

  const message = `Hello ${name}`;


  // =====================================
  // Destructuring
  // =====================================

  const student = {
    name: "Ravi",
    age: 22
  };

  const { name: studentName, age } = student;


  // =====================================
  // Spread Operator
  // =====================================

  const numbers = [10, 20, 30];

  const newNumbers = [
    ...numbers,
    40
  ];


  // =====================================
  // Optional Chaining
  // =====================================

  const user = {
    profile: {
      city: "Hyderabad"
    }
  };

  const city = user?.profile?.city;


  return (
    <div>

      <h2>Babel - Modern JavaScript</h2>

      <h3>1. Arrow Function</h3>

      <p>
        10 + 20 = {add(10, 20)}
      </p>


      <h3>2. Template Literal</h3>

      <p>
        {message}
      </p>


      <h3>3. Destructuring</h3>

      <p>
        Name: {studentName}
      </p>

      <p>
        Age: {age}
      </p>


      <h3>4. Spread Operator</h3>

      <p>
        {newNumbers.join(", ")}
      </p>


      <h3>5. Optional Chaining</h3>

      <p>
        City: {city}
      </p>

    </div>
  );
}

export default Babel;