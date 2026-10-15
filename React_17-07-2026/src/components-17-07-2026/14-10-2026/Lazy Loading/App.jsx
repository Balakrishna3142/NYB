
import { lazy, Suspense, useState } from "react";

const Dashboard = lazy(() => import("./Dashboard.jsx"));

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div>
      <h1>React Lazy Loading Example</h1>

      <button onClick={() => setShowDashboard(true)}>
        Load Dashboard
      </button>

      {showDashboard && (
        <Suspense fallback={<p>Loading dashboard...</p>}>
          <Dashboard />
        </Suspense>
      )}
    </div>
  );
}

export default App;
