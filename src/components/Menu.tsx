import { Users, Laptop, NotePencil } from 'phosphor-react';
import { Link } from 'react-router-dom';

const menuOptions = [
  { Icon: Users, label: 'Usuários', path: '/usuarios' },
  { Icon: Laptop, label: 'Equipamentos', path: '/equipamentos' },
  { Icon: NotePencil, label: 'Reservas', path: '/reservas' },
];

export function Menu() {
  return (
    <aside className="px-10 py-12 w-[345px] bg-white">
      <header className="flex items-center gap-6">
        <img src="/Logo.jpg" alt="E.E. Miguel Pistilli" className="h-14" />

        <h2 className="font-semibold text-2xl text-blueGray-900">E.E. Miguel Pistilli</h2>
      </header>

      <section className="mt-12 flex flex-col gap-1">
        {menuOptions.map(({ Icon, label, path }) => (
          <Link to={path} className="px-6 py-4 flex items-center gap-6 bg-primary-900 rounded-2xl text-white">
            <Icon size={32} weight="bold" />
            <span className="font-semibold text-lg">{label}</span>
          </Link>
        ))}
      </section>
    </aside>
  );
}
