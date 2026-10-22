
function Header() {
  return <h1>Welcome to React</h1>;
}

function Student() {
  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: Rahul</p>
      <p>Course: React JS</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Student />
    </div>
  );
}

export default App;
