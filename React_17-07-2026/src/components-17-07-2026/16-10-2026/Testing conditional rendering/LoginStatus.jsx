
import { useState } from "react";

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, User!</h2>
          <button onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h2>Please log in</h2>
          <button onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default LoginStatus;
