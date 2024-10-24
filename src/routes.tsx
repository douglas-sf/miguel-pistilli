import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { Layout } from './components/Layout';

import { Bookings } from './pages/Bookings';
import { Equipments } from './pages/Equipments';
import { Home } from './pages/Home';
import { Users } from './pages/Users';

interface Route {
  path: string;
  title: string;
  Page: () => JSX.Element;
}

const routes: Route[] = [
  { path: '/', title: 'Página Principal', Page: Home },
  { path: '/equipamentos', title: 'Equipamentos', Page: Equipments },
  { path: '/usuarios', title: 'Usuários', Page: Users },
  { path: '/reservas', title: 'Reservas', Page: Bookings },
];

const mainRoutes: RouteObject[] = routes.map(({ path, title, Page }) => ({
  path,
  element: (
    <Layout title={title}>
      <Page />
    </Layout>
  ),
}));

const auxiliarRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <h1>Página de Login</h1>,
  },
];

export const router = createBrowserRouter([...mainRoutes, ...auxiliarRoutes]);
