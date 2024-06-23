import { axiosClient } from '../api/axios-client';
import { API_CREDENTIALS } from '../constants/api';
import { ICharacter } from '../models/character';

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
    name: data.name,
    description: data.description,
    image: `${data.thumbnail.path}.${data.thumbnail.extension}`,
  };
};
