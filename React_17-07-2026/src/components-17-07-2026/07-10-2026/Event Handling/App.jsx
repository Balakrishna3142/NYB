import React from "react";

function App() {

  // Event Handler
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <div>
      <h1>Event Handling Example</h1>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;