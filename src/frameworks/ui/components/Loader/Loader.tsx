import { FC } from 'react';

export const Loader: FC = () => (
  <div
    className="c-loader"
    role="status"
    aria-busy="true"
    aria-live="polite"
  ></div>
);
