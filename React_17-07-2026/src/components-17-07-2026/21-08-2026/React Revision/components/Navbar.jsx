import { Link } from "react-router-dom";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  return (
    <nav>
      <Link to="/">Home</Link>{" "}
      <Link to="/about">About</Link>{" "}
      <Link to="/products">Products</Link>{" "}
      <Link to="/dashboard">Dashboard</Link>{" "}

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

export default Navbar;