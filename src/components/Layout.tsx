import { ReactNode } from 'react';

import { Menu } from './Menu';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Menu />
      {children}
    </>
  );
}
