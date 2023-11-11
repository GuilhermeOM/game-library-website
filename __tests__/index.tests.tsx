import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

it('test if test is working', () => {
  const { getByText } = render(<h1>test</h1>);

  expect(getByText('test')).toBeInTheDocument();
});
