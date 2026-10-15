
import { useState, memo, useMemo } from "react";

const Child = memo(function Child({ user }) {
  console.log("Child rendered");

  return (
    <h2>
      Name: {user.name}
    </h2>
  );
});

function App() {
  const [count, setCount] = useState(0);

  // Same object reference while count changes
  const user = useMemo(() => {
    return { name: "Ravi" };
  }, []);

  console.log("Parent rendered");

  return (
    <div>
      <h1>Referential Equality</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(c => c + 1)}>
        Increase Count
      </button>

      <Child user={user} />
    </div>
  );
}

export default App;
