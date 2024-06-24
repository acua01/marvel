import { useQuery } from '@tanstack/react-query';
import { getCharactersAdapter } from '../../adapters/characters.adapter';

export const useGetCharactersQuery = () => {
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ['get-characters'],
    queryFn: getCharactersAdapter,
  });

  return {
    data,
    isLoading,
    isFetching,
    error,
  };
};
