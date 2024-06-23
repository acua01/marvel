import { useQuery } from '@tanstack/react-query';
import { getCharactersAdapter } from '../../../adapters/characters.adapter';

export const useCharactersListController = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-characters'],
    queryFn: getCharactersAdapter,
  });

  return {
    data,
    isLoading,
  };
};
