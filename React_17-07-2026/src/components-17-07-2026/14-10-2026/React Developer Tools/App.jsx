
import { useState, Profiler, memo } from "react";

const Child = memo(function Child({ name }) {
  console.log("Child rendered");

  return <h3>Hello, {name}!</h3>;
});

function onRenderCallback(
  id,
  phase,
  actualDuration,
  baseDuration
) {
  console.log("Profiler:", id);
  console.log("Phase:", phase);
  console.log("Actual duration:", actualDuration, "ms");
  console.log("Base duration:", baseDuration, "ms");
}

function App() {
  const [count, setCount] = useState(0);

  console.log("App rendered");

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Performance Profiling</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(c => c + 1)}>
        Increase Count
      </button>

      <Profiler id="ChildSection" onRender={onRenderCallback}>
        <Child name="Ravi" />
      </Profiler>
    </div>
  );
}

export default App;
