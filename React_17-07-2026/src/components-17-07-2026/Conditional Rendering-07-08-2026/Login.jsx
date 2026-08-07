function Login({ isLoggedIn }) {

  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome</h2>
      ) : (
        <h2>Please Login</h2>
      )}
    </div>
  );
}

export default Login;