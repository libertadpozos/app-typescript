import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import App from '../components/App';

afterEach(cleanup);

test('renders app', () => {
  render(<App />);
});

// test('cleared input after clicking clear all button', ()=>{
//   render(<Filters />)
//   const { getByLabelText, getByTestId } = render(<Filters />);
// })

// it("Input should be cleared on 'clear all' button click", () => {
//     render(
//       <PostSearch setUserSearch={mockedSetSearch} userSearch={mockedSearch} />
//     );
//     const inputElement = screen.getByPlaceholderText(
//       /Type to search/i
//     ) as HTMLInputElement;
//     act(() => {
//       fireEvent.change(inputElement, { target: { value: "Hello World" } });
//     })
//     const buttonElement = screen.getByRole("button", { name: /clear/i });
//     act(() => {
//       fireEvent.click(buttonElement);
//     })
// // LINE BELOW FAILS THE TEST
//  //   expect(inputElement.value).toBe("");

//     await waitFor(() => {
//      expect(inputElement).toHaveValue("");
//     });
//     // or await waitFor(() => {
//     //   expect(screen.getByPlaceholderText(
//     //    /Search posts/i
//     //  ) as HTMLInputElement).toHaveValue("");
//     // });

//   });
