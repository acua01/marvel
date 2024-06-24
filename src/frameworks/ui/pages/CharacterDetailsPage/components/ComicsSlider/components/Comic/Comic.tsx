import { FC } from 'react';

type TProps = {
  title: string;
  image?: string;
  year: number;
};

export const Comic: FC<TProps> = ({ title, image, year }) => {
  return (
    <article className="c-comic" aria-labelledby={title}>
      <figure className="c-comic__image-container">
        <img src={image ?? 'image_not_found.svg'} alt={title} title={title} />
      </figure>
      <p className="c-comic__title" id={title}>
        {title}
      </p>
      <p className="c-comic__year">{year}</p>
    </article>
  );
};
