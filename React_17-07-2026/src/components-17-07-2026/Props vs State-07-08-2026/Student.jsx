import { useState } from "react";

function Student({ name }) {
  const [age, setAge] = useState(20);

  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>

      <button onClick={() => setAge(age + 1)}>
        Increase Age
      </button>
    </div>
  );
}

export default Student;