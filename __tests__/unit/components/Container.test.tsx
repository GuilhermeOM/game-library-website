import Container from '@/app/components/Container';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Container', () => {
  it('renders children in the document when given', () => {
    const mockedChildren = <div data-testid='test-children' />;

    const { getByTestId } = render(<Container>{mockedChildren}</Container>);

    expect(getByTestId('test-children')).toBeInTheDocument();
  });

  it("changes flex flow to flex-row when flexFlow is given as 'row'", () => {
    const mockedChildren = <div />;

    const { container } = render(
      <Container flexFlow='row'>{mockedChildren}</Container>
    );

    expect(container.firstChild).toHaveClass('flex-row');
  });

  it("changes flex flow to flex-col when flexFlow is given as 'column'", () => {
    const mockedChildren = <div />;

    const { container } = render(
      <Container flexFlow='column'>{mockedChildren}</Container>
    );

    expect(container.firstChild).toHaveClass('flex-col');
  });
});
