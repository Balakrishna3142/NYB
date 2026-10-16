
import { useRef } from "react";

export default function UncontrolledForm() {
  const nameRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    alert("Your name is: " + nameRef.current.value);
  }

  return (
    <div>
      <h2>Uncontrolled Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          ref={nameRef}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
