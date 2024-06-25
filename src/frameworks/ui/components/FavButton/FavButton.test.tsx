import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FavButton } from './FavButton';
import { ICharacter } from '../../../../models/Character.model';

describe('Fav Button tests', () => {
  it('Render', () => {
    const character: ICharacter = {
      id: '1',
      name: 'name',
    };

    render(<FavButton character={character} className="test" />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('Render without className prop', () => {
    const character: ICharacter = {
      id: '1',
      name: 'name',
    };

    render(<FavButton character={character} />);

    const button = screen.getByRole('button');
    expect(button.classList.contains('test')).toBe(false);
  });
});
