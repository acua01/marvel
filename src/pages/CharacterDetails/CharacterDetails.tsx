import { FC } from 'react';
import { ComicsSlider } from './components/ComicsSlider/ComicsSlider';
import { useCharacterDetailsController } from './hooks/useCharacterDetails.controller';

export const CharacterDetails: FC = () => {
  const { details, comics, isLoading } = useCharacterDetailsController();

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
              <img
                className="c-character-details__character__content__info-container__title__fav"
                src="fav_on.svg"
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
