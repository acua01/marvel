import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CharacterDetailsPage from '../ui/pages/CharacterDetailsPage/CharacterDetailsPage';
import { AppProvider } from '../ui/components/AppProvider/AppProviderTest';

describe('Characters List Page tets', () => {
  it('should render Loader when isLoading is true', () => {
    render(
      <AppProvider>
        <CharacterDetailsPage />
      </AppProvider>,
    );
    // expect(screen.getByText('results')).toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
