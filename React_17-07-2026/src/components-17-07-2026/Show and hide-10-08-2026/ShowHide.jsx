import React, { useState } from "react";

function ShowHide() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {show && (
        <div>
          <h2>Hello React!</h2>
          <p>This component is displayed dynamically.</p>
        </div>
      )}
    </div>
  );
}

export default ShowHide;