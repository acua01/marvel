import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ComicsSlider } from './ComicsSlider';
import userEvent from '@testing-library/user-event';
import { IComic } from '../../../../../../models/Comic.model';

const comics: IComic[] = [
  {
    title: 'Comic 1',
    date: new Date(),
    image: '',
  },
  {
    title: 'Comic 1',
    date: new Date(),
    image: '',
  },
];

describe('Comics Slider tests', () => {
  it('Render with data', () => {
    render(<ComicsSlider comics={comics} />);

    const slider = screen.getByRole('list');
    expect(slider).toBeInTheDocument();

    userEvent.click(slider);
    fireEvent.mouseDown(slider);
    fireEvent.mouseMove(slider);
    fireEvent.mouseUp(slider);
    fireEvent.mouseLeave(slider);

    expect(slider.classList.contains('grabbing')).toBe(false);

    fireEvent.scroll(slider);

    expect(slider.scrollLeft).toBeGreaterThan(-1);
  });
});
