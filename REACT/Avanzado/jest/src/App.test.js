import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Render a link that points to Little Lemon webpage', () => {
  render(<App />);
  const linkElement = screen.getByText('Little Lemon Restaurant');
  expect(linkElement).toBeInTheDocument();
});
