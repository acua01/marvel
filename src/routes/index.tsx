import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CharactersList } from '../pages/CharactersList/CharactersList';
import { CharacterDetails } from '../pages/CharacterDetails/CharacterDetails';
import { FavsList } from '../pages/FavsList/FavsList';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<CharactersList />} />
      <Route path="/favs" element={<FavsList />} />
      <Route path="/:characterId" element={<CharacterDetails />} />
    </Routes>
  );
};
