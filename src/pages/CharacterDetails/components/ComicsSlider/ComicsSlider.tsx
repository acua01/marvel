import { FC } from 'react';
import { IComic } from '../../../../models/comic';
import { Comic } from './components/Comic/Comic';

type TProps = {
  comics: IComic[];
};

export const ComicsSlider: FC<TProps> = ({ comics }) => {
  return (
    <div className="c-comics-slider">
      <h2 className="c-comics-slider__title">Comics</h2>
      <div className="c-comics-slider__comics-container">
        {comics.map((c: IComic) => (
          <Comic title={c.title} year={c.year} image={c.image} />
        ))}
      </div>
    </div>
  );
};
