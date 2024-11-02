import { Cat } from '../interfaces/CatInterface';

import useLocalStorage from '../hooks/useLocalStorage';

import CatCard from '../components/CatCard/CatCard';

function FavoriteCats() {
  const [favorites] = useLocalStorage<Cat[]>('favorites', []);

  return (
    <div className='p-4'>
      <h1 className='text-3xl font-semibold mb-4'>My favorite cats</h1>
      {favorites.length > 0 ? (
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-10 list-none p-0 md:px-15 lg:px-20'>
          {favorites.map((card) => (
            <CatCard key={card.id} card={card} />
          ))}
        </ul>
      ) : (
        <p className='text-xl mt-5 pb-56'>You have no favorite cats yet!</p>
      )}
    </div>
  );
}

export default FavoriteCats;
