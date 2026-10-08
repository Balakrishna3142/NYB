import React from "react";

function App() {
  const isLoggedIn = true;

  return (
    <div>
      <h1>Conditional Rendering Example</h1>

      {isLoggedIn ? (
        <h2>Welcome, User!</h2>
      ) : (
        <h2>Please Login</h2>
      )}
    </div>
  );
}

export default App;