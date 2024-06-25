import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import CharactersListPage from '../ui/pages/CharactersListPage/CharactersListPage';
import { AppProvider } from '../ui/components/AppProvider/AppProviderTest';
import { axiosClient } from '../api/axiosClient';
import charactersList from '../../../public/mocks/characters_list.json';

describe('Characters List Page tests', () => {
  it('render when page is loading', () => {
    render(
      <AppProvider mode="development">
        <CharactersListPage />
      </AppProvider>,
    );

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('should render characters list and do full workflow', async () => {
    vi.spyOn(axiosClient, 'get').mockImplementation(() => {
      return Promise.resolve({
        data: charactersList,
      });
    });

    render(
      <AppProvider mode="development">
        <CharactersListPage />
      </AppProvider>,
    );

    const character = await screen.findByText(/3-D Man/i);
    expect(character).toBeInTheDocument();

    const searcherInput = screen.getByRole('search');

    expect(searcherInput).toBeInTheDocument();

    await userEvent.type(searcherInput, 'Aaron Stack');

    expect(searcherInput).toHaveValue('Aaron Stack');

    const characterFiltered = await screen.findByText(/Aaron Stack/i);
    expect(characterFiltered).toBeInTheDocument();

    const characterFilteredFavButton = await screen.findByRole('button');
    expect(characterFilteredFavButton).toBeInTheDocument();

    await userEvent.click(characterFilteredFavButton);
    await userEvent.click(characterFilteredFavButton);
  });
});
