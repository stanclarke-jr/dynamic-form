import styled from 'styled-components';
import FormStyles from './styles/FormStyles';
import CheckboxInput from './CheckboxInput';
import SelectInput from './SelectInput';
import TextInput from './TextInput';

const FormTemplate = ({
  title,
  fields,
  defaultDept,
  handleSubmit,
  handleChange,
}) => {
  const renderInputFields = (fields) => {
    return fields.map((field) => {
      const { key, type, label, value, mandatory, options } = field;
      const name = label.includes('Name') ? label.split(' ')[1] : null;
      const isRequired = mandatory === 'true';

      if (type === 'INPUT_BOX')
        return (
          <InputWrapper>
            <TextInput
              key={key}
              name={name}
              isRequired={isRequired}
              handleChange={handleChange}
            />
          </InputWrapper>
        );

      if (type === 'RADIO_BUTTON')
        return (
          <InputWrapper>
            <CheckboxInput
              key={key}
              name={key}
              label={label}
              value={value}
              isRequired={isRequired}
              handleChange={handleChange}
            />
          </InputWrapper>
        );

      if (type === 'DROPDOWN')
        return (
          <InputWrapper>
            <SelectInput
              key={key}
              name={key}
              defaultDept={defaultDept}
              options={options}
              isRequired={isRequired}
              handleChange={handleChange}
            />
          </InputWrapper>
        );
      return null;
    });
  };

  return (
    <FormStyles onSubmit={handleSubmit}>
      {/* <PlaceholderImage>320x200</PlaceholderImage> */}
      <Logo imgSrc={`/logo.png`} alt={`gtechna logo`} />
      <fieldset>
        <header>{title}</header>
        {renderInputFields(fields)}
        <button type="submit">Submit</button>
        <button type="button">Cancel</button>
      </fieldset>
    </FormStyles>
  );
};

export default FormTemplate;

// ----- STYLED COMPONENTS ----- //
const Logo = styled.div`
  width: 320px;
  height: 200px;
  background: no-repeat center url(${(props) => props.imgSrc});
`;
const InputWrapper = styled.div`
  padding: 0.2rem 0;
`;
// const PlaceholderImage = styled.div`
//   width: 320px;
//   height: 200px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 1.5rem;
//   color: #777;
//   background-color: #f0f0f0;
//   margin-bottom: 1.2rem;
// `;
