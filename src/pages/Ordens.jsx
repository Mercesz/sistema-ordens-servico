import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { api } from "../services/api";
import "../App.css";

function Ordens() {
  const [loading, setLoading] = useState(true);

  const [ordens, setOrdens] = useState([]);

  const [filtro, setFiltro] = useState("Todas");

  const totalAbertas = ordens.filter(o => o.status === "Aberta").length;
  const totalAndamento = ordens.filter(o => o.status === "Em andamento").length;
  const totalFinalizadas = ordens.filter(o => o.status === "Finalizada").length;


  const ordensFiltradas = (
    filtro === "Todas"
      ? ordens
      : ordens.filter(ordem => ordem.status === filtro)
  ).slice().sort((a, b) => b.id - a.id);


  useEffect(() => {
    api.get("/ordens")
      .then(response => {
        setOrdens(response.data);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  function handleUpdateStatus(id, novoStatus) {
    api.patch(`/ordens/${id}`, {
      status: novoStatus
    }).then(() => {
      setOrdens(prev =>
        prev.map(ordem =>
          ordem.id === id
            ? { ...ordem, status: novoStatus }
            : ordem
        )
      );
    });
  }

  return (
    <>
      <Header />

      <div className="app-layout">
        <Sidebar />

        <main className="content">
          <h1>Ordens de Serviços</h1>

          <div className="filters">
            <button
              className={filtro === "Todas" ? "active" : ""}
              onClick={() => setFiltro("Todas")}
            >
              Todas ({ordens.length})
            </button>

            <button
              className={filtro === "Aberta" ? "active" : ""}
              onClick={() => setFiltro("Aberta")}
            >
              Abertas ({totalAbertas})
            </button>

            <button
              className={filtro === "Em andamento" ? "active" : ""}
              onClick={() => setFiltro("Em andamento")}
            >
              Em andamento ({totalAndamento})
            </button>

            <button
              className={filtro === "Finalizada" ? "active" : ""}
              onClick={() => setFiltro("Finalizada")}
            >
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
                  onClick={() => handleUpdateStatus(ordem.id, "Em andamento")}
                  disabled={ordem.status !== "Aberta"}
                >
                  Em andamento
                </button>

                <button
                  onClick={() => handleUpdateStatus(ordem.id, "Finalizada")}
                  disabled={ordem.status === "Finalizada"}
                >
                  Finalizar
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
