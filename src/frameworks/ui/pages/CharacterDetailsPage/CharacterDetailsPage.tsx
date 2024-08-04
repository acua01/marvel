import { FC } from 'react';
import { ComicsSlider } from './components/ComicsSlider/ComicsSlider';
import { FavButton } from '../../components/FavButton/FavButton';
import { Loader } from '../../components/Loader/Loader';
import { useCharacterDetailsPageController } from './hooks/useCharacterDetailsPage.controller';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';

const CharacterDetailsPage: FC = () => {
  const { character, details, comics, isLoading, errorComics, errorDetails } =
    useCharacterDetailsPageController();

  if (isLoading) return <Loader />;
  if (errorComics || errorDetails)
    return (
      <ErrorMessage message="An error has occurred getting character details" />
    );
  if (!character || !details || !comics) return null;

  return (
    <section className="c-character-details" role="main">
      <section
        className="c-character-details__character"
        aria-labelledby="character-details-heading"
      >
        <div className="c-character-details__character__content">
          <figure className="c-character-details__character__content__image-container">
            <img
              className="c-character-details__character__content__image-container__image"
              src={details.image || 'image_not_found.svg'}
              alt={details.name}
              title={details.name}
            />
          </figure>
          <article className="c-character-details__character__content__info-container">
            <div className="c-character-details__character__content__info-container__title">
              <h1 id="character-details-heading">{details.name}</h1>
              <FavButton
                className="c-character-details__character__content__info-container__title__fav-button"
                character={character}
              />
            </div>
            <p className="c-character-details__character__content__info-container__description">
              {details.description || 'Description not found'}
            </p>
          </article>
        </div>
      </section>
      <ComicsSlider comics={comics} />
    </section>
  );
};

export default CharacterDetailsPage;
