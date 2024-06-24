import { FC, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';

const CharacterListPage = lazy(
  () => import('../pages/CharactersListPage/CharactersListPage'),
);
const FavsListPage = lazy(() => import('../pages/FavsListPage/FavsListPage'));
const CharacterDetailsPage = lazy(
  () => import('../pages/CharacterDetailsPage/CharacterDetailsPage'),
);
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const AppRoutes: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" Component={CharacterListPage} />
        <Route path="/favs" Component={FavsListPage} />
        <Route path="/:characterId" Component={CharacterDetailsPage} />
        <Route path="*" Component={NotFoundPage} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
