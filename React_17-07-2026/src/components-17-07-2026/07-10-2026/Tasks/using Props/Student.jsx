function Student(props) {
  return (
    <div>
      <h2>Student Details</h2>

      {/* String */}
      <p>Name: {props.name}</p>

      {/* Number */}
      <p>Age: {props.age}</p>

      {/* Boolean */}
      <p>Passed: {props.isPassed ? "Yes" : "No"}</p>

      {/* Array */}
      <p>Subjects:</p>
      <ul>
        {props.subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>

      {/* Object */}
      <p>City: {props.address.city}</p>
      <p>State: {props.address.state}</p>

      {/* Function */}
      <button onClick={props.sayHello}>
        Click Me
      </button>
    </div>
  );
}

export default Student;