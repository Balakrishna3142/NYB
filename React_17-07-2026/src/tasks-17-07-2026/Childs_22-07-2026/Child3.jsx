import React, { useState } from "react";
import Child4 from "./Child4";

function Child3({ value }) {
  console.log(value);

  const [A, setA] = useState(20);

  return (
    <div>
      <h3>Child3 Component: {A}</h3>
      <p>Value received from Child2: {value}</p>

      <Child4 value={value} />
    </div>
  );
}

export default Child3;