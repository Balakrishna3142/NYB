import React from "react";

function Childone(props) {
  return (
    <div>
      style={{
        border: "1px solid green",
        padding: "10px",
        marginTop: "10px"
      }}
      <h3>ChildOne</h3>
      <p>Name: {props.name}</p>
    </div>
  )
}

export default Childone3