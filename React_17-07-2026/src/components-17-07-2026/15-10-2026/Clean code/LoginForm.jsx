import Button from "./Button";

function LoginForm() {
  return (
    <Button onClick={() => alert("Login clicked")}>
      Login
    </Button>
  );
}

export default LoginForm;