import { render, screen } from '@testing-library/react';
import { App } from '../App';

jest.mock('../components/Dogs', () => ({
  Dogs: () => <div />,
}));

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Good Boys/i);
  expect(linkElement).toBeInTheDocument();
});
