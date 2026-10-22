
import { useState } from "react";

function Student(props) {
  return (
    <div>
      <h3>Student Name: {props.name}</h3>
      <p>Course: {props.course}</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React Functional Components</h1>

      <Student name="Rahul" course="React JS" />
      <Student name="Priya" course="JavaScript" />

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}

export default App;
