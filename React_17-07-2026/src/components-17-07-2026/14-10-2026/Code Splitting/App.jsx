
import { useState, lazy, Suspense } from "react";

// Load About component only when needed
const About = lazy(() => import("./components/About"));

function App() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div>
      <h1>React Code Splitting Example</h1>

      <p>This is the Home component.</p>

      <button onClick={() => setShowAbout(true)}>
        Load About Page
      </button>

      {showAbout && (
        <Suspense fallback={<p>Loading About...</p>}>
          <About />
        </Suspense>
      )}
    </div>
  );
}

export default App;
