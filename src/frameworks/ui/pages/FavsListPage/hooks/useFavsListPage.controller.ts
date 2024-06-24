import { useContext } from 'react';
import { FavsContext } from '../../../context/favsContext';
import { useScrollUp } from '../../../hooks/useScrollUp';

export const useFavsListPageController = () => {
  const favsContext = useContext(FavsContext);
  const { favs } = favsContext;

  useScrollUp();

  return { favs };
};
