
function Header() {
  return <h1>Welcome to My Website</h1>;
}

function Student() {
  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: Rahul</p>
      <p>Age: 20</p>
      <p>Course: React JS</p>
    </div>
  );
}

function Footer() {
  return <p>Copyright 2026 - My Website</p>;
}

function App() {
  return (
    <div>
      <Header />
      <Student />
      <Footer />
    </div>
  );
}

export default App;
