import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';
import { describe, expect, it } from 'vitest';

describe('Loader tests', () => {
  it('Render', () => {
    render(<Loader />);

    const loader = screen.getByRole('status');
    expect(loader).toBeInTheDocument();
  });
});
