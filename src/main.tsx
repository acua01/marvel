import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/styles.scss';
import { BrowserRouter } from 'react-router-dom';
import {
  DefaultOptions,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryConfig: DefaultOptions = {
  queries: {
    retry: false,
    refetchOnWindowFocus: false,
  },
};

const queryClient = new QueryClient({
  defaultOptions: queryConfig,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>,
);
