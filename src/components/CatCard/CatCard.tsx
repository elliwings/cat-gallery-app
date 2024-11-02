import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import useLocalStorage from '../../hooks/useLocalStorage';

import { Cat } from '../../interfaces/CatInterface';

import classNames from 'classnames';

interface CatCardProps {
  card: Cat;
}

function CatCard({ card }: CatCardProps) {
  const [favorites, setFavorites] = useLocalStorage<Cat[]>('favorites', []);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    const isCatFavorite = favorites.some((favCat) => favCat.id === card.id);
    setIsFavorite(isCatFavorite);
  }, [card.id, favorites]);

  const toggleFavorite = (): void => {
    let updatedFavorites: Cat[] = [];

    if (isFavorite) {
      updatedFavorites = favorites.filter((favCat) => favCat.id !== card.id);
    } else {
      if (!favorites.some((favCat) => favCat.id === card.id)) {
        updatedFavorites = [...favorites, card];
      } else {
        updatedFavorites = favorites;
      }
    }

    setFavorites(updatedFavorites);
    setIsFavorite(!isFavorite);
  };

  return (
    <li
      className={classNames(
        'p-4 rounded-lg shadow-md transition-shadow duration-300 transform hover:scale-105',
        {
          'bg-purple-100 border border-purple-300': isFavorite,
          'bg-white': !isFavorite,
        }
      )}
    >
      {card.url && (
        <img
          src={card.url}
          alt='cat image'
          className='w-full h-[300px] sm:h-[320px] md:h-[400px] object-cover rounded-t-lg cursor-pointer '
          onClick={() => navigate(`/cat/${card.id}`)}
        />
      )}
      <div className='mt-3'>
        <span className='text-purple-500 text-lg font-semibold'>
          {card.breeds[0].name}
        </span>
        <h2 className='font-bold text-lg mt-1 line-clamp-1'>
          {card.breeds[0].temperament}
        </h2>
        <p className='text-gray-600 mt-2 line-clamp-3'>
          {card.breeds[0].description}
        </p>
        <button
          onClick={toggleFavorite}
          className={classNames(
            'my-4 py-1 px-4 rounded-lg transition duration-300',
            {
              'bg-purple-500 text-white': isFavorite,
              'bg-gray-200 text-gray-600': !isFavorite,
            }
          )}
        >
          {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        </button>
      </div>
    </li>
  );
}

export default CatCard;
