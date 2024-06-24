import { FC, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';

const CharacterList = lazy(
  () => import('../pages/CharactersList/CharactersList'),
);
const FavsList = lazy(() => import('../pages/FavsList/FavsList'));
const CharacterDetails = lazy(
  () => import('../pages/CharacterDetails/CharacterDetails'),
);

const AppRoutes: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" Component={CharacterList} />
        <Route path="/favs" Component={FavsList} />
        <Route path="/:characterId" Component={CharacterDetails} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
