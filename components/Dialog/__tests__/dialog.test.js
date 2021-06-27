import Dialog from '../index';
import { render, fireEvent } from "../../../test-utils";

it('should not render anything on default props', () => {
  const { queryByText } = render(<Dialog>Test</Dialog>);

  const text = queryByText(/Test/i);
  expect(text).not.toBeInTheDocument();
})

it('should render without error', () => {
  const { getByText } = render(<Dialog display={true}>Test</Dialog>);

  const text = getByText(/Test/i);
  expect(text).toBeInTheDocument();
});

it('should trigger onClick', () => {
  const mockFunc = jest.fn();
  const { getByText } = render(
    <Dialog
      display={true}
      onCancel={mockFunc} 
      onAccept={mockFunc}
    >
      Tokopedia
    </Dialog>
  );

  const cancelBtn = getByText(/Cancel/i);
  fireEvent.click(cancelBtn);
  expect(mockFunc).toHaveBeenCalledTimes(1);

  const confirmBtn = getByText(/Confirm/i);
  fireEvent.click(confirmBtn);
  expect(mockFunc).toHaveBeenCalledTimes(2);
});
