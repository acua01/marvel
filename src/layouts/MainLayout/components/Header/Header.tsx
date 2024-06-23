import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavsContext } from '../../../../contexts/favsContext';
import { FavOnIcon } from '../../../../icons/FavOnIcon';

export const Header: FC = () => {
  const favsContext = useContext(FavsContext);
  const { favs } = favsContext;

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
