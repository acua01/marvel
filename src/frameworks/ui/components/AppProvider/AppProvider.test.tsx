import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AppProvider } from './AppProviderTest';

describe('App Provider tests', () => {
  it('Render in development mode', () => {
    render(
      <AppProvider mode={'development'}>
        <div>App</div>
      </AppProvider>,
    );

    const text = screen.getByText('App');
    expect(text).toBeInTheDocument();
  });

  it('Render in production mode', () => {
    render(
      <AppProvider mode={'production'}>
        <div>App</div>
      </AppProvider>,
    );

    const text = screen.getByText('App');
    expect(text).toBeInTheDocument();
  });
});
