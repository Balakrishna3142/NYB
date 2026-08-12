import Users from "./Users";
import withLoading from "./withLoading";

const UsersWithLoading = withLoading(Users);

function App() {
  const users = [
    { id: 1, name: "Bala" },
    { id: 2, name: "krishna" },
    { id: 3, name: "pavani" }
  ];

  const isLoading = false;

  return (
    <UsersWithLoading
      isLoading={isLoading}
      users={users}
    />
  );
}

export default App;