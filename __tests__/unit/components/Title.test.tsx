import Title from '@/app/components/Title';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Title', () => {
  it('diplays the given text in the same way is written', () => {
    const mockedText = 'Lorem ipsum dolor sit amet';

    const { getByText } = render(<Title>{mockedText}</Title>);

    expect(getByText(mockedText)).toBeInTheDocument();
  });

  it('changes font weight to font-bold according to stronger property equals false', () => {
    const mockedText = 'Lorem ipsum dolor sit amet';

    const { getByRole } = render(
      <Title stronger={false}>
        {mockedText}
      </Title>
    );

    const title = getByRole('heading');
    expect(title).toHaveClass('font-bold');
  });

  it('changes font weight to font-extrabold according to stronger property equals true', () => {
    const mockedText = 'Lorem ipsum dolor sit amet';

    const { getByRole } = render(
      <Title stronger={true}>
        {mockedText}
      </Title>
    );

    const title = getByRole('heading');
    expect(title).toHaveClass('font-extrabold');
  });
});
