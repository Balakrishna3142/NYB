import { useState } from "react";

function NormalComponent({ name }) {
  console.log("NormalComponent Rendered");

  return (
    <div
      style={{
        border: "2px solid red",
        padding: "20px",
        margin: "10px"
      }}
    >
      <h2>Normal Component</h2>
      <p>Hello {name}</p>
    </div>
  );
}

export default NormalComponent;