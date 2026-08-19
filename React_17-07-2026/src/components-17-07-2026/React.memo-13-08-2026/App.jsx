import { useState } from "react";

import NormalChild from "./NormalChild";
import MemoChild from "./MemoChild";

function App() {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("Balakrishna");

  console.log("App Rendered");

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial"
      }}
    >
      <h1>React.memo() Example</h1>

      <h2>Parent Component</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <br />
      <br />

      <button onClick={() => setName("Krishna")}>
        Change Name
      </button>

      <hr />

      <NormalChild name={name} />

      <MemoChild name={name} />
    </div>
  );
}

export default App;