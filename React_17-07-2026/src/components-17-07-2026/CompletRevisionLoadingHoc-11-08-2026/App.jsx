import Users from "./Users"
import withLoading from "./withLoading";

const UsersWithLoading = withLoading(Users);

function App() {
  const users = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Anil" },
    { id: 3, name: "Priya" }
  ];

  return (
    <UsersWithLoading
      isLoading={false}
      users={users}
    />
  );
}

export default App;