import { EquipmentStatus } from './EquipmentStatus';
import { EquipmentsSummary } from './EquipmentsSummary';

export function Equipments() {
  return (
    <>
      <div className="flex gap-8">
        <EquipmentsSummary />
        <EquipmentStatus />
      </div>
    </>
  );
}
