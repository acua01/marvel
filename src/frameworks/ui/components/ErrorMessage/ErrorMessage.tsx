import { FC } from 'react';

export const ErrorMessage: FC<{ message: string }> = ({ message }) => (
  <p className="c-error-message" role="alert" aria-live="assertive">
    {message}
  </p>
);
