import { FC, useContext } from 'react';
import { FavsContext } from '../../contexts/favsContext';
import { ICharacter } from '../../models/character';
import { getIsFav } from '../../utils/getIsFav';
import classNames from 'classnames';
import { FavOffIcon } from '../../icons/FavOffIcon';
import { FavOnIcon } from '../../icons/FavOnIcon';

type TProps = {
  className?: string;
  character: ICharacter;
};

export const FavButton: FC<TProps> = ({ className, character }) => {
  const favsContext = useContext(FavsContext);
  const { favs, addFav, removeFav } = favsContext;

  const isFav = getIsFav(character.id, favs);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (isFav) removeFav(character);
    else addFav(character);
  };

  return (
    <button
      className={classNames('c-fav-button', className || '')}
      onClick={onClick}
    >
      {isFav ? <FavOnIcon /> : <FavOffIcon />}
    </button>
  );
};
