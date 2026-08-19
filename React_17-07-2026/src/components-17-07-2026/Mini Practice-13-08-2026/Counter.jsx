import useCounter from "./useCounter";

function Counter() {
  const { count, increment } = useCounter();

  return (
    <>
      <h3>Counter</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default Counter;