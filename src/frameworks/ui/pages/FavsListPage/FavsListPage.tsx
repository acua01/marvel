import { FC } from 'react';
import { CharactersListLayout } from '../../layouts/CharactersListLayout/CharactersListLayout';
import { useFavsListPageController } from './hooks/useFavsListPage.controller';

const FavsList: FC = () => {
  const { favs } = useFavsListPageController();

  return <CharactersListLayout characters={favs} />;
};

export default FavsList;
