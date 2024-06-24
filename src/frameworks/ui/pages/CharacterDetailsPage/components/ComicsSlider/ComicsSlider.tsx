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
    <div className="c-comics-slider">
      <h2 className="c-comics-slider__title">Comics</h2>
      <div
        className="c-comics-slider__comics-container"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onScroll={handleScroll}
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
    </div>
  );
};
