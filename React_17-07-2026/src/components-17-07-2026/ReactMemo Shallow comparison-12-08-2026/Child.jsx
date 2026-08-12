import React from "react";

function Child({ name, age }) {
  console.log("Child rendered");

  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

export default React.memo(Child);