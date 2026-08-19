import React from "react";
import { Link } from "react-router-dom";

function Navbar({ isLoggedIn, logout }) {
  return (
    <nav>
      <Link to="/">Home</Link>{" | "}
      <Link to="/about">About</Link>{" | "}
      <Link to="/products">Products</Link>{" | "}
      <Link to="/services">Services</Link>{" | "}

      {isLoggedIn ? (
        <>
          <Link to="/dashboard">Dashboard</Link>{" | "}
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

export default Navbar;