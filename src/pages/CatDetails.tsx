import { useParams } from 'react-router-dom';

import useCats from '../hooks/useCats';

import { Cat } from '../interfaces/CatInterface';

type UserParams = {
  id: string;
};

function CatDetails() {
  const { id } = useParams<UserParams>();

  const { cats } = useCats();

  const cat = cats?.find((cat: Cat) => cat.id === id);

  if (!cat) {
    return <p>Cat not found</p>;
  }

  return (
    <div className='px-10 md:px-15 lg:px-20'>
      {cat.url && (
        <img
          src={cat.url}
          alt='cat image'
          className='w-full lg:w-1/2 h-[400px] sm:h-[500px] md:h-[600px] mx-auto object-cover rounded-lg'
        />
      )}
      <div className='w-full lg:w-1/2 mx-auto mt-4 p-6 bg-white rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold text-purple-700'>
          {cat.breeds[0].name}
        </h2>
        <p className='text-gray-600 text-xl mt-2'>
          <strong>Temperament:</strong> {cat.breeds[0].temperament}
        </p>
        <p className='text-gray-700 text-xl mt-3'>
          {cat.breeds[0].description}
        </p>
      </div>
    </div>
  );
}

export default CatDetails;
