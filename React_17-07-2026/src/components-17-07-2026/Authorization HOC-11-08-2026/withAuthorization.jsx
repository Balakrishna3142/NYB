function withAuthorization(Component, allowedRole) {
  return function AuthorizationComponent({ userRole }) {

    if (userRole !== allowedRole) {
      return (
        <h2>
          Access Denied
        </h2>
      );
    }

    return <Component />;
  };
}

export default withAuthorization;