import { FC } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { CharactersListLayout } from '../../layouts/CharactersListLayout/CharactersListLayout';
import { useCharactersListPageController } from './hooks/useCharactersListPage.controller';

const CharactersList: FC = () => {
  const { characters, isLoading, error } = useCharactersListPageController();

  if (isLoading) return <Loader />;
  if (error) return <p>An error has occurred getting characters</p>;

  return <CharactersListLayout characters={characters} />;
};

export default CharactersList;
