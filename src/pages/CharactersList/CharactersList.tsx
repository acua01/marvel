import { FC } from 'react';
import { useCharactersListController } from './hooks/useCharactersList.controller';
import { CharactersListLayout } from '../../layouts/CharactersListLayout/CharactersListLayout';
import { Loader } from '../../components/Loader/Loader';

export const CharactersList: FC = () => {
  const { data, isLoading } = useCharactersListController();

  if (isLoading) return <Loader />;

  return <CharactersListLayout characters={data || []} />;
};
