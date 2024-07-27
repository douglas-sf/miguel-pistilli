import { DesktopTower, DeviceTabletCamera, GoogleChromeLogo, Laptop } from 'phosphor-react';
import { useEffect, useState } from 'react';

import { EquipmentAmountCard } from './EquipmentAmountCard';

import { api } from '../../services/axios';

export function EquipmentsSummary() {
  const [equipments, setEquipments] = useState({
    total: 0,
    tablet: 0,
    chromebook: 0,
    computador: 0,
    notebook: 0,
  });

  useEffect(() => {
    api.get('/equipamentos/info/contagem').then(({ data }) => {
      setEquipments((state) => ({ ...state, ...data }));
    });
  }, []);

  return (
    <section className="p-8 max-w-fit flex flex-col gap-10 bg-white rounded-2xl">
      <header className="flex items-center">
        <h2 className="text-primary-dark-shade font-semibold text-2xl">Equipamentos cadastrados</h2>
      </header>

      <div className="flex gap-8 flex-wrap">
        <EquipmentAmountCard Icon={DeviceTabletCamera} label="Tablets" amount={equipments.tablet} variant="pink" />

        <EquipmentAmountCard
          Icon={GoogleChromeLogo}
          label="Chromebooks"
          amount={equipments.chromebook}
          variant="yellow"
        />

        <EquipmentAmountCard Icon={DesktopTower} label="Computadores" amount={equipments.computador} variant="green" />

        <EquipmentAmountCard Icon={Laptop} label="Notebooks" amount={equipments.notebook} variant="violet" />
      </div>

      <footer className="flex items-center justify-end gap-2">
        <h3 className="text-lg text-primary-dark-shade font-semibold">Total:</h3>
        <span className="text-blueGray-700 text-base">{equipments.total}</span>
      </footer>
    </section>
  );
}
