import Student from "./Student";

function App() {
  const subjects = ["React", "JavaScript", "HTML"];

  const address = {
    city: "Vinukonda",
    state: "Andhra Pradesh",
  };

  const sayHello = () => {
    alert("Hello Student!");
  };

  return (
    <div>
      <h1>Props Example</h1>

      <Student
        name="Rahul"
        age={21}
        isPassed={true}
        subjects={subjects}
        address={address}
        sayHello={sayHello}
      />
    </div>
  );
}

export default App;