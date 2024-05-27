import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Bookings } from './pages/Bookings';
import { Equipments } from './pages/Equipments';
import { Users } from './pages/Users';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/equipamentos" Component={Equipments} />
        <Route path="/usuarios" Component={Users} />
        <Route path="/reservas" Component={Bookings} />
      </Routes>
    </BrowserRouter>
  );
}