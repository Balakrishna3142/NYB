import React from "react";

function TernaryExample({ isDarkMode }) {
  return (
    <div>
      <h2>{isDarkMode ? "Dark Mode" : "Light Mode"}</h2>
    </div>
  );
}

export default TernaryExample;