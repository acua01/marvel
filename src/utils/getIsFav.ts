import { ICharacter } from '../models/Character.model';

export const getIsFav = (characterId: string, favs: ICharacter[]) => {
  return favs.some((f) => f.id === characterId);
};
