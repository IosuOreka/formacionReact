import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './components/ejercicio3/Button';

test('renders button with label and handles click', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button onClick={handleClick} label="Click Me" />);
  
  const button = getByText(/Click Me/i);
  fireEvent.click(button);
  
  expect(button).toBeInTheDocument();
  expect(handleClick).toHaveBeenCalledTimes(1);
});
