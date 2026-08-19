import useCounter from "./useCounter";

function CounterTwo() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h2>Counter Two</h2>
      <p>Count: {count}</p>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default CounterTwo;