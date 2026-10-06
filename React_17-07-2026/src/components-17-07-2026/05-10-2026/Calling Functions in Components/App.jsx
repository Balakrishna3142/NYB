function App() {

  function greet() {
    return "Welcome to React";
  }

  function add(a, b) {
    return a + b;
  }

  return (
    <div>
      <h1>Student Details</h1>

      <p>{greet()}</p>

      <p>Sum: {add(10, 20)}</p>
    </div>
  );
}

export default App;