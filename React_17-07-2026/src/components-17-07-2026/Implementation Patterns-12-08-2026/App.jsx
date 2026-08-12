import Dashboard from "./Dashboard";
import withAuth from "./withAuth";

const ProtectedDashboard = withAuth(Dashboard);

function App() {
  return <ProtectedDashboard />;
}

export default App;