
export default function Button({
  children,
  type = "submit",
  disabled = false,
}) {
  return (
    <button type={type} disabled={disabled}>
      {children}
    </button>
  );
}
