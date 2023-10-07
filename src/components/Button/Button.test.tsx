import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders button text and responds to click event', () => {
    const buttonText = 'Click me';
    const onClickMock = jest.fn(); // Mocking the onClick function

    const { getByText } = render(
      <Button text={buttonText} onClick={onClickMock} />
    );

    const buttonElement = getByText(buttonText);

    // Assert that the button text is rendered
    expect(buttonElement).toBeInTheDocument();

    // Simulate a click event on the button
    fireEvent.click(buttonElement);

    // Assert that the onClick function was called
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});