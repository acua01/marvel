import { useLayoutEffect } from 'react';

export const useScrollUp = () => {
  useLayoutEffect(() => {
    scrollTo(0, 0);
  }, []);
};
