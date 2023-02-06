import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Task Label', () => {
  render(<App />);
  const linkElement = screen.getByText("Task:");
  expect(linkElement).toBeInTheDocument();
});

test('Renders Priority Label', () => {
  render(<App />);
  const linkElement = screen.getByText("Priority:");
  expect(linkElement).toBeInTheDocument();
});

test('Renders Task Label - Task Column', () => {
  render(<App />);
  const linkElement = screen.getByText("Task");
  expect(linkElement).toBeInTheDocument();
});

test('Renders Priority Label - Priority Column', () => {
  render(<App />);
  const linkElement = screen.getByText("Priority");
  expect(linkElement).toBeInTheDocument();
});

