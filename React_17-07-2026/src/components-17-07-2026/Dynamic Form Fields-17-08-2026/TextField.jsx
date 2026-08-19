function TextField({ label, name, value, onChange }) {
  return (
    <div>
      <label>{label}</label>

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Enter ${label}`}
      />
    </div>
  );
}

export default TextField;