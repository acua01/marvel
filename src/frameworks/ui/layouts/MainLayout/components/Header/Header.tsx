import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FavOnIcon } from '../../../../icons/FavOnIcon';
import { useHeaderController } from './hooks/useHeader.controller';

export const Header: FC = () => {
  const { favs } = useHeaderController();

  return (
    <header className="c-main-layout__header" role="navigation">
      <Link to={'/'} aria-label="Go to character list">
        <img src="logo.svg" alt="Marvel logo" />
      </Link>

      <Link
        className="c-main-layout__header__counter"
        to={'/favs'}
        aria-label="Go to favs page"
      >
        <FavOnIcon />
        <p aria-live="polite">{favs.length}</p>
      </Link>
    </header>
  );
};
