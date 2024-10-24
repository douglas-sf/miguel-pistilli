import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent } from 'react';

interface EquipmentAmountCardProps {
  Icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>;
  label: string;
  amount?: number;
  variant: 'pink' | 'yellow' | 'green' | 'violet';
}

const variantColors = {
  pink: { bg: 'bg-support-pink-shade', icon: 'bg-support-pink' },
  yellow: { bg: 'bg-support-yellow-shade', icon: 'bg-support-yellow' },
  green: { bg: 'bg-support-green-shade', icon: 'bg-support-green' },
  violet: { bg: 'bg-support-violet-shade', icon: 'bg-support-violet' },
};

export function EquipmentAmountCard({ Icon, label, amount, variant }: EquipmentAmountCardProps) {
  const color = variantColors[variant];

  return (
    <div className={'p-5 flex flex-col gap-5 rounded-2xl ' + color.bg}>
      <header className="flex items-center gap-4">
        <div className={'w-10 h-10 flex justify-center items-center rounded-full text-white ' + color.icon}>
          <Icon className="size-6" strokeWidth={2} />
        </div>

        <h3 className="text-lg font-semibold text-blueGray-900">{label}</h3>
      </header>

      <div className="text-xl text-right text-blueGray-800">{amount || 0}</div>
    </div>
  );
}
