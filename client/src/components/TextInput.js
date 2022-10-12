const TextInput = ({ name, isRequired, handleChange }) => (
  <>
    <label htmlFor={name.toLowerCase()}>{name}</label>
    <input
      type="text"
      name={name.toLowerCase()}
      id={name.toLowerCase()}
      autoComplete={name.toLowerCase()}
      required={isRequired}
      onChange={handleChange}
    />
  </>
);

export default TextInput;
