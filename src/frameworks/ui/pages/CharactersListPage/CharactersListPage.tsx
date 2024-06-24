import { FC } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { CharactersListLayout } from '../../layouts/CharactersListLayout/CharactersListLayout';
import { useCharactersListPageController } from './hooks/useCharactersListPage.controller';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';

const CharactersListPage: FC = () => {
  const { characters, isLoading, error } = useCharactersListPageController();

  if (isLoading) return <Loader />;
  if (error)
    return <ErrorMessage message="An error has occurred getting characters" />;

  return <CharactersListLayout characters={characters} />;
};

export default CharactersListPage;
