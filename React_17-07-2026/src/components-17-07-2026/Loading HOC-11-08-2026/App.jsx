import UserList from "./UserList";
import withLoading from "./withLoading";

const UserListWithLoading = withLoading(UserList);

function App() {
  return (
    <UserListWithLoading isLoading={true} />
  );
}

export default App;