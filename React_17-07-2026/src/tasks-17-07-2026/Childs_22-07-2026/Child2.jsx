import React, { useState } from "react";
import Child3 from "./Child3";



function Child2() {
  const [A, setA] = useState(10);

  return (
    <div>
      <h2>Child2 Component: {A}</h2>

      <Child3 value={A} />
    </div>
  );
}

export default Child2;