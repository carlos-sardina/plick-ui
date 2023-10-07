import { render, fireEvent } from '@plick-test-utils';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders button text and responds to click event', () => {
    const buttonText = 'Click me';
    const onClickMock = jest.fn();

    const { getByText } = render(
      <Button text={buttonText} onClick={onClickMock} />
    );

    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});