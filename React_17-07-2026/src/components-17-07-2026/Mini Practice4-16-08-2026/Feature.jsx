import React from "react";

function Feature({ title, result }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "10px 0"
      }}
    >
      <h3>{title}</h3>
      <p>{result}</p>
    </div>
  );
}

export default Feature;