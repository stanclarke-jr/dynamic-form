import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextInput from '../TextInput';

test('employee name input should be rendered', () => {
  render(<TextInput />);
  const nameInputEl = screen.getByRole('textbox');
  expect(nameInputEl).toBeInTheDocument();
  expect(nameInputEl).toHaveValue('');
});
