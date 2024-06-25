import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import CharacterDetailsPage from '../ui/pages/CharacterDetailsPage/CharacterDetailsPage';
import { AppProvider } from '../ui/components/AppProvider/AppProviderTest';
import { axiosClient } from '../api/axiosClient';
import characterDetails from '../../../public/mocks/character_details.json';
import characterDetailsWithoutImage from '../../../public/mocks/character_details_without_image.json';
import characterComics from '../../../public/mocks/character_comics.json';
import * as useCharacterDetailsPageController from '../ui/pages/CharacterDetailsPage/hooks/useCharacterDetailsPage.controller';

describe('Character Details Page tests', () => {
  it('render when page is loading', () => {
    render(
      <AppProvider mode="development">
        <CharacterDetailsPage />
      </AppProvider>,
    );

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('render character details', async () => {
    vi.spyOn(axiosClient, 'get').mockImplementation((url) => {
      if (url.includes('/v1/public/characters/?')) {
        return Promise.resolve({
          data: characterDetails,
        });
      } else if (url.includes('/v1/public/characters//comics')) {
        return Promise.resolve({
          data: characterComics,
        });
      } else {
        return Promise.resolve({
          data: null,
        });
      }
    });

    render(
      <AppProvider mode="development">
        <CharacterDetailsPage />
      </AppProvider>,
    );

    const character = await screen.findByText(/3-D Man/i);
    expect(character).toBeInTheDocument();

    const comic = await screen.findByText(/Avengers/i);
    expect(comic).toBeInTheDocument();
  });

  it('render character details without image', async () => {
    vi.spyOn(axiosClient, 'get').mockImplementation((url) => {
      if (url.includes('/v1/public/characters/?')) {
        return Promise.resolve({
          data: characterDetailsWithoutImage,
        });
      } else if (url.includes('/v1/public/characters//comics')) {
        return Promise.resolve({
          data: characterComics,
        });
      } else {
        return Promise.resolve({
          data: null,
        });
      }
    });

    render(
      <AppProvider mode="development">
        <CharacterDetailsPage />
      </AppProvider>,
    );

    const image = await screen.findByAltText(/3-D Man/i);
    expect(image).toHaveAttribute('src', 'image_not_found.svg');
  });

  it('render when data is null', async () => {
    vi.spyOn(
      useCharacterDetailsPageController,
      'useCharacterDetailsPageController',
    ).mockImplementationOnce(() => ({
      character: null,
      details: undefined,
      comics: [],
      isLoading: false,
      errorComics: null,
      errorDetails: null,
    }));

    render(
      <AppProvider mode="development">
        <CharacterDetailsPage />
      </AppProvider>,
    );

    const detailsContainer = screen.queryByRole('main');
    expect(detailsContainer).not.toBeInTheDocument();
  });
});
