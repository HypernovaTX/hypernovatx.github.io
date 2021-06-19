import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/home';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Arthur (Hypernova) Guo/i);
  expect(linkElement).toBeInTheDocument();
});
