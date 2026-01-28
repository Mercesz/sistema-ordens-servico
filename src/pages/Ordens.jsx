import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useOrdens } from "../hooks/useOrdens";
import "../App.css";

function Ordens() {
  const { ordens, loading, updateStatus, deleteOrdem } = useOrdens();

  const [filtro, setFiltro] = useState(
    localStorage.getItem("filtroOrdens") || "Todas"
  );

  useEffect(() => {
    localStorage.setItem("filtroOrdens", filtro);
  }, [filtro]);

  const totalAbertas = ordens.filter(o => o.status === "Aberta").length;
  const totalAndamento = ordens.filter(o => o.status === "Em andamento").length;
  const totalFinalizadas = ordens.filter(o => o.status === "Finalizada").length;

  const ordensFiltradas = (
    filtro === "Todas"
      ? ordens
      : ordens.filter(o => o.status === filtro)
  ).slice().sort((a, b) => b.id - a.id);

  return (
    <>
      <Header />

      <div className="app-layout">
        <Sidebar />

        <main className="content">
          <h1>Ordens de Serviços</h1>

          <div className="filters">
            <button className={filtro === "Todas" ? "active" : ""} onClick={() => setFiltro("Todas")}>
              Todas ({ordens.length})
            </button>

            <button className={filtro === "Aberta" ? "active" : ""} onClick={() => setFiltro("Aberta")}>
              Abertas ({totalAbertas})
            </button>

            <button className={filtro === "Em andamento" ? "active" : ""} onClick={() => setFiltro("Em andamento")}>
              Em andamento ({totalAndamento})
            </button>

            <button className={filtro === "Finalizada" ? "active" : ""} onClick={() => setFiltro("Finalizada")}>
              Finalizadas ({totalFinalizadas})
            </button>
          </div>

          {loading && <p>Carregando ordens...</p>}

          {!loading && ordens.length === 0 && (
            <p>Nenhuma ordem cadastrada.</p>
          )}

          {ordensFiltradas.map(ordem => (
            <div key={ordem.id} className="card">
              <strong>{ordem.cliente}</strong>
              <p>{ordem.descricao}</p>

              <span className={`status ${ordem.status.toLowerCase().replace(" ", "-")}`}>
                Status: {ordem.status}
              </span>

              <div className="actions">
                <button
                  onClick={() => updateStatus(ordem.id, "Em andamento")}
                  disabled={ordem.status !== "Aberta"}
                >
                  Em andamento
                </button>

                <button
                  onClick={() => updateStatus(ordem.id, "Finalizada")}
                  disabled={ordem.status === "Finalizada"}
                >
                  Finalizar
                </button>

                <button className="danger" onClick={() => deleteOrdem(ordem.id)}>
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </>
  );
}

export default Ordens;
