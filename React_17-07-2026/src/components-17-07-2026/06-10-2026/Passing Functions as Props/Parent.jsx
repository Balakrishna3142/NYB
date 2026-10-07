import Child from "./Child";

function Parent() {
  const showMessage = () => {
    alert("Hello from Parent!");
  };

  return (
    <div>
      <h1>Parent Component</h1>

      <Child showMessage={showMessage} />
    </div>
  );
}

export default Parent;