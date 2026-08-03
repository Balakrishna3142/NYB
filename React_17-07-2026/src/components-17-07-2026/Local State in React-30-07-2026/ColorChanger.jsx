import { useState } from "react";

function ColorChanger() {

  const [color, setColor] = useState("blue");

  return (
    <div>

      <h2 style={{ color: color }}>
        React Local State
      </h2>

      <button onClick={() => setColor("red")}>
        Red
      </button>

      <button onClick={() => setColor("green")}>
        Green
      </button>

      <button onClick={() => setColor("yellow")}>
        yellow
      </button>

    </div>
  );
}

export default ColorChanger;