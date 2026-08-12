import Dashboard from "./Dashboard";
import withAuth from "./withAuth";

const ProtectedDashboard = withAuth(Dashboard);

function App() {
  return (
    <div>
      <ProtectedDashboard />
    </div>
  );
}

export default App;