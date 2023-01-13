import { render, screen, cleanup, fireEvent, act, waitFor } from '@testing-library/react';
import Filters from '../components/Filters';
jest.mock('../components/Filters');

afterEach(cleanup);

const filterInput = 'input text';
const onFilterChange = jest.fn();
const clearListsMock = jest.fn();


const testFilter = (
  <Filters filterInput={filterInput} clearLists={clearListsMock} onFilterChange={onFilterChange} />
);

test('renders Filters', () => {
  render(testFilter);
  const searchInput = screen.getByPlaceholderText(/Type to search/i);
  const clearButton = screen.getByRole('button', { name: /clear all/i });
  expect(searchInput);
  expect(clearButton);
});

test('on clicking "clear all" button input is cleared', async () => {
  render(testFilter);

  const clearButtonEl = screen.getByRole('button', { name: /clear all/i });
  act(() => {
    fireEvent.click(clearButtonEl);
  });

  await waitFor(() => {
    expect(screen.getByPlaceholderText(/Type to search/i)).toHaveValue('');
  });
});
