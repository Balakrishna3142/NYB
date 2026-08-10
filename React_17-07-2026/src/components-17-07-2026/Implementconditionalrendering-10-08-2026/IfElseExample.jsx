import React from "react";

function IfElseExample({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h2>Welcome, User!</h2>;
  } else {
    return <h2>Please Login</h2>;
  }
}

export default IfElseExample;