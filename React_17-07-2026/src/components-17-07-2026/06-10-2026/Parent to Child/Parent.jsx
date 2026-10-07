import Child from "./Child";

function Parent() {
  return (
    <div>
      <h1>Parent Component</h1>

      <Child
        name="krishna"
        age={30}
        course="React JS"
      />
    </div>
  );
}

export default Parent;