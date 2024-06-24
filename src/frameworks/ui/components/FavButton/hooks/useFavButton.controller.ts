import { useContext } from 'react';
import { FavsContext } from '../../../context/favsContext';
import { getIsFav } from '../../../../../utils/getIsFav';
import { ICharacter } from '../../../../../models/Character.model';

export const useFavButton = (character: ICharacter) => {
  const favsContext = useContext(FavsContext);
  const { favs, addFav, removeFav } = favsContext;

  const isFav = getIsFav(character.id, favs);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (isFav) removeFav(character);
    else addFav(character);
  };

  return {
    onClick,
    isFav,
  };
};
