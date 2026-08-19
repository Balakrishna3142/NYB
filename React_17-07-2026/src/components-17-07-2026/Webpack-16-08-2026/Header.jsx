import React from "react";

function Header() {
  return (
    <header
      style={{
        padding: "20px",
        background: "#222",
        color: "white"
      }}
    >
      <h2>Webpack Learning App</h2>

      <p>
        Module Bundling and Asset Management
      </p>
    </header>
  );
}

export default Header;