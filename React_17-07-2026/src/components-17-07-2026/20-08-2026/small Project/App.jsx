import React, {
  useState,
  useCallback,
  useMemo,
  memo
} from "react";

const Child = memo(function Child({ onClick, number }) {
  console.log("Child component rendered");

  return (
    <div>
      <h2>Number: {number}</h2>
      <button onClick={onClick}>Click Child</button>
    </div>
  );
});

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  const doubleNumber = useMemo(() => {
    console.log("Calculating...");
    return number * 2;
  }, [number]);

  return (
    <div>
      <h1>Count: {count}</h1>

      <h2>Double Number: {doubleNumber}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <Child onClick={handleClick} number={number} />
    </div>
  );
}

export default App;