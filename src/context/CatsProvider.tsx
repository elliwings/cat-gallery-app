import { API_KEY } from '../constants/API_KEY';

import axios from 'axios';

import { CatsContext } from './CatsContext';

import { Cat } from '../interfaces/CatInterface';

import { useQuery } from '@tanstack/react-query';

async function fetchCats() {
  const response = await axios.get<Cat[]>(
    'https://api.thecatapi.com/v1/images/search?limit=45&has_breeds=true',
    {
      headers: {
        'x-api-key': API_KEY,
      },
    }
  );
  return response.data;
}

export const CatsProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    data: cats,
    isLoading: loading,
    isError: error,
  } = useQuery<Cat[], Error>({
    queryKey: ['cats'],
    queryFn: fetchCats,
    refetchOnWindowFocus: false,
  });

  return (
    <CatsContext.Provider value={{ cats, fetchCats, loading, error }}>
      {children}
    </CatsContext.Provider>
  );
};
