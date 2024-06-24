import { ChangeEvent, FC } from 'react';

type TProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Searcher: FC<TProps> = ({ value, onChange }) => (
  <fieldset className="c-searcher" role="search">
    <label id="search-label" htmlFor="search-input">
      <img
        className="c-searcher__icon"
        src="searcher_icon.svg"
        alt="Searcher icon"
      />
    </label>
    <input
      id="search-input"
      className="c-searcher__input"
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search a character..."
      aria-labelledby="search-label"
    />
  </fieldset>
);
