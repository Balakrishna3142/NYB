import { useContext } from "react";

function Profile() {

  const { user, setUser } = useContext(AppContext);

  return (
    <div>

      <h2>Profile Component</h2>

      <h3>Name : {user}</h3>

      <button onClick={() => setUser("Krishna")}>
        Change Name
      </button>

    </div>
  );
}

export default Profile;