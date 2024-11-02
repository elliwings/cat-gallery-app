import { createContext } from 'react';

import { Cat } from '../interfaces/CatInterface';

export interface FavoritesContextType {
  favorites: Cat[];
  addToFavorites: (cat: Cat) => void;
  removeFromFavorites: (catId: string) => void;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);
