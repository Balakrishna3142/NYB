import React, { useState } from "react";

import LoginLogout from "./LoginLogout";
import AdminDashboard from "./AdminDashboard";
import TeacherDashboard from "./TeacherDashboard";
import StudentDashboard from "./StudentDashboard";

function MiniPractice() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState("student");

  return (
    <div>
      <h1>Mini Practice</h1>

      <LoginLogout />

      <hr />

      <h2>Select User Type</h2>

      <button onClick={() => setUserType("admin")}>
        Admin
      </button>

      <button onClick={() => setUserType("teacher")}>
        Teacher
      </button>

      <button onClick={() => setUserType("student")}>
        Student
      </button>

      <hr />

      <h2>User Type: {userType}</h2>

      {userType === "admin" && <AdminDashboard />}

      {userType === "teacher" && <TeacherDashboard />}

      {userType === "student" && <StudentDashboard />}
    </div>
  );
}

export default MiniPractice;