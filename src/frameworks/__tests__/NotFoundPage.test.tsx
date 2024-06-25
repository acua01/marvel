import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import NotFoundPage from '../ui/pages/NotFoundPage/NotFoundPage';
import { AppProvider } from '../ui/components/AppProvider/AppProviderTest';

describe('Characters List Page tets', () => {
  it('should render Loader when isLoading is true', () => {
    render(
      <AppProvider mode="development">
        <NotFoundPage />
      </AppProvider>,
    );

    expect(screen.getByText('Page not found')).toBeInTheDocument();
  });
});
