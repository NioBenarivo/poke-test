import ErrorPage from '../index';
import { render } from "../../../test-utils";

it('should render without error', () => {
  const { getByText } = render(<ErrorPage />);

  const text = getByText(/An error occured/i);
  expect(text).toBeInTheDocument();
});
