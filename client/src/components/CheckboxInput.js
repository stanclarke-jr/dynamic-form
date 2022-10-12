const CheckboxInput = ({ name, label, value, isRequired, handleChange }) => (
  <>
    <label htmlFor={name}>{label}</label>
    <input
      type="checkbox"
      name={name}
      id={name}
      value={value}
      required={isRequired}
      onChange={handleChange}
    />
    <small>{value}</small>
  </>
);

export default CheckboxInput;
