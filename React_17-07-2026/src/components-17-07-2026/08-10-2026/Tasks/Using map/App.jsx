function App() {
  const students = ["Rahul", "Priya", "John", "Anjali"];

  return (
    <div>
      <h1>Student List</h1>

      {students.map((student, index) => (
        <p key={index}>
          {index + 1}. {student}
        </p>
      ))}
    </div>
  );
}

export default App;