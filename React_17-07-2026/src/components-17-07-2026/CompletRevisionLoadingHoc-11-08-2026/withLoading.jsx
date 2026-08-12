function withLoading(Component) {
  return function LoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <h2>Loading...</h2>;
    }

    return <Component {...props} />;
  };
}

export default withLoading;