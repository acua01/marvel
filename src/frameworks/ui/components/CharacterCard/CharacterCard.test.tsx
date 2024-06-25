import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CharacterCard } from './CharacterCard';
import { AppProvider } from '../AppProvider/AppProviderTest';

describe('Character Card tests', () => {
  it('Render with data', () => {
    render(
      <AppProvider mode={'development'}>
        <CharacterCard id={'1'} name={'Name'} image="image.png" />
      </AppProvider>,
    );

    const name = screen.getByText('Name');
    expect(name).toBeInTheDocument();
  });

  it('Render without image', () => {
    render(
      <AppProvider mode={'development'}>
        <CharacterCard id={'1'} name={'Name'} />
      </AppProvider>,
    );

    const image = screen.getByAltText('Name');
    expect(image).toHaveAttribute('src', 'image_not_found.svg');
  });
});
