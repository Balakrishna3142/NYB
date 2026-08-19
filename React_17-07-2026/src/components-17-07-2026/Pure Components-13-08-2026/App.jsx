import { useState } from "react";

import NormalComponent from "./NormalComponent";
import PureComponent from "./PureComponent";

function App() {

  const [count, setCount] = useState(0);

  const [name, setName] = useState("pavani")

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial"
      }}
    >

      <h1>Pure Component vs Normal Component</h1>

      <hr />

      <h2>Parent Component</h2>

      <h3>Count: {count}</h3>

      <button
        onClick={() => setCount(count + 1)}
      >
        Increase Count
      </button>

      <br />
      <br />

      <button
        onClick={() => setName("Krishna")}
      >
        Change Name
      </button>

      <hr />

      <NormalComponent name={name} />

      <PureComponent name={name} />

    </div>
  );
}

export default App;