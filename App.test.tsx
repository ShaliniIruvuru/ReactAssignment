import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders to the Currently reading Tab', () => {
  render(<App />);
  const linkElement = screen.getByText(/Currently Reading/i);
  expect(linkElement).toBeInTheDocument();
});

