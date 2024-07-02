import { EquipmentStatus } from '../components/EquipmentStatus';
import { EquipmentsSummary } from '../components/EquipmentsSummary';

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
