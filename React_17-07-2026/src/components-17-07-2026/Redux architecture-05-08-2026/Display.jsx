import { useSelector } from "react-redux";

function Display() {
  const count = useSelector((state) => state.counter.count);

  return (
    <h2>Count : {count}</h2>
  );
}

export default Display;