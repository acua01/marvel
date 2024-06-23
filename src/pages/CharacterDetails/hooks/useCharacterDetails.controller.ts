import { useQuery } from '@tanstack/react-query';
import { getCharacterDetailsAdapter } from '../../../adapters/characters.adapter';
import { useParams } from 'react-router-dom';
import { getComicsByCharacterAdapter } from '../../../adapters/comics.adapter';

export const useCharacterDetailsController = () => {
  const { characterId } = useParams();

  const { data: dataDetails, isLoading: isLoadingDetails } = useQuery({
    queryKey: ['get-character-details'],
    queryFn: () => getCharacterDetailsAdapter(characterId || ''),
  });

  const { data: dataComics, isLoading: isLoadingComics } = useQuery({
    queryKey: ['get-character-comics'],
    queryFn: () => getComicsByCharacterAdapter(characterId || ''),
  });

  return {
    details: dataDetails,
    comics: dataComics,
    isLoading: isLoadingDetails || isLoadingComics,
  };
};
