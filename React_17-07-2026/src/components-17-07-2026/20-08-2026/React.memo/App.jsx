import React from "react";

const Child = React.memo(({ name }) => {
  console.log("Child rendered");

  return <h2>Hello {name}</h2>;
});

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <Child name="bala" />
    </>
  );
}

export default App;