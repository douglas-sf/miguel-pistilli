import { ReactNode } from 'react';

import { Menu } from './Menu';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
  title: string;
}

export function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Menu />

      <main className="flex flex-col flex-1">
        <Header title={title} />
        <div className="p-8">{children}</div>
      </main>
    </>
  );
}
