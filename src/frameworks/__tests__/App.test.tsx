import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from '../ui/App';
import { AppProvider } from '../ui/components/AppProvider/AppProviderTest';

describe('App tests', () => {
  it('should render', () => {
    render(
      <AppProvider>
        <App />
      </AppProvider>,
    );
  });
});
