import { FC } from 'react';
import classNames from 'classnames';
import { FavOffIcon } from '../../icons/FavOffIcon';
import { FavOnIcon } from '../../icons/FavOnIcon';
import { ICharacter } from '../../../../models/Character.model';
import { useFavButtonController } from './hooks/useFavButton.controller';

type TProps = {
  className?: string;
  character: ICharacter;
};

export const FavButton: FC<TProps> = ({ className, character }) => {
  const { onClick, isFav } = useFavButtonController(character);

  return (
    <button
      className={classNames('c-fav-button', className || '')}
      onClick={onClick}
      aria-label={`Add ${character.name} to favorites`}
    >
      {isFav ? <FavOnIcon /> : <FavOffIcon />}
    </button>
  );
};
