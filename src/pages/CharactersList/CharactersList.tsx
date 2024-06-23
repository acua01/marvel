import { FC } from 'react';
import { useCharactersListController } from './hooks/useCharactersList.controller';
import { CharactersListLayout } from '../../layouts/CharactersListLayout/CharactersListLayout';

export const CharactersList: FC = () => {
  const { data, isLoading } = useCharactersListController();

  return (
    <div>
      <CharactersListLayout characters={data || []} />
    </div>
  );
};
