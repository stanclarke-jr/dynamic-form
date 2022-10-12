import styled from 'styled-components';

const FormStyles = styled.form`
  border: 0;
  width: 330px;
  padding: 5px;
  box-shadow: 0 60px 120px rgba(71, 69, 123, 0.24),
    0 15px 35px rgba(71, 69, 123, 0.24);
  border-radius: 3px;
  fieldset {
    border: none;
  }
  header {
    text-align: center;
    font-size: 1.5rem;
  }
  label {
    display: block;
    font-size: 0.9rem;
    color: #777;
    margin: 0.75rem 0 0.1rem 0.25rem;
  }
  input[type='text'],
  select {
    width: 100%;
    padding: 0.4rem;
    border-radius: 5px;
    border: 1px solid var(--lightGrey);
    background-color: #fff;
  }
  input[type='checkbox'] {
    margin: 0 0.5rem;
    vertical-align: middle;
  }
  small {
    color: var(--black);
  }
  input[type='submit'],
  button {
    font-size: 1rem;
    width: auto;
    border: 1.75px solid #1976d2;
    border-radius: 5px;
    background-color: #1976d2;
    color: #fff;
    padding: 0.6rem 0.9rem;
    margin: 1.1rem 0.3rem 0 0;
  }
  & :nth-child(10) {
    color: var(--black);
    background-color: #fff;
    border: 1.75px solid var(--lightGrey);
  }
`;

export default FormStyles;
