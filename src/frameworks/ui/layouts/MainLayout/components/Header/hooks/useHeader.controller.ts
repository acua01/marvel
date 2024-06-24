import { useContext } from 'react';
import { FavsContext } from '../../../../../context/favsContext';

export const useHeaderController = () => {
  const favsContext = useContext(FavsContext);
  const { favs } = favsContext;

  return {
    favs,
  };
};
