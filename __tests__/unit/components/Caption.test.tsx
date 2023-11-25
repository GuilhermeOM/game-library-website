import Caption from '@/app/components/Caption';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Caption', () => {
  it('diplays the given text in the same way is written', () => {
    const mockedText = 'Lorem ipsum dolor sit amet';

    const { getByText } = render(<Caption>{mockedText}</Caption>);

    expect(getByText(mockedText)).toBeInTheDocument();
  });
});
