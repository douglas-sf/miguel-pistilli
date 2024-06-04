import { IconProps } from 'phosphor-react';
import { ForwardRefExoticComponent } from 'react';
import { Link } from 'react-router-dom';

interface MenuOptionProps {
  href: string;
  label: string;
  isActive: boolean;
  Icon: ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
}

export function MenuOption({ href, isActive, Icon, label }: MenuOptionProps) {
  const activeButton = isActive
    ? ' bg-primary-900 text-white'
    : ' text-blueGray-700 hover:bg-primary-900 hover:text-white';

  return (
    <li>
      <Link
        to={href}
        className={'px-6 py-4 w-full flex items-center gap-6 rounded-2xl transition-colors' + activeButton}
      >
        <Icon size={32} weight="bold" />
        <span className="font-semibold text-lg">{label}</span>
      </Link>
    </li>
  );
}
