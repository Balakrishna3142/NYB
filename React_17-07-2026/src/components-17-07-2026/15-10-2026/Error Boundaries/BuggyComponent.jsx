
export default function BuggyComponent() {
  throw new Error("Products component crashed!");

  return <h2>Products loaded successfully</h2>;
}
