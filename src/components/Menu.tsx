import { House, Laptop, LucideProps, NotepadText, Users } from 'lucide-react';
import { ForwardRefExoticComponent } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { MenuOption } from './MenuOption';

interface Option {
  href: string;
  label: string;
  Icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>;
  isActive: boolean;
}

export function Menu() {
  const { pathname } = useLocation();

  const options: Option[] = [
    { href: '/', label: 'Home', Icon: House, isActive: pathname === '/' },
    { href: '/usuarios', label: 'Usuários', Icon: Users, isActive: pathname.startsWith('/usuarios') },
    { href: '/equipamentos', label: 'Equipamentos', Icon: Laptop, isActive: pathname.startsWith('/equipamentos') },
    { href: '/reservas', label: 'Reservas', Icon: NotepadText, isActive: pathname.startsWith('/reservas') },
  ];

  return (
    <aside className="px-10 py-12 w-[345px] bg-white">
      <header>
        <Link to="/" className="flex items-center gap-4">
          <img src="/logo.jfif" alt="E.E. Miguel Pistilli" className="size-14" />

          <h2 className="flex-1 font-semibold text-xl text-blueGray-900">E.E. Miguel Pistilli</h2>
        </Link>
      </header>

      <section>
        <ul className="mt-12 flex flex-col gap-1">
          {options.map((option) => (
            <MenuOption key={option.label} {...option} />
          ))}
        </ul>
      </section>
    </aside>
  );
}
