import useCounter from "./useCounter";

function CounterOne() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h2>Counter One</h2>
      <p>Count: {count}</p>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default CounterOne;