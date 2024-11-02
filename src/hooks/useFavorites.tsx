import { useContext } from 'react';

import { FavoritesContext } from '../context/FavoritesContext';

const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('Something is not right...');
  }
  return context;
};

export default useFavorites;
