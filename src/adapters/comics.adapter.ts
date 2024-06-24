import { axiosClient } from '../frameworks/api/axiosClient';
import { API_CREDENTIALS } from '../constants/api';
import { IComic } from '../models/Comic.model';

export const getComicsByCharacterAdapter = async (characterId: string) => {
  const response = await axiosClient.get(
    `/v1/public/characters/${characterId}/comics?${API_CREDENTIALS}`,
  );

  type TApiItem = {
    title: string;
    thumbnail: { path: string; extension: string };
    dates: { type: string; date: string }[];
  };

  const comics: IComic[] = response.data.data.results.map((c: TApiItem) => ({
    title: c.title,
    image: `${c.thumbnail.path}.${c.thumbnail.extension}`,
    date: new Date(c.dates.find((d) => d.type === 'onsaleDate')?.date || ''),
  }));

  comics.sort((a: IComic, b: IComic) => {
    return a.date.getTime() + b.date.getTime();
  });

  return comics;
};
