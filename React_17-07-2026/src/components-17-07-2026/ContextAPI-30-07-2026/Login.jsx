import { useContext } from "react";

function Login() {

  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

  return (
    <div>

      <h2>Authentication</h2>

      <h3>
        {isLoggedIn ? "Logged In" : "Logged Out"}
      </h3>

      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>

    </div>
  );
}

export default Login;