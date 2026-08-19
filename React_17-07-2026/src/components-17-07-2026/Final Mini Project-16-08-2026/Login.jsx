import React from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  function handleLogin() {
    setIsLoggedIn(true);

    alert("Login Successful");

    navigate("/dashboard");
  }

  return (
    <div>
      <h2>Login Page</h2>

      <p>Please login to access Dashboard.</p>

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;