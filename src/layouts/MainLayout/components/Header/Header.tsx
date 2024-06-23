import { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className="c-main-layout__header">
      <img src="logo.svg" />
      <div className="c-main-layout__header__counter">
        <img src="fav_on.svg" />
        <span>3</span>
      </div>
    </header>
  );
};
