
import { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("Red");

  return (
    <div>
      <h2>Current Color: {color}</h2>
 <button onClick={() => setColor(color === "Red" ? "Blue" : "Red")}>
  Change Color
</button>
    </div>
  );
}

export default ColorChanger;