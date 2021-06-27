import Button from '../index';
import { render, fireEvent } from "../../../test-utils";

it('should render without error', () => {
  const { getByText } = render(<Button>Tokopedia</Button>);

  const text = getByText(/Tokopedia/i);
  expect(text).toBeInTheDocument();
});

it('should trigger onClick', () => {
  const mockFunc = jest.fn();
  const { getByText } = render(<Button onClick={mockFunc}>Tokopedia</Button>);

  const text = getByText(/Tokopedia/i);
  fireEvent.click(text);
  expect(mockFunc).toHaveBeenCalledTimes(1);
});

it('should not trigger onClick when button is disabled', () => {
  const mockFunc = jest.fn();
  const { getByText } = render(<Button onClick={mockFunc} disabled>Tokopedia</Button>);

  const text = getByText(/Tokopedia/i);
  fireEvent.click(text);
  expect(mockFunc).toHaveBeenCalledTimes(0);
});