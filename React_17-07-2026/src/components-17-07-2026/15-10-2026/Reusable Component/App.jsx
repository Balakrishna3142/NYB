
import Button from "./Button";
import Card from "./Card";

export default function App() {
  return (
    <div>
      <h1>Reusable Components Example</h1>

      <Button
        text="Login"
        color="blue"
        onClick={() => alert("Login clicked!")}
      />

      <Button
        text="Register"
        color="green"
        onClick={() => alert("Register clicked!")}
      />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Card
          title="Laptop"
          description="High-performance laptop"
          price={50000}
        />

        <Card
          title="Mobile"
          description="Smartphone with great features"
          price={20000}
        />

        <Card
          title="Headphones"
          description="Wireless headphones"
          price={2000}
        />
      </div>
    </div>
  );
}
