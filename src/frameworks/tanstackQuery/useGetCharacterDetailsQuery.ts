import { useQuery } from '@tanstack/react-query';
import { getCharacterDetailsAdapter } from '../../adapters/characters.adapter';
import { useParams } from 'react-router-dom';

export const useGetCharacterDetailsQuery = () => {
  const { characterId } = useParams();

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ['get-character-details'],
    queryFn: () => getCharacterDetailsAdapter(characterId || ''),
  });

  return {
    data,
    isLoading,
    isFetching,
    error,
  };
};
