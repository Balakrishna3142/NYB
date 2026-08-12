function withAuth(Component) {
  return function AuthComponent() {
    const isLoggedIn = true;

    if (!isLoggedIn) {
      return <h2>Please Login First</h2>;
    }

    return <Component />;
  };
}

export default withAuth;