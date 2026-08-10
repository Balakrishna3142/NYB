import React, { useState } from "react";

import LoginMessage from "./LoginMessage";
import AdminDashboard from "./AdminDashboard";
import TeacherDashboard from "./TeacherDashboard";
import StudentDashboard from "./StudentDashboard";

function RoleBasedRendering() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState("student");

  if (!isAuthenticated) {
    return (
      <div>
        <h1>Role Based Rendering</h1>

        <LoginMessage />

        <button onClick={() => setIsAuthenticated(true)}>
          Login
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Role Based Rendering</h1>

      <h3>Logged in as: {role}</h3>

      <button onClick={() => setIsAuthenticated(false)}>
        Logout
      </button>

      <hr />

      {role === "admin" && <AdminDashboard />}

      {role === "teacher" && <TeacherDashboard />}

      {role === "student" && <StudentDashboard />}
    </div>
  );
}

export default RoleBasedRendering;