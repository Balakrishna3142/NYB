
function Student(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Course: {props.course}</p>
      <hr />
    </div>
  );
}

export default Student;
