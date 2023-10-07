import { render } from '@plick-test-utils';
import { Title } from './Title';

describe('Title Component', () => {
  it('renders the title text correctly', () => {
    const titleText = 'Hello, World!';

    const { getByText } = render(<Title text={titleText} />);
    const titleElement = getByText(titleText);

    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe('H1');
  });
});