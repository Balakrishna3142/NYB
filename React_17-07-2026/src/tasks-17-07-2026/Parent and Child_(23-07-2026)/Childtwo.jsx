import React from "react";

function Childtwo(props) {
  return (
    <div
      style={{
        border: "1px solid orange",
        padding: "10px",
        marginTop: "10px",
      }}
    >
      <h3>Child Two</h3>
      <p>Count from Parent: {props.count}</p>
    </div>
  );
}

export default Childtwo;