import { FC, ReactNode, createContext, useState } from 'react';
import { ICharacter } from '../models/Character.model';

type TFavsContext = {
  favs: ICharacter[];
  addFav: (character: ICharacter) => void;
  removeFav: (character: ICharacter) => void;
};

type TProviderProps = {
  children: ReactNode;
};

export const FavsContext = createContext<TFavsContext>({
  favs: [],
  addFav: () => {},
  removeFav: () => {},
});

export const FavsProvider: FC<TProviderProps> = ({ children }) => {
  const [favsState, setFavsState] = useState<ICharacter[]>([]);

  const addFav = (character: ICharacter) => {
    setFavsState((prev) => [...prev, character]);
  };

  const removeFav = (character: ICharacter) => {
    setFavsState((prev) => prev.filter((c) => c.id !== character.id));
  };

  return (
    <FavsContext.Provider value={{ favs: favsState, addFav, removeFav }}>
      {children}
    </FavsContext.Provider>
  );
};
