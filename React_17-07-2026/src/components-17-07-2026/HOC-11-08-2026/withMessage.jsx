function withMessage(Component) {
  return function EnhancedComponent() {
    return (
      <div>
        <h3>This message comes from HOC</h3>
        <Component />
      </div>
    );
  };
}

export default withMessage;