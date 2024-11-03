import { createContext } from 'react';

import { Cat } from '../interfaces/CatInterface';

export interface CatsContextType {
  cats: Cat[] | undefined;
  fetchCats: () => Promise<Cat[]>;
  loading: boolean;
  error: boolean | null;
}

export const CatsContext = createContext<CatsContextType | undefined>(
  undefined
);
