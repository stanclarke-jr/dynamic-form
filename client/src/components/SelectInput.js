const SelectInput = ({
  name,
  label,
  options,
  defaultDept,
  isRequired,
  handleChange,
}) => {
  if (!defaultDept) return null;

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        defaultValue={defaultDept}
        required={isRequired}
        onChange={handleChange}
      >
        {options?.map((option, index) => {
          return (
            <optgroup key={index} label={option.label}>
              {option.label}
              <option value={option.value}>{option.value}</option>
            </optgroup>
          );
        })}
      </select>
    </>
  );
};

export default SelectInput;
