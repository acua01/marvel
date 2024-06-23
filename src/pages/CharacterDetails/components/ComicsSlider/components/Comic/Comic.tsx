import { FC } from 'react';

type TProps = {
  title: string;
  image?: string;
  year: number;
};

export const Comic: FC<TProps> = ({ title, image, year }) => {
  return (
    <div className="c-comic">
      <img
        className="c-comic__image"
        src={image ? image : 'image_not_found.svg'}
      />
      <p className="c-comic__title">{title}</p>
      <p className="c-comic__year">{year}</p>
    </div>
  );
};
