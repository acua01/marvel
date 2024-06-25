import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import App from '../ui/App';
import { axiosClient } from '../api/axiosClient';
import charactersList from '../../../public/mocks/characters_list.json';
import userEvent from '@testing-library/user-event';
import characterDetails from '../../../public/mocks/character_details.json';
import characterComics from '../../../public/mocks/character_comics.json';

describe('App tests', () => {
  it('full workflow', async () => {
    vi.spyOn(axiosClient, 'get').mockImplementation((url) => {
      if (url.includes('/v1/public/characters?')) {
        return Promise.resolve({
          data: charactersList,
        });
      } else if (url.includes('/v1/public/characters/1011334?')) {
        return Promise.resolve({
          data: characterDetails,
        });
      } else if (url.includes('/v1/public/characters/1011334/comics?')) {
        return Promise.resolve({
          data: characterComics,
        });
      } else {
        return Promise.resolve({
          data: null,
        });
      }
    });

    render(<App />);

    expect(await screen.findByRole('navigation')).toBeInTheDocument();

    const favsLink = await screen.findByLabelText('Go to favs page');
    expect(favsLink).toBeInTheDocument();

    userEvent.click(favsLink);

    expect(await screen.findByText(/results/)).toBeInTheDocument();

    const logoLink = await screen.findByLabelText('Go to character list');
    expect(logoLink).toBeInTheDocument();

    userEvent.click(logoLink);

    const characterLink = await screen.findByLabelText(
      /Go to 3-D Man details/i,
    );
    expect(characterLink).toBeInTheDocument();

    userEvent.click(characterLink);

    const character = await screen.findByText(/description/i);
    expect(character).toBeInTheDocument();

    window.history.pushState({}, 'Random page', 'patata/patata');
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);

    const notFound = await screen.findByText(/Page not found/i);
    expect(notFound).toBeInTheDocument();
  });
});
