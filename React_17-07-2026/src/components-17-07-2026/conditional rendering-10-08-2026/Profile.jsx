function Profile() {
  const isLoggedIn = false;

  return (
    <div>
      <h1>Profile</h1>

      {isLoggedIn ? (
        <h2>Welcome to your profile</h2>
      ) : (
        <h2>Please login first</h2>
      )}
    </div>
  );
}

export default Profile;