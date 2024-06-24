import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FavOnIcon } from '../../../../icons/FavOnIcon';
import { useHeaderController } from './hooks/useHeader.controller';

export const Header: FC = () => {
  const { favs } = useHeaderController();

  return (
    <header className="c-main-layout__header">
      <Link to={'/'}>
        <img src="logo.svg" />
      </Link>

      <Link className="c-main-layout__header__counter" to={'/favs'}>
        <FavOnIcon />
        <span>{favs.length}</span>
      </Link>
    </header>
  );
};
