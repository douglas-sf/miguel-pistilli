import * as Accordion from '@radix-ui/react-accordion';
import { Laptop, NotePencil, Users } from 'phosphor-react';
import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <aside className="px-10 py-12 w-[345px] bg-white">
      <header>
        <Link to="/" className="flex items-center gap-6">
          <img src="/Logo.jpg" alt="E.E. Miguel Pistilli" className="h-14" />

          <h2 className="font-semibold text-2xl text-blueGray-900">E.E. Miguel Pistilli</h2>
        </Link>
      </header>

      <section className="mt-12 flex flex-col gap-1">
        <Accordion.Root type="multiple" className="flex flex-col gap-1">
          <Accordion.Item value="item-1">
            <Accordion.Trigger className="px-6 py-4 w-full flex items-center gap-6 bg-primary-900 rounded-2xl text-white hover:bg-primary-dark-shade transition-colors">
              <Users size={32} weight="bold" />
              <Link to="/usuarios" className="font-semibold text-lg">
                Usuários
              </Link>
            </Accordion.Trigger>

            <Accordion.Content>
              <ul>
                <li>Cadastro</li>
                <li>Lista</li>
              </ul>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-2">
            <Accordion.Trigger className="px-6 py-4 w-full flex items-center gap-6 bg-primary-900 rounded-2xl text-white">
              <Laptop size={32} weight="bold" />
              <span className="font-semibold text-lg">Equipamentos</span>
            </Accordion.Trigger>

            <Accordion.Content>
              <ul>
                <li>Cadastro</li>
                <li>Lista</li>
              </ul>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-3">
            <Accordion.Trigger className="px-6 py-4 w-full flex items-center gap-6 bg-primary-900 rounded-2xl text-white">
              <NotePencil size={32} weight="bold" />
              <span className="font-semibold text-lg">Reservas</span>
            </Accordion.Trigger>

            <Accordion.Content>
              <ul>
                <li>Minhas Reservas</li>
                <li>Reservar</li>
              </ul>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </section>
    </aside>
  );
}
