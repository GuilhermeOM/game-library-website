import NavigateButton from '@/app/components/NavigateButton';
import nextNavigation from 'next-router-mock';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

jest.mock('next/navigation', () => ({
  ...require('next-router-mock'),
}));

describe('NavigateButton', () => {
  it('navigates to the given path', () => {
    const mockedPath = '/test';

    render(<NavigateButton navigation={mockedPath} buttonText='' />);
    fireEvent.click(screen.getByRole('button'));

    expect(nextNavigation.pathname).toBe(mockedPath);
  });

  it('diplays the given text in the same way is written', () => {
    const mockedText = 'Lorem ipsum dolor sit amet';

    const { getByText } = render(
      <NavigateButton navigation='/' buttonText={mockedText} />
    );

    expect(getByText(mockedText)).toBeInTheDocument();
  });
});
