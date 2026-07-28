function StudentProfile(props) {
  return (
    <div>
      <h3>Profile</h3>
      <p>Name: {props.name}</p>
      <p>Course: {props.course}</p>
    </div>
  );
}

export default StudentProfile