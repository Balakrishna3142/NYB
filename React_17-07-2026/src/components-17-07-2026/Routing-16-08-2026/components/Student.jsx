import React from "react";

function Student({
  name,
  age,
  marks
}) {

  console.log(
    "Student Component Rendered:",
    name
  );


  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px"
      }}
    >

      <h3>{name}</h3>

      <p>
        Age: {age}
      </p>

      <p>
        Marks: {marks}
      </p>


      {/* Conditional Rendering */}

      {marks >= 35 ? (
        <p>Passed</p>
      ) : (
        <p> Failed</p>
      )}

    </div>
  );
}

export default React.memo(Student);