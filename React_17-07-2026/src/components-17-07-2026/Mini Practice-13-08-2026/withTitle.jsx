function withTitle(WrappedComponent) {
  return function EnhancedComponent() {
    return (
      <div>
        <h2>My React Application</h2>
        <WrappedComponent />
      </div>
    );
  };
}

export default withTitle;