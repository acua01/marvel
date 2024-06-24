import { FC } from 'react';
import { Searcher } from '../../components/Searcher/Searcher';
import { CharacterCard } from '../../components/CharacterCard/CharacterCard';
import { ICharacter } from '../../../../models/Character.model';
import { useCharactersListLayoutController } from './hooks/useCharactersListLayout.controller';

type TProps = {
  characters: ICharacter[];
};

export const CharactersListLayout: FC<TProps> = ({ characters }) => {
  const { charactersState, searcherState, onChangeSearcher } =
    useCharactersListLayoutController(characters);

  return (
    <div className="c-characters-list-layout">
      <Searcher value={searcherState} onChange={onChangeSearcher} />
      <p className="c-characters-list-layout__results">{`${charactersState.length} results`}</p>
      <div className="c-characters-list-layout__list">
        {charactersState.map((c: ICharacter) => (
          <CharacterCard key={c.id} name={c.name} image={c.image} id={c.id} />
        ))}
      </div>
    </div>
  );
};
