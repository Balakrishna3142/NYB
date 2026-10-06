import React from "react";

function App() {
  const name = "Balu";

  function greet() {
    return "Welcome to React";
  }

  return (
    <div>
      <h1>{greet()}</h1>
      <h2>Hello, {name}</h2>
      <p>This is my first React application.</p>

      <button onClick={() => alert("Button Clicked!")}>
        Click Me
      </button>
    </div>
  );
}

export default App;