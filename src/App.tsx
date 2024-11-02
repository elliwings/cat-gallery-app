import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Gallery from './pages/Gallery';
import FavoriteCats from './pages/FavoriteCats';
import NotFound from './pages/NotFound';
import CatDetails from './pages/CatDetails';

import { CatsProvider } from './context/CatsProvider.tsx';
import { FavoritesProvider } from './context/FavoritesProvider.tsx';

import { Navigate } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to='/gallery' replace />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'cat/:id',
        element: <CatDetails />,
      },
      {
        path: 'favorites',
        element: <FavoriteCats />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <CatsProvider>
        <FavoritesProvider>
          <RouterProvider router={router} />
        </FavoritesProvider>
      </CatsProvider>
    </>
  );
}

export default App;
