import { createContext } from 'react';

import { Cat } from '../interfaces/CatInterface';

export interface CatsContextType {
  cats: Cat[];
  fetchCats: () => void;
  loading: boolean;
  error: string | null;
}

export const CatsContext = createContext<CatsContextType | undefined>(
  undefined
);
