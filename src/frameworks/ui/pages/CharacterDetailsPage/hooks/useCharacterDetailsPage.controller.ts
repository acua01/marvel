import { useScrollUp } from '../../../hooks/useScrollUp';
import { ICharacter } from '../../../../../models/Character.model';
import { useGetCharacterDetailsQuery } from '../../../../tanstackQuery/useGetCharacterDetailsQuery';
import { useGetComicsByCharacterQuery } from '../../../../tanstackQuery/useGetComicsByCharacterQuery';

export const useCharacterDetailsPageController = () => {
  useScrollUp();

  const {
    data: dataDetails,
    isLoading: isLoadingDetails,
    isFetching: isFetchingDetails,
    error: errorDetails,
  } = useGetCharacterDetailsQuery();

  const {
    data: dataComics,
    isLoading: isLoadingComics,
    isFetching: isFetchingComics,
    error: errorComics,
  } = useGetComicsByCharacterQuery();

  const character: ICharacter | null = dataDetails
    ? {
        id: dataDetails.id,
        name: dataDetails.name,
        image: dataDetails.image,
      }
    : null;

  return {
    character,
    details: dataDetails,
    comics: dataComics || [],
    isLoading:
      isLoadingDetails ||
      isLoadingComics ||
      isFetchingDetails ||
      isFetchingComics,
    errorDetails,
    errorComics,
  };
};
