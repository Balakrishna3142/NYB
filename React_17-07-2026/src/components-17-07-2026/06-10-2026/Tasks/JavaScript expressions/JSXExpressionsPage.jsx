function JSXExpressionsPage() {
  const name = "krishna";
  const age = 30;
  const a = 10;
  const b = 5;
  const isStudent = true;

  return (
    <div>
      <h1>JavaScript Expressions in JSX</h1>

      {/* Variable */}
      <h2>Name: {name}</h2>

      {/* Mathematical Expression */}
      <p>Age after 5 years: {age + 5}</p>

      {/* Addition */}
      <p>Addition: {a + b}</p>

      {/* Subtraction */}
      <p>Subtraction: {a - b}</p>

      {/* Multiplication */}
      <p>Multiplication: {a * b}</p>

      {/* Division */}
      <p>Division: {a / b}</p>

      {/* Conditional Expression */}
      <p>Status: {isStudent ? "Student" : "Not a Student"}</p>

      {/* String Expression */}
      <p>{"Welcome to React JS"}</p>
    </div>
  );
}

export default JSXExpressionsPage;