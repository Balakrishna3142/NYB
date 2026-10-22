
import React from "react";

// Navbar Component
function Navbar() {
  return <h1>My Student Website</h1>;
}

// Student Component with Props
function Student({ name, course }) {
  return (
    <div>
      <h2>Student Name: {name}</h2>
      <p>Course: {course}</p>
      <hr />
    </div>
  );
}

// Footer Component
function Footer() {
  return <h3>Thank You for Visiting!</h3>;
}

// Main App Component
function App() {
  return (
    <div>
      <Navbar />

      <Student name="Rahul" course="React" />
      <Student name="Priya" course="JavaScript" />
      <Student name="Arun" course="Python" />

      <Footer />
    </div>
  );
}

export default App;
