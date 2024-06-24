import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import FavsListPage from '../ui/pages/FavsListPage/FavsListPage';
import { AppProvider } from '../ui/components/AppProvider/AppProviderTest';

describe('Characters List Page tets', () => {
  it('should render Loader when isLoading is true', () => {
    render(
      <AppProvider>
        <FavsListPage />
      </AppProvider>,
    );

    expect(screen.getByText(/results/)).toBeInTheDocument();
  });
});
