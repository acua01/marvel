import { FC, useContext } from 'react';
import { CharactersListLayout } from '../../layouts/CharactersListLayout/CharactersListLayout';
import { FavsContext } from '../../contexts/favsContext';

export const FavsList: FC = () => {
  const favsContext = useContext(FavsContext);

  const { favs } = favsContext;

  return (
    <div>
      <CharactersListLayout characters={favs} />
    </div>
  );
};
