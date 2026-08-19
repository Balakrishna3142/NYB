import React, {
  useState,
  useMemo,
  useCallback
} from "react";

const Child = React.memo(function Child({ onClick }) {

  console.log("Child Rendered");

  return (
    <button onClick={onClick}>
      Child Button
    </button>
  );
});


function ReactMemoPage() {

  const [count, setCount] = useState(0);

  const [number, setNumber] = useState(10);


  const calculation = useMemo(() => {

    console.log("Calculation Running");

    return number * number;

  }, [number]);


  const handleClick = useCallback(() => {

    alert("Child Button Clicked");

  }, []);


  return (
    <div>

      <h2>Performance Optimization</h2>

      <h3>useMemo Example</h3>

      <p>
        Number: {number}
      </p>

      <p>
        Square: {calculation}
      </p>

      <button
        onClick={() => setNumber(number + 1)}
      >
        Change Number
      </button>


      <h3>React.memo + useCallback</h3>

      <p>
        Count: {count}
      </p>

      <button
        onClick={() => setCount(count + 1)}
      >
        Increase Count
      </button>

      <br />
      <br />

      <Child
        onClick={handleClick}
      />

    </div>
  );
}

export default ReactMemoPage;