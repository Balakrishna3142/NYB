import Counter from "./Counter"
import Display from "./Display";

function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Redux Example</h1>

      <Display />

      <Counter />
    </div>
  );
}

export default Home;