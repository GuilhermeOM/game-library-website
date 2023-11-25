import Divider from '@/app/components/Divider';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Divider', () => {
  it("adds style class (h-1 w-full my-2) when position property is given as 'horizontal'", () => {
    const { container } = render(<Divider position='horizontal' />);

    expect(container.firstChild).toHaveClass('h-1 w-full my-2');
  });

  it("adds style class (w-1 h-full mx-2) when position property is given as 'vertical'", () => {
    const { container } = render(<Divider position='vertical' />);

    expect(container.firstChild).toHaveClass('w-1 h-full mx-2');
  });
});
