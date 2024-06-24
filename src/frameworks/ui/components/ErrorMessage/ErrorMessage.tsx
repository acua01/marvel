import { FC } from 'react';

export const ErrorMessage: FC<{ message: string }> = ({ message }) => (
  <p className="c-error-message">{message}</p>
);
