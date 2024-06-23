import { FC } from 'react';
import { ComicsSlider } from './components/ComicsSlider/ComicsSlider';
import { useCharacterDetailsController } from './hooks/useCharacterDetails.controller';
import { FavButton } from '../../components/FavButton/FavButton';
import { Loader } from '../../components/Loader/Loader';

export const CharacterDetails: FC = () => {
  const { character, details, comics, isLoading } =
    useCharacterDetailsController();

  if (isLoading) return <Loader />;

  return (
    <div className="c-character-details">
      <div className="c-character-details__character">
        <div className="c-character-details__character__content">
          <div className="c-character-details__character__content__image-container">
            <img
              className="c-character-details__character__content__image-container__image"
              src={details?.image ? details.image : 'image_not_found.svg'}
            />
          </div>
          <div className="c-character-details__character__content__info-container">
            <div className="c-character-details__character__content__info-container__title">
              <h1>{details?.name}</h1>
              <FavButton
                className="c-character-details__character__content__info-container__title__fav-button"
                character={character}
              />
            </div>
            <p className="c-character-details__character__content__info-container__description">
              {details?.description
                ? details?.description
                : 'Description not found'}
            </p>
          </div>
        </div>
      </div>
      <ComicsSlider comics={comics || []} />
    </div>
  );
};
