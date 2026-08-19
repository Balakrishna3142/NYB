import React from "react";

const PureComponent = React.memo(function PureComponent({ name }) {
  console.log("PureComponent Rendered");

  return (
    <div
      style={{
        border: "2px solid green",
        padding: "20px",
        margin: "10px"
      }}
    >
      <h2>Pure Component</h2>
      <p>Hello {name}</p>
    </div>
  );
});

export default PureComponent;