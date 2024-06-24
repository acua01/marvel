import { FC } from 'react';
import { Comic } from './components/Comic/Comic';
import { IComic } from '../../../../../../models/Comic.model';
import { useComicsSliderController } from './hooks/useComicsSlider.controller';

type TProps = {
  comics: IComic[];
};

export const ComicsSlider: FC<TProps> = ({ comics }) => {
  const {
    containerRef,
    handleMouseDown,
    handleMouseLeave,
    handleMouseMove,
    handleMouseUp,
    handleScroll,
  } = useComicsSliderController();

  return (
    <section
      className="c-comics-slider"
      aria-labelledby="comics-slider-heading"
    >
      <h2 className="c-comics-slider__title" id="comics-slider-heading">
        Comics
      </h2>
      <div
        className="c-comics-slider__comics-container"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onScroll={handleScroll}
        role="list"
      >
        {comics.length > 0 ? (
          <>
            {comics.map((c: IComic) => (
              <Comic
                key={c.title}
                title={c.title}
                year={c.date.getFullYear()}
                image={c.image}
              />
            ))}
          </>
        ) : (
          <p>Comics not found</p>
        )}
      </div>
    </section>
  );
};
