import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  function goHome() {
    navigate("/");
  }

  return (
    <div>
      <h2>Dashboard</h2>

      <p>Welcome to your protected dashboard.</p>

      <button onClick={goHome}>
        Go to Home
      </button>
    </div>
  );
}

export default Dashboard;