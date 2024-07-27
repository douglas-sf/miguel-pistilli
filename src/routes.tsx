import { createBrowserRouter } from 'react-router-dom';

import { Layout } from './components/Layout';

import { Home } from './pages/Home';
import { Equipments } from './pages/Equipments';
import { Users } from './pages/Users';
import { Bookings } from './pages/Bookings';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout title="Página Principal">
        <Home />
      </Layout>
    ),
  },

  {
    path: '/equipamentos',
    element: (
      <Layout title="Equipamentos">
        <Equipments />
      </Layout>
    ),
  },

  {
    path: '/usuarios',
    element: (
      <Layout title="Usuários">
        <Users />
      </Layout>
    ),
  },

  {
    path: '/reservas',
    element: (
      <Layout title="Reservas">
        <Bookings />
      </Layout>
    ),
  },
]);
