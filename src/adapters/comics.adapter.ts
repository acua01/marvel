import { axiosClient } from '../api/axios-client';
import { API_CREDENTIALS } from '../constants/api';
import { IComic } from '../models/comic';

export const getComicsByCharacterAdapter = async (characterId: string) => {
  const response = await axiosClient.get(
    `/v1/public/characters/${characterId}/comics?${API_CREDENTIALS}`,
  );

  console.log(response.data.data.results);

  type TApiItem = {
    title: string;
    thumbnail: { path: string; extension: string };
  };

  const comics: IComic[] = response.data.data.results.map((c: TApiItem) => ({
    title: c.title,
    image: `${c.thumbnail.path}.${c.thumbnail.extension}`,
  }));

  return comics;
};
