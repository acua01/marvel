import { useScrollUp } from '../../../hooks/useScrollUp';
import { useGetCharactersQuery } from '../../../../tanstackQuery/useGetCharactersQuery';

export const useCharactersListPageController = () => {
  useScrollUp();

  const { data, isLoading, isFetching, error } = useGetCharactersQuery();

  return {
    characters: data || [],
    isLoading: isLoading || isFetching,
    error,
  };
};
