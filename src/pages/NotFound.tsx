import { NavLink } from 'react-router-dom';

import { ArrowLeft } from 'phosphor-react';

function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center  px-4 sm:py-10 md:py-20 text-gray-800'>
      <h1 className='text-4xl sm:text-6xl font-bold text-purple-500'>404</h1>
      <p className='mt-4 text-lg sm:text-xl font-semibold'>
        Oops! Page not found.
      </p>
      <p className='mt-2 text-gray-600 text-center'>
        Sorry, the page you’re looking for doesn’t exist.
      </p>

      <NavLink
        to='/'
        className='flex items-center gap-2 px-4 py-2 mt-6 sm:px-6 sm:py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-200'
      >
        <ArrowLeft size={20} />
        Go back home
      </NavLink>
    </div>
  );
}

export default NotFound;
