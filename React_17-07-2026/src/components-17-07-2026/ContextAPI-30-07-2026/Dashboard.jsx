import { useContext } from "react";


function Dashboard() {

  const { user } = useContext(AppContext);

  return (
    <div>

      <h2>Dashboard Component</h2>

      <h3>Logged User : {user}</h3>

    </div>
  );
}

export default Dashboard;