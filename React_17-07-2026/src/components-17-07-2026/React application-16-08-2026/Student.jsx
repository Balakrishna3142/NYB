import React from "react";

function Student({ name, age, isPassed }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "10px 0",
        borderRadius: "8px"
      }}
    >
      <h3>{name}</h3>

      <p>Age: {age}</p>

      {/* Conditional Rendering */}
      {isPassed ? (
        <p> Status: Passed</p>
      ) : (
        <p> Status: Failed</p>
      )}
    </div>
  );
}

export default Student;