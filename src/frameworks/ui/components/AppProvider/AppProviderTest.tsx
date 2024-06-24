import { FC, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  DefaultOptions,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { FavsProvider } from '../../context/favsContext';

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const queryConfig: DefaultOptions = {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  };

  const queryClient = new QueryClient({
    defaultOptions: queryConfig,
  });

  return (
    <BrowserRouter>
      <FavsProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </FavsProvider>
    </BrowserRouter>
  );
};
