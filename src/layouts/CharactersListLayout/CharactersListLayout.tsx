import { FC } from 'react';
import { Searcher } from '../../components/Searcher/Searcher';
import { CharacterCard } from '../../components/CharacterCard/CharacterCard';
import { ICharacter } from '../../models/character';
import { useCharactersListLayoutController } from './hooks/useCharactersListLayout.controller';

type TProps = {
  characters: ICharacter[];
};

export const CharactersListLayout: FC<TProps> = ({ characters }) => {
  const { charactersState, searcherState, onChangeSearcher } =
    useCharactersListLayoutController(characters);
  console.log(charactersState);

  return (
    <div className="c-characters-list-layout">
      <Searcher value={searcherState} onChange={onChangeSearcher} />
      <p className="c-characters-list-layout__results">{`${charactersState.length} results`}</p>
      <div className="c-characters-list-layout__list">
        {charactersState.map((c: ICharacter) => (
          <CharacterCard name={c.name} image={c.image} id={c.id} />
        ))}
      </div>
    </div>
  );
};
