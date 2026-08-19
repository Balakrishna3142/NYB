import React, {
  useState,
  useMemo,
  useCallback
} from "react";

function Counter() {

  const [count, setCount] =
    useState(0);


  const [number, setNumber] =
    useState(5);


  // useMemo

  const calculation = useMemo(() => {

    console.log(
      "Expensive calculation running..."
    );

    return number * number;

  }, [number]);


  // useCallback

  const increase = useCallback(() => {

    setCount(
      (prev) => prev + 1
    );

  }, []);


  return (
    <div>

      <h2>Counter</h2>

      <h3>
        Count: {count}
      </h3>

      <button onClick={increase}>
        Increase
      </button>


      <hr />


      <h3>
        Number: {number}
      </h3>

      <h3>
        Square: {calculation}
      </h3>

      <button
        onClick={() =>
          setNumber(
            number + 1
          )
        }
      >
        Change Number
      </button>

    </div>
  );
}

export default Counter;