function withAuth(Component) {
  return function AuthComponent({ isLoggedIn }) {
    if (!isLoggedIn) {
      return <h2>Please Login</h2>;
    }

    return <Component />;
  };
}

export default withAuth;