import { FC, useContext } from 'react';
import { Searcher } from '../../components/Searcher/Searcher';
import { CharacterCard } from '../../components/CharacterCard/CharacterCard';
import { ICharacter } from '../../models/character';
import { useCharactersListLayoutController } from './hooks/useCharactersListLayout.controller';
import { FavsContext } from '../../contexts/favsContext';
import { getIsFav } from '../../utils/getIsFav';

type TProps = {
  characters: ICharacter[];
};

export const CharactersListLayout: FC<TProps> = ({ characters }) => {
  const { charactersState, searcherState, onChangeSearcher } =
    useCharactersListLayoutController(characters);

  const favsContext = useContext(FavsContext);
  const { favs } = favsContext;

  return (
    <div className="c-characters-list-layout">
      <Searcher value={searcherState} onChange={onChangeSearcher} />
      <p className="c-characters-list-layout__results">{`${charactersState.length} results`}</p>
      <div className="c-characters-list-layout__list">
        {charactersState.map((c: ICharacter) => {
          const isFav = getIsFav(c.id, favs);
          return (
            <CharacterCard
              key={c.id}
              name={c.name}
              image={c.image}
              id={c.id}
              isFav={isFav}
            />
          );
        })}
      </div>
    </div>
  );
};
