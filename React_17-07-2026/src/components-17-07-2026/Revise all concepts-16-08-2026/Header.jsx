import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>

      <h1>React Weekly Revision</h1>

      <nav>

        <Link to="/">Home</Link>
        {" | "}

        <Link to="/concepts">Concepts</Link>
        {" | "}

        <Link to="/routing">Routing</Link>
        {" | "}

        <Link to="/memo">Performance</Link>

      </nav>

      <hr />

    </header>
  );
}

export default Header;