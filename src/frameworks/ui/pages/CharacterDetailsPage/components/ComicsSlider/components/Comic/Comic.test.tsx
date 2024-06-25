import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Comic } from './Comic';

describe('Comics tests', () => {
  it('Render with data', () => {
    render(<Comic title={'Title'} year={0} image="image.png" />);

    const title = screen.getByText('Title');
    expect(title).toBeInTheDocument();
  });

  it('Render without image', () => {
    render(<Comic title={'Title'} year={0} />);

    const title = screen.getByAltText('Title');
    expect(title).toHaveAttribute('src', 'image_not_found.svg');
  });
});
