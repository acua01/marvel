import { FC } from 'react';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { AppProvider } from './components/AppProvider/AppProviderTest';

const App: FC = () => {
  return (
    <AppProvider mode={import.meta.env.MODE}>
      <MainLayout />
    </AppProvider>
  );
};

export default App;
