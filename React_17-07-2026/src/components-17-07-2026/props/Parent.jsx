import Child from "./Child";

function Parent() {
  const message = "Hello from Parent";

  return <Child message={message} />;
}

export default Parent;