import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Bookings } from './pages/Bookings';
import { Equipments } from './pages/Equipments';
import { Home } from './pages/Home';
import { Users } from './pages/Users';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          Component={() => (
            <Layout title="Página Principal">
              <Home />
            </Layout>
          )}
        />

        <Route
          path="/equipamentos"
          Component={() => (
            <Layout title="Equipamentos">
              <Equipments />
            </Layout>
          )}
        />

        <Route
          path="/usuarios"
          Component={() => (
            <Layout title="Usuários">
              <Users />
            </Layout>
          )}
        />

        <Route
          path="/reservas"
          Component={() => (
            <Layout title="Reservas">
              <Bookings />
            </Layout>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}
