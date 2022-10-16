import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CheckboxInput from '../CheckboxInput';

test('checkbox input should be rendered', () => {
  render(<CheckboxInput />);
  const checkboxInputEl = screen.getByRole('checkbox');
  expect(checkboxInputEl).toBeInTheDocument();
});
