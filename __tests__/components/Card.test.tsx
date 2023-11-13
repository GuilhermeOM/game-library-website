import Card from '@/app/components/Card';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Card', () => {
  it('renders children in the document when given', () => {
    const mockedChildren = <div data-testid='test-children' />;

    const { getByTestId } = render(<Card>{mockedChildren}</Card>);

    expect(getByTestId('test-children')).toBeInTheDocument();
  });

  it('adds custom classname when given', () => {
    const mockedClassname = 'testing-1 testing-2';
    const mockedChildren = <div />;

    const { container } = render(
      <Card className={mockedClassname}>{mockedChildren}</Card>
    );

    expect(container.firstChild).toHaveClass(mockedClassname);
  });
});
