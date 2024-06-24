import { FC, useContext } from 'react';
import { CharactersListLayout } from '../../layouts/CharactersListLayout/CharactersListLayout';
import { FavsContext } from '../../contexts/favsContext';
import { useScrollUp } from '../../hooks/useScrollUp';

const FavsList: FC = () => {
  const favsContext = useContext(FavsContext);

  useScrollUp();

  const { favs } = favsContext;

  return (
    <div>
      <CharactersListLayout characters={favs} />
    </div>
  );
};

export default FavsList;
