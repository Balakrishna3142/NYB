const student = {
  name: "Ravi",
  age: 21
};

function DynamicData() {
  return (
    <>
      <h1>{student.name}</h1>
      <h2>{student.age}</h2>
    </>
  );
}
export default DynamicData