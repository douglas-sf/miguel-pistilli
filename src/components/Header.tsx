interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="px-10 py-8 flex items-center justify-between bg-white">
      <h1 className="text-4xl font-semibold text-blueGray-900">{title}</h1>

      <div className="flex items-center gap-5">
        <img className="h-14 w-14 rounded-full" src="/user-default.png" alt="user" />

        <div className="flex flex-col gap-1">
          <span className="text-base font-medium text-blueGray-900 ">Usuário</span>
          <span className="text-sm text-blueGray-700">Sair</span>
        </div>
      </div>
    </header>
  );
}
