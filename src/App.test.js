import { render, screen } from '@testing-library/react';
import App from './App';

test('Should render logo on start', () => {
  render(<App />);
  const logo = screen.getByAltText('logo');
  expect(logo).toBeInTheDocument();
});
