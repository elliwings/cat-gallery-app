import { Cat } from '../interfaces/CatInterface';

import { useState } from 'react';

import { FavoritesContext } from './FavoritesContext';

export const FavoritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favorites, setFavorites] = useState<Cat[]>([]);

  const addToFavorites = (cat: Cat) => {
    setFavorites((prev) => [...prev, cat]);
  };

  const removeFromFavorites = (catId: string) => {
    setFavorites((prev) => prev.filter((cat) => cat.id !== catId));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
