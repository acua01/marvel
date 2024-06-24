import { FC } from 'react';
import classNames from 'classnames';
import { FavOffIcon } from '../../icons/FavOffIcon';
import { FavOnIcon } from '../../icons/FavOnIcon';
import { ICharacter } from '../../../../models/Character.model';
import { useFavButton } from './hooks/useFavButton.controller';

type TProps = {
  className?: string;
  character: ICharacter;
};

export const FavButton: FC<TProps> = ({ className, character }) => {
  const { onClick, isFav } = useFavButton(character);

  return (
    <button
      className={classNames('c-fav-button', className || '')}
      onClick={onClick}
    >
      {isFav ? <FavOnIcon /> : <FavOffIcon />}
    </button>
  );
};
