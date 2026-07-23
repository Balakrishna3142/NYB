import React, { useState } from "react";

function Child4({ value }) {
  console.log(value);

  const [A, setA] = useState(30);

  return (
    <div>
      <h3>Child4 Component: {A}</h3>
      <p>Value received: {value}</p>
    </div>
  );
}

export default Child4;