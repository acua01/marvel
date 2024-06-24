import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FavButton } from '../FavButton/FavButton';

type TProps = {
  id: string;
  name: string;
  image?: string;
};

export const CharacterCard: FC<TProps> = ({ id, name, image }) => (
  <li>
    <Link className="c-character-card" to={`/${id}`} aria-labelledby={name}>
      <figure className="c-character-card__image-container">
        <img
          className="c-character-card__image-container__image"
          src={image ?? 'image_not_found.svg'}
          alt={name}
          title={name}
        />
      </figure>
      <article className="c-character-card__name-container">
        <p className="c-character-card__name-container__name" id={name}>
          {name}
        </p>
        <FavButton
          className="c-character-card__name-container__fav-button"
          character={{ id, name, image }}
        />
      </article>
    </Link>
  </li>
);
