import React, { useState, useEffect, useCallback } from 'react';

import { API_KEY } from '../constants/API_KEY';

import useLocalStorage from '../hooks/useLocalStorage';

import axios from 'axios';

import { CatsContext } from './CatsContext';

import { Cat } from '../interfaces/CatInterface';

export const CatsProvider = ({ children }: { children: React.ReactNode }) => {
  const [cats, setCats] = useLocalStorage<Cat[]>('cats', []);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCats = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<Cat[]>(
        'https://api.thecatapi.com/v1/images/search?limit=45&has_breeds=true',
        {
          headers: {
            'x-api-key': API_KEY,
          },
        }
      );
      setCats(response.data);
    } catch (error) {
      setError('Failed to load cat list');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [setCats]);

  useEffect(() => {
    if (cats.length === 0) {
      fetchCats();
    } else {
      setLoading(false);
    }
  }, [cats, fetchCats]);

  return (
    <CatsContext.Provider value={{ cats, fetchCats, loading, error }}>
      {children}
    </CatsContext.Provider>
  );
};
