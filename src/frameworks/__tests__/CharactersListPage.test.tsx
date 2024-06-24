import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CharactersListPage from '../ui/pages/CharactersListPage/CharactersListPage';
import { AppProvider } from '../ui/components/AppProvider/AppProviderTest';

describe('Characters List Page tets', () => {
  it('should render Loader when isLoading is true', () => {
    render(
      <AppProvider>
        <CharactersListPage />
      </AppProvider>,
    );

    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
