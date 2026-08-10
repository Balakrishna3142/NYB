import UserStatus from "./UserStatus";

function Home() {
  const isLoggedIn = true;

  return (
    <div>
      <h1>Home Page</h1>

      <UserStatus isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default Home;