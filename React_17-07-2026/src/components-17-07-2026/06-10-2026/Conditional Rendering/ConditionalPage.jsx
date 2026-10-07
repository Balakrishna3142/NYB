import { useState } from "react";

function ConditionalPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Conditional Rendering</h1>

      {isLoggedIn ? (
        <h2>Welcome User!</h2>
      ) : (
        <h2>Please Login</h2>
      )}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default ConditionalPage;