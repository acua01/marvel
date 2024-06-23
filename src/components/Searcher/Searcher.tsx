import { ChangeEvent, FC } from 'react';

type TProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Searcher: FC<TProps> = ({ value, onChange }) => {
  return (
    <div className="c-searcher">
      <img className="c-searcher__icon" src="searcher_icon.svg" />
      <input
        className="c-searcher__input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search a character..."
      />
    </div>
  );
};
