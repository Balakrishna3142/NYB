import React, { lazy, Suspense } from "react";

const About = lazy(() => import("./About"));

function App() {
  return (
    <div>
      <h1>My Website</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <About />
      </Suspense>
    </div>
  );
}

export default App;