import React from "react";

import IfElseExample from "./IfElseExample";
import TernaryExample from "./TernaryExample";
import LogicalAndExample from "./LogicalAndExample";
import SwitchExample from "./SwitchExample";

function ConditionalRendering() {
  return (
    <div>
      <h1>React Conditional Rendering</h1>

      <hr />

      <h2>1. If-Else</h2>
      <IfElseExample isLoggedIn={true} />

      <hr />

      <h2>2. Ternary Operator</h2>
      <TernaryExample isDarkMode={true} />

      <hr />

      <h2>3. Logical && Operator</h2>
      <LogicalAndExample hasMessage={true} />

      <hr />

      <h2>4. Switch Case</h2>
      <SwitchExample role="student" />
    </div>
  );
}

export default ConditionalRendering;