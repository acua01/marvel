import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getComicsByCharacterAdapter } from '../../adapters/comics.adapter';

export const useGetComicsByCharacterQuery = () => {
  const { characterId } = useParams();

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ['get-character-comics'],
    queryFn: () => getComicsByCharacterAdapter(characterId || ''),
  });

  return {
    data,
    isLoading,
    isFetching,
    error,
  };
};
