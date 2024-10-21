import { FormEvent, useId } from 'react';

export function EquipmentStatus() {
  const id = useId();

  async function getEquipmentStatus(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
  }

  return (
    <section className="p-8 flex-1 bg-white rounded-2xl space-y-10">
      <h2 className="text-primary-dark-shade font-semibold text-2xl">Checar Equipamento</h2>

      <form onSubmit={getEquipmentStatus}>
        <div className="flex flex-col gap-2">
          <label htmlFor={id} className="text-blueGray-700">
            Código:
          </label>
          <input
            className="px-2 py-1 border-2 border-blueGray-700 rounded-md outline-none"
            type="text"
            id={id}
            name="codigo"
          />
        </div>
      </form>
    </section>
  );
}
