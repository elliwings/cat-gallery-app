import { useContext } from 'react';

import { CatsContext } from '../context/CatsContext';

const useCats = () => {
  const context = useContext(CatsContext);
  if (!context) {
    throw new Error('Something is not right...');
  }
  return context;
};

export default useCats;
