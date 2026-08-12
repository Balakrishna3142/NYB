function Child({ name }) {
  console.log("Child rendered");

  return <h2>Hello {name}</h2>;
}

export default Child;