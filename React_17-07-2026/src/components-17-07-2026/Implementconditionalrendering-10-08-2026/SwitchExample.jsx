import React from "react";

function SwitchExample({ role }) {
  let message;

  switch (role) {
    case "admin":
      message = "Welcome Admin";
      break;

    case "student":
      message = "Welcome Student";
      break;

    case "teacher":
      message = "Welcome Teacher";
      break;

    default:
      message = "Unknown User";
  }

  return <h2>{message}</h2>;
}

export default SwitchExample;