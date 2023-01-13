import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Header from '../components/Header';

afterEach(cleanup);

test('renders Header', () => {
  render(<Header />);
  expect(screen.getByRole('heading')).toHaveTextContent(/spaceship/i);
});
