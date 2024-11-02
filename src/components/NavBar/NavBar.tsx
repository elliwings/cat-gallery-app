import logo from '../../assets/logo.png';

import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import classNames from 'classnames';

import { HouseLine, BookmarkSimple, CaretDown } from 'phosphor-react';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className='flex justify-between items-center px-10 md:px-15 lg:px-20'>
      <Link to='/gallery'>
        <img src={logo} alt='logo' />
      </Link>
      <div className='flex items-center gap-5 md:hidden'>
        <button
          onClick={toggleMenu}
          className='flex items-center gap-1 text-lg font-medium'
        >
          Menu <CaretDown size={20} />
        </button>
      </div>
      <div className='hidden md:flex items-center gap-5'>
        <NavLink
          to='/gallery'
          className={({ isActive }) =>
            classNames('flex items-center gap-1 text-lg font-medium', {
              'text-purple-400': isActive,
            })
          }
        >
          <HouseLine size={20} />
          Home
        </NavLink>
        <NavLink
          to='/favorites'
          className={({ isActive }) =>
            classNames('flex items-center gap-1 text-lg font-medium', {
              'text-purple-400': isActive,
            })
          }
        >
          <BookmarkSimple size={20} />
          Favorites
        </NavLink>
      </div>
      {isMenuOpen && (
        <div className='absolute top-16 right-10 bg-white shadow-lg rounded-lg p-4 md:hidden'>
          <NavLink
            to='/gallery'
            className={({ isActive }) =>
              classNames(
                'flex items-center gap-2 text-lg font-medium text-gray-800 py-2',
                {
                  'text-purple-400': isActive,
                }
              )
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <HouseLine size={20} /> Home
          </NavLink>
          <NavLink
            to='/favorites'
            className={({ isActive }) =>
              classNames(
                'flex items-center gap-2 text-lg font-medium text-gray-800 py-2',
                {
                  ['text-purple-400']: isActive,
                }
              )
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <BookmarkSimple size={20} /> Favorites
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default NavBar;
