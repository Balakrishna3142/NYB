function SelectField({ label, name, value, onChange }) {
  return (
    <div>
      <label>{label}</label>

      <select name={name} value={value} onChange={onChange}>
        <option value="">Select {label}</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
}

export default SelectField;