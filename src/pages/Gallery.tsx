import { useState, useEffect } from 'react';

import useCats from '../hooks/useCats';

import CatCard from '../components/CatCard/CatCard';
import Search from '../components/Search/Search';
import BreedsMenu from '../components/BreedsMenu/BreedsMenu';

function Gallery() {
  const { cats, loading, error } = useCats();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBreed, setSelectedBreed] = useState<string>('');
  const [breeds, setBreeds] = useState<string[]>([]);

  useEffect(() => {
    const uniqueBreeds: string[] = [];
    cats.forEach((cat) => {
      const breedName = cat.breeds[0]?.name;
      if (breedName && !uniqueBreeds.includes(breedName)) {
        uniqueBreeds.push(breedName);
      }
    });
    setBreeds(uniqueBreeds);
  }, [cats]);

  const filteredCats = cats.filter(
    (cat) =>
      (!searchQuery ||
        cat.breeds[0].name.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (!selectedBreed || cat.breeds[0].name === selectedBreed)
  );

  return (
    <div>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className='flex justify-between items-center gap-2 flex-col md:flex-row my-4 px-10 md:px-15 lg:px-20'>
        <p>Number of cats shown: {filteredCats.length}</p>
        <BreedsMenu
          setSelectedBreed={setSelectedBreed}
          breeds={breeds}
          selectedBreed={selectedBreed}
        />
      </div>
      {loading && <div>Loading cats...</div>}
      {error && <div>{error}</div>}
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-10 list-none p-0  md:px-15 lg:px-20'>
        {filteredCats.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </ul>
    </div>
  );
}

export default Gallery;
