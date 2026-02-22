import { useEffect, useState } from "react";
import { useOrdens } from "../hooks/useOrdens";
import OrdemCard from "../components/OrdemCard";

/* Status padronizados */
const STATUS = {
  TODAS: "Todas",
  ABERTA: "Aberta",
  ANDAMENTO: "Em andamento",
  FINALIZADA: "Finalizada",
};

/* Hook simples para localStorage */
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}

function Ordens() {
  const { ordens, loading, updateStatus, deleteOrdem } = useOrdens();

  const [filtro, setFiltro] = useLocalStorage("filtroOrdens", STATUS.TODAS);

  /* Contadores por status */
  const contagem = {
    [STATUS.TODAS]: ordens.length,
    [STATUS.ABERTA]: ordens.filter(o => o.status === STATUS.ABERTA).length,
    [STATUS.ANDAMENTO]: ordens.filter(o => o.status === STATUS.ANDAMENTO).length,
    [STATUS.FINALIZADA]: ordens.filter(o => o.status === STATUS.FINALIZADA).length,
  };

  /* Filtro + ordenação */
  const ordensFiltradas = ordens
    .filter(o => filtro === STATUS.TODAS || o.status === filtro)
    .slice()
    .sort((a, b) => b.id - a.id);

  return (
    <>
      <h1>Ordens de Serviços</h1>

      {/* Filtros dinâmicos */}
      <div className="filters">
        {Object.values(STATUS).map(status => (
          <button
            key={status}
            className={filtro === status ? "active" : ""}
            onClick={() => setFiltro(status)}
          >
            {status} ({contagem[status]})
          </button>
        ))}
      </div>

      {loading && <p>Carregando ordens...</p>}

      {!loading && ordens.length === 0 && (
        <p>Nenhuma ordem cadastrada.</p>
      )}

      {ordensFiltradas.map(ordem => (
        <OrdemCard
          key={ordem.id}
          ordem={ordem}
          updateStatus={updateStatus}
          deleteOrdem={deleteOrdem}
        />
      ))}
    </>
  );
}

export default Ordens;