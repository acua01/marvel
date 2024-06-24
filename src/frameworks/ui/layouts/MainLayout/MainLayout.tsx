import { FC } from 'react';
import { Header } from './components/Header/Header';
import AppRoutes from '../../routes';

export const MainLayout: FC = () => (
  <>
    <Header />
    <main className="c-main-layout__main">
      <AppRoutes />
    </main>
  </>
);
