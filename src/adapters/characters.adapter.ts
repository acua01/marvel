import { axiosClient } from '../frameworks/api/axiosClient';
import { API_CREDENTIALS } from '../constants/api';
import { ICharacter, ICharacterDetails } from '../models/Character.model';

export const getCharactersAdapter = async () => {
  const response = await axiosClient.get(
    `/v1/public/characters?limit=50&${API_CREDENTIALS}`,
  );

  type TApiItem = {
    id: number;
    name: string;
    thumbnail: { path: string; extension: string };
  };

  const characters: ICharacter[] = response.data.data.results.map(
    (c: TApiItem) => ({
      id: c.id,
      name: c.name,
      image: `${c.thumbnail.path}.${c.thumbnail.extension}`,
    }),
  );

  return characters;
};

export const getCharacterDetailsAdapter = async (characterId: string) => {
  const response = await axiosClient.get(
    `/v1/public/characters/${characterId}?${API_CREDENTIALS}`,
  );

  const data = response.data.data.results[0];

  return {
    id: data.id,
    name: data.name,
    description: data.description,
    image: `${data.thumbnail.path}.${data.thumbnail.extension}`,
  } as ICharacterDetails;
};
