import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FavButton } from '../FavButton/FavButton';

type TProps = {
  id: string;
  name: string;
  image?: string;
};

export const CharacterCard: FC<TProps> = ({ id, name, image }) => (
  <Link className="c-character-card" to={`/${id}`}>
    <div className="c-character-card__image-container">
      <img
        className="c-character-card__image-container__image"
        src={image ? image : 'image_not_found.svg'}
      />
    </div>
    <div className="c-character-card__name-container">
      <span className="c-character-card__name-container__name">{name}</span>
      <FavButton
        className="c-character-card__name-container__fav-button"
        character={{ id, name, image }}
      />
    </div>
  </Link>
);
