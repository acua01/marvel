import { ICharacter } from '../models/character';

export const getIsFav = (characterId: string, favs: ICharacter[]) => {
  return favs.some((f) => f.id === characterId);
};
