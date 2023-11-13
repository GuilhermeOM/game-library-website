import Logo from '@/app/components/Logo';
import { render } from '@testing-library/react';
import { SiGamebanana } from 'react-icons/si';
import '@testing-library/jest-dom';

describe('Logo', () => {
  it('diplays logo name when rendered', () => {
    const { getByText } = render(<Logo />);

    expect(getByText('GLibrary')).toBeInTheDocument();
  });

  it('checks if the component is visible', () => {
    const { getByText } = render(<Logo />);

    expect(getByText('GLibrary')).toBeVisible();
  });

  it("checks if the component has the required 'SiGamebanana' icon", () => {
    const { container: expectedIconContainer, unmount } = render(
      <SiGamebanana />
    );

    const expectedIconHTML = expectedIconContainer.innerHTML;
    unmount();

    const { getByText } = render(<Logo />);

    expect(getByText('GLibrary')).toContainHTML(expectedIconHTML);
  });
});
