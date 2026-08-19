import useCounter from "./useCounter";

function AnotherCounter() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <h2>Another Count: {count}</h2>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default AnotherCounter;