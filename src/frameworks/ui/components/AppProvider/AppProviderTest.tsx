import { FC, ReactNode } from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import {
  DefaultOptions,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { FavsProvider } from '../../context/favsContext';

export const AppProvider: FC<{
  children: ReactNode;
  mode: string;
}> = ({ children, mode }) => {
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
    <>
      {mode === 'production' ? (
        <>
          <HashRouter>
            <FavsProvider>
              <QueryClientProvider client={queryClient}>
                {children}
              </QueryClientProvider>
            </FavsProvider>
          </HashRouter>
        </>
      ) : (
        <>
          <BrowserRouter>
            <FavsProvider>
              <QueryClientProvider client={queryClient}>
                {children}
              </QueryClientProvider>
            </FavsProvider>
          </BrowserRouter>
        </>
      )}
    </>
  );
};
