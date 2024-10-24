import { Search } from 'lucide-react';
import { FormEvent, useId, useState } from 'react';

import { api } from '../../services/axios';
import { AxiosError } from 'axios';

interface EquipmentInfo {
  codigo: string;
  status: string;
}

export function EquipmentStatus() {
  const [equipmentInfo, setEquipmentInfo] = useState<EquipmentInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  const id = useId();

  async function getEquipmentStatus(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);
    const codigo = formData.get('codigo')?.toString().trim();

    if (codigo) {
      try {
        const { data } = await api.get(`/equipamentos/${codigo}/data`);

        setEquipmentInfo(data);
        setError(null);
      } catch (err) {
        if (err instanceof AxiosError) {
          setError(err.response?.data.erro);
        }
      }
    } else {
      alert('Por favor insira um código válido');
    }
  }

  return (
    <section className="p-8 flex-1 bg-white rounded-2xl space-y-10">
      <h2 className="text-primary-dark-shade font-semibold text-2xl">Checar Equipamento</h2>

      <form onSubmit={getEquipmentStatus}>
        <div className="flex flex-col gap-2">
          <label htmlFor={id} className="text-blueGray-700">
            Código:
          </label>

          <div className="flex">
            <input
              className="h-12 px-3 flex-1 border-2 border-primary-900 rounded-tl-md rounded-bl-md outline-none"
              type="text"
              id={id}
              name="codigo"
            />

            <button
              type="submit"
              className="size-12 flex items-center justify-center bg-primary-900 rounded-tr-md rounded-br-md"
            >
              <Search className="size-5 text-white" strokeWidth={3} />
            </button>
          </div>
        </div>
      </form>

      <div>
        {error ? (
          <p className="">{error}</p>
        ) : (
          <>
            {equipmentInfo && (
              <>
                <p>
                  <span>Código:</span> {equipmentInfo.codigo}
                </p>
                <p>
                  <span>Status:</span> {equipmentInfo.status}
                </p>
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
}
