import { useQuery } from '@tanstack/react-query';
import { getCharactersAdapter } from '../../../adapters/characters.adapter';
import { useScrollUp } from '../../../hooks/useScrollUp';

export const useCharactersListController = () => {
  useScrollUp();

  const { data, isLoading } = useQuery({
    queryKey: ['get-characters'],
    queryFn: getCharactersAdapter,
  });

  return {
    data,
    isLoading,
  };
};
