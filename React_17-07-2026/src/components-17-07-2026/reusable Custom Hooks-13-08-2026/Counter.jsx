import useCounter from "./useCounter";

function Counter() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;