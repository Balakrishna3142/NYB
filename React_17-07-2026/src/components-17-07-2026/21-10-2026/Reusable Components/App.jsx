
import Student from "./Student";

function App() {
  return (
    <div>
      <h1>Student Details</h1>

      <Student
        name="Rahul"
        age={20}
        course="React JS"
      />

      <Student
        name="Priya"
        age={21}
        course="JavaScript"
      />

      <Student
        name="Arun"
        age={22}
        course="HTML and CSS"
      />
    </div>
  );
}

export default App;
