import { useQuery } from '@tanstack/react-query';
import { getCharacterDetailsAdapter } from '../../../adapters/characters.adapter';
import { useParams } from 'react-router-dom';
import { getComicsByCharacterAdapter } from '../../../adapters/comics.adapter';
import { ICharacter } from '../../../models/character';
import { useScrollUp } from '../../../hooks/useScrollUp';

export const useCharacterDetailsController = () => {
  const { characterId } = useParams();

  useScrollUp();

  const {
    data: dataDetails,
    isLoading: isLoadingDetails,
    isFetching: isFetchingDetails,
  } = useQuery({
    queryKey: ['get-character-details'],
    queryFn: () => getCharacterDetailsAdapter(characterId || ''),
  });

  const {
    data: dataComics,
    isLoading: isLoadingComics,
    isFetching: isFetchingComics,
  } = useQuery({
    queryKey: ['get-character-comics'],
    queryFn: () => getComicsByCharacterAdapter(characterId || ''),
  });

  const character: ICharacter = {
    id: characterId || '',
    name: dataDetails?.name,
    image: dataDetails?.image,
  };

  return {
    character,
    details: dataDetails,
    comics: dataComics,
    isLoading:
      isLoadingDetails ||
      isLoadingComics ||
      isFetchingDetails ||
      isFetchingComics,
  };
};
