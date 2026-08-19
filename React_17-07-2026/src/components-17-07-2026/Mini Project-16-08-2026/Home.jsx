import React from "react";
import Card from "./Card";

function Home() {
  return (
    <div>

      <h2>Home Page</h2>

      <Card
        title="Module"
        text="React applications are divided into reusable modules."
      />

      <Card
        title="Components"
        text="Components help us organize application code."
      />

      <Card
        title="Pages"
        text="Pages represent different sections of the application."
      />

    </div>
  );
}

export default Home;