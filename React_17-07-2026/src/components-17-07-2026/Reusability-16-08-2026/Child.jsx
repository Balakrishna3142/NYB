import React from "react";

function Child({ number, onClick }) {

  console.log("Child Component Rendered");

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        marginTop: "20px"
      }}
    >

      <h3>Child Component</h3>

      <p>
        Number: {number}
      </p>

      <button onClick={onClick}>
        Child Button
      </button>

    </div>
  );
}

export default React.memo(Child);