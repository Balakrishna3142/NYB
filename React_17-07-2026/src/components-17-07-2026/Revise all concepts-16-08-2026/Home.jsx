import React from "react";
import Card from "./Card";

function Home() {

  return (
    <div>

      <h2>Home Page</h2>

      <p>
        Welcome to the React Weekly Revision Project.
      </p>

      <Card
        title="React"
        description="React is a JavaScript library for building user interfaces."
      />

      <Card
        title="React Router"
        description="React Router provides client-side navigation."
      />

      <Card
        title="Components"
        description="Components help us create reusable UI."
      />

    </div>
  );
}

export default Home;