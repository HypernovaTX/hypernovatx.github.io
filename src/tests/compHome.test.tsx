import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/home';
import '@testing-library/jest-dom'

/**
 * TEST 1 - Test the home button exists
 */
test('testRender-HomeButton', () => {
  render(<Home/>);
  const linkElement = screen.getByText(/(Check out my projects!)/);
  expect(linkElement).toBeInTheDocument();
});