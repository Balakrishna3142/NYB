import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Conditional UI Rendering</h1>

      {isLoggedIn ? (
        <div>
          <h2>Welcome User!</h2>
          <p>You are logged in.</p>

          <button onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h2>Please Login</h2>
          <p>You are not logged in.</p>

          <button onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default App;