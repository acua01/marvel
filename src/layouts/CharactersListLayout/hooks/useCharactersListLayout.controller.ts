import { ChangeEvent, useEffect, useState } from 'react';
import { ICharacter } from '../../../models/character';

export const useCharactersListLayoutController = (characters: ICharacter[]) => {
  const [charactersState, setCharactersState] =
    useState<ICharacter[]>(characters);
  const [searcherState, setSearcherState] = useState<string>('');

  const onChangeSearcher = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearcherState(value);

    const charactersFiltered = characters.filter((c) =>
      c.name.toLocaleLowerCase().includes(value.toLowerCase()),
    );
    setCharactersState(charactersFiltered);
  };

  useEffect(() => {
    setCharactersState(characters);
  }, [characters]);

  return {
    charactersState,
    searcherState,
    onChangeSearcher,
  };
};
