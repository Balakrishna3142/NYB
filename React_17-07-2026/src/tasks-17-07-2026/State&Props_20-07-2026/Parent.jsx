import Child from "./Child";


function Parent() {
  return (
    <>
      <Child
        name="Rahul"
        age={21}
        course="React"
      />
    </>
  );
}

export default Parent